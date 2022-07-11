var myNav = document.getElementById('heder');
window.onscroll = function () { 
    if (document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};