`use strict`;



const closeOpenMenu = document.querySelector(`.close-open--btn`);
const navigationUl = document.querySelector(`.navigation--ul`);
const mainSection = document.querySelector(`.main-section`);
const rewardsSection = document.querySelector(`.reward-section`);
const rewardOptions = document.querySelector(`.reward-options`);
const enterPledgeArr = document.querySelectorAll(`.Enter-your-pledge`);
const inStockInputsArr = document.querySelectorAll(`.inStock-inp`);
const sectionThanksFor = document.querySelector(`.section--thanks-for`);
const gotIt = document.querySelector(`.got-it--btn`);

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



mainSection.addEventListener(`click`, (e) => {
    if(e.target.classList.contains(`select-reward`)) {
        rewardsSection.classList.remove(`display-none`)
    }
})

rewardsSection.addEventListener(`click`, (e) => {
    if(e.target.classList.contains(`close-section--btn`)) {
        rewardsSection.classList.add(`display-none`);
        enterPledgeArr.forEach(el => el.classList.add(`display-none`));
        inStockInputsArr.forEach(el => el.checked = false)
    }
})


rewardOptions.addEventListener(`click`, (e) => {
    if(e.target.classList.contains(`inStock-inp`)) {

        enterPledgeArr.forEach(el => el.classList.add(`display-none`));
        const articlePerent = e.target.parentElement.parentElement.parentElement
        const enterPledge = articlePerent.querySelector(`.Enter-your-pledge `)

        if(enterPledge) {
            enterPledge.classList.remove(`display-none`)
        }

        const continueBtn = enterPledge.querySelector(`.continue-btn`);
        let pledgeAmount = '';
        let minPledge = '';

        if(Array.from(enterPledge.children).some(el => el.classList.contains(`continue-div`))){
            pledgeAmount = enterPledge.querySelector(`.pledge-amount`);
            minPledge = articlePerent.querySelector(`.min-pledge`);
        }

        continueBtn.addEventListener(`click`, () => {

            if(pledgeAmount !== ``) {

                if(pledgeAmount.value >= Number(minPledge.textContent)) {
                    sectionThanksFor.classList.remove(`display-none`);
                    rewardsSection.classList.add(`display-none`)
                    enterPledgeArr.forEach(el => el.classList.add(`display-none`));
                    inStockInputsArr.forEach(el => el.checked = false)
                } else {
                    console.log(`by`)
                }
            } else {
                sectionThanksFor.classList.remove(`display-none`);
                rewardsSection.classList.add(`display-none`)
                enterPledgeArr.forEach(el => el.classList.add(`display-none`));
                inStockInputsArr.forEach(el => el.checked = false)
            }
        })

    }


})

gotIt.addEventListener(`click`, () => {
    sectionThanksFor.classList.add(`display-none`);
})
