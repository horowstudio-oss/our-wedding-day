const W=window.WEDDING,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function setText(ids,v){ids.forEach(id=>$("#"+id).textContent=v)}
function init(){
 setText(["coverBride","bride","sigBride","finalBride"],W.bride);setText(["coverGroom","groom","sigGroom","finalGroom"],W.groom);
 setText(["date","finalDate"],W.dateLabel);$("#sealLetters").textContent=W.initials;$("#initials").textContent=W.initials;
 $("#city").textContent=W.city;$("#venueCity").textContent=W.city;$("#intro").textContent=W.intro;$("#welcome").textContent=W.welcome;
 $("#venue").textContent=W.venue;$("#venueText").textContent=W.venueText;$("#dressText").textContent=W.dressText;$("#note").textContent=W.note;$("#closing").textContent=W.closing;
 $("#heroImg").src=W.heroImage;$("#venueImg").src=W.venueImage;$("#dinnerImg").src=W.dinnerImage;$("#audio").src=W.music;
 $("#timeline").innerHTML=W.schedule.map(x=>`<div class="event"><div class="event-name">${x.title}</div><div class="track"><span>${x.icon}</span></div><time>${x.time}</time></div>`).join("");
 $("#palette").innerHTML=W.colors.map(c=>`<i style="background:${c}"></i>`).join("");
 document.title=`${W.bride} & ${W.groom} | Wedding Invitation`;
}
function tick(){let x=Math.max(0,new Date(W.dateISO)-Date.now()),s=Math.floor(x/1000);$("#d").textContent=Math.floor(s/86400);$("#h").textContent=String(Math.floor(s%86400/3600)).padStart(2,"0");$("#m").textContent=String(Math.floor(s%3600/60)).padStart(2,"0");$("#s").textContent=String(s%60).padStart(2,"0")}
init();tick();setInterval(tick,1000);
$("#seal").addEventListener("click",()=>{let i=$("#introScreen"),a=$("#audio");i.classList.add("open");a.play().then(()=>$("#musicBtn").classList.add("playing")).catch(()=>{});setTimeout(()=>{i.classList.add("done");$$(".reveal")[0]?.classList.add("in")},1050)});
$("#musicBtn").addEventListener("click",()=>{let a=$("#audio");if(a.paused){a.play();$("#musicBtn").classList.add("playing")}else{a.pause();$("#musicBtn").classList.remove("playing")}});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.18});$$(".reveal").forEach(x=>io.observe(x));
window.addEventListener("scroll",()=>{$$(".parallax").forEach(img=>{let r=img.parentElement.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)img.style.transform=`scale(1.08) translateY(${r.top*.025}px)`})},{passive:true});