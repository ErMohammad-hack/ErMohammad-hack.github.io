const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: 50,
    y: canvas.height - 50,
    width: 30,
    height: 30,
    speed: 5
};

let obstacles = [];
let score = 0;

function drawPlayer() {
    ctx.fillStyle = "#00f";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function generateObstacle() {
    const obstacleHeight = 30;
    const obstacleWidth = Math.random() * 50 + 30;
    const yPos = canvas.height - obstacleHeight;

    obstacles.push({ x: canvas.width, y: yPos, width: obstacleWidth, height: obstacleHeight });
}

function drawObstacles() {
    ctx.fillStyle = "#f00";
    obstacles.forEach((obstacle) => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        obstacle.x -= 5;
    });
}

function collisionDetection() {
    obstacles.forEach((obstacle) => {
        if (player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y) {
            alert("Game Over!");
            resetGame();
        }
    });
}

function updateScore() {
    score++;
    document.title = `Score: ${score}`;
}

function resetGame() {
    player.y = canvas.height - 50;
    obstacles = [];
    score = 0;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawObstacles();
    collisionDetection();
    updateScore();

    if (Math.random() < 0.01) {
        generateObstacle();
    }

    requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        player.y -= player.speed;
    }
    if (e.key === "ArrowDown") {
        player.y += player.speed;
    }
    if (e.key === "ArrowLeft") {
        player.x -= player.speed;
    }
    if (e.key === "ArrowRight") {
        player.x += player.speed;
    }
});

gameLoop();
