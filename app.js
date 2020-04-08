const gameStartUp = () => {
    const dragon = document.getElementById("dragon");
    const restart = document.getElementById("restart");
    let dragonTop = 200;
    let dragonHeight = 60;
    let obstacleRight = 0;
    let obstacleHeight;
    let obstacleTop;
    let obstacleWidth = 150;

    //tranform this into classes
    //making the dragon and obstacle objects would make this entire thing easier

    const isCollision = (dragonVPosition, obstacleVPosition, obstacleHPosition) => {
        if (obstacleHPosition > 252 && obstacleHPosition < (252 + obstacleWidth) && (dragonVPosition > obstacleVPosition || dragonVPosition === obstacleVPosition)) {
            return true;
        }
    }

    const determineObstacleHeight = () => {
        let randomOBHnumber = Math.floor(Math.random() * 9);
        let randomOBheight = randomOBHnumber * 50;
        return randomOBheight;
    }

    const determineObstacleColour = () => {
        let randomCOnumberR = Math.floor(Math.random() * 255);
        let randomCOnumberG = Math.floor(Math.random() * 255);
        let randomCOnumberB = Math.floor(Math.random() * 255);
        return `rgb(${randomCOnumberR},${randomCOnumberG},${randomCOnumberB})`;
    }

    const moveObstacle = (box) => {
        if (obstacleRight < 700) {
            obstacleRight += 10;
            box.style.right = obstacleRight;
        }
    }

    const addObstacle = (obs) => {
        obs.classList.add("obstacle");
        document.querySelector('section').appendChild(obs);
        obs.style.backgroundColor = determineObstacleColour();
        obs.style.width = obstacleWidth;
        obstacleHeight = determineObstacleHeight();
        obs.style.height = `${obstacleHeight}px`;
        obstacleTop = 500 - obstacleHeight;
    }

    //multiple objects
    const addObstacles = (count,obs) => {
        setInterval(() => {
            if(count < 5){
                count++;
                console.log(count);
                addObstacle(obs);
                addObstacles(count);
            }
        }, 100);
    }

    //addObstacles(0);

    const scoreCounter = () => {
        //this will basically count the seconds you play for and increment up one for each second played
    }

    restart.onclick = () => {
        location.reload();
    }

    //makw sure you can only click enter once
    const playGame = () => {
        let obstacle = document.createElement("div");
        addObstacle(obstacle);
        //addObstacles(0,obstacle);
        const intervals = setInterval(() => {
            if (dragonTop < 480) {
                dragonTop += 5;
                dragon.style.top = dragonTop;
                let dragonBottom = dragonTop + dragonHeight;
                moveObstacle(obstacle);
                const hasLost = isCollision(dragonBottom, obstacleTop, obstacleRight);
                if (hasLost) {
                    clearInterval(intervals);
                }
            }
        }, 100);
    }

    //begin the game - enter
    document.onkeypress = () => {
        if (event.which === 13) {
            playGame();
        }
    }

    // initiate game play with space bars - have collision logic here
    document.onkeydown = () => {
        if (event.which === 32) {
            dragonTop -= 40;
            dragon.style.top = dragonTop;
        }
    }
}

$(gameStartUp);
