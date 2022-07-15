burger = document.querySelector('.burger')
navul = document.querySelector('ul')
contactbtn = document.querySelector('.btn')
hnavresp = document.querySelector('nav')

burger.addEventListener('click',()=>{
    navul.classList.toggle('v-class-resp');
    contactbtn.classList.toggle('v-class-resp');
    hnavresp.classList.toggle('h-nav-resp-hi');

})