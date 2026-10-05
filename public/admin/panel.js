'use strict';
const REPO = 'ilknrgzll/ilknrgzll.github.io';
const PATH = 'src/content/portfolio.json';
const BRANCH = 'main';
const endpoint = `https://api.github.com/repos/${REPO}/contents/${PATH}`;
const $ = id => document.getElementById(id);
let token = '', sha = '', content = null, dirty = false, busy = false;
const message = text => { $('status').textContent = text; };
function validate(data) {
  if (!data || !Array.isArray(data.projects) || !data.about) throw Error('İçerik dosyası beklenen biçimde değil.');
  const ids = new Set();
  for (const p of data.projects) {
    if (!p.id || ids.has(p.id)) throw Error('Proje kimlikleri benzersiz olmalı.');
    ids.add(p.id);
    if (!['violet','emerald','pink','amber','sky'].includes(p.accent)) throw Error('Geçersiz proje rengi.');
    if (!p.icon || !Array.isArray(p.stack)) throw Error('Proje simgesini ve teknolojilerini kontrol et.');
    let url; try { url = new URL(p.github); } catch { throw Error('Geçerli bir proje bağlantısı gir.'); }
    if (!['https:','http:'].includes(url.protocol)) throw Error('Proje bağlantısı https:// veya http:// ile başlamalı.');
    for (const lang of ['en','tr']) for (const key of ['title','subtitle','desc']) {
      if (typeof p[lang]?.[key] !== 'string' || !p[lang][key].trim()) throw Error('Her proje için iki dilde başlık, alt başlık ve açıklama gir.');
    }
  }
  for (const lang of ['en','tr']) if (!Array.isArray(data.about[lang]) || !data.about[lang].length || data.about[lang].some(p => typeof p !== 'string' || !p.trim())) throw Error('Hakkımda metnini iki dilde doldur.');
}
function changed() { dirty = true; $('summary').textContent = `${content.projects.length} proje · Kaydedilmemiş değişiklikler var`; }
async function api(url, options = {}) {
  const response = await fetch(url, {...options, cache:'no-store', headers:{Accept:'application/vnd.github+json','Authorization':`Bearer ${token}`,'X-GitHub-Api-Version':'2022-11-28',...options.headers}});
  if (!response.ok) {
    const errors = {401:'Anahtar geçersiz veya süresi dolmuş.',403:'Bu işlem için iznin yok. Anahtarın depo izinlerini kontrol et.',404:'İçerik dosyası main dalında bulunamadı. İlk kurulum dosyalarını GitHub’a gönder.',409:'İçerik başka bir yerde değişmiş. Taslağı korumak için sayfayı kapatma; diğer değişiklikleri kontrol edip yeniden giriş yap.',422:'Kayıt GitHub tarafından reddedildi. Dal korumasını ve dosya biçimini kontrol et.'};
    throw Error(errors[response.status] || 'GitHub işlemi tamamlanamadı. Bağlantını kontrol edip yeniden dene.');
  }
  return response.json();
}
function decode(value) { return new TextDecoder().decode(Uint8Array.from(atob(value.replace(/\s/g,'')), c=>c.charCodeAt(0))); }
function encode(value) { let raw='';for(const byte of new TextEncoder().encode(value))raw+=String.fromCharCode(byte);return btoa(raw); }
function field(parent,label,value,onChange,multiline=false) {
  const wrapper=document.createElement('label');wrapper.textContent=label;
  const input=document.createElement(multiline?'textarea':'input');input.value=value;input.addEventListener('input',()=>{onChange(input.value);changed();});wrapper.append(input);parent.append(wrapper);return input;
}
function button(parent,label,action,cls='') { const b=document.createElement('button');b.type='button';b.textContent=label;b.className=cls;b.addEventListener('click',action);parent.append(b);return b; }
function render() {
  $('projectList').replaceChildren();
  content.projects.forEach((p,index)=>{
    const card=document.createElement('details');card.className='project';
    const title=document.createElement('summary');title.textContent=`${p.icon} ${p.tr.title || 'Yeni proje'}`;card.append(title);
    const meta=document.createElement('div');meta.className='meta';card.append(meta);
    field(meta,'Simge',p.icon,v=>{p.icon=v;title.textContent=`${v} ${p.tr.title}`;});
    const colorLabel=document.createElement('label');colorLabel.textContent='Vurgu rengi';const select=document.createElement('select');
    for(const [value,label] of [['violet','Mor'],['emerald','Yeşil'],['pink','Pembe'],['amber','Amber'],['sky','Mavi']]) {const o=document.createElement('option');o.value=value;o.textContent=label;select.append(o);}select.value=p.accent;select.addEventListener('change',()=>{p.accent=select.value;changed();});colorLabel.append(select);meta.append(colorLabel);
    field(meta,'Proje bağlantısı',p.github,v=>p.github=v).type='url';
    field(meta,'Teknolojiler (virgülle ayır)',p.stack.join(', '),v=>p.stack=v.split(',').map(x=>x.trim()).filter(Boolean));
    const languages=document.createElement('div');languages.className='languages';card.append(languages);
    for(const [lang,label] of [['tr','Türkçe'],['en','English']]) {
      const group=document.createElement('div');const heading=document.createElement('h3');heading.className='language-title';heading.textContent=label;group.append(heading);languages.append(group);
      field(group,'Başlık',p[lang].title,v=>{p[lang].title=v;if(lang==='tr')title.textContent=`${p.icon} ${v}`;});
      field(group,'Alt başlık',p[lang].subtitle,v=>p[lang].subtitle=v);
      field(group,'Açıklama',p[lang].desc,v=>p[lang].desc=v,true);
    }
    const actions=document.createElement('div');actions.className='project-actions';card.append(actions);
    const up=button(actions,'↑ Yukarı taşı',()=>{[content.projects[index-1],content.projects[index]]=[p,content.projects[index-1]];changed();render();});up.disabled=index===0;
    const down=button(actions,'↓ Aşağı taşı',()=>{[content.projects[index+1],content.projects[index]]=[p,content.projects[index+1]];changed();render();});down.disabled=index===content.projects.length-1;
    button(actions,'Projeyi kaldır',()=>{if(confirm(`${p.tr.title || 'Bu proje'} kaldırılsın mı?`)){content.projects.splice(index,1);changed();render();}},'danger');
    $('projectList').append(card);
  });
  $('aboutFields').replaceChildren();
  for(const [lang,label] of [['tr','Türkçe'],['en','English']]) field($('aboutFields'),label,content.about[lang].join('\n\n'),v=>content.about[lang]=v.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean),true);
  $('summary').textContent=`${content.projects.length} proje · ${dirty?'Kaydedilmemiş değişiklikler var':'GitHub’daki güncel içerik'}`;
}
$('loginForm').addEventListener('submit',async e=>{
  e.preventDefault();token=$('token').value.trim();const submit=e.target.querySelector('button');submit.disabled=true;message('İçerikler yükleniyor…');
  try{const file=await api(endpoint+'?ref='+BRANCH);const data=JSON.parse(decode(file.content));validate(data);content=data;sha=file.sha;dirty=false;$('token').value='';$('login').hidden=true;$('editor').hidden=false;$('logout').hidden=false;render();message('Giriş yapıldı. Düzenlemek istediğin projeyi aç.');}
  catch(error){token='';message(error.message);}finally{submit.disabled=false;}
});
$('publish').addEventListener('click',async()=>{
  if(busy||!dirty){if(!dirty)message('Yayımlanacak yeni bir değişiklik yok.');return;}
  try{validate(content);busy=true;$('publish').disabled=true;$('editor').inert=true;$('logout').disabled=true;message('GitHub’a kaydediliyor…');
    const result=await api(endpoint,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:'Portföy içeriklerini panelden güncelle',branch:BRANCH,sha,content:encode(JSON.stringify(content,null,2)+'\n')})});
    sha=result.content.sha;dirty=false;render();message('GitHub’a kaydedildi. Otomatik yayın durumunu aşağıdaki bağlantıdan kontrol edebilirsin.');
  }catch(error){message(error.message);}finally{busy=false;$('publish').disabled=false;$('editor').inert=false;$('logout').disabled=false;}
});
$('add').addEventListener('click',()=>{content.projects.push({id:crypto.randomUUID(),icon:'💡',accent:'violet',github:'https://github.com/ilknrgzll',stack:[],tr:{title:'',subtitle:'',desc:''},en:{title:'',subtitle:'',desc:''}});changed();render();$('projectList').lastElementChild.open=true;$('projectList').lastElementChild.scrollIntoView({behavior:'smooth'});});
function tab(about){$('aboutEditor').hidden=!about;$('projectsEditor').hidden=about;$('aboutTab').setAttribute('aria-pressed',String(about));$('projectsTab').setAttribute('aria-pressed',String(!about));}
$('projectsTab').addEventListener('click',()=>tab(false));$('aboutTab').addEventListener('click',()=>tab(true));
$('logout').addEventListener('click',()=>{if(dirty&&!confirm('Kaydedilmemiş değişikliklerin var. Çıkış yapılsın mı?'))return;token='';content=null;sha='';dirty=false;$('editor').hidden=true;$('login').hidden=false;$('logout').hidden=true;$('projectList').replaceChildren();$('aboutFields').replaceChildren();message('Çıkış yapıldı.');});
window.addEventListener('beforeunload',e=>{if(dirty||busy){e.preventDefault();e.returnValue='';}});
