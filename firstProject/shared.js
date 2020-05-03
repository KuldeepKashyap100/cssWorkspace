var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var mobileNav = document.querySelector('.mobile-nav');
var toggleButton = document.querySelector('.toggle-button');

selectPlanButtons.forEach(_=>_.addEventListener('click',()=>{
    // backdrop.style.display="block";
    // modal.style.display="block";
    // backdrop.className="open";
    backdrop.classList.add('open');
    modal.classList.add('open');
}));

backdrop.addEventListener('click',()=>{
    mobileNav.classList.remove('open');
    this.closeModal();
});
 
function closeModal(event) {
    backdrop.classList.remove('open');
    if(modal)
    modal.classList.remove('open');
}

toggleButton.addEventListener('click',()=>{
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

