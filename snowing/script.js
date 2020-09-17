document.querySelector("#myAudio").autoplay;

function setup() {
    const canvas = document.querySelector('#falling-snow-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
        canvas,
        canvasContext: canvas.getContext("2d"),
        numberOfSnowBalls: 1024,
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createSnowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(function () {
        return {
            x: random(0, canvas.width),
            y: random(0, canvas.height),
            opacity: random(0.5, 1),
            radius: random(1, 2),
            speedX: random(-5, 5),
            speedY: random(1, 3),
        }
    });
}

function drawSnowBall(canvasContext, snowBall) {
    canvasContext.beginPath();
    canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);
    canvasContext.fillStyle = `rgba(255,255,255,${snowBall.opacity})`;
    canvasContext.fill();
    //canvasContext.stroke();
}

function snowing(canvas, snowBall) {
    snowBall.x += snowBall.speedX;
    snowBall.y += snowBall.speedY;
    if (snowBall.x > canvas.width) {
        snowBall.x = 0;
    } else if (snowBall.x < 0) {
        snowBall.x = canvas.width
    }

    if (snowBall.y > canvas.height) {
        snowBall.y = 0;
    } else if (snowBall.y < 0) {
        snowBall.y = canvas.height
    }
}

window.onload = function () {
    const { canvas, canvasContext, numberOfSnowBalls } = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);


    setInterval(function () {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        snowBalls.forEach(function (snowBall) {
            drawSnowBall(canvasContext, snowBall);
        });
        snowBalls.forEach(function (snowBall) {
            snowing(canvas, snowBall);
        });

    }, 100);

}