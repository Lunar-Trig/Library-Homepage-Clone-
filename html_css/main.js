const menuBtn = document.querySelector('.bottom-menu-toggle-btn');
const bottomHeader = document.querySelector('.bottom-header');
const list = document.querySelector('.bottom-nav-links');
const services = document.querySelector('.services');
const servicesLabel = document.querySelector('h2');
const serviceIcon1 = document.getElementById('icon-1');
const serviceIcon2 = document.getElementById('icon-2');
const serviceIcon3 = document.getElementById('icon-3');
const serviceIcon4 = document.getElementById('icon-4');
const serviceIcon5 = document.getElementById('icon-5');
const serviceIcon6 = document.getElementById('icon-6');
const serviceIcon7 = document.getElementById('icon-7');

menuBtn.addEventListener('mouseover', function(){
    menuBtn.style.cursor = 'pointer';
});

menuBtn.addEventListener('click', function(e){
    bottomHeader.classList.toggle("spaceBelow");
    list.classList.toggle("toggle");
    e.preventDefault();
});


class servicesDefualt{
    constructor(serviceIcon1,serviceIcon2,serviceIcon3,serviceIcon4,serviceIcon5,serviceIcon6,serviceIcon7){
        this.serviceIcon1 = serviceIcon1;
        this.serviceIcon2 = serviceIcon2;
        this.serviceIcon3 = serviceIcon3;
        this.serviceIcon4 = serviceIcon4;
        this.serviceIcon5 = serviceIcon5;
        this.serviceIcon6 = serviceIcon6;
        this.serviceIcon7 = serviceIcon7;
    }

    servicesIcon1Defualt(){
        serviceIcon1.style.backgroundColor = '#FF6019';
        services.style.backgroundColor = 'white';
        services.style.borderColor = '#0068b3';
        servicesLabel.textContent = 'Online Library';
        servicesLabel.style.color = '#0068b3';
    }

    servicesIcon2Defualt(){
        serviceIcon2.style.backgroundColor = '#0068b3';
        services.style.backgroundColor = 'white';
        services.style.borderColor = '#0068b3';
        servicesLabel.textContent = 'Online Library';
        servicesLabel.style.color = '#0068b3';
    }

    servicesIcon3Defualt(){
        serviceIcon3.style.backgroundColor = '#3DB309';
        services.style.backgroundColor = 'white';
        services.style.borderColor = '#0068b3';
        servicesLabel.textContent = 'Online Library';
        servicesLabel.style.color = '#0068b3';
    }

    servicesIcon4Defualt(){
        serviceIcon4.style.backgroundColor = '#FFD019';
        services.style.backgroundColor = 'white';
        services.style.borderColor = '#0068b3';
        servicesLabel.textContent = 'Online Library';
        servicesLabel.style.color = '#0068b3';
        servicesLabel.style.position = 'relative';
        servicesLabel.style.left = '1em';
    }

    servicesIcon5Defualt(){
        serviceIcon5.style.backgroundColor = '#785ba7';
        services.style.backgroundColor = 'white';
        services.style.borderColor = '#0068b3';
        servicesLabel.textContent = 'Online Library';
        servicesLabel.style.color = '#0068b3';
    }

    servicesIcon6Defualt(){
        serviceIcon6.style.backgroundColor = '#09B39F';
        services.style.backgroundColor = 'white';
        services.style.borderColor = '#0068b3';
        servicesLabel.textContent = 'Online Library';
        servicesLabel.style.color = '#0068b3';
        servicesLabel.style.position = 'relative';
        servicesLabel.style.left = '1em';
    }

    servicesIcon7Defualt(){
        serviceIcon7.style.backgroundColor = '#E6376E';
        services.style.backgroundColor = 'white';
        services.style.borderColor = '#0068b3';
        servicesLabel.textContent = 'Online Library';
        servicesLabel.style.color = '#0068b3';
    }
}

const newServices = new servicesDefualt();

serviceIcon1.addEventListener('mouseover', function(){
    serviceIcon1.style.backgroundColor = 'white';
    services.style.backgroundColor = '#FF6019';
    services.style.borderColor = '#FF6019';
    servicesLabel.textContent = 'Creative Suite';
    servicesLabel.style.color = 'white';
});
serviceIcon2.addEventListener('mouseover', function(){
    serviceIcon2.style.backgroundColor = 'white';
    services.style.backgroundColor = '#0068b3';
    servicesLabel.textContent = 'Digital Suite';
    servicesLabel.style.color = 'white';
});
serviceIcon3.addEventListener('mouseover', function(){
    serviceIcon3.style.backgroundColor = 'white';
    services.style.backgroundColor = '#3DB309';
    services.style.borderColor = '#3DB309';
    servicesLabel.textContent = 'Discovery Suite';
    servicesLabel.style.color = 'white';
});
serviceIcon4.addEventListener('mouseover', function(){
    serviceIcon4.style.backgroundColor = 'white';
    services.style.backgroundColor = '#FFD019';
    services.style.borderColor = '#FFD019';
    servicesLabel.textContent = 'Homework Help Suite';
    servicesLabel.style.color = 'white';
    servicesLabel.style.position = 'relative';
    servicesLabel.style.left = '-0.5em';
});
serviceIcon5.addEventListener('mouseover', function(){
    serviceIcon5.style.backgroundColor = 'white';
    services.style.backgroundColor = '#785ba7';
    services.style.borderColor = '#785ba7';
    servicesLabel.textContent = 'News Suite';
    servicesLabel.style.color = 'white';
});
serviceIcon6.addEventListener('mouseover', function(){
    serviceIcon6.style.backgroundColor = 'white';
    services.style.backgroundColor = '#09B39F';
    services.style.borderColor = '#09B39F';
    servicesLabel.textContent = 'Healthy Living Suite';
    servicesLabel.style.color = 'white';
    servicesLabel.style.position = 'relative';
    servicesLabel.style.left = '-0.5em';
});
serviceIcon7.addEventListener('mouseover', function(){
    serviceIcon7.style.backgroundColor = 'white';
    services.style.backgroundColor = '#E6376E';
    services.style.borderColor = '#E6376E';
    servicesLabel.textContent = 'Senior Suite';
    servicesLabel.style.color = 'white';
});

serviceIcon1.addEventListener('mouseout', newServices.servicesIcon1Defualt);
serviceIcon2.addEventListener('mouseout', newServices.servicesIcon2Defualt);
serviceIcon3.addEventListener('mouseout', newServices.servicesIcon3Defualt);
serviceIcon4.addEventListener('mouseout', newServices.servicesIcon4Defualt);
serviceIcon5.addEventListener('mouseout', newServices.servicesIcon5Defualt);
serviceIcon6.addEventListener('mouseout', newServices.servicesIcon6Defualt);
serviceIcon7.addEventListener('mouseout', newServices.servicesIcon7Defualt);

