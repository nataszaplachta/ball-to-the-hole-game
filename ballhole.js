window.addEventListener('deviceorientation', phoneMove);
document.addEventListener('DOMContentLoaded', appStart)

let ballDOM, holeDOM
const ball = {
    x: 0,
    y: 0,
    xSpeed: 0,
    ySpeed: 0,
    maxXSpeed: 3,
    maxYSpeed: 3
    
}

const hole= {
    x: 0,
    y: 0
}

const startOrientation = {
    alpha: 0,
    beta: 0,
    gamma: 0,
    isSet: false
}

function appStart() {
    ballDOM = document.querySelector('#ball');
    holeDOM = document.querySelector('#hole');
    //wylosować i ustawic położenie dziury
    hole.y = (Math.random()*window.innerHeight).toFixed();
    hole.x = (Math.random()*window.innerWidth).toFixed();
    holeDOM.style.top = hole.y + 'px';
    holeDOM.style.left = hole.x + 'px';
    moveBall();
}

function phoneMove(e) {
    if (!startOrientation.isSet) {
        setOrientation(e.alpha, e.beta, e.gamma) 
    }
    const alphaRotation = e.alpha - startOrientation.alpha;
    const betaRotation = e.beta - startOrientation.beta;
    const gammaRotation = e.gamma - startOrientation.gamma;
    
    ball.xSpeed = (alphaRotation / 360) * ball.maxXSpeed;
    ball.ySpeed = (betaRotation / 180) * ball.maxYSpeed;

}

function setOrientation (alpha, beta, gamma) {
    startOrientation.alpha = alpha;
    startOrientation.beta = beta;
    startOrientation.gamma = gamma;
    startOrientation.isSet = true;    
}

function moveBall() {
    if (ball.x <= window.innerWidth){
        ball.x += ball.xSpeed;
    }
    else {ball.x = window.innerWidth}
    if (ball.x >= 0) {
        ball.x += ball.xSpeed;
    }
    else {ball.x = 0}    
    if (ball.y <= window.innerHeight){
        ball.y += ball.ySpeed;
    }
    else {ball.y = window.innerHeight}
    if (ball.y >= 0) {
        ball.y += ball.ySpeed;
    }
    else {ball.y = 0}    

    // czy kulka znalazła się w dziurze

    if (Math.abs((hole.x - ball.x)  < 10 && Math.abs(hole.y - ball.y) < 10)) {
        alert('Wygrałeś!');
    }
    ballDOM.style.left = ball.x + 'px';
    ballDOM.style.top = ball.y + 'px';
    requestAnimationFrame(moveBall)
}