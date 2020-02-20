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

    const horizontalCollision = (obstacleHPosition) => {
        if(obstacleHPosition > 252 && obstacleHPosition < (252 + obstacleWidth)) {
            console.log('end2');
        }
    }

    const moveObstacle = (box) => {
        setInterval(() => {
            if(obstacleRightStart < 700){
                obstacleRightStart += 10;
                box.style.right = obstacleRightStart;
                //console.log(obstacleRightStart);
                // this understands when theres an interaction
                horizontalCollision(obstacleRightStart);
                console.log(obstacleRightStart);
                //run the check inside here
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

    //addObstacle();

    const addObstacles = () => {
        setInterval(addObstacle,1000);
    }

   // addObstacles();

    const collisionDetection = (dragonVPosition,obstacleVPosition) => {
        if(dragonVPosition > obstacleVPosition || dragonVPosition === obstacleVPosition){
            //this understands when there is an "interaction"
            console.log('end');
        }
    }

    
    const scoreCounter = () => {
        //this will basically count the seconds you play for and increment up one for each second played
    }

    const fallingDragon = () => {
        setInterval(() => {
            if (dragonTop < 480) {
                dragonTop +=5 ;
                dragon.style.top = dragonTop;
                let dragonBottom = dragonTop + dragonHeight;
                collisionDetection(dragonBottom,obstacleTop);
                //console.log(dragon.getBoundingClientRect());

                //win conditions need to be here as this most accurately captures the dragons position
            } 
        }, 200);
    }

    const playGame = () => {

        // SWITCH THESE SWITCH INTERVALS ROUND, PRODUCE THE OBSTACLE AND then an inside set interval dropping the box
        // or you want to control the move by of the obstacles and dragon all in the same space - try readjusting code to get it this way and then in the onload it loads the single obstacle
        setInterval(() => {
            if(dragonTop < 480){
                dragonTop += 5;
                dragon.style.top = dragonTop;
                let dragonBottom = dragonTop + dragonHeight;
                collisionDetection(dragonBottom,obstacleTop);
                let obstacle = document.createElement("div");
                obstacle.classList.add("obstacle");
                document.querySelector('section').appendChild(obstacle);
                obstacle.style.backgroundColor = determineObstacleColour();
                obstacle.style.width = obstacleWidth;
                //obstacle.style.width = determineObstacleWidth();
                obstacle.style.height = `${obstacleHeight}px`;
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
