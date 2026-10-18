
/* ===== Store settings (edit these) ===== */
const WA_NUMBER='919023657098';
const FREE_SHIP_ABOVE=999, SHIP_FEE=79;

/* ===== Catalogue (from ShopsMantra Flipkart listings) ===== */
const CATS={
  kurtaSets:{name:'Kurta Sets',group:'clothing',img:null},
  suitSets:{name:'Suit Sets',group:'clothing',img:null},
  kurtas:{name:'Kurtas & Tops',group:'clothing',img:null},
  coatSets:{name:'Coat Sets',group:'clothing',img:null},
  lehengas:{name:'Lehenga & Skirt Sets',group:'clothing',img:'lehA_0'},
  earrings:{name:'Earrings',group:'jewellery',img:'ear12_0'},
  necklaces:{name:'Necklace Sets',group:'jewellery',img:null},
  bangles:{name:'Bangles & Kadas',group:'jewellery',img:'bangMul_0'},
  anklets:{name:'Anklets',group:'jewellery',img:'anklet_0'},
  hair:{name:'Hair Accessories',group:'accessories',img:'bow_1'},
  boxes:{name:'Jewellery Boxes',group:'accessories',img:'box_0'}
};
const imgs=(k,n)=>Array.from({length:n},(_,i)=>`${k}_${i}`);
const P=[
 {id:1,name:'Printed Stitched Lehenga Choli (Black, Red)',cat:'lehengas',price:2701,mrp:3999,sizes:['L'],
  variants:[{label:'Black, Red',sw:'#7B1E2B',imgs:imgs('lehA',4)}],tags:['Kutchi'],
  specs:[['Lehenga fabric','Pure Cotton'],['Stitching','Stitched'],['Pattern','Printed, Geometric Print'],['In the box','1 Lehenga, 1 Choli, 1 Dupatta']],
  desc:'Ajrakh-style printed cotton lehenga with a wide flare, a sleeveless choli with cowrie shell detailing and a printed dupatta. Fully stitched and ready to wear for weddings, festivals and family functions.'},
 {id:2,name:'Printed Geometric Print Stitched Lehenga Choli (Black, Maroon)',cat:'lehengas',price:2500,mrp:3999,sizes:['L'],
  variants:[{label:'Black, Maroon',sw:'#8B1A2B',imgs:imgs('lehB',5)}],tags:['Kutchi'],
  specs:[['Lehenga fabric','Pure Cotton'],['Stitching','Stitched'],['Pattern','Printed, Geometric Print'],['In the box','1 Top, 1 Lehenga, 1 Dupatta']],
  desc:'Pure cotton lehenga in maroon and black with geometric block prints, a tie-up back choli trimmed with cowrie shells and a bandhani-style dupatta with mirror patch work.'},
 {id:3,name:'Printed Geometric Print Stitched Lehenga Choli (Maroon, Dark Blue)',cat:'lehengas',price:2800,mrp:4500,sizes:['L','XL'],
  variants:[{label:'Maroon, Dark Blue',sw:'#1F2A55',imgs:imgs('lehC',4)}],tags:['New'],
  specs:[['Stitching','Stitched'],['Pattern','Printed, Geometric Print'],['In the box','1 Lehenga, 1 Choli, 1 Dupatta']],
  desc:'Dark blue printed lehenga with a deep maroon border, a cowrie-trimmed choli and a matching printed dupatta. Stitched and ready to wear.'},
 {id:4,name:'Printed Stitched Lehenga Choli (Maroon, Black Border)',cat:'lehengas',price:null,mrp:null,sizes:[],
  variants:[{label:'Black, Maroon',sw:'#7A1F27',imgs:imgs('lehD',4)}],tags:['New'],
  specs:[['Lehenga fabric','Pure Cotton'],['Choli fabric','Cotton'],['Stitching','Stitched'],['Pattern','Printed'],['In the box','1 Lehenga, 1 Blouse, 1 Dupatta']],
  desc:'Maroon printed cotton lehenga with a bold black and gold striped hem, an embroidered choli with cowrie shell trim and a printed dupatta.'},
 {id:5,name:'Printed Stitched Lehenga Choli (Black, Maroon)',cat:'lehengas',price:2701,mrp:3999,sizes:['L','XL'],
  variants:[{label:'Black, Maroon',sw:'#B23A62',imgs:imgs('lehE',4)}],tags:[],
  specs:[['Stitching','Stitched'],['Pattern','Printed'],['In the box','1 Lehenga, 1 Choli, 1 Dupatta']],
  desc:'A rose-pink and navy printed lehenga with paisley borders, a cowrie-trimmed choli and a printed dupatta. Light cotton that stays comfortable through long functions.'},
 {id:6,name:'Metal & Fabric Kutchi Bangle Set (Pack of 2)',cat:'bangles',price:785,mrp:1000,sizes:['Free'],
  variants:[{label:'Black, Silver',sw:'#222222',imgs:imgs('bangBlk',3)},{label:'Multicolor, Silver',sw:'#E0A21B',imgs:imgs('bangMul',3)},{label:'Red, Silver',sw:'#B22234',imgs:imgs('bangRed',4)}],tags:['Kutchi','Bestseller'],
  specs:[['Material','Metal, Fabric'],['Size','Free size'],['Pack of','2']],
  desc:'Wide oxidised metal bangles wrapped in Kutchi embroidered fabric, finished with braided tassels and coin jhumka drops. Pairs well with lehengas, kurtas and other ethnic outfits.'},
 {id:7,name:'Oxidised Silver Kutchi Mirror Work Bangle (Pack of 2)',cat:'bangles',price:291,mrp:500,sizes:['Free'],
  variants:[{label:'Black',sw:'#1A1A1A',imgs:imgs('kada',2)},{label:'White',sw:'#F1EFEA',imgs:imgs('kadaWht',3)}],tags:['Kutchi'],
  specs:[['Finish','Oxidised Silver'],['Size','Free size'],['Pack of','2']],
  desc:'Square kada-style bangles with colourful Kutchi thread embroidery and mirror work, edged with oxidised silver ghungroo bells.'},
 {id:8,name:'12 Pair Oxidised Antique Silver Earrings Combo with Storage Box',cat:'earrings',price:680,mrp:1499,sizes:['Free'],
  variants:[{label:'Black, Silver',sw:'#5B5F66',imgs:imgs('ear12',3)}],tags:['Bestseller'],
  specs:[['Material','Velvet, Hard Board, Alloy'],['Contents','12 pairs of earrings + display box'],['Use','Jewellery storage and earring display']],
  desc:'Twelve pairs of oxidised antique silver earrings, from jhumkas to studs and chandbalis, arranged on a velvet display stand that keeps them tangle-free. A ready gift set.'},
 {id:9,name:'Kutchi Embroidered Fabric Anklet Payal',cat:'anklets',price:167,mrp:499,sizes:['Free'],
  variants:[{label:'Multicolor',sw:'#C62828',imgs:imgs('anklet',4)}],tags:['Kutchi'],
  specs:[['Material','Fabric, Cotton Dori, Alloy'],['Occasion','Wedding & Engagement'],['Closure','Adjustable dori tie']],
  desc:'Handcrafted-look fabric payal with Kutchi embroidery, mirror work and silver-tone ghungroo bells, tied with an adjustable cotton dori.'},
 {id:10,name:'Kutchi Embroidered Hair Bow Clip',cat:'hair',price:160,mrp:399,sizes:['Free'],
  variants:[{label:'Multicolor',sw:'#D32F2F',imgs:imgs('bow',3)}],tags:['Kutchi','New'],
  specs:[['Design','Kutchi embroidery with cowrie shells and pom-poms'],['Colour','Multicolor']],
  desc:'A large embroidered hair bow with mirror work, a cowrie shell centre and hanging pom-pom tassels. Clips onto a braid or half-up hairstyle for festive and party looks.'},
 {id:11,name:'12 Pair Earring Jhumka Storage Box & Jewellery Display (Black)',cat:'boxes',price:null,mrp:null,sizes:['Free'],
  variants:[{label:'Black',sw:'#111111',imgs:imgs('box',3)}],tags:['New'],
  specs:[['Holds','12 pairs of earrings or jhumkas'],['Use','Storage, display and protection'],['Colour','Black']],
  desc:'A black velvet-finish box that opens into a four-step display stand with white cushioned slots for 12 pairs of earrings. Keeps jhumkas tangle-free and doubles as a vanity display.'}
];
P.forEach(p=>p.group=CATS[p.cat].group);
const off=p=>p.price?Math.round((1-p.price/p.mrp)*100):0;
const inr=n=>'₹'+n.toLocaleString('en-IN');
/* ===== page links (each page has its own URL) ===== */
const slugify=s=>s.toLowerCase().replace(/&/g,' ').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
P.forEach(p=>p.slug=slugify(p.name));
const GROUP_SLUG={all:'shop',clothing:'clothing',jewellery:'jewellery',accessories:'accessories',new:'new-arrivals',under500:'under-500'};
const collSlug=k=>GROUP_SLUG[k]||slugify(CATS[k].name);
const INFO_SLUG={order:'how-to-order',ship:'shipping-returns',size:'size-help'};
/* ===== end of catalogue ===== */
const BASE=(document.body&&document.body.dataset.base)||'';
const SUFFIX=(document.body&&document.body.dataset.suffix)||'';
const U={
  home:()=>(BASE+SUFFIX)||'./',
  coll:k=>BASE+'collections/'+collSlug(k)+'/'+SUFFIX,
  prod:id=>{const p=P.find(x=>x.id===+id);return p?BASE+'products/'+p.slug+'/'+SUFFIX:U.home()},
  info:k=>BASE+'pages/'+INFO_SLUG[k]+'/'+SUFFIX,
  wish:()=>BASE+'wishlist/'+SUFFIX,
  checkout:()=>BASE+'checkout/'+SUFFIX,
  search:q=>BASE+'search/'+SUFFIX+'?q='+encodeURIComponent(q)
};
function hrefFor(el){const d=el.dataset;if(d.pid)return U.prod(d.pid);if(d.shop)return U.coll(d.shop);if(d.info)return U.info(d.info);if(d.go==='home')return U.home();if(d.go==='wishlist')return U.wish();return null}
function linkify(root){if(!root)return;root.querySelectorAll('button[data-pid],button[data-shop],button[data-info],button[data-go]').forEach(b=>{const a=document.createElement('a');for(const at of [...b.attributes]){if(at.name!=='type'&&at.name!=='aria-haspopup')a.setAttribute(at.name,at.value)}a.classList.add('lk');a.href=hrefFor(b);while(b.firstChild)a.appendChild(b.firstChild);b.replaceWith(a)})}
const src=k=>BASE+(k.startsWith('lehD')?`img/${k}.jpg`:`img/${k}.webp`);
const srcS=k=>BASE+(k.startsWith('lehD')?`img/${k}.jpg`:`img/s/${k}.webp`);
const pimg=(p,v=0,i=0)=>srcS(p.variants[v].imgs[i]);
const IG_URL='https://www.instagram.com/shops.mantra/';
/* Customer reviews: add only real reviews from your customers, for example
 {name:'Priya', city:'Ahmedabad', rating:5, product:'Kutchi Embroidered Anklet', text:'Very pretty and good quality.'} */
const REVIEWS=[];
const stars=n=>'★★★★★'.slice(0,n)+'<i>'+'★★★★★'.slice(0,5-n)+'</i>';
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const waLink=t=>'https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(t);

/* ===== state ===== */
const store={get(k,d){try{const v=localStorage.getItem('sm2_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('sm2_'+k,JSON.stringify(v))}catch(e){}}};
let cart=store.get('cart',[]).filter(l=>P.find(p=>p.id===l.id&&p.price)); let wish=store.get('wish',[]).filter(id=>P.find(p=>p.id===id));
const app=document.getElementById('app');
const $=s=>document.querySelector(s);
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),2000)}
function save(){store.set('cart',cart);store.set('wish',wish);badges()}
function badges(){const n=cart.reduce((s,l)=>s+l.qty,0);const cb=$('#cBadge');cb.hidden=!n;cb.textContent=n;const wb=$('#wBadge');wb.hidden=!wish.length;wb.textContent=wish.length}

/* ===== components ===== */
const heartSvg='<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';
function priceHtml(p){return p.price?`<div class="pr price"><span class="now">${inr(p.price)}</span><span class="mrp">${inr(p.mrp)}</span><span class="off">${off(p)}% off</span></div>`:`<div class="pr"><span class="ask">Ask price on WhatsApp</span></div>`}
function card(p){
  const tag=p.tags.includes('Bestseller')?'<span class="chip hot">Bestseller</span>':p.tags.includes('New')?'<span class="chip">New</span>':'';
  const alt=p.variants[0].imgs[1];
  return `<article class="card">
    <div class="ph" data-pid="${p.id}"><img src="${pimg(p)}" alt="${p.name}" loading="lazy">${alt?`<img class="alt" src="${srcS(alt)}" alt="" loading="lazy">`:''}${tag}<button class="heart ${wish.includes(p.id)?'on':''}" data-wish="${p.id}" aria-label="Save to wishlist">${heartSvg}</button></div>
    <span class="sub">${CATS[p.cat].name}${p.variants.length>1?` · ${p.variants.length} colours`:''}</span>
    <button class="nm" data-pid="${p.id}">${p.name}</button>
    ${priceHtml(p)}
  </article>`;
}
const featIcons={
  wa:'<path d="M20 12a8 8 0 0 1-11.8 7L4 20l1.1-4A8 8 0 1 1 20 12z"/>',
  cash:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/>',
  truck:'<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'
};

/* ===== views ===== */
function setNav(key){document.querySelectorAll('nav.main [data-shop],nav.main [data-go]').forEach(b=>b.classList.toggle('on',(b.dataset.go||b.dataset.shop)===key));try{if(document.activeElement&&document.activeElement.closest('.dd'))document.activeElement.blur()}catch(e){}$('#nav').classList.remove('open')}
function show(html,key){app.innerHTML=`<div class="view">${html}</div>`;linkify(app);setNav(key);window.scrollTo({top:0})}

const LOTUS='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c1.8 2 2.6 4.3 2.4 6.8C13.6 11.4 12.8 12.6 12 13.5c-.8-.9-1.6-2.1-2.4-3.7C9.4 7.3 10.2 5 12 3zM4 8.5c2.5.2 4.6 1.3 6 3.2.6 1 1 2 1.2 3.1-2.6.2-4.6-.6-5.9-2.2C4.6 11.6 4.1 10.2 4 8.5zm16 0c-.1 1.7-.6 3.1-1.3 4.1-1.3 1.6-3.3 2.4-5.9 2.2.2-1.1.6-2.1 1.2-3.1 1.4-1.9 3.5-3 6-3.2zM5 16.5c2.2-.6 4.6-.4 7 1 2.4-1.4 4.8-1.6 7-1-1.5 2.4-4 3.6-7 3.6s-5.5-1.2-7-3.6z"/></svg>';
const orn=()=>`<div class="orn">${LOTUS}</div>`;
function home(){
  const cloth=P.filter(p=>p.group==='clothing');
  const jew=P.filter(p=>p.group!=='clothing');
  const minPrice=k=>Math.min(...P.filter(p=>p.cat===k&&p.price).map(p=>p.price));
  show(`
  <section class="phero"><div class="wrap pheroGrid">
    <div>
      <span class="eyebrow">ShopsMantra · Women's Fashion</span>
      <h1 class="display">Dressed for <em>every</em> occasion</h1>
      <p class="lead">Everyday wear, festive outfits and wedding lehengas, with jewellery to complete the look. Order on WhatsApp and pay in cash when your parcel arrives.</p>
      <div class="ctas"><button class="btn pri" data-shop="clothing">Shop Clothing</button><button class="btn out" data-shop="jewellery">Shop Jewellery</button></div>
      <div class="pfacts"><div><b>Up to 67%</b>off on MRP</div><div><b>Cash on Delivery</b>on every order</div><div><b>WhatsApp</b>orders & support</div></div>
    </div>
    <div class="pheroArt">
      <span class="frame"></span>
      <div class="arch main" data-pid="2"><img src="${src('lehB_0')}" alt="Printed lehenga choli"></div>
      <div class="arch side" data-pid="6"><img src="${src('bangBlk_0')}" alt="Bangle set"></div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <div class="secHead">${orn()}<h2 class="display">Shop by category</h2></div>
    <div class="catGroups">${[['clothing',"Clothing"],['jewellery','Jewellery'],['accessories','Accessories']].map(([g,l])=>`<div class="catGroup cg-${g}" style="--n:${Object.values(CATS).filter(c=>c.group===g).length}"><h3>${l}</h3><div class="archCats">${Object.entries(CATS).filter(([k,c])=>c.group===g).map(([k,c])=>`<button class="cat" data-shop="${k}">${c.img?`<div class="arch"><img src="${srcS(c.img)}" alt="" loading="lazy"></div>`:`<div class="arch soonArch"><span>${LOTUS}<em>Coming soon</em></span></div>`}<span>${c.name}</span><small>${!P.some(p=>p.cat===k)?'New styles soon':isFinite(minPrice(k))?'From '+inr(minPrice(k)):'Ask on WhatsApp'}</small></button>`).join('')}</div></div>`).join('')}</div>
  </div></section>

  <section class="block" style="background:var(--soft)"><div class="wrap">
    <div class="secHead"><span class="eyebrow">Daily, festive & wedding wear</span><h2 class="display">Women's Clothing</h2></div>
    <div class="grid">${cloth.slice(0,4).map(card).join('')}</div>
    <div style="text-align:center;margin-top:36px"><button class="btn out" data-shop="clothing">View all clothing</button></div>
  </div></section>

  <section class="block"><div class="wrap edit">
    <div class="editCard"><div class="img" data-pid="8"><img src="${src('ear12_2')}" alt="12 pair earrings set" loading="lazy"></div><div class="txt"><span class="eyebrow">Gift ready</span><h3>Twelve pairs, one velvet box</h3><p>Oxidised silver jhumkas, studs and chandbalis, arranged on a display stand. ₹680.</p><button class="link" data-pid="8">Discover the set</button></div></div>
    <div class="editCard"><div class="img" data-shop="under500"><img src="${src('anklet_0')}" alt="Embroidered anklets" loading="lazy"></div><div class="txt"><span class="eyebrow">Under ₹500</span><h3>Small details, finished looks</h3><p>Bangles, payals and hair clips with embroidery and mirror work, from ₹160.</p><button class="link" data-shop="under500">Shop under ₹500</button></div></div>
  </div></section>

  <section class="block" id="wedding" style="padding-top:10px"><div class="wrap"><div class="soon">
    <svg class="mandala" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="#D9BC7A" stroke-width="1.2">${Array.from({length:16},(_,i)=>`<ellipse cx="100" cy="55" rx="14" ry="45" transform="rotate(${i*22.5} 100 100)"/>`).join('')}<circle cx="100" cy="100" r="20"/><circle cx="100" cy="100" r="92"/></g></svg>
    <div style="position:relative">
      <span class="eyebrow">Coming Soon</span>
      <h2>The Wedding Collection</h2>
      <p>Bridal lehengas, wedding sarees, reception gowns and bridal jewellery sets are arriving soon. Message us on WhatsApp and we'll send you the designs first.</p>
      <a class="btn gold" href="${waLink("Hi ShopsMantra, please notify me when the Wedding Collection is available.")}" target="_blank" rel="noopener">Notify me on WhatsApp</a>
    </div>
    <div class="soonList" style="position:relative">
      <div class="soonItem"><i>Coming soon</i><b>Bridal Lehengas</b><span>Heavy work, for the big day</span></div>
      <div class="soonItem"><i>Coming soon</i><b>Wedding Sarees</b><span>Silk and zari for ceremonies</span></div>
      <div class="soonItem"><i>Coming soon</i><b>Reception Gowns</b><span>Party and sangeet looks</span></div>
      <div class="soonItem"><i>Coming soon</i><b>Bridal Jewellery Sets</b><span>Necklace, earrings and maang tikka</span></div>
    </div>
  </div></div></section>

  <section class="block" style="padding-top:20px"><div class="wrap">
    <div class="secHead">${orn()}<span class="eyebrow">Finish the look</span><h2 class="display">Jewellery & Accessories</h2></div>
    <div class="grid">${jew.slice(0,4).map(card).join('')}</div>
    <div style="text-align:center;margin-top:36px"><button class="btn out" data-shop="jewellery">View all jewellery</button></div>
  </div></section>



  <section class="block" style="background:var(--soft)"><div class="wrap">
    <div class="secHead">${orn()}<span class="eyebrow">Customer Reviews</span><h2 class="display">What our customers say</h2></div>
    ${REVIEWS.length?`
    <div class="revSum"><b>${(REVIEWS.reduce((s,r)=>s+r.rating,0)/REVIEWS.length).toFixed(1)}</b><span class="stars" aria-hidden="true">${stars(Math.round(REVIEWS.reduce((s,r)=>s+r.rating,0)/REVIEWS.length))}</span><span>Based on ${REVIEWS.length} review${REVIEWS.length>1?'s':''}</span></div>
    <div class="revGrid">${REVIEWS.map(r=>`<figure class="revCard"><span class="stars" aria-label="${r.rating} out of 5">${stars(r.rating)}</span><blockquote>${esc(r.text)}</blockquote><figcaption><b>${esc(r.name)}</b>${r.city?`, ${esc(r.city)}`:''}${r.product?`<small>${esc(r.product)}</small>`:''}</figcaption></figure>`).join('')}</div>`
    :`<div class="revEmpty"><span class="stars big" aria-hidden="true">${stars(5)}</span><p>Bought from ShopsMantra? We would love to hear how you liked it. Send us your review and a photo on WhatsApp and we'll feature it here.</p></div>`}
    <div style="text-align:center;margin-top:30px"><a class="btn out" href="${waLink('Hi ShopsMantra, here is my review:\n\nProduct: \nRating (out of 5): \nReview: \nName & city: ')}" target="_blank" rel="noopener">Write a review on WhatsApp</a></div>
  </div></section>

  <section class="block" style="padding-block:10px 40px"><div class="wrap feats">
    <div class="feat"><svg viewBox="0 0 24 24" fill="none">${featIcons.wa}</svg><div><b>Order on WhatsApp</b><span>Your order reaches us instantly</span></div></div>
    <div class="feat"><svg viewBox="0 0 24 24" fill="none">${featIcons.cash}</svg><div><b>Cash on Delivery</b><span>No online payment needed</span></div></div>
    <div class="feat"><svg viewBox="0 0 24 24" fill="none">${featIcons.truck}</svg><div><b>Free shipping</b><span>On orders above ₹${FREE_SHIP_ABOVE}</span></div></div>
  </div></section>

  <section class="block" style="padding-top:10px"><div class="wrap"><div class="news">
    ${orn()}<h2>New designs every week</h2><p style="margin:0 0 18px;max-width:44ch">Message us on WhatsApp to see new arrivals and offers before anyone else.</p>
    <a class="btn pri" href="${waLink('Hi ShopsMantra, please send me your new arrivals.')}" target="_blank" rel="noopener">Get updates on WhatsApp</a>
  </div></div></section>`,'home');
}

let shopState={key:'all',sort:'pop',price:'any',query:''};
function shop(key,query){shopState={key:key||'all',sort:'pop',price:'any',query:query||''};renderShop()}
function shopTitle(k){
  if(CATS[k])return CATS[k].name;
  return {all:'All Products',clothing:"Women's Clothing",jewellery:'Jewellery',accessories:'Accessories',new:'New Arrivals',under500:'Under ₹500'}[k]||'Shop';
}
function filtered(){
  const {key,price,query,sort}=shopState;
  let list=P.filter(p=>{
    if(CATS[key])return p.cat===key;
    if(key==='clothing'||key==='jewellery'||key==='accessories')return p.group===key;
    if(key==='new')return p.tags.includes('New');
    if(key==='under500')return p.price&&p.price<500;
    return true;
  });
  if(query){const q=query.toLowerCase().split(/\s+/);list=P.filter(p=>{const t=(p.name+' '+CATS[p.cat].name+' '+p.desc+' '+p.specs.flat().join(' ')).toLowerCase();return q.every(w=>t.includes(w.replace(/s$/,'')))})}
  if(price!=='any'){const [a,b]=price.split('-').map(Number);list=list.filter(p=>p.price&&p.price>=a&&p.price<=b)}
  const big=1e9;
  const s={pop:(a,b)=>(b.tags.includes('Bestseller')-a.tags.includes('Bestseller'))||a.id-b.id,low:(a,b)=>(a.price||big)-(b.price||big),high:(a,b)=>(b.price||0)-(a.price||0),disc:(a,b)=>off(b)-off(a)}[sort];
  return list.sort(s);
}
function renderShop(){
  const {key,query}=shopState, list=filtered();
  const title=query?`Results for “${query.replace(/</g,'')}”`:shopTitle(key);
  const prices=[['any','Any price'],['0-299','Under ₹300'],['300-999','₹300 – ₹999'],['1000-99999','₹1,000 & above']];
  show(`<div class="wrap">
    <div class="crumbs"><button data-go="home">Home</button><span>/</span>${CATS[key]?`<button data-shop="${CATS[key].group}">${shopTitle(CATS[key].group)}</button><span>/</span>`:''}<span>${title}</span></div>
    <div class="shopHead"><div><h1 class="display">${title}</h1><span class="muted">${list.length} product${list.length===1?'':'s'}</span></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn out fToggle" id="fToggle" style="padding:9px 16px">Filters</button>
      <select id="sort" aria-label="Sort products">${[['pop','Featured'],['low','Price: low to high'],['high','Price: high to low'],['disc','Biggest discount']].map(([v,t])=>`<option value="${v}" ${shopState.sort===v?'selected':''}>Sort: ${t}</option>`).join('')}</select></div>
    </div>
    <div class="shopLayout">
      <aside class="filters" id="filters">
        <div class="fgroup"><h4>Show</h4><div class="pills">
          <button class="pill ${key==='all'?'on':''}" data-shop="all">All</button>
          <button class="pill ${key==='clothing'?'on':''}" data-shop="clothing">Clothing</button>
          <button class="pill ${key==='jewellery'?'on':''}" data-shop="jewellery">Jewellery</button>
          <button class="pill ${key==='accessories'?'on':''}" data-shop="accessories">Accessories</button>
          <button class="pill ${key==='new'?'on':''}" data-shop="new">New</button></div></div>
        <div class="fgroup"><h4>Category</h4>${Object.entries(CATS).map(([k,c])=>`<label class="fopt"><input type="radio" name="sub" data-shop="${k}" ${key===k?'checked':''}> ${c.name} <span class="muted" style="margin-left:auto;font-size:12px">${P.filter(p=>p.cat===k).length||'Soon'}</span></label>`).join('')}</div>
        <div class="fgroup"><h4>Price</h4>${prices.map(([v,t])=>`<label class="fopt"><input type="radio" name="price" value="${v}" ${shopState.price===v?'checked':''}> ${t}</label>`).join('')}</div>
      </aside>
      <div style="min-width:0">${list.length?`<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(min(200px,45%),1fr))">${list.map(card).join('')}</div>`:(CATS[key]&&!query&&!P.some(p=>p.cat===key))?`<div class="empty soonEmpty">${orn()}<h2 class="display">${CATS[key].name} are coming soon</h2><p>We are adding new ${CATS[key].name.toLowerCase()} to the store. Message us on WhatsApp to see the latest designs first.</p><div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><a class="btn pri" href="${waLink(`Hi ShopsMantra, please share your latest ${CATS[key].name} designs.`)}" target="_blank" rel="noopener">Ask on WhatsApp</a><button class="btn out" data-shop="clothing">Shop clothing</button></div></div>`:`<div class="empty"><p>No products match these filters.</p><button class="btn out" data-shop="all">Show all products</button></div>`}</div>
    </div></div>`, ['clothing','jewellery','accessories','new','all'].includes(key)&&!query?key:'');
  $('#sort').addEventListener('change',e=>{shopState.sort=e.target.value;renderShop()});
  document.querySelectorAll('input[name=price]').forEach(r=>r.addEventListener('change',e=>{shopState.price=e.target.value;renderShop()}));
  $('#fToggle').addEventListener('click',()=>$('#filters').classList.toggle('open'));
}

let pdp={};
function product(id){
  const p=P.find(x=>x.id===+id); if(!p)return home();
  pdp={p,size:p.sizes.length===1?p.sizes[0]:null,v:0,qty:1,view:0};
  renderProduct();
}
function renderProduct(){
  const {p}=pdp; const c=CATS[p.cat]; const V=p.variants[pdp.v];
  const similar=P.filter(x=>x.cat===p.cat&&x.id!==p.id).concat(P.filter(x=>x.group===p.group&&x.cat!==p.cat)).concat(P.filter(x=>x.group!==p.group)).slice(0,4);
  const isJ=p.group!=='clothing';
  const askMsg=`Hi ShopsMantra, I'm interested in "${p.name}". Please share the price and available sizes.`;
  const buyBlock=p.price?`
        ${p.sizes.length>1?`<div><div class="optLabel"><span>Select size</span><button class="link" data-info="size">Size help</button></div><div class="sizes">${p.sizes.map(s=>`<button class="size ${pdp.size===s?'on':''}" data-size="${s}">${s}</button>`).join('')}</div><div class="err" id="sizeErr" hidden>Please choose a size first.</div></div>`:`<div class="muted" style="font-size:14px">Size: ${p.sizes[0]==='Free'?'Free size':p.sizes[0]}</div>`}
        <div><div class="optLabel">Quantity</div><div class="qty"><button data-q="-1" aria-label="Decrease">−</button><span>${pdp.qty}</span><button data-q="1" aria-label="Increase">+</button></div></div>
        <div class="buyRow"><button class="btn out" id="addBag">Add to Bag</button><button class="btn pri" id="buyNow">Buy Now</button></div>`
    :`<div class="waBox">Price and availability for this product are shared on WhatsApp. Tap below and we'll reply with details.</div>
        <div class="buyRow"><a class="btn pri" href="${waLink(askMsg)}" target="_blank" rel="noopener">Ask price on WhatsApp</a></div>`;
  show(`<div class="wrap">
    <div class="crumbs"><button data-go="home">Home</button><span>/</span><button data-shop="${p.group}">${shopTitle(p.group)}</button><span>/</span><button data-shop="${p.cat}">${c.name}</button><span>/</span><span aria-current="page">${esc(p.name)}</span></div>
    <div class="pdp">
      <div class="gallery">
        <div class="thumbs">${V.imgs.map((k,i)=>`<button class="${pdp.view===i?'on':''}" data-view="${i}" aria-label="Photo ${i+1}"><img src="${srcS(k)}" alt=""></button>`).join('')}</div>
        <div class="mainImg"><img src="${src(V.imgs[pdp.view]||V.imgs[0])}" alt="${p.name}"></div>
      </div>
      <div class="info">
        <div><span class="eyebrow">ShopsMantra · ${c.name}</span><h1 style="margin-top:6px">${p.name}</h1></div>
        <div>${priceHtml(p)}${p.price?'<div class="tax">Inclusive of all taxes</div>':''}</div>
        ${p.variants.length>1?`<div><div class="optLabel">Colour: ${V.label}</div><div class="swatches">${p.variants.map((v,i)=>`<button class="sw ${pdp.v===i?'on':''}" data-variant="${i}" style="background:${v.sw}" aria-label="${v.label}" title="${v.label}"></button>`).join('')}</div></div>`:`<div class="muted" style="font-size:14px">Colour: ${V.label}</div>`}
        ${buyBlock}
        <button class="link" data-wish="${p.id}" style="align-self:flex-start">${wish.includes(p.id)?'♥ Saved to wishlist':'♡ Add to wishlist'}</button>
        <div class="specs">
          <details open><summary>Product details</summary><p>${p.desc}</p><dl>${p.specs.map(([a,b])=>`<dt>${a}</dt><dd>${b}</dd>`).join('')}<dt>Sold by</dt><dd>Shopsmantra LLP</dd></dl></details>
          <details><summary>${p.group==='accessories'?'Care':isJ?'Jewellery care':'Wash care'}</summary><p>${isJ?'Keep away from water, perfume and sweat. Store in a dry pouch and wipe gently with a soft dry cloth after use.':'Dry clean recommended for the first wash. After that, hand wash separately in cold water, dry in shade and iron on low heat.'}</p></details>
          <details><summary>Delivery & payment</summary><p>Order on WhatsApp and pay by Cash on Delivery. Free shipping on orders above ₹${FREE_SHIP_ABOVE}. Delivery time and return details are confirmed with your order on WhatsApp.</p></details>
        </div>
      </div>
    </div>
    <section class="block" style="padding-top:10px"><div class="secHead"><h2 class="display">You may also like</h2></div><div class="grid">${similar.map(card).join('')}</div></section>
  </div>`,'');
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{pdp.view=+b.dataset.view;renderProduct()}));
  document.querySelectorAll('[data-variant]').forEach(b=>b.addEventListener('click',()=>{pdp.v=+b.dataset.variant;pdp.view=0;renderProduct()}));
  document.querySelectorAll('[data-size]').forEach(b=>b.addEventListener('click',()=>{pdp.size=b.dataset.size;renderProduct()}));
  document.querySelectorAll('[data-q]').forEach(b=>b.addEventListener('click',()=>{pdp.qty=Math.max(1,Math.min(10,pdp.qty+ +b.dataset.q));renderProduct()}));
  if(!p.price)return;
  const add=()=>{if(!pdp.size){$('#sizeErr').hidden=false;return false}
    const ex=cart.find(l=>l.id===p.id&&l.size===pdp.size&&l.v===pdp.v);
    if(ex)ex.qty=Math.min(10,ex.qty+pdp.qty);else cart.push({id:p.id,size:pdp.size,v:pdp.v,qty:pdp.qty});
    save();return true};
  $('#addBag').addEventListener('click',()=>{if(add()){toast('Added to your bag');openCart()}});
  $('#buyNow').addEventListener('click',()=>{if(add())location.href=U.checkout()});
}

function wishlist(){
  const list=P.filter(p=>wish.includes(p.id));
  show(`<div class="wrap" style="padding-bottom:50px">
    <div class="crumbs"><button data-go="home">Home</button><span>/</span><span>Wishlist</span></div>
    <div class="shopHead"><h1 class="display">My Wishlist</h1><span class="muted">${list.length} saved</span></div>
    ${list.length?`<div class="grid">${list.map(card).join('')}</div>`:`<div class="empty"><p>Tap the heart on any product to save it here.</p><button class="btn pri" data-shop="all">Start shopping</button></div>`}
  </div>`,'wishlist');
}

/* ===== cart ===== */
function totals(){
  const items=cart.map(l=>({...l,p:P.find(p=>p.id===l.id)})).filter(l=>l.p&&l.p.price);
  const sub=items.reduce((s,l)=>s+l.p.price*l.qty,0);
  const mrp=items.reduce((s,l)=>s+l.p.mrp*l.qty,0);
  const ship=sub===0||sub>=FREE_SHIP_ABOVE?0:SHIP_FEE;
  return {items,sub,mrp,ship,total:sub+ship};
}
const lineImg=l=>srcS(l.p.variants[l.v||0].imgs[0]);
const lineMeta=l=>`Size: ${l.size==='Free'?'Free size':l.size}${l.p.variants.length>1?' · '+l.p.variants[l.v||0].label:''}`;
function renderCart(){
  const t=totals();
  const body=$('#cartBody'), foot=$('#cartFoot');
  if(!t.items.length){body.innerHTML=`<div class="empty" style="margin-top:20px"><p>Your bag is empty.</p><button class="btn pri" data-shop="all" data-close>Start shopping</button></div>`;foot.innerHTML='';return}
  const need=FREE_SHIP_ABOVE-t.sub;
  body.innerHTML=`<div class="ship">${need>0?`Add <b>${inr(need)}</b> more for free shipping`:'<b>You get free shipping</b> on this order'}<div class="bar"><i style="width:${Math.min(100,t.sub/FREE_SHIP_ABOVE*100)}%"></i></div></div>`+
  t.items.map((l,i)=>`<div class="line"><div class="th"><img src="${lineImg(l)}" alt=""></div><div style="min-width:0">
    <div class="nm">${l.p.name}</div><div class="meta">${lineMeta(l)}</div>
    <div class="row"><div class="qty"><button data-cq="${i}" data-d="-1" aria-label="Decrease">−</button><span>${l.qty}</span><button data-cq="${i}" data-d="1" aria-label="Increase">+</button></div><b class="price">${inr(l.p.price*l.qty)}</b></div>
    <button class="rm" data-rm="${i}">Remove</button></div></div>`).join('');
  foot.innerHTML=`<div class="tot"><span class="muted">You save</span><span class="price" style="color:var(--ok);font-weight:700">${inr(t.mrp-t.sub)}</span></div>
    <div class="tot big"><span>Subtotal</span><span class="price">${inr(t.sub)}</span></div>
    <button class="btn pri block" id="goCheckout">Checkout</button>`;
  $('#goCheckout').addEventListener('click',()=>{location.href=U.checkout()});
}
function openCart(){renderCart();linkify($('#drawer'));$('#drawer').classList.add('open');$('#scrim').classList.add('open')}
function closeCart(){$('#drawer').classList.remove('open');$('#scrim').classList.remove('open')}

const WA_ICON='<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.4.3.2.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>';
function checkout(){
  const t=totals();
  if(!t.items.length){return show(`<div class="wrap"><div class="crumbs"><button data-go="home">Home</button><span>/</span><span>Checkout</span></div><div class="empty soonEmpty" style="margin-bottom:60px">${orn()}<h2 class="display">Your bag is empty</h2><p>Add a product to your bag to place an order.</p><button class="btn pri" data-shop="all">Start shopping</button></div></div>`,'')}
  show(`<div class="wrap">
    <div class="crumbs"><button data-go="home">Home</button><span>/</span><span>Checkout</span></div>
    <h1 class="display" style="font-size:34px;margin-bottom:20px">Checkout</h1>
    <div class="checkout">
      <form class="panel" id="coForm" novalidate>
        <h2>Delivery address</h2>
        <div class="fields">
          <div class="fld"><label for="c_name">Full name</label><input id="c_name" required placeholder="Your name"></div>
          <div class="fld"><label for="c_phone">Mobile number</label><input id="c_phone" required inputmode="numeric" pattern="[6-9][0-9]{9}" maxlength="10" placeholder="10-digit mobile"></div>
          <div class="fld full"><label for="c_addr">Address</label><input id="c_addr" required placeholder="House no., building, street, area"></div>
          <div class="fld"><label for="c_pin">Pincode</label><input id="c_pin" required inputmode="numeric" pattern="[1-9][0-9]{5}" maxlength="6" placeholder="6 digits"></div>
          <div class="fld"><label for="c_city">City</label><input id="c_city" required placeholder="City"></div>
          <div class="fld full"><label for="c_state">State</label><select id="c_state" required><option value="">Select state</option>${['Andhra Pradesh','Assam','Bihar','Chhattisgarh','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu & Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Odisha','Punjab','Rajasthan','Tamil Nadu','Telangana','Uttar Pradesh','Uttarakhand','West Bengal','Other'].map(s=>`<option>${s}</option>`).join('')}</select></div>
        </div>
        <h2 style="margin-top:26px">Payment</h2>
        <div class="pay">
          <label class="payOpt"><input type="radio" name="pay" value="Cash on Delivery" checked><div><b>Cash on Delivery</b><small>Pay in cash when the parcel arrives. No advance payment.</small></div></label>
        </div>
        <div class="err" id="coErr" style="margin-top:14px" hidden>Please fill in all fields correctly: mobile must be 10 digits and pincode 6 digits.</div>
        <button class="btn pri block" type="submit" style="margin-top:18px;padding-block:15px">${WA_ICON}Place order on WhatsApp · ${inr(t.total)}</button>
        <p class="muted" style="font-size:12px;margin:10px 0 0;text-align:center">Your order details open in WhatsApp. Just tap Send and we'll confirm it there.</p>
      </form>
      <aside class="panel" style="align-self:start">
        <h2>Order summary</h2>
        ${t.items.map(l=>`<div class="sumLine"><div class="th"><img src="${lineImg(l)}" alt=""></div><div class="n">${l.p.name}<div class="muted" style="font-size:12px">${lineMeta(l)} · Qty ${l.qty}</div></div><b class="price">${inr(l.p.price*l.qty)}</b></div>`).join('')}
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px;border-top:1px solid var(--line);padding-top:14px">
          <div class="tot"><span class="muted">Total MRP</span><span class="price">${inr(t.mrp)}</span></div>
          <div class="tot"><span class="muted">Discount on MRP</span><span class="price" style="color:var(--ok)">−${inr(t.mrp-t.sub)}</span></div>
          <div class="tot"><span class="muted">Shipping</span><span class="price">${t.ship?inr(t.ship):'Free'}</span></div>
          <div class="tot big" style="border-top:1px solid var(--line);padding-top:10px"><span>Total</span><span class="price">${inr(t.total)}</span></div>
        </div>
      </aside>
    </div></div>`,'');
  $('#coForm').addEventListener('submit',e=>{e.preventDefault();
    if(!e.target.checkValidity()){$('#coErr').hidden=false;return}
    const no='SM'+Date.now().toString().slice(-7);
    const v=id=>$(id).value.trim();
    const pay=e.target.pay.value, t2=totals();
    const lines=t2.items.map((l,i)=>`${i+1}. ${l.p.name}\n   ${lineMeta(l)} | Qty: ${l.qty} | ${inr(l.p.price*l.qty)}`).join('\n');
    const msg=`*New Order ${no}*\n\n${lines}\n\nSubtotal: ${inr(t2.sub)}\nShipping: ${t2.ship?inr(t2.ship):'Free'}\n*Total: ${inr(t2.total)}*\n\n*Payment:* ${pay}\n\n*Deliver to:*\n${v('#c_name')}\n${v('#c_addr')}\n${v('#c_city')}, ${v('#c_state')} - ${v('#c_pin')}\nMobile: ${v('#c_phone')}`;
    const name=v('#c_name').split(' ')[0].replace(/[<>&"]/g,'');
    const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
    cart=[];save();
    show(`<div class="wrap"><div class="success">
      <div class="tick"><svg viewBox="0 0 24 24"><path d="m5 12 5 5 9-10"/></svg></div>
      <span class="eyebrow">Order ${no}</span>
      <h1 class="display">Almost done, ${name}!</h1>
      <p class="muted">Send your order to us on WhatsApp to confirm it. You will pay in cash when it arrives.</p>
      <a class="btn pri" href="${waLink(msg)}" target="_blank" rel="noopener" style="padding:15px 28px;font-size:15px">${WA_ICON}Send order on WhatsApp</a>
      <p class="muted" style="font-size:13px;margin:0">If WhatsApp doesn't open, message us at <b>+91 90236 57098</b> with the order below.</p>
      <pre id="orderTxt" style="text-align:left;white-space:pre-wrap;background:var(--soft);border-radius:12px;padding:14px;font-size:13px;width:100%;margin:0;font-family:var(--f-body)">${esc(msg)}</pre>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><button class="btn out" id="copyOrder">Copy order details</button><button class="btn out" data-shop="all">Continue shopping</button></div>
    </div></div>`,'');
    $('#copyOrder').addEventListener('click',()=>{const sel=()=>{const r=document.createRange();r.selectNodeContents($('#orderTxt'));const s=getSelection();s.removeAllRanges();s.addRange(r);toast('Text selected, copy it now')};
      try{navigator.clipboard.writeText(msg).then(()=>toast('Order details copied'),sel)}catch(err){sel()}});
  });
}

const INFO={
  order:['How to Order','Add products to your bag and go to checkout. Fill in your delivery address. All orders are Cash on Delivery. When you tap "Place order on WhatsApp", your full order opens in WhatsApp. Send it to us and we will confirm availability and delivery time in the chat. You pay in cash when the parcel arrives.'],
  ship:['Shipping & Returns',`Shipping is free on orders above ₹${FREE_SHIP_ABOVE}; below that a flat ₹${SHIP_FEE} applies. We confirm the delivery date for your pincode on WhatsApp when you order. For returns or exchanges, message us on WhatsApp with your order number and a photo of the product.`],
  size:['Size Help','Our lehenga cholis are fully stitched and currently come in L and XL. If you are unsure which size fits you, send us your bust and waist measurements on WhatsApp and we will suggest the right one. Bangles, anklets and hair accessories are free size.']
};
function info(k){const [t,b]=INFO[k];show(`<div class="wrap" style="max-width:760px;padding-block:20px 60px"><div class="crumbs"><button data-go="home">Home</button><span>/</span><span>${t}</span></div><h1 class="display" style="font-size:34px;margin:6px 0 14px">${t}</h1><p style="font-size:16px">${b}</p><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px"><a class="btn pri" href="${waLink('Hi ShopsMantra, I have a question.')}" target="_blank" rel="noopener">Ask on WhatsApp</a><button class="btn out" data-shop="all">Shop now</button></div></div>`,'')}

/* ===== events ===== */
document.addEventListener('click',e=>{
  const w=e.target.closest('[data-wish]');
  if(w){e.stopPropagation();const id=+w.dataset.wish;wish=wish.includes(id)?wish.filter(x=>x!==id):[...wish,id];save();toast(wish.includes(id)?'Saved to wishlist':'Removed from wishlist');
    if(app.querySelector('.pdp')&&w.classList.contains('link'))renderProduct();else document.querySelectorAll(`.heart[data-wish="${id}"]`).forEach(h=>h.classList.toggle('on',wish.includes(id)));return}
  const t=e.target.closest('[data-go],[data-shop],[data-pid],[data-info],[data-cq],[data-rm]');
  if(!t)return;
  if(t.closest('#drawer')&&(t.dataset.shop||t.dataset.pid))closeCart();
  if(t.dataset.cq){const l=cart[+t.dataset.cq];l.qty=Math.max(1,Math.min(10,l.qty+ +t.dataset.d));save();renderCart();return}
  if(t.dataset.rm){cart.splice(+t.dataset.rm,1);save();renderCart();return}
  const href=hrefFor(t);
  if(href&&t.tagName!=='A'){location.href=href}
});
$('#cartBtn').addEventListener('click',openCart);
$('#closeCart').addEventListener('click',closeCart);
$('#scrim').addEventListener('click',closeCart);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCart()});
$('#menuBtn').addEventListener('click',()=>$('#nav').classList.toggle('open'));
['#q','#q2'].forEach(s=>$(s).addEventListener('keydown',e=>{if(e.key==='Enter'){const v=e.target.value.trim();if(v)location.href=U.search(v)}}));
badges();
linkify(document.body);
const PG=document.body.dataset;
({home:()=>home(),coll:()=>shop(PG.key),product:()=>product(PG.id),wishlist:()=>wishlist(),checkout:()=>checkout(),info:()=>info(PG.key),
  search:()=>{let q='';try{q=new URLSearchParams(location.search).get('q')||''}catch(e){}shop('all',q);['#q','#q2'].forEach(s=>{const i=$(s);if(i)i.value=q})}
}[PG.page]||home)();
