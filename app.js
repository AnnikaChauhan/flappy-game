const gameStartUp = () => {
    const dragon = document.getElementById("dragon");
    let dragonTop = 200;
    let dragonHeight = 70;
    let obstacleRightStart = 0;
    let obstacleHeight;
    let obstacleTop;
    let obstacleWidth = 150;

    // put this back when it's working
    const determineObstacleHeight = () => {
        let randomOBHnumber = Math.floor(Math.random() * 9);
        let randomOBheight = randomOBHnumber * 50;
        return randomOBheight;
    }

    obstacleHeight = determineObstacleHeight();
    obstacleTop = 500 - obstacleHeight;
    
    // don't do this yet
    /*
    const determineObstacleWidth = () => {
        let randomOBWnumber = Math.floor(Math.random() * 5);
        let randomOBwidth = randomOBWnumber * 50;
        return `${randomOBwidth}px`;
    }
    */

    const determineObstacleColour = () => {
        let randomCOnumberR = Math.floor(Math.random() * 255);
        let randomCOnumberG = Math.floor(Math.random() * 255);
        let randomCOnumberB = Math.floor(Math.random() * 255);
        return `rgb(${randomCOnumberR},${randomCOnumberG},${randomCOnumberB})`;
    }

    const isCollision = (dragonVPosition, obstacleVPosition, obstacleHPosition) => {
        if(obstacleHPosition > 252 && obstacleHPosition < (252 + obstacleWidth) && (dragonVPosition > obstacleVPosition || dragonVPosition === obstacleVPosition)) {
            console.log('end');
        }
    }

    const moveObstacle = (box) => {
        setInterval(() => {
            if(obstacleRightStart < 700){
                obstacleRightStart += 1;
                box.style.right = obstacleRightStart;
            }
        }, 100);
    }

    const addObstacle = () => {
        let obstacle = document.createElement("div");
        obstacle.classList.add("obstacle");
        document.querySelector('section').appendChild(obstacle);
        obstacle.style.backgroundColor = determineObstacleColour();
        obstacle.style.width = obstacleWidth;
        //obstacle.style.width = determineObstacleWidth();
        obstacle.style.height = `${obstacleHeight}px`;
        moveObstacle(obstacle);
    }

    const addObstacles = () => {
        setInterval(addObstacle,1000);
    }

   // addObstacles();
    const scoreCounter = () => {
        //this will basically count the seconds you play for and increment up one for each second played
    }

    const playGame = () => {

        // SWITCH THESE SWITCH INTERVALS ROUND, PRODUCE THE OBSTACLE AND then an inside set interval dropping the box
        // or you want to control the move by of the obstacles and dragon all in the same space - try readjusting code to get it this way and then in the onload it loads the single obstacle
        let obstacle = document.createElement("div");
        obstacle.classList.add("obstacle");
        document.querySelector('section').appendChild(obstacle);
        obstacle.style.backgroundColor = determineObstacleColour();
        obstacle.style.width = obstacleWidth;
        //obstacle.style.width = determineObstacleWidth();
        obstacle.style.height = `${obstacleHeight}px`;
        setInterval(() => {
            if(dragonTop < 480){
                dragonTop += 5;
                dragon.style.top = dragonTop;
                let dragonBottom = dragonTop + dragonHeight;
                const hasLost = isCollision(dragonBottom, obstacleTop, obstacleRightStart);
                moveObstacle(obstacle);
            }
        }, 200);
    }

    const resetGame = () => {
        document.onkeypress = () => {
            if(event.which === 17){

            }
        }
    }

    //begin the game - enter
    document.onkeypress = () => {
        if(event.which === 13){
            //fallingDragon();
            //setTimeout(addObstacle,50);
            playGame();
        }  
    }

    // initiate game play with space bars - have collision logic here
    document.onkeydown = () => {
        if(event.which === 32) {
            dragonTop -= 40;
            dragon.style.top = dragonTop;

        }
    }


}

$(gameStartUp);

//make the on click part of a loop, basically the entire game should sit within a loop including the if for a collision
