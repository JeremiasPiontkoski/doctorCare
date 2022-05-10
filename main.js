window.addEventListener("scroll", onScroll);

onScroll();
function onScroll(){
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    ativateMenuAtCurrentSection(home);
    ativateMenuAtCurrentSection(services);
    ativateMenuAtCurrentSection(about);
    ativateMenuAtCurrentSection(contact);
}

function ativateMenuAtCurrentSection(section) { 
    const targeLine = scrollY + innerHeight / 2;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline = targeLine >= sectionTop;

    /* Data infos */
    console.log(`O top da seção chegou ou passou da linha? ${sectionTopReachOrPassedTargetline}`);

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetline = sectionEndsAt <= targeLine;

    /* Data infos */
    console.log(`O fundo da seção passou da linha? ${sectionEndPassedTargetline}`);

    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active');
    if(sectionBoundaries){
        menuElement.classList.add('active');
    }
}

function showNavOnScroll() {
    if(scrollY > 0){   
        navigation.classList.add('scroll');
    }else {
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 500){   
        backToTopButton.classList.add('show');
    }else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .contant
`);