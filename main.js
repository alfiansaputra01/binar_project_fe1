// show hide faq answer

const faq = document.querySelectorAll('.faqs');

faq.forEach(faqs => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('open'); 

        //change icon
        const icon = faqs.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})


//show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.dislay = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.dislay = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);