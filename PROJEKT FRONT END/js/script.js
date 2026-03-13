document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function (){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})
// Przy kliknieciu w mobile hamburger otworzy sie menu ktore domyslnie ma display:none

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function (){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})