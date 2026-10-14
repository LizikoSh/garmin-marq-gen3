'use strict';
// Офіційні анонси: Garmin, 13 жовтня 2026. Це демонстраційний сайт, не каса продажу.
const GARMIN_PRESS = 'https://www.garmin.com/en-US/newsroom/press-release/wearables-health/meet-the-third-generation-marq-collection-from-garmin-premium-tool-watches-designed-for-lifes-most-ambitious-pursuits/';
const GARMIN_COLLECTION = 'https://www.garmin.com/en-US/c/sports-fitness/luxury-smartwatches/';
const REQUIREMENTS = 'https://www.garmin.com/en-XD/connectivity/smartwatches/marq-gen-3/feature-requirements/';
// Фото всіх шести моделей з папки assets у тому самому репозиторії.
// Зверніть увагу на регістр літер: GitHub Pages розрізняє великі й малі букви.
const imageFiles = {
  adventurer: 'adventurer-Photoroom.png',
  athlete: 'athlete-Photoroom.png',
  aviator: 'aviator-Photoroom.png',
  commander: 'commander-Photoroom.png',
  diver: 'diver-Photoroom.png',
  golfer: 'golf-Photoroom.png',
};
const productImage = model => `assets/${imageFiles[model.id]}`;
// Окремі іміджеві банери в порядку слайдів: Adventurer, Athlete,
// Aviator, Commander, Diver, Golfer. PNG карток та модальних вікон не змінюємо.
const bannerImageFiles = [
  'adventurer-slider.webp',
  'athlete-slider.webp',
  'aviator-slider.webp',
  'commander-slider.webp',
  'diver-slider.webp',
  'golfer-slider.webp'
];
const bannerImage = slideIndex => `assets/${bannerImageFiles[slideIndex]}`;
const models = [
  {id:'adventurer', name:'Adventurer', subtitle:'Для відкриттів і нових маршрутів', series:'ЕКСПЕДИЦІЇ', code:'010-04549-00', glow:'#6889ad35', intro:'Преміальний інструмент для тих, хто завжди шукає наступний маршрут: від міських подорожей до складних гірських стежок.', style:'Повнозерниста італійська шкіра, керамічний безель з компасними позначками на 360°.', features:['Багатошарова картографія й навігація','Компасні позначки на безелі','ClimbPro: підйоми на маршруті без обов’язкового попереднього планування','Герметичні кнопки й преміальні матеріали'], audience:'Мандрівникам, дослідникам, шанувальникам outdoor', price:'$2 700'},
  {id:'athlete', name:'Athlete', subtitle:'Для нових спортивних вершин', series:'СПОРТ', code:'010-04549-10', glow:'#5e90ba39', intro:'Спортивний характер MARQ: інструменти для тренувань, витривалості, аналізу прогресу та підготовки до наступного старту.', style:'Силіконовий ремінець, керамічний безель із позначенням VO₂ max.', features:['Поглиблені показники витривалості','Running Economy: ефективність бігу','Аналітика тренувань та відновлення','Спортивний силіконовий ремінець'], audience:'Бігунам, спортсменам на витривалість і мультиспортсменам', price:'$2 500'},
  {id:'aviator', name:'Aviator', subtitle:'Для життя над горизонтом', series:'АВІАЦІЯ', code:'010-04549-20', glow:'#7f93af3c', intro:'Поєднання класичної годинникової естетики з інструментами, які дійсно потрібні пілоту в польоті.', style:'Ремінець із м’якої телячої шкіри, полірований чорний керамічний безель з UTC-позначками.', features:['Динамічні карти польотів','Окрема стрілка/індикація UTC','Авіаційні погодні дані','Профільні авіаційні інструменти'], audience:'Пілотам, авіаторам і тим, хто часто літає', price:'$3 100'},
  {id:'commander', name:'Commander', subtitle:'Для максимальної готовності', series:'ТАКТИКА', code:'010-04549-30', glow:'#72899735', intro:'Тактичні можливості у витонченому корпусі MARQ: для роботи, де ситуаційна обізнаність має значення.', style:'Камуфляжний жакардовий ремінець, рифлені кнопки, матовий керамічний безель із UTC-позначками.', features:['Режим сумісності з приладами нічного бачення','Stealth Mode: прихований режим','Балістичний розрахунок Applied Ballistics','Інші спеціалізовані тактичні інструменти'], audience:'Користувачам, яким потрібні спеціалізовані тактичні інструменти', price:'$3 100'},
  {id:'diver', name:'Diver', subtitle:'Для нових глибин і відкриттів', series:'ДАЙВІНГ', code:'010-04549-40', glow:'#427cb04f', intro:'Новий представник сімейства MARQ. Створений для води — від дайвінгу й снорклінгу до керування човном.', style:'Ремінець з регулюванням на 15 мм, тактильні герметичні кнопки, морський дизайн.', features:['Занурення до 40 м: scuba, apnea, snorkel','Профілі для підводної активності','Керування автопілотом сумісного судна','Тактичні герметичні кнопки, регулювання ремінця'], audience:'Дайверам, яхтсменам, прихильникам морських пригод', price:'$3 100'},
  {id:'golfer', name:'Golfer', subtitle:'Для кожного точного удару', series:'ГОЛЬФ', code:'010-04549-50', glow:'#648da541', intro:'Витончена версія MARQ із професійним набором інструментів для читання поля й ухвалення рішень перед ударом.', style:'Жакардовий ремінець, керамічний безель з індикатором 18 лунок.', features:['Понад 43 000 попередньо завантажених полів','Virtual Caddie: персональні рекомендації','Контури грінів (залежно від передплати)','Безель з індикатором 18 лунок'], audience:'Гольфістам, які цінують аналітику та естетику', price:'$2 800'}
];
const topics = {
  story:{title:'Філософія MARQ',kicker:'НЕ ПРОСТО ГОДИННИК',html:`<p>MARQ (Gen 3) — третє покоління преміальних годинників-інструментів Garmin, де кожен дизайн відповідає конкретній пристрасті: дослідженням, спорту, авіації, тактиці, дайвінгу або гольфу.</p><p>Колекція представлена 13 жовтня 2026 року. Усі шість версій отримали модернізовану конструкцію, більший AMOLED-екран і нові можливості зв’язку та навігації.</p><h3>Технології, створені під ваш ритм</h3><ul><li>Титан Grade 5, керамічні вставки безеля й сапфірове скло.</li><li>1,4″ безрамковий AMOLED-дисплей і до 18 днів роботи в режимі смартгодинника.</li><li>Карти світу, пошук адрес, голосові команди, динамік і мікрофон.</li><li>Вбудований LED-ліхтарик та зв’язок inReach із регіональними обмеженнями.</li></ul><p><a href="${GARMIN_PRESS}" target="_blank" rel="noopener noreferrer">Офіційний анонс Garmin ↗</a></p>`},
  innovations:{title:'Можливості нового покоління',kicker:'MARQ (GEN 3)',html:`<p>Функціональна основа всіх шести моделей поєднує навігацію, тренувальні та оздоровчі інструменти з преміальним дизайном. Головні нововведення третього покоління:</p><ul><li><strong>1,4″ AMOLED:</strong> найбільший дисплей в історії MARQ.</li><li><strong>Навігація:</strong> попередньо завантажені карти світу TopoActive та пошук адрес прямо на годиннику.</li><li><strong>inReach:</strong> LTE/супутникові повідомлення, передавання місцеперебування та SOS за умови активного плану та відповідного покриття.</li><li><strong>Звук і світло:</strong> вбудовані мікрофон, динамік та LED-ліхтарик.</li><li><strong>Здоров’я:</strong> сон, стрес, HRV, Pulse Ox, ранкові та вечірні звіти; ECG — лише там, де функція доступна й дозволена.</li><li><strong>Підводні функції:</strong> можливість занурень до 40 метрів у всіх версіях Gen 3.</li></ul><p class="muted-note">Функції бездротового зв’язку не слід вважати гарантовано доступними в Україні без перевірки офіційних вимог.</p>`},
  design:{title:'Матеріали, що мають характер',kicker:'ДИЗАЙН MARQ',html:`<p>Кожна модель MARQ (Gen 3) виготовлена з титану Grade 5 та оснащена сапфіровим склом і керамічним безелем із характерною для конкретного призначення розміткою.</p><p>Італійська шкіра Adventurer, спортивний силікон Athlete, ремінець із телячої шкіри Aviator, камуфляжний жакард Commander, регульований ремінець Diver та жакардовий Golfer створюють шість різних характерів.</p><p>Циферблати теж натхненні годинниковою традицією: Garmin згадує World Timer, Panda та Flieger.</p>`},
  navigation:{title:'Коли світ у вас під рукою',kicker:'НАВІГАЦІЯ',html:`<p>У MARQ (Gen 3) попередньо завантажені карти TopoActive різних регіонів світу, а новий адресний пошук дозволяє прокладати маршрут до конкретної адреси прямо з годинника.</p><p>Для різних спеціалізацій передбачені окремі інструменти: ClimbPro у Adventurer, динамічна авіаційна картографія в Aviator та функції для роботи на воді в Diver.</p>`},
  connection:{title:'Зв’язок за межами звичного',kicker:'INREACH / LTE',html:`<p>Нове покоління MARQ оснащене інтегрованою технологією inReach. З активною підпискою та за наявності покриття можуть бути доступні LTE-дзвінки, обмін повідомленнями, передавання місцеперебування, супутникові повідомлення та SOS через центр Garmin Response.</p><p><strong>Важливо:</strong> супутникові функції та SOS на годиннику мають істотні обмеження у порівнянні з іншими пристроями inReach. Сервіси, покриття та плани залежать від країни. Функції не замінюють окремого плану безпеки.</p><p><a href="${REQUIREMENTS}" target="_blank" rel="noopener noreferrer">Офіційні вимоги, обмеження і доступність ↗</a></p>`},
  restrictions:{title:'Важливі застереження',kicker:'УМОВИ ВИКОРИСТАННЯ',html:`<ul><li>inReach, LTE та супутникові функції потребують відповідного тарифу і підтримуваного покриття; доступність за регіонами різна.</li><li>Garmin ECG App доступний лише в країнах, де він підтримується й дозволений регуляторно. Це не засіб для самостійного встановлення діагнозу.</li><li>«До 18 днів» — оцінка виробника для режиму смартгодинника; фактичний час роботи залежить від використання.</li><li>Глибина 40 м стосується підтримуваних сценаріїв занурення; дотримуйтесь інструкцій виробника щодо дайвінгу.</li><li>Ціни в USD — рекомендовані стартові ціни США; не є українськими цінами чи пропозицією до продажу.</li></ul><p><a href="${REQUIREMENTS}" target="_blank" rel="noopener noreferrer">Перевірити доступність функцій ↗</a></p>`},
  sources:{title:'Перевірені джерела',kicker:'ГАРМІН / 13.10.2026',html:`<p>Тексти цього демонстраційного сайту адаптовано українською за офіційними матеріалами Garmin про MARQ третього покоління.</p><ul><li><a href="${GARMIN_PRESS}" target="_blank" rel="noopener noreferrer">Garmin Newsroom — анонс шести моделей (13 жовтня 2026) ↗</a></li><li><a href="https://www.garmin.com/en-US/blog/outdoor/whats-new-with-marq-gen-3/" target="_blank" rel="noopener noreferrer">Garmin Blog — What's new with MARQ (Gen 3)? ↗</a></li><li><a href="${GARMIN_COLLECTION}" target="_blank" rel="noopener noreferrer">Garmin — офіційна сторінка luxury-smartwatches ↗</a></li><li><a href="${REQUIREMENTS}" target="_blank" rel="noopener noreferrer">Garmin — inReach feature requirements ↗</a></li></ul><p class="muted-note">Цей сайт не є представництвом Garmin і не містить актуальних даних про українську наявність товару.</p>`}
};
const common = [['Дисплей','1,4″ безрамковий AMOLED'],['Корпус','Титан Grade 5, керамічний безель'],['Захист екрана','Сапфірове скло'],['Автономність','До 18 днів у режимі смартгодинника'],['Навігація','Карти TopoActive світу, пошук адрес'],['Оснащення','Мікрофон, динамік, LED-ліхтарик'],['Зв’язок','inReach / LTE / супутник*'],['Дайвінг','Підтримка занурень до 40 м']];
const $ = (selector,root=document)=>root.querySelector(selector);
const grid = $('#product-grid');
const dialog = $('#info-dialog');
const modalTitle = $('#modal-title');
const modalKicker = $('#modal-kicker');
const modalBody = $('#modal-body');
const storageKey = 'marq-gen3-showcase-v1';
let preferences = {favorites:[],compare:[]};
try { const saved = JSON.parse(localStorage.getItem(storageKey)||'null'); if(saved && Array.isArray(saved.favorites) && Array.isArray(saved.compare)) preferences=saved; } catch(_){}
preferences.favorites=preferences.favorites.filter(id=>models.some(m=>m.id===id));
preferences.compare=preferences.compare.filter(id=>models.some(m=>m.id===id));
const icons = id => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;
const list = items => `<ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul>`;
const byId = id => models.find(m=>m.id===id);
function save(){try{localStorage.setItem(storageKey,JSON.stringify(preferences));}catch(_){} updateCounts();}
function updateCounts(){[['favorite-count','favorites'],['compare-count','compare']].forEach(([element,key])=>{const el=$('#'+element);el.textContent=preferences[key].length;el.hidden=!preferences[key].length;});document.querySelectorAll('[data-favorite]').forEach(b=>{const active=preferences.favorites.includes(b.dataset.favorite);b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));b.setAttribute('aria-label',(active?'Вилучити з обраного: ':'Додати в обране: ')+byId(b.dataset.favorite).name);});document.querySelectorAll('[data-compare-toggle]').forEach(b=>{const active=preferences.compare.includes(b.dataset.compareToggle);b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));b.title=active?'Вилучити з порівняння':'Додати до порівняння';});}
function renderCards(){grid.innerHTML=models.map(m=>`<article class="product-card" id="model-${m.id}" style="--watch-glow:${m.glow}"><button class="card-open" type="button" data-product="${m.id}" aria-label="Відкрити деталі MARQ ${m.name}"><div class="card-art"><span class="card-typeline">MARQ · GEN 3</span><img src="${productImage(m)}" alt="Garmin MARQ ${m.name} (Gen 3)" loading="lazy"></div><div class="card-info"><h3>${m.name}</h3><small>${m.subtitle}</small><span class="card-bottom">Детальніше ${icons('i-arrow')}</span></div></button><button class="card-compare" type="button" data-compare-toggle="${m.id}" aria-label="Додати MARQ ${m.name} до порівняння" title="Додати до порівняння">＋</button><button class="card-fav" type="button" data-favorite="${m.id}" aria-label="Додати MARQ ${m.name} в обране" title="Обране">${icons('i-heart')}</button></article>`).join('');updateCounts();}
// Слайдер із шести моделей: окремі WebP-банери з папки assets/.
const heroSlides = [
  {id:'adventurer',name:'За межами звичного',first:'За межами',accent:'звичного.',category:'ЕКСПЕДИЦІЇ / MARQ GEN 3',lead:'MARQ Adventurer: для тих, хто обирає нові маршрути та відкриття.'},
  {id:'athlete',name:'Рух до більшого',first:'Рух до',accent:'більшого.',category:'СПОРТ / MARQ GEN 3',lead:'MARQ Athlete: кожен старт починається з амбіцій, підкріплених даними.'},
  {id:'aviator',name:'Вище горизонту',first:'Вище',accent:'горизонту.',category:'АВІАЦІЯ / MARQ GEN 3',lead:'MARQ Aviator: авіаційні інструменти, точність і характер у кожній деталі.'},
  {id:'commander',name:'Готовність діяти',first:'Готовність',accent:'діяти.',category:'ТАКТИКА / MARQ GEN 3',lead:'MARQ Commander: спеціалізовані інструменти для складних завдань.'},
  {id:'diver',name:'Глибше за очікування',first:'Глибше за',accent:'очікування.',category:'ДАЙВІНГ / MARQ GEN 3',lead:'MARQ Diver: технології, що допомагають досліджувати підводний світ.'},
  {id:'golfer',name:'Точність кожного рішення',first:'Точність кожного',accent:'рішення.',category:'ГОЛЬФ / MARQ GEN 3',lead:'MARQ Golfer: коли кожен удар — продумане рішення.'}
];
let heroIndex=0,heroTimer=null,heroPaused=false,heroRequest=0;
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
function showHeroSlide(index){
  heroIndex=(index+heroSlides.length)%heroSlides.length;
  const currentIndex=heroIndex, requestId=++heroRequest;
  const slide=heroSlides[currentIndex], model=byId(slide.id), stage=$('#hero-stage'), img=$('#hero-watch');
  const requestedSrc=bannerImage(currentIndex);
  $('.hero').classList.add('slide-switching');
  const update=(loadedSrc)=>{
    // Застаріле асинхронне завантаження не повинно замінити новий слайд.
    if(requestId!==heroRequest)return;
    $('#hero-title').innerHTML=`${slide.first}<br><em>${slide.accent}</em>`;
    $('.hero .eyebrow span').textContent=slide.category;
    $('#hero-lead').textContent=slide.lead;
    img.classList.toggle('hero-watch-fallback',loadedSrc!==requestedSrc);
    img.alt=`Іміджевий банер колекції Garmin MARQ Gen 3, слайд ${currentIndex+1}`;
    img.onerror=()=>{
      img.onerror=null;
      img.classList.add('hero-watch-fallback');
      img.src=productImage(model);
    };
    img.src=loadedSrc;
    stage.setAttribute('aria-label',`Garmin MARQ ${model.name} Gen 3`);
    $('#stage-caption').innerHTML=`MARQ ${model.name.toUpperCase()} <span>·</span> GEN 3`;
    $('#slide-counter').textContent=`${String(currentIndex+1).padStart(2,'0')} / 06`;
    document.querySelectorAll('.slider-dot').forEach((dot,i)=>{
      dot.classList.toggle('is-active',i===currentIndex);
      if(i===currentIndex)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current');
    });
    $('.hero').classList.remove('slide-switching');
  };
  const preloaded=new Image();
  preloaded.onload=()=>update(requestedSrc);
  preloaded.onerror=()=>update(productImage(model));
  preloaded.src=requestedSrc;
  if(preloaded.complete&&preloaded.naturalWidth>0)update(requestedSrc);
}
function stopHeroAuto(){if(heroTimer){clearInterval(heroTimer);heroTimer=null;}}
function startHeroAuto(){stopHeroAuto();if(heroPaused||reduceMotion.matches||document.hidden||dialog.open)return;heroTimer=setInterval(()=>showHeroSlide(heroIndex+1),6500);}
const hero=$('.hero');
hero.addEventListener('mouseenter',stopHeroAuto);hero.addEventListener('mouseleave',startHeroAuto);
hero.addEventListener('focusin',stopHeroAuto);hero.addEventListener('focusout',e=>{if(!hero.contains(e.relatedTarget))startHeroAuto();});
document.addEventListener('visibilitychange',()=>{document.hidden?stopHeroAuto():startHeroAuto();});
reduceMotion.addEventListener('change',startHeroAuto);
document.querySelectorAll('[data-slide]').forEach(b=>b.addEventListener('click',()=>{showHeroSlide(Number(b.dataset.slide));startHeroAuto();}));
document.querySelectorAll('[data-slide-direction]').forEach(b=>b.addEventListener('click',()=>{showHeroSlide(heroIndex+Number(b.dataset.slideDirection));startHeroAuto();}));
$('#slider-toggle').addEventListener('click',e=>{
  heroPaused=!heroPaused;e.currentTarget.setAttribute('aria-pressed',String(heroPaused));
  e.currentTarget.setAttribute('aria-label',heroPaused?'Увімкнути автоматичне гортання':'Зупинити автоматичне гортання');
  e.currentTarget.textContent=heroPaused?'▶':'Ⅱ';heroPaused?stopHeroAuto():startHeroAuto();
});
showHeroSlide(0);
startHeroAuto();

// Без скролу: весь зміст розбитий на окремі екрани із кнопками «Назад»/«Далі».
let modalPages=[],modalPage=0;
function openModal(title,kicker,pages){
  modalTitle.textContent=title;modalKicker.textContent=kicker;
  modalPages=Array.isArray(pages)?pages:[pages];modalPage=0;
  modalBody.innerHTML=modalPages.map((content,i)=>`<section class="modal-page${i?'':' is-active'}" data-page="${i}" ${i?'hidden':''}>${content}</section>`).join('');
  const pager=$('#modal-pager');pager.hidden=modalPages.length<=1;
  updateModalPager();if(!dialog.open)dialog.showModal();stopHeroAuto();
}
function updateModalPager(){
  modalBody.querySelectorAll('.modal-page').forEach((page,i)=>{page.hidden=i!==modalPage;page.classList.toggle('is-active',i===modalPage);});
  $('#modal-page-info').textContent=`${modalPage+1} / ${modalPages.length}`;
  const prev=$('[data-action="modal-prev"]'),next=$('[data-action="modal-next"]');
  prev.disabled=modalPage===0;next.disabled=modalPage===modalPages.length-1;
}
function flipModal(delta){if(modalPage+delta<0||modalPage+delta>=modalPages.length)return;modalPage+=delta;updateModalPager();}
function closeModal(){if(dialog.open)dialog.close();startHeroAuto();}
function productModal(id){
  const m=byId(id);if(!m)return;
  const pages=[
   `<div class="product-modal-top"><div class="modal-art"><img src="${productImage(m)}" alt="Garmin MARQ ${m.name} (Gen 3)"></div><div class="product-intro"><h3>Для тих, хто знає свою стихію</h3><p>${m.intro}</p><div class="tag-list"><span class="tag">${m.code}</span><span class="tag">До 18 днів</span><span class="tag">AMOLED 1,4″</span></div><p><strong>Кому підійде:</strong> ${m.audience}.</p><p><strong>MSRP США:</strong> ${m.price}</p></div></div>`,
   `<h3>Що вирізняє MARQ ${m.name}</h3><div class="feature-list">${m.features.map((f,i)=>`<div class="feature-list-item"><b>0${i+1}</b><span>${f}</span></div>`).join('')}</div><h3>Дизайн моделі</h3><p>${m.style}</p>`,
   `<h3>Характеристики колекції</h3><div class="spec-grid">${common.map(([k,v])=>`<div><span>${k}</span><strong>${v}</strong></div>`).join('')}</div><p class="muted-note">* Функції зв’язку залежать від регіону, покриття та підписки. <a href="${GARMIN_COLLECTION}" target="_blank" rel="noopener noreferrer">Джерело: Garmin.com ↗</a></p>`
  ];
  openModal(`MARQ ${m.name}`,`GEN 3 / ${m.series}`,pages);
}
// Тематичні довгі матеріали дробляться на екрани без внутрішньої прокрутки.
function topicPages(html){
  const root=document.createElement('div');root.innerHTML=html;
  const blocks=[];
  [...root.children].forEach(el=>{
    if(el.tagName==='UL') [...el.children].forEach(li=>blocks.push(`<div class="topic-point">${li.innerHTML}</div>`));
    else blocks.push(el.outerHTML);
  });
  const isMobile=window.innerWidth<=650, maxChars=isMobile?300:650, maxBlocks=isMobile?3:6;
  const pages=[];let chunk=[],chars=0;
  for(const block of blocks){
    const plain=block.replace(/<[^>]*>/g,'').length;
    if(chunk.length&&(chars+plain>maxChars||chunk.length>=maxBlocks)){pages.push(chunk.join(''));chunk=[];chars=0;}
    chunk.push(block);chars+=plain;
  }
  if(chunk.length)pages.push(chunk.join(''));
  return pages.length?pages:['<p>Інформацію буде додано.</p>'];
}
function topicModal(id){const t=topics[id];if(t)openModal(t.title,t.kicker,topicPages(t.html));}
function compareModal(){
  const selected=preferences.compare.map(byId).filter(Boolean),ms=selected.length?selected:models;
  const count=window.innerWidth<=650?1:3;
  const pages=[];
  for(let i=0;i<ms.length;i+=count){
    const group=ms.slice(i,i+count);
    pages.push(`<p class="compare-intro">${selected.length?'Обрані моделі':'Уся колекція'} · Моделі ${i+1}–${i+group.length} із ${ms.length}</p><div class="comparison-cards">${group.map(m=>`<article class="comparison-card"><img src="${productImage(m)}" alt="MARQ ${m.name}"><h3>MARQ ${m.name}</h3><dl><div><dt>Напрям</dt><dd>${m.series}</dd></div><div><dt>Ключові функції</dt><dd>${m.features.slice(0,2).join(' · ')}</dd></div><div><dt>Стиль</dt><dd>${m.style}</dd></div><div><dt>Стартова ціна США</dt><dd>${m.price}</dd></div></dl></article>`).join('')}</div>`);
  }
  openModal('Порівняння моделей',selected.length?`${selected.length} ВИБРАНИХ МОДЕЛЕЙ`:'ШІСТЬ МОДЕЛЕЙ',pages);
}
function resultMarkup(m){return `<button type="button" class="result-item" data-product="${m.id}"><img src="${productImage(m)}" alt="MARQ ${m.name}"><span><strong>${m.name}</strong><small>${m.series.toLowerCase()}</small></span></button>`;}
function searchModal(){
  openModal('Знайти свій MARQ','ПОШУК ЗА НАЗВОЮ АБО ФУНКЦІЄЮ',`<label class="stack" for="model-search">Назва, сфера застосування або функція</label><input class="search-field" id="model-search" type="search" autocomplete="off" placeholder="Наприклад: дайвінг, біг, навігація..."><div class="search-results" id="search-results">${models.map(resultMarkup).join('')}</div>`);
  const input=$('#model-search');input.focus();input.addEventListener('input',()=>{
    const q=input.value.trim().toLocaleLowerCase('uk');
    const matches=models.filter(m=>[m.name,m.subtitle,m.series,m.intro,m.audience,m.style,...m.features].join(' ').toLocaleLowerCase('uk').includes(q));
    $('#search-results').innerHTML=matches.length?matches.map(resultMarkup).join(''):'<div class="modal-empty">Нічого не знайдено.</div>';
  });
}
function favoritesModal(){const ms=preferences.favorites.map(byId).filter(Boolean);openModal('Ваше обране','ЗБЕРЕЖЕНІ МОДЕЛІ',ms.length?`<p class="muted-note">Збережено в цьому браузері.</p><div class="search-results">${ms.map(resultMarkup).join('')}</div>`:'<div class="modal-empty">Поки порожньо. Натисніть ♡ на картці моделі.</div>');}
let toastTimeout;
function toast(text){const el=$('#toast');el.textContent=text;el.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('visible'),2300);}
function toggle(key,id){const set=preferences[key];const i=set.indexOf(id);if(i>=0){set.splice(i,1);toast('Вилучено: MARQ '+byId(id).name);}else{if(key==='compare' && set.length>=4){toast('Для порівняння можна вибрати до 4 моделей');return;}set.push(id);toast((key==='favorites'?'В обраному: ':'Додано до порівняння: ')+'MARQ '+byId(id).name);}save();}
renderCards();
document.addEventListener('click',event=>{const b=event.target.closest('button');if(!b)return;if(b.dataset.action==='close'){closeModal();return;}if(b.dataset.action==='modal-prev'){flipModal(-1);return;}if(b.dataset.action==='modal-next'){flipModal(1);return;}if(b.dataset.action==='hero-details'){productModal(heroSlides[heroIndex].id);return;}if(b.dataset.action==='compare'){compareModal();return;}if(b.dataset.action==='favorites'){favoritesModal();return;}if(b.dataset.action==='search'){searchModal();return;}if(b.dataset.action==='clear-compare'){preferences.compare=[];save();compareModal();return;}if(b.dataset.favorite){toggle('favorites',b.dataset.favorite);return;}if(b.dataset.compareToggle){toggle('compare',b.dataset.compareToggle);return;}if(b.dataset.product){productModal(b.dataset.product);return;}if(b.dataset.topic){topicModal(b.dataset.topic);return;}});
dialog.addEventListener('click',e=>{if(e.target===dialog)closeModal();});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();searchModal();}if(dialog.open&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){if(e.key==='ArrowRight')flipModal(1);if(e.key==='ArrowLeft')flipModal(-1);}});
const navLinks=document.querySelectorAll('.main-nav a');navLinks.forEach(a=>a.addEventListener('click',()=>{navLinks.forEach(n=>n.classList.remove('is-current'));a.classList.add('is-current');}));
// Escape закриває модальне вікно навіть тоді, коли фокус у пошуковому полі.
document.addEventListener('keydown',e=>{if(e.key==='Escape' && dialog.open){e.preventDefault();closeModal();}},true);
