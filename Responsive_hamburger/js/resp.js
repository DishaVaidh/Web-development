burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navlist')
rightNav = document.querySelector('.rightnav')
 
//If hamburger opened then it compress and if compress then it opened

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('visibility-class-resp');//toggle removes the class when click on burger
    navList.classList.toggle('visibility-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})