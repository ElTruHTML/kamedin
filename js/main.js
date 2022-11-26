"use strict";

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

let picHeader = document.getElementById("header-picture-wrapper");
setTimeout(() => {
    picHeader.style.opacity = "1";
}, 300);

let wordChange = document.querySelector(".changing-headline");
setTimeout(() => {
    wordChange.innerText = "BLOG";
}, 680);
setTimeout(() => {
    wordChange.innerText = "WEBSITE";
}, 1500);

let qmark = document.getElementById("qMark");
setTimeout(() => {
    qmark.style.opacity = "1";
}, 1600);

let iInfo = document.getElementById("initial-info");
setTimeout(() => {
    iInfo.style.opacity = "1";
}, 300);