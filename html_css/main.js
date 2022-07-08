const menuBtn = document.getElementById('nav-ul-replace-img');
const list = document.querySelector('ul');
const services = document.querySelector('.services');
const servicesLabel = document.querySelector('h2');
const serviceIcon1 = document.querySelector('.fas fa-paint-brush');
const serviceIcon2 = document.querySelector('.fas fa-desktop');
const serviceIcon3 = document.querySelector('.fas fa-globe-americas');
const serviceIcon4 = document.querySelector('.fas fa-pencil-alt');
const serviceIcon5 = document.querySelector('.fas fa-newspaper');
const serviceIcon6 = document.querySelector('.fas fa-heart');
const serviceIcon7 = document.querySelector('.fas fa-glasses');


menuBtn.addEventListener('mouseover', function(){
    menuBtn.style.cursor = 'pointer';
});

menuBtn.addEventListener('click', function(e){
    menuBtn.classList.toggle("active");
    list.classList.toggle("active");
    e.preventDefault();
});

