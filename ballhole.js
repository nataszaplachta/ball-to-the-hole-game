window.addEventListener('deviceorientation', zmianaPochylenia);
document.addEventListener('DOMContentLoaded', appStart)

function appStart() {
    
}

function zmianaPochylenia() {
    console.log (e.alpha, e.beta, e.gamma)
}