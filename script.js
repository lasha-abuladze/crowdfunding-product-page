`use strict`;



const closeOpenMenu = document.querySelector(`.close-open--btn`);
const navigationUl = document.querySelector(`.navigation--ul`);

const menuBtn = document.querySelectorAll(`.menu-btn`);
const darckBackround = document.querySelector(`.opened-menu--background`);



const changeMenuBtn = function(menuBtn) {
    menuBtn.forEach(el => el.classList.toggle(`display-none`));
    darckBackround.classList.toggle(`display-none`)
}


closeOpenMenu.addEventListener(`click`, (e) => {

    if(e.target.classList.contains(`burgermenu`)) {       
        changeMenuBtn(menuBtn);

        navigationUl.classList.remove(`close-navigation`);
        navigationUl.classList.add(`open-navigation`);
    }

    if(e.target.classList.contains(`close-btn`)) {
        changeMenuBtn(menuBtn);

        navigationUl.classList.remove(`open-navigation`);
        navigationUl.classList.add(`close-navigation`);
    }

})