"use strict";

// these are just an example --
// you should ultimately remove the zzz logic here and
// zzz elements in the HTML and style sheet
let menu_zzz = document.getElementById("menu_zzz");
let info_zzz = document.getElementById("info_zzz");

// Git elements in the HTML, similar style to the zzz elements
let menu_git = document.getElementById("menu_git");
let info_git = document.getElementById("info_git");

// making the 
let menu_css = document.getElementById("menu_css");
let info_css = document.getElementById("info_css");

let menu_html = document.getElementById("menu_html");
let info_html = document.getElementById("info_html");

// ************************************************************
// ************************************************************

let rotationAngle = 0;

// function called when user clicks on a menu button
function animateBox(event) {
    // get the id of the menu button clicked on, and
    // then construct the id of the corresponding info_box
    let which = event.currentTarget;
    let menu_id = which.id;
    let info_id = "info_" + menu_id.split('_')[1];
    console.log(info_id);

    // grab that info and change its visibility
    let info_box = document.getElementById(info_id);
    info_box.style.visibility = "visible";

    // you should add some sort of fun animation or similar
}

function animateGitBox(event) {
    // get the id of the menu button clicked on, and
    // then construct the id of the corresponding info_box
    let which = event.currentTarget;
    let menu_id = which.id;
    let info_id = "info_" + menu_id.split('_')[1];


    // grab that info and change its visibility
    let info_box = document.getElementById(info_id);
    info_box.style.visibility = "visible";
    info_box.style.transition = "transform 2s ease-in-out, opacity 1s ease-in-out";

    info_box.style.transform = `rotate(${360}deg)`

    info_box.classList.add("fade-in-up");

    setTimeout(() => {
        info_box.classList.remove("fade-in-up");
    }, 2000);
}

function animateCssBox(event) {
    // get the id of the menu button clicked on, and
    // then construct the id of the corresponding info_box
    let which = event.currentTarget;
    let menu_id = which.id;
    let info_id = "info_" + menu_id.split('_')[1];
    console.log(info_id);


    // grab the ZZZ info box and get its position
    let zzz_box = document.getElementById("info_zzz");
    let zzz_box_rect = zzz_box.getBoundingClientRect();

    // grab the CSS info box and set its position
    let css_box = document.getElementById(info_id);
    css_box.style.position = "absolute";
    css_box.style.left = `${zzz_box_rect.right + 10}px`; // 10px gap to the right of ZZZ box
    css_box.style.top = `${zzz_box_rect.top}px`;
    css_box.style.visibility = "visible";
    
    // Add the animation class
    css_box.classList.add('fade-in-up');
}

function animateHTMLBox(event) {
    // get the id of the menu button clicked on, and
    // then construct the id of the corresponding info_box
    let which = event.currentTarget;
    let menu_id = which.id;
    let info_id = "info_" + menu_id.split('_')[1];
    console.log(info_id);

    // grab that info and change its visibility
    let info_box = document.getElementById(info_id);
    info_box.style.visibility = "visible";
}

// ************************************************************
// ************************************************************

// function called when user clicks on an info box (to hide that box)
function hideBox(event) {
    // grab the currently clicked element (an info box) and
    // change its visibility
    let which = event.currentTarget;
    which.style.visibility = "hidden";
}

// ************************************************************
// ************************************************************

// event listeners:
//   - per menu item, click should open the right info_box
//   - per info_box, click should close that info_box
//          (or maybe you'll want cascading clicks so you
//           can display multiple layered boxes of info)
menu_zzz.addEventListener("click", animateBox)
info_zzz.addEventListener("click", hideBox)

menu_git.addEventListener("click", animateGitBox)
info_git.addEventListener("click", hideBox)

menu_css.addEventListener("click", animateCssBox)
info_css.addEventListener("click", hideBox)

menu_html.addEventListener("click", animateHTMLBox)
info_css.addEventListener("click", hideBox)
