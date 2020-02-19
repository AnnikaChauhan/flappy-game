const gameStartUp = () => {
    const dragon = document.getElementById("dragon");
    let dragonTop = 200;
    let obstacleRightStart = 0;

    const fallingDragon = () => {
        const myInterval = setInterval(() => {
            if (dragonTop < 480) {
                dragonTop +=5 ;
                dragon.style.top = dragonTop;
                //console.log(dragonTop);
            } 
        }, 100);
    }

    const determineObstacleHeight = () => {
        let randomNumber = Math.floor(Math.random() * 400);
        return randomNumber;
    }

    // this creates multiple obstacles
    const addObstacles = () => {
        //setInterval(addObstacle,1000);
    }


    const addObstacle = () => {
            let obstacle = document.createElement("div");
            obstacle.classList.add("obstacle");
            document.querySelector('section').appendChild(obstacle);
            obstacle.style.height = determineObstacleHeight();
            setInterval(() => {
                if(obstacleRightStart < 700){
                    obstacleRightStart += 10;
                    obstacle.style.right = obstacleRightStart;
                    console.log(obstacleRightStart);
                }
            }, 100);
    }

    const dragonTracker = () => {
        //this will track the height of the dragon
    }

    const collisionDetection = () => {
        // this will track if the cordinates of the dragon and the cordinates of the obstacle are the same and stop the game if they are
    }

    //begin the game
    document.onkeypress = () => {
        if(event.which === 13){
            console.log('enter');
            fallingDragon();
            setTimeout(addObstacle,50);
            //click enter/spacebar to begin the setInterval
            //wait 10 seconds and then begin the obstacles
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
