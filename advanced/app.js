
(() => {
'use strict';
const $ = (id) => document.getElementById(id);
const raw = typeof MY_PROFILE === 'object' && MY_PROFILE ? MY_PROFILE : {};
const text = (v, fallback) => typeof v === 'string' && v.trim() ? v.trim() : fallback;
const nickname = text(raw.nickname, 'XR Explorer');
const focus = text(raw.focus,'VR').toUpperCase();
const kinds = {VR:'Virtual Reality',AR:'Augmented Reality','3D':'3D & Digital Twin','디지털 트윈':'3D & Digital Twin'};
$('nickname').textContent = $('footer-name').textContent = nickname;
$('tagline').textContent = text(raw.tagline,'현실과 가상을 연결하는 XR 크리에이터');
$('focus-name').textContent = kinds[focus] || text(raw.focus,'VR');
$('year').textContent = new Date().getFullYear();
document.title = nickname + ' | MY XR UNIVERSE';
document.querySelector('meta[name="description"]').content = nickname + ' — ' + $('tagline').textContent;
document.querySelectorAll('[data-focus]').forEach(card => {
  const active = card.dataset.focus === (focus === '디지털 트윈' ? '3D' : focus);
  card.classList.toggle('active',active);
  if(active){const label=document.createElement('span');label.className='focus-label';label.textContent='MY FOCUS';card.append(label);}
});
const toolsInfo = {Unity:['◇','인터랙티브한 세계 만들기'],Blender:['◉','상상을 입체로 표현하기'],WebXR:['⌘','브라우저에서 만나는 XR'],Python:['>_','데이터와 아이디어 연결하기'],'A-Frame':['△','웹에서 3D 공간 만들기']};
const tech = Array.isArray(raw.tech) && raw.tech.length ? raw.tech : ['Unity','Blender','WebXR'];
tech.slice(0,3).forEach((item)=>{const name=text(item,'새로운 기술');const info=toolsInfo[name]||['✧','앞으로 탐험할 관심 기술'];const el=document.createElement('article');el.className='tech-item';const icon=document.createElement('div');icon.className='tech-icon';icon.textContent=info[0];icon.setAttribute('aria-hidden','true');const copy=document.createElement('div');const h=document.createElement('h3');h.textContent=name;const p=document.createElement('p');p.textContent=info[1];copy.append(h,p);const arrow=document.createElement('span');arrow.className='arrow';arrow.textContent='↗';el.append(icon,copy,arrow);$('tech-list').append(el);});
const p = raw.project && typeof raw.project==='object' ? raw.project : {};
const projects = [
 {category:focus,title:text(p.title,'나만의 가상 학교 전시관'),description:text(p.description,'학생들의 작품을 가상 공간에 전시하는 프로젝트'),status:text(p.status,'기획 중'),note:'직접 작성한 프로젝트 아이디어입니다. 실제 제작 상태에 맞게 설명을 수정하세요.',next:'누가 사용할지 한 명을 정하고, 꼭 필요한 장면 하나를 스케치해 보세요.',art:'vr'},
 {category:'AR',title:'현실 위에 더하는 정비 가이드',description:'카메라로 장비를 비추면 부품의 이름과 점검 순서를 안내하는 AR 경험.',status:'참고 아이디어',note:'수업용 기본 예시입니다. 학생의 완성 작품이 아닙니다.',next:'안내할 장비 하나를 고르고, 화면에 표시할 정보 세 가지를 적어 보세요.',art:'ar'},
 {category:'DIGITAL TWIN',title:'우리 학교의 디지털 트윈',description:'교실과 복도를 작은 3D 공간으로 옮겨, 처음 오는 사람도 길을 찾을 수 있는 학교.',status:'참고 아이디어',note:'수업용 기본 예시입니다. 학생의 완성 작품이 아닙니다.',next:'교실 하나의 구조를 관찰하고, 기본 도형으로 표현해 보세요.',art:'twin'}
];
const arts={vr:'<div class="art-grid"></div><div class="room"></div>',ar:'<div class="scanner"></div>',twin:'<div class="art-grid"></div><div class="city"><i></i><i></i><i></i></div>'};
projects.forEach((project,i)=>{
const card=document.createElement('article');card.className='project';
const art=document.createElement('div');art.className='project-art art-'+project.art;art.setAttribute('aria-hidden','true');art.innerHTML=arts[project.art];const label=document.createElement('span');label.className='art-label';label.textContent=['VIRTUAL GALLERY','AUGMENTED GUIDE','CONNECTED CAMPUS'][i];const no=document.createElement('span');no.className='art-number';no.textContent='CONCEPT / 0'+(i+1);art.append(label,no);
const content=document.createElement('div');content.className='project-body';const meta=document.createElement('div');meta.className='project-meta';const cat=document.createElement('span');cat.textContent=project.category;const badge=document.createElement('span');badge.className='badge';badge.textContent=project.status;meta.append(cat,badge);const h=document.createElement('h3');h.textContent=project.title;const desc=document.createElement('p');desc.textContent=project.description;const button=document.createElement('button');button.type='button';button.textContent='아이디어 살펴보기';button.setAttribute('aria-label',project.title+' 상세 보기');const arrow=document.createElement('span');arrow.textContent='↗';button.append(arrow);button.addEventListener('click',()=>{ $('dialog-meta').textContent=project.category+' / '+project.status;$('dialog-title').textContent=project.title;$('dialog-description').textContent=project.description;$('dialog-next').textContent=project.next;$('dialog-note').textContent=project.note;$('project-dialog').showModal(); });content.append(meta,h,desc,button);card.append(art,content);$('project-list').append(card);
});
// 심화: 실제 수행한 뒤에만 label과 description을 성장 기록으로 수정하세요.
const journey = [
 {label:'01 / PLAN',title:'나의 첫 저장소',description:'아이디어와 README를 저장할 공간 만들기.'},
 {label:'02 / PLAN',title:'의미 있는 첫 Commit',description:'무엇을 바꿨는지 한 문장으로 남기기.'},
 {label:'03 / PLAN',title:'함께 만드는 경험',description:'팀 저장소에서 Issue와 Pull Request 경험하기.'},
 {label:'04 / PLAN',title:'세상에 공개하기',description:'GitHub Pages 주소로 나의 세계 공유하기.'}
];
journey.forEach(s=>{const item=document.createElement('article');item.className='step';const n=document.createElement('small');n.textContent=s.label;const h=document.createElement('h3');h.textContent=s.title;const p=document.createElement('p');p.textContent=s.description;item.append(n,h,p);$('journey-list').append(item);});
let toastTimer;
function toast(message){$('toast').textContent=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').textContent='',5000);}
const username=text(raw.githubUsername,'');
const valid = /^(?!.*--)[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username) && username!=='my-github-id';
// 저장소 이름을 바꿨다면 아래 한 곳도 수정하세요. 기본 수업에서는 그대로 둡니다.
const REPOSITORY_NAME = 'my-xr-universe';
document.querySelectorAll('.github-link,.repo-link').forEach(a=>{
 if(valid){a.href='https://github.com/'+encodeURIComponent(username)+(a.classList.contains('repo-link')?'/'+encodeURIComponent(REPOSITORY_NAME):'');a.target='_blank';a.rel='noopener noreferrer';}
 else {a.href='#connect';a.addEventListener('click',(e)=>{e.preventDefault();toast('index.html 맨 위의 ⑥ GitHub 사용자명을 먼저 수정해 주세요.');});}
});
if(!valid) $('github-note').textContent='⑥ GitHub 사용자명을 바꾸면 나의 링크가 연결됩니다.';
const themeClasses=['','theme-violet','theme-sunset'];const themeNames=['시안','바이올렛','선셋'];let themeIndex=0;
try { const saved=Number(localStorage.getItem('xr-theme'));if(Number.isInteger(saved)&&saved>=0&&saved<3)themeIndex=saved;} catch(e){}
function applyTheme(){document.body.classList.remove('theme-violet','theme-sunset');if(themeClasses[themeIndex])document.body.classList.add(themeClasses[themeIndex]);$('theme').setAttribute('aria-label','색상 테마 변경: 현재 '+themeNames[themeIndex]);}
applyTheme();$('theme').addEventListener('click',()=>{themeIndex=(themeIndex+1)%3;applyTheme();try{localStorage.setItem('xr-theme',String(themeIndex));}catch(e){}toast(themeNames[themeIndex]+' 테마로 변경했습니다.');});
$('menu').addEventListener('click',()=>{const open=$('menu').getAttribute('aria-expanded')!=='true';$('menu').setAttribute('aria-expanded',String(open));$('navigation').classList.toggle('open',open);});
$('navigation').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{$('navigation').classList.remove('open');$('menu').setAttribute('aria-expanded','false');}));
const dialog=$('project-dialog');$('close-dialog').addEventListener('click',()=>dialog.close());$('dialog-done').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',(e)=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
})();
