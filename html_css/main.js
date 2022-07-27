const menuBtn = document.querySelector('.bottom-menu-toggle-btn');
const bottomHeader = document.querySelector('.bottom-header');
const list = document.querySelector('.bottom-nav-links');
const icons = document.querySelectorAll('.service-icons .fas');
const services = document.querySelector('.services');
const servicesLabel = document.querySelector('.services-label');


menuBtn.addEventListener('mouseover', function(){
    menuBtn.style.cursor = 'pointer';
});

menuBtn.addEventListener('click', function(e){
    bottomHeader.classList.toggle("spaceBelow");
    list.classList.toggle("toggle");
    e.preventDefault();
});

icons.forEach(color => {
    color.addEventListener('mouseover', function () {
        var bg = color.style.backgroundColor;
        services.style.backgroundColor = bg;
        services.style.borderColor = bg;
        color.style.color = bg;
        color.style.backgroundColor = 'white';
        servicesLabel.style.color = 'white';
    });

    color.addEventListener('mouseout', function (){
        var bgC = color.style.color;
        color.style.color = 'white';
        color.style.backgroundColor = bgC;
        services.style.backgroundColor = 'white';
        services.style.borderColor = '#0068b3';
        servicesLabel.style.color = '#0068b3';
    });

});


