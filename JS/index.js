
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollBar: true
});




const menuBtn = document.querySelector('.menu__btn');



const navigation = document.querySelector('.navigation');


const navCloseBtn = document.querySelector('.navigation__close__btn');
const overlay = document.querySelector('.blur__overlay');



const isActive = 'is__active';


const toggleNav = () => {
    navigation.classList.toggle(isActive);
    overlay.classList.toggle(isActive)
}



menuBtn.addEventListener('click', toggleNav);
navCloseBtn.addEventListener('click', toggleNav);
overlay.addEventListener('click', toggleNav);






