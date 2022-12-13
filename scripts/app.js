'use strict'

function onToggleMobileMenu() {
    document.querySelector('.main-nav').classList.toggle('open')
    document.querySelector('.off-canvas-overlay').classList.toggle('overlay-open')
}

function onToggleModal() {
    document.querySelector('.modal-wrapper').classList.toggle('modal-open')
}