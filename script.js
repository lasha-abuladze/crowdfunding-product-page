`use strict`;

const body = document.getElementsByTagName(`body`)

const header = document.querySelector(`.header`)
const closeOpenMenu = document.querySelector(`.close-open--btn`);
const navigationUl = document.querySelector(`.navigation--ul`);
const mainSection = document.querySelector(`.main-section`);
const rewardsSection = document.querySelector(`.reward-section`);
const rewardOptions = document.querySelector(`.reward-options`);
const rewardsArticleArr = document.querySelectorAll(`.rewards-article`)
const enterPledgeArr = document.querySelectorAll(`.Enter-your-pledge`);
const inStockInputsArr = document.querySelectorAll(`.inStock-inp`);
const sectionThanksFor = document.querySelector(`.section--thanks-for`);
const gotIt = document.querySelector(`.got-it--btn`);

const menuBtn = document.querySelectorAll(`.menu-btn`);
const darckBackround = document.querySelector(`.opened-menu--background`);




const disableScrolling = function() {
    document.body.style.overflow = `hidden`
}

const enableScrolling = function() {
    document.body.style.overflow = `auto`
}

const scrollToTop = function() {
    window.scrollTo(
        {
            left: header.left + window.pageXOffset,
            top: header.top + window.pageYOffset,
            behavior: `smooth`,
        }
    )
}

const reset = function() {
    enterPledgeArr.forEach(el => el.classList.add(`display-none`));
    inStockInputsArr.forEach(el => el.checked = false);
    Array.from(document.querySelectorAll(`.pledge-amount`)).forEach(el => {
        el.value = ``;
    })
}

const changeMenuBtn = function(menuBtn) {
    menuBtn.forEach(el => el.classList.toggle(`display-none`));
    darckBackround.classList.toggle(`display-none`)
}

const thanksFor = function() {
    sectionThanksFor.classList.remove(`display-none`);
    rewardsSection.classList.add(`display-none`);
}


closeOpenMenu.addEventListener(`click`, (e) => {

    if(e.target.classList.contains(`burgermenu`)) {       
        changeMenuBtn(menuBtn);

        disableScrolling(body)
        navigationUl.classList.remove(`close-navigation`);
        navigationUl.classList.add(`open-navigation`);
    }

    if(e.target.classList.contains(`close-btn`)) {
        changeMenuBtn(menuBtn);

        enableScrolling(body)
        navigationUl.classList.remove(`open-navigation`);
        navigationUl.classList.add(`close-navigation`);
    }

})



mainSection.addEventListener(`click`, (e) => {
    if(e.target.classList.contains(`select-reward`)) {
        rewardsSection.classList.remove(`display-none`)
    }

    scrollToTop(header);
})

rewardsSection.addEventListener(`click`, (e) => {
    if(e.target.classList.contains(`close-section--btn`)) {
        rewardsArticleArr.forEach(el => el.classList.remove(`active-border`))
        rewardsSection.classList.add(`display-none`);
        reset();
        
    }
})


rewardOptions.addEventListener(`click`, (e) => {
    if(e.target.classList.contains(`inStock-inp`)) {

        rewardsArticleArr.forEach(el => el.classList.remove(`active-border`))

        enterPledgeArr.forEach(el => el.classList.add(`display-none`));
        const articlePerent = e.target.parentElement.parentElement.parentElement
        const enterPledge = articlePerent.querySelector(`.Enter-your-pledge `);
        
        articlePerent.classList.add(`active-border`)

        Array.from(document.querySelectorAll(`.pledge-amount`)).forEach(el => {
            el.value = ``;
        })

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
                    rewardsArticleArr.forEach(el => el.classList.remove(`active-border`));
                    thanksFor();                    
                    scrollToTop();
                    disableScrolling();
                } else {
                    console.log(`by`)
                }
            } else {
                rewardsArticleArr.forEach(el => el.classList.remove(`active-border`));
                thanksFor();
                scrollToTop();
            }
        })

    }


})

gotIt.addEventListener(`click`, () => {
    rewardsArticleArr.forEach(el => el.classList.remove(`active-border`))
    sectionThanksFor.classList.add(`display-none`);
    reset();
    enableScrolling();
})
