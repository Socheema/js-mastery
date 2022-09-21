"use strict"
let bar = document.querySelector('.fa-bars')
let menu = document.querySelector('.menu')
const preloader = document.querySelector(".preloader")

bar.addEventListener('click', function() {
    menu.classList.toggle('show-menu')
})

window.addEventListener("load", function(){
    preloader.classList.add("fade-out")
})