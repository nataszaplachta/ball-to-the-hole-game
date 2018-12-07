window.addEventListener('deviceorientation', phoneMove);
document.addEventListener('DOMContentLoaded', appStart)

let ballDOM, hole
const ball = {
    x: 0,
    y: 0,
    xSpeed: 0,
    ySpeed: 0,
    maxXSpeed: 3,
    maxYSpeed: 3
    
}

const startOrientation = {
    alpha: 0,
    beta: 0,
    gamma: 0,
    isSet: false
}

function appStart() {
    ballDOM = document.querySelector('#ball');
    hole = document.querySelector('#hole');
    //wylosować i ustawic położenie dziury
    const holeTop = (Math.random()*window.innerHeight).toFixed();
    const holeLeft = (Math.random()*window.innerWidth).toFixed();
    hole.style.top = holeTop + 'px';
    hole.style.left = holeLeft + 'px';
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
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
    ballDOM.style.left = ball.x + 'px';
    ballDOM.style.top = ball.y + 'px';
    requestAnimationFrame(moveBall)
}