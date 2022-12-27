"use strict";


import {InteractiveWindow} from "./classes/InteractiveWindow.js";
let iWin = new InteractiveWindow();




//Animations to fade the headlines in:
let headlines = document.querySelectorAll("#header-headlines h1");
for(let i = 0 ; i < headlines.length ; i++)
{
    switch(i)
    {
        case 0:
            setTimeout(() => {
                headlines[i].style.transform = "translateX(0)";
                headlines[i].style.opacity = "1";
            }, 100);
            break;
        case 1:
            setTimeout(() => {
                headlines[i].style.transform = "translateX(0)";
                headlines[i].style.opacity = "1";
            }, 100);
            break;
        case 2:
            setTimeout(() => {
                headlines[i].style.transform = "translateX(0)";
                headlines[i].style.opacity = "1";
            }, 100);
            break;
        case 3:
            setTimeout(() => {
                headlines[i].style.transform = "translateX(0)";
                headlines[i].style.opacity = "1";
            }, 100);
            break;
    }
}
//animation for fading in my picture
let picHeader = document.getElementById("header-picture-wrapper");
setTimeout(() => {
    picHeader.style.opacity = "1";
}, 300);
//animation for changing words(BLOG, PORTFOLIO, WEBSITE):
let wordChange = document.getElementById("changing-headline");
setTimeout(() => {
    wordChange.style.opacity = "1";
}, 700);
setTimeout(() => {
    wordChange.innerText = "BLOG";
}, 1500);
setTimeout(() => {
    wordChange.innerText = "WEBSITE";
}, 2000);
//animation for fading in the qestionMark:
let qmark = document.getElementById("qMark");
setTimeout(() => {
    qmark.style.opacity = "1";
}, 2000);
// animation for fading in the initial infos at my picture:
let iInfo = document.getElementById("initial-info");
setTimeout(() => {
    iInfo.style.opacity = "1";
}, 300);

//toggles the color of the links within the main nav:
let allLinks = document.querySelectorAll("nav ul li a");
allLinks.forEach(l => {
    l.addEventListener("click" , e => {
        for(let i = 0 ; i < allLinks.length ; i ++)
        {
            //first remove orage color on every svg
            allLinks[i].classList.remove("activeLink");
            if(i !== 3)
            {
                allLinks[i].children[0].style.fill = "#999";
            }
            else
            {
                allLinks[i].children[0].style.stroke = "#999";
            }
            //then add orange color to the clocked one:
            if(e.target.innerText === "TECH STACK")
            {
                e.target.children[0].style.stroke = "var(--tert1)";
            }
            else
            {
                e.target.children[0].style.fill = "var(--tert1)";
            }
        }
        e.target.classList.add("activeLink");

        e.target.children[0].children[0].removeAttribute("stroke");
        
    });
});

//adds the 3d-moving effect on the sidebars
let sidebars = document.querySelectorAll(".sidebar-card");
sidebars.forEach(card => {
    card.addEventListener("mousemove", e => {
        
        e.target.style.transform = `rotateY(${_computeXRotation(e.offsetX, e.target.clientWidth)}deg) rotateX(${_computeYRotation(e.offsetY, e.target.clientHeight)}deg)`;
        
    });

    card.addEventListener("mouseleave" , e => {
        e.target.style.transform = "rotateY(0)";
        e.target.style.transform = "rotateX(0)";
    });
});

function _computeXRotation(e_offset, e_width) {
    let deg = 15;
    let half = e_width / 2;
    let berechnungszahl;

        berechnungszahl = half - e_offset;
        
        deg = deg * (berechnungszahl / 100);

    return -deg;
}

function _computeYRotation(e_offset, e_height) {
    let deg = 15;
    let half = e_height / 2;
    let berechnungszahl;

    berechnungszahl = half - e_offset;

    deg = deg * (berechnungszahl / 100);

    return deg;
}


//set the eventListeners of sidebar-menues:
iWin.setListeners();

//makes the sections of the side appear when scrolled at:
let whoami = document.querySelector("#who-am-i .card");
let whoamip3Wrapper = document.querySelector("#who-am-i .picture-3d-wrapper");
let pPhase = document.querySelector("#planning-phase .card");
let pPhasep3Wrapper = document.querySelector("#planning-phase .picture-3d-wrapper");
let wPhase = document.querySelector("#working-phase .card");
let wPhaseSidebar = document.querySelector("#working-phase-sidebar");
let tStack = document.querySelector("#tech-stack .card");

let backBtn = document.getElementById("back-to-start");

document.addEventListener("scroll" , () => {

    let whoamiTop = whoami.getBoundingClientRect().top;
    let pPhaseTop = pPhase.getBoundingClientRect().top;
    let wPhaseTop = wPhase.getBoundingClientRect().top;
    let tStackTop = tStack.getBoundingClientRect().top;

    if(innerWidth > 1536)
    {
        if(window.scrollY > 940)
            {
                backBtn.style.pointerEvents = "auto";
                backBtn.style.opacity = "1";
                backBtn.style.cursor = "pointer";
                backBtn.addEventListener("click" , () => {
                    window.scroll(0,0);
                });
            }
            else if (window.scrollY < 940)
            {
                backBtn.style.pointerEvents = "none";
                backBtn.style.opacity = "0";
                backBtn.style.cursor = "unset";
            }
    }
    else if(innerWidth > 1281 && innerWidth <= 1536)
    {
        if(window.scrollY > 700)
            {
                backBtn.style.pointerEvents = "auto";
                backBtn.style.opacity = "1";
                backBtn.style.cursor = "pointer";
                backBtn.addEventListener("click" , () => {
                    window.scroll(0,0);
                });
            }
            else if (window.scrollY < 700)
            {
                backBtn.style.pointerEvents = "none";
                backBtn.style.opacity = "0";
                backBtn.style.cursor = "unset";
            }
    }
    else if(innerWidth > 800 && innerWidth <= 1281)
    {
        let nav = document.querySelector("nav");

        if(scrollY >= 580)
        {
            nav.style.position = "fixed";
        }
        else if(scrollY <580)
        {
            nav.style.position = "static";
        }
        if(window.scrollY > 450)
            {
                backBtn.style.pointerEvents = "auto";
                backBtn.style.opacity = "1";
                backBtn.style.cursor = "pointer";
                backBtn.addEventListener("click" , () => {
                    window.scroll(0,0);
                });
            }
            else if (window.scrollY < 450)
            {
                backBtn.style.pointerEvents = "none";
                backBtn.style.opacity = "0";
                backBtn.style.cursor = "unset";
            }
    }
    else if(innerWidth > 700 && innerWidth <= 800)
    {
        let nav = document.querySelector("nav");

        if(scrollY >= 950)
        {
            nav.style.position = "fixed";
        }
        else if(scrollY <950)
        {
            nav.style.position = "static";
        }
        if(window.scrollY > 450)
            {
                backBtn.style.pointerEvents = "auto";
                backBtn.style.opacity = "1";
                backBtn.style.cursor = "pointer";
                backBtn.addEventListener("click" , () => {
                    window.scroll(0,0);
                });
            }
            else if (window.scrollY < 450)
            {
                backBtn.style.pointerEvents = "none";
                backBtn.style.opacity = "0";
                backBtn.style.cursor = "unset";
            }
    }
    else if(innerWidth > 1 && innerWidth <= 700)
    {
        let nav = document.querySelector("nav");

        if(scrollY >= 500)
        {
            nav.style.position = "fixed";
        }
        else if(scrollY <500)
        {
            nav.style.position = "static";
        }
        if(window.scrollY > 450)
            {
                backBtn.style.pointerEvents = "auto";
                backBtn.style.opacity = "1";
                backBtn.style.cursor = "pointer";
                backBtn.addEventListener("click" , () => {
                    window.scroll(0,0);
                });
            }
            else if (window.scrollY < 450)
            {
                backBtn.style.pointerEvents = "none";
                backBtn.style.opacity = "0";
                backBtn.style.cursor = "unset";
            }
    }
    if(whoamiTop < 400 && innerWidth > 800)
    {
        whoami.style.transform = "translateX(0)";
        whoami.style.opacity = "1";
        whoamip3Wrapper.style.opacity = "1";
        whoamip3Wrapper.style.transform = "translateX(0)";
    }
    if(pPhaseTop < 400 && innerWidth > 800)
    {
        pPhase.style.transform = "translateX(0)";
        pPhase.style.opacity = "1";
        pPhasep3Wrapper.style.opacity = "1";
        pPhasep3Wrapper.style.transform = "translateX(0)";
    }
    if(wPhaseTop < 400 && innerWidth > 800)
    {
        wPhase.style.transform = "translateX(0)";
        wPhase.style.opacity = "1";
        wPhaseSidebar.style.opacity = "1";
        wPhaseSidebar.style.transform = "translateX(0)";
    }
    if(tStackTop < 700 && innerWidth > 800)
    {
        tStack.style.opacity = "1";
    }


    if(whoamiTop < 700 && innerWidth <= 800)
    {
        whoami.style.transform = "translateX(0)";
        whoami.style.opacity = "1";
        whoamip3Wrapper.style.opacity = "1";
        whoamip3Wrapper.style.transform = "translateX(0)";
    }
    if(pPhaseTop < 700 && innerWidth <= 800)
    {
        pPhase.style.transform = "translateX(0)";
        pPhase.style.opacity = "1";
        pPhasep3Wrapper.style.opacity = "1";
        pPhasep3Wrapper.style.transform = "translateX(0)";
    }
    if(wPhaseTop < 700 && innerWidth <= 800)
    {
        wPhase.style.transform = "translateX(0)";
        wPhase.style.opacity = "1";
        wPhaseSidebar.style.opacity = "1";
        wPhaseSidebar.style.transform = "translateX(0)";
    }
    if(tStackTop < 700 && innerWidth <= 800)
    {
        tStack.style.opacity = "1";
    }
    
});

//deleting some DON Elements, when viewport is less than 800px wide:
if(innerWidth <=800 )
{
    let cfContent = document.getElementById("circle-frame-content");
    cfContent.remove();
    let picMe = document.getElementById("pic-me");
    picMe.removeAttribute("src");
    picMe.setAttribute("src" , "../img/me/portfolio-profile-S-mobile-size-responsive.png");
}
