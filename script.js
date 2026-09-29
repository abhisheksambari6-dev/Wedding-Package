const menuBtn=document.getElementById('menuBtn'),menu=document.getElementById('menu'),bar=document.getElementById('progressBar');
menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.16});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min((i%4)*90,270)}ms`;observer.observe(el)});
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=`${h?scrollY/h*100:0}%`},{passive:true});
document.querySelectorAll('.panel').forEach(panel=>{panel.addEventListener('mousemove',e=>{if(innerWidth<900)return;const r=panel.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;panel.style.setProperty('--mx',`${x*10}px`);panel.style.setProperty('--my',`${y*10}px`)})});
