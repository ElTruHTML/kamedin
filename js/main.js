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
let wordChange = document.querySelector(".changing-headline");
setTimeout(() => {
    wordChange.innerText = "BLOG";
}, 680);
setTimeout(() => {
    wordChange.innerText = "WEBSITE";
}, 1500);
//animation for fading in the qestionMark:
let qmark = document.getElementById("qMark");
setTimeout(() => {
    qmark.style.opacity = "1";
}, 1600);
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
            if(i !== 4)
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

let sidebars = document.querySelectorAll(".sidebar-card");
sidebars.forEach(card => {
    card.addEventListener("mousemove", e => {
        
        let halfOfWidthX = e.target.clientWidth / 2;
        let halfOfWidthY = e.target.clientHeight / 2;
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