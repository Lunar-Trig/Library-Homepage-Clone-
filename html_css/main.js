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
    list.style.visibility = 'visible';
    list.style.display = 'block';
    list.style.position = 'relative';
    list.style.fontSize = '1.2em';
    list.style.top = '2.6em';
    list.style.right = '12em';
    list.style.marginBottom = '2em';
    menuBtn.style.position = 'relative';
    menuBtn.style.bottom = '3.63em';
    menuBtn.className = 'fa-solid fa-bars';
    e.preventDefault();

    if(menuBtn.className = 'fa-solid fa-bars'){
        menuBtn.addEventListener('click', function(){
           window.location.reload();
        })
    }

});


::hover{
    
}