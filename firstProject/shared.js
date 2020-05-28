var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var mobileNav = document.querySelector('.mobile-nav');
var toggleButton = document.querySelector('.toggle-button');
var ctaButton = document.querySelector('.main-nav__item--cta');

selectPlanButtons.forEach(_=>_.addEventListener('click',()=>{
    // backdrop.style.display="block";
    // modal.style.display="block";
    // backdrop.className="open";
    backdrop.style.display = "block";
    setTimeout(()=>backdrop.classList.add('open'),10);
    modal.classList.add('open');
}));

backdrop.addEventListener('click',()=>{
    mobileNav.classList.remove('open');
    this.closeModal();
});
 
function closeModal(event) {
    if(modal)
    modal.classList.remove('open');
    backdrop.classList.remove('open')
    setTimeout(()=> backdrop.style.display = "none",200);
}

toggleButton.addEventListener('click',()=>{
    mobileNav.classList.add('open');
    backdrop.style.display = "display";
    setTimeout(()=>backdrop.classList.add('open'),10);
});

ctaButton.addEventListener('animationstart',event =>{
    console.log('Animation Started', event);
});

ctaButton.addEventListener('animationend',event =>{
    console.log('Animation end', event);
});

ctaButton.addEventListener('animationiteration',event =>{
    console.log('Animation iteration', event);
});