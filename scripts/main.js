//Controls:
const menuMOB = document.querySelector('.nav--bars ion-icon');
const navMenuMob = document.querySelector('.mobile--aside');
const navMobClose = document.querySelector('.mobile--aside ion-icon');
const slider = document.querySelector('#first-slide');
const radioOne = document.querySelector('#radio1');
const radioTwo = document.querySelector('#radio2');
const radioThree = document.querySelector('#radio3');
const radioFour = document.querySelector('#radio4');
const btnBackGround = document.querySelector('#manual-btn-1');
const btnBackGround2 = document.querySelector('#manual-btn-2');
const btnBackGround3 = document.querySelector('#manual-btn-3');
const BttnEbook = document.querySelector('.download--container a');

let currentSlide = 0;

//Functions:
function IntervalSlider () {
    setInterval( () => {
        switch (currentSlide) {
            case 0:
                slider.style.marginLeft = '0px';
                btnBackGround.style.backgroundColor = '#DCB818';
                btnBackGround2.style.backgroundColor = 'whitesmoke';
                btnBackGround3.style.backgroundColor = 'whitesmoke';
                currentSlide ++;
                break;
            case 1:
                slider.style.marginLeft = '-800px';
                btnBackGround.style.backgroundColor = 'whitesmoke';
                btnBackGround2.style.backgroundColor = '#DCB818';
                btnBackGround3.style.backgroundColor = 'whitesmoke';
                currentSlide ++;
                break;
            case 2:
                slider.style.marginLeft = '-1600px';
                btnBackGround.style.backgroundColor = 'whitesmoke';
                btnBackGround2.style.backgroundColor = 'whitesmoke';
                btnBackGround3.style.backgroundColor = '#DCB818';
                currentSlide ++;
                break;
        }
        if (currentSlide > 2) {
            currentSlide = 0;
        }
    }, 2500);
}
IntervalSlider();

radioOne.addEventListener('click', () => {
    currentSlide = 0;
    if (currentSlide === 0) {
        slider.style.marginLeft = '0px';
        btnBackGround.style.backgroundColor = '#DCB818';
        btnBackGround2.style.backgroundColor = 'whitesmoke';
        btnBackGround3.style.backgroundColor = 'whitesmoke';
    }
    radioOne.classList.add('background--btn');
});
radioTwo.addEventListener('click', () => {
    currentSlide = 1;
    if(currentSlide === 1) {
        slider.style.marginLeft = '-800px';
        btnBackGround.style.backgroundColor = 'whitesmoke';
        btnBackGround2.style.backgroundColor = '#DCB818';
        btnBackGround3.style.backgroundColor = 'whitesmoke';
    }
})
radioThree.addEventListener('click', () => {
    currentSlide = 2;
    if(currentSlide === 2) {
        slider.style.marginLeft = '-1600px';
        btnBackGround.style.backgroundColor = 'whitesmoke';
        btnBackGround2.style.backgroundColor = 'whitesmoke';
        btnBackGround3.style.backgroundColor = '#DCB818';

    }
});

//Opacity Animation - Page Home
const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach( entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('init-hidden-off');
        }
    })  
}, {
    threshold: [0, .5, 1]
});

Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
    observer.observe(element);
});

//Events:

//Disabled button ebook:
BttnEbook.addEventListener('click', (e) => {
    e.preventDefault();
})

//Mobile menu functions:
menuMOB.addEventListener('click', () => {
    navMenuMob.style.right = '0';
    menuMOB.style.display = 'none';
})
navMobClose.addEventListener('click', () => {
    navMenuMob.style.right = '-70vw';
    menuMOB.style.display = 'flex';
})