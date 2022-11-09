'use strict'

let displayToggler = document.querySelector('.fa-bars')
let sidebar = document.querySelector('.sidebar')
let sidebarRemover = document.querySelector('.fa-times')


displayToggler.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar')
})

sidebarRemover.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar')
})