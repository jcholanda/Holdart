var menuOpen = document.getElementById("menu-open");
var menuClose = document.getElementById("menu-close");
var menu = document.getElementById("menu");

menuOpen.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);

function openMenu(){
    menu.style.display = "block";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
}

function closeMenu(){
    menu.style.display = "none";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
}
class MobiNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation = "navLinkFade 0.5s ease forwards";
        });
    }

    handleClick() {
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobiNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('#menu-icon');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "fechar_menu.png";
    } else {
        menuMobile.classList.add('open');
        icon.src = "menu_icon.png";
    }
}


