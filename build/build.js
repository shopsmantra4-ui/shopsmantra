// Builds the ShopsMantra website into ../_site
// 1. reads data/catalog.json  2. writes one page per product/collection
// 3. opens every page in headless Chromium to save the fully rendered HTML
// 4. switches links to clean URLs, adds sitemap.xml and robots.txt
// Run: cd build && npm install && npx playwright install chromium && node build.js
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.shopsmantra.com';
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '_site');
const TMP = path.join(ROOT, '_build_tmp');

const rm = p => fs.rmSync(p, { recursive: true, force: true });
const mkdir = p => fs.mkdirSync(p, { recursive: true });
const copyDir = (a, b) => fs.cpSync(a, b, { recursive: true });
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
let appJs = fs.readFileSync(path.join(ROOT, 'src/app.js'), 'utf8');
const marker = /\/\*__CATALOG__\*\/\{"categories":\[\],"products":\[\],"reviews":\[\]\}/;
if (!marker.test(appJs)) throw new Error('catalog marker missing in src/app.js');
appJs = appJs.replace(marker, () => '/*__CATALOG__*/' + JSON.stringify(catalog).replace(/<\//g, '<\\/'));

// Use the store's own code to work out slugs, so URLs always match the site.
const head = appJs.slice(0, appJs.indexOf('/* ===== end of catalogue ===== */'));
const D = new Function(head + '; return {CATS, P, GROUP_SLUG, INFO_SLUG, collSlug, revsFor, revStats};')();

const GROUP_TITLES = { all: 'All Products', clothing: "Women's Clothing", jewellery: 'Jewellery', accessories: 'Accessories', new: 'New Arrivals', under500: 'Under ₹500' };
const GROUP_OF = k => D.CATS[k] ? D.CATS[k].group : null;
const collTitle = k => GROUP_TITLES[k] || D.CATS[k].name;
const BRAND = 'ShopsMantra';
const imgUrl = k => k ? `img/${k}.webp` : 'img/og.jpg';

const pages = [];
const add = p => pages.push(p);
add({ path: '', page: 'home', title: `${BRAND} | Women's Clothing & Jewellery`,
  desc: "ShopsMantra: women's clothing and jewellery for everyday, festive and wedding wear. Order easily on WhatsApp.",
  img: 'img/og.jpg', crumbs: [] });
for (const k of [...Object.keys(D.GROUP_SLUG), ...Object.keys(D.CATS)]) {
  const t = collTitle(k);
  const crumbs = [['Home', '']];
  const g = GROUP_OF(k);
  if (g) crumbs.push([GROUP_TITLES[g], `collections/${D.collSlug(g)}/`]);
  crumbs.push([t, `collections/${D.collSlug(k)}/`]);
  add({ path: `collections/${D.collSlug(k)}/`, page: 'coll', key: k, title: `${t} | ${BRAND}`,
    desc: `Shop ${t} at ShopsMantra. Easy ordering on WhatsApp and free shipping above ₹999.`,
    img: D.CATS[k] && D.CATS[k].img ? imgUrl(D.CATS[k].img) : 'img/og.jpg', crumbs });
}
for (const p of D.P) {
  const d = (p.desc || p.name).length <= 158 ? (p.desc || p.name) : p.desc.slice(0, 155).replace(/\s+\S*$/, '') + '…';
  const g = p.group;
  add({ path: `products/${p.slug}/`, page: 'product', id: String(p.id), title: `${p.name} | ${BRAND}`, desc: d,
    img: imgUrl(p.variants[0].imgs[0]), product: p,
    crumbs: [['Home', ''], [GROUP_TITLES[g], `collections/${D.collSlug(g)}/`], [D.CATS[p.cat].name, `collections/${D.collSlug(p.cat)}/`], [p.name, `products/${p.slug}/`]] });
}
const INFO_T = { order: 'How to Order', ship: 'Shipping & Returns', size: 'Size Help' };
for (const [k, slug] of Object.entries(D.INFO_SLUG))
  add({ path: `pages/${slug}/`, page: 'info', key: k, title: `${INFO_T[k]} | ${BRAND}`, desc: `${INFO_T[k]} at ShopsMantra.`, img: 'img/og.jpg', crumbs: [['Home', ''], [INFO_T[k], `pages/${slug}/`]] });
add({ path: 'wishlist/', page: 'wishlist', title: `Wishlist | ${BRAND}`, desc: 'Your saved products.', noindex: true, img: 'img/og.jpg' });
add({ path: 'checkout/', page: 'checkout', title: `Checkout | ${BRAND}`, desc: 'Place your order on WhatsApp.', noindex: true, img: 'img/og.jpg' });
add({ path: 'search/', page: 'search', title: `Search | ${BRAND}`, desc: 'Search ShopsMantra products.', noindex: true, img: 'img/og.jpg' });

const SHELL = fs.readFileSync(path.join(ROOT, 'src/shell.html'), 'utf8');
const catsIn = groups => Object.entries(D.CATS).filter(([k, c]) => groups.includes(c.group));
const SHELL_FILLED = SHELL
  .replace(/<!--MENU:(\w+)-->/g, (m, g) => catsIn([g]).map(([k, c]) => `<button data-shop="${k}">${esc(c.name)}</button>`).join(''))
  .replace(/<!--FOOT:([\w,]+)-->\n/g, (m, gs) => catsIn(gs.split(',')).map(([k, c]) => `      <li><button data-shop="${k}">${esc(c.name)}</button></li>\n`).join(''));
const FONTS = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500&family=Poppins:wght@600;700&display=swap';

/* Shipping & returns shown to Google (keep in line with src/app.js: FREE_SHIP_ABOVE, SHIP_FEE) */
const FREE_SHIP_ABOVE = 999, SHIP_FEE = 79;
const HANDLING_DAYS = [1, 2], TRANSIT_DAYS = [3, 7], RETURN_DAYS = 7;
const shippingDetails = price => ({
  '@type': 'OfferShippingDetails',
  shippingRate: { '@type': 'MonetaryAmount', value: price >= FREE_SHIP_ABOVE ? 0 : SHIP_FEE, currency: 'INR' },
  shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'IN' },
  deliveryTime: { '@type': 'ShippingDeliveryTime',
    handlingTime: { '@type': 'QuantitativeValue', minValue: HANDLING_DAYS[0], maxValue: HANDLING_DAYS[1], unitCode: 'DAY' },
    transitTime: { '@type': 'QuantitativeValue', minValue: TRANSIT_DAYS[0], maxValue: TRANSIT_DAYS[1], unitCode: 'DAY' } }
});
const RETURN_POLICY = {
  '@type': 'MerchantReturnPolicy',
  applicableCountry: 'IN',
  returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
  merchantReturnDays: RETURN_DAYS,
  returnMethod: 'https://schema.org/ReturnByMail',
  returnFees: 'https://schema.org/FreeReturn'
};

function jsonLd(pg) {
  const out = [];
  if (pg.crumbs && pg.crumbs.length > 1)
    out.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: pg.crumbs.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}/${p}` })) });
  if (pg.product) {
    const p = pg.product;
    const prod = { '@context': 'https://schema.org', '@type': 'Product', name: p.name, description: p.desc || p.name,
      image: p.variants.flatMap(v => v.imgs).slice(0, 6).map(k => `${SITE_URL}/img/${k}.webp`), brand: { '@type': 'Brand', name: BRAND } };
    prod.sku = 'SM-' + p.id;
    if (p.price) prod.offers = { '@type': 'Offer', priceCurrency: 'INR', price: String(p.price), availability: 'https://schema.org/InStock', url: `${SITE_URL}/${pg.path}`,
      shippingDetails: shippingDetails(p.price), hasMerchantReturnPolicy: RETURN_POLICY };
    // ratings: only from real reviews, and exactly the numbers shown on the page
    const rv = D.revsFor(p.id), st = D.revStats(rv);
    if (st) {
      prod.aggregateRating = { '@type': 'AggregateRating', ratingValue: st.avg, reviewCount: st.count, bestRating: 5, worstRating: 1 };
      prod.review = rv.map(r => Object.assign({ '@type': 'Review', author: { '@type': 'Person', name: r.name },
        reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 }, reviewBody: r.text },
        r.date ? { datePublished: r.date } : {}));
    }
    out.push(prod);
  }
  if (pg.page === 'home') out.push({ '@context': 'https://schema.org', '@type': 'Organization', name: 'ShopsMantra', legalName: 'Shopsmantra LLP', url: SITE_URL + '/', logo: `${SITE_URL}/img/logo.svg`, sameAs: ['https://www.instagram.com/shops.mantra/'] });
  return out.map(o => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`).join('\n');
}

function pageHtml(pg) {
  const base = '../'.repeat((pg.path.match(/\//g) || []).length);
  const shell = SHELL_FILLED.replace(/src="img\//g, `src="${base}img/`);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(pg.title)}</title>
<meta name="description" content="${esc(pg.desc)}">
${pg.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${SITE_URL}/${pg.path}">`}
<meta property="og:type" content="${pg.page === 'product' ? 'product' : 'website'}">
<meta property="og:site_name" content="ShopsMantra">
<meta property="og:title" content="${esc(pg.title)}">
<meta property="og:description" content="${esc(pg.desc)}">
<meta property="og:url" content="${SITE_URL}/${pg.path}">
<meta property="og:image" content="${SITE_URL}/${pg.img}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#5B2A86">
<link rel="icon" href="${base}favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="${base}icon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="${base}icon-192.png">
<link rel="apple-touch-icon" href="${base}apple-touch-icon.png">
<link rel="manifest" href="${base}site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="${FONTS}">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}body{margin:0;font:14px/1.5 system-ui,-apple-system,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
<link rel="stylesheet" href="${base}assets/style.css?v=${BUILD_ID}">
${jsonLd(pg)}
</head>
<body data-page="${pg.page}" data-key="${pg.key || ''}" data-id="${pg.id || ''}" data-base="${base}" data-suffix="index.html">
${shell}
<script src="${base}assets/app.js?v=${BUILD_ID}"></script>
</body>
</html>
`;
}

const BUILD_ID = Date.now().toString(36);

async function main() {
  rm(TMP); rm(OUT); mkdir(TMP);
  for (const pg of pages) { mkdir(path.join(TMP, pg.path)); fs.writeFileSync(path.join(TMP, pg.path, 'index.html'), pageHtml(pg)); }
  mkdir(path.join(TMP, 'assets'));
  fs.writeFileSync(path.join(TMP, 'assets/app.js'), appJs);
  fs.copyFileSync(path.join(ROOT, 'src/style.css'), path.join(TMP, 'assets/style.css'));
  copyDir(path.join(ROOT, 'img'), path.join(TMP, 'img'));
  copyDir(path.join(ROOT, 'fav'), TMP);

  // social share image (jpg for WhatsApp/Facebook previews)
  const first = D.P[0] ? D.P[0].variants[0].imgs[0] : null;

  // Prerender every page in Chromium
  const { chromium } = require('playwright');
  const browser = await chromium.launch(process.env.CHROME_CHANNEL ? { channel: process.env.CHROME_CHANNEL } : {});
  const ctx = await browser.newContext();
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  const errors = [];
  for (const pg of pages) {
    const tab = await ctx.newPage();
    tab.on('pageerror', e => errors.push(`${pg.path}: ${e.message}`));
    await tab.goto('file://' + path.join(TMP, pg.path, 'index.html'));
    await tab.waitForTimeout(120);
    const html = await tab.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML);
    fs.writeFileSync(path.join(TMP, pg.path, 'index.html'), html);
    await tab.close();
  }
  if (first) {
    const tab = await ctx.newPage();
    await tab.setViewportSize({ width: 1200, height: 630 });
    fs.writeFileSync(path.join(TMP, '_og.html'), `<body style="margin:0"><img src="img/${first}.webp" style="width:1200px;height:630px;object-fit:cover;display:block"></body>`);
    await tab.goto('file://' + path.join(TMP, '_og.html'));
    await tab.waitForTimeout(200);
    await tab.screenshot({ path: path.join(TMP, 'img/og.jpg'), type: 'jpeg', quality: 85 });
    await tab.close();
  }
  await browser.close();
  if (errors.length) { console.error(errors.join('\n')); process.exit(1); }

  // Clean URLs: "products/x/index.html" -> "products/x/"
  fs.rmSync(path.join(TMP, '_og.html'), { force: true });
  copyDir(TMP, OUT); rm(TMP);
  for (const pg of pages) {
    const f = path.join(OUT, pg.path, 'index.html');
    let s = fs.readFileSync(f, 'utf8');
    s = s.replace(/href="([^"]*?)index\.html"/g, (m, a) => `href="${a || './'}"`).replace('data-suffix="index.html"', 'data-suffix=""');
    fs.writeFileSync(f, s);
  }
  // Admin panel (not prerendered, not indexed)
  copyDir(path.join(ROOT, 'admin'), path.join(OUT, 'admin'));
  fs.writeFileSync(path.join(OUT, 'site.webmanifest'), JSON.stringify({ name: 'ShopsMantra', short_name: 'ShopsMantra', start_url: './', display: 'standalone', background_color: '#FFFFFF', theme_color: '#5B2A86',
    icons: [{ src: 'icon-192.png', sizes: '192x192', type: 'image/png' }, { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }] }));
  const today = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter(p => !p.noindex).map(p => `  <url><loc>${SITE_URL}/${p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
  fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nDisallow: /admin/\nDisallow: /checkout/\nDisallow: /wishlist/\nDisallow: /search/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  fs.writeFileSync(path.join(OUT, 'CNAME'), 'www.shopsmantra.com\n');
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
  fs.writeFileSync(path.join(OUT, '404.html'), `<!doctype html><meta charset="utf-8"><title>Page not found | ShopsMantra</title><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font:16px/1.6 system-ui,sans-serif;margin:0;display:grid;place-items:center;min-height:100vh;background:#fff;color:#1E1426;text-align:center;padding:0 16px}a{color:#5B2A86}</style><div><img src="/img/logo.svg" alt="ShopsMantra" width="187" height="40"><h1 style="font-weight:500">This page isn't available</h1><p>The product may have been removed. <a href="/">Go to the ShopsMantra home page</a></p></div>`);
  console.log(`Built ${pages.length} pages into _site`);
}
main().catch(e => { console.error(e); process.exit(1); });
