const levelOne = () => {
    const obstacle = document.createElement("div");
    let obstacleDistance = 1000;

    if (!isGameOver) {
        obstacle.classList.add("obstacle");
    }

    obstacle.style.left = obstacleDistance + "px";
    grid.appendChild(obstacle);

    let timerId = setInterval(() => {
        if (obstacleDistance > 0 && obstacleDistance < 60 && ((obstacle.style.bottom === "0px" && position <= 60) || (obstacle.style.top === "0px" && position >= 240))) {
            clearInterval(timerId);
            alertMessage.innerHTML = "Game Over";
            isGameOver = true;

            while (grid.firstChild) {
                grid.removeChild(grid.lastChild);
            }
        }

        obstacleDistance -= 10;
        obstacle.style.left = obstacleDistance + "px"; 
    }, 20);

    if (!isGameOver) {
        setTimeout(generateObstacle, 10);
    }
}

export default levelOne;