const menuButton=document.getElementById('menuButton');
const siteMenu=document.getElementById('siteMenu');
if(menuButton&&siteMenu){menuButton.addEventListener('click',()=>{const open=siteMenu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});siteMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{siteMenu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.innerHTML='<i class="fa-solid fa-bars"></i>'}));}
