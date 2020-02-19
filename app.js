const gameStartUp = () => {
    const dragon = document.getElementById("dragon");
    let dragonTop = 200;

    let obstacleRightStart = 0;
    let obstacleHeight;
    let obstacleTop;

    const determineObstacleHeight = () => {
        let randomOBHnumber = Math.floor(Math.random() * 9);
        let randomOBheight = randomOBHnumber * 50;
        return randomOBheight;
    }

    //these are wrong
    obstacleHeight = 200;
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

    // this creates multiple obstacles
    const addObstacles = () => {
        //for looop!!!!!
        //setInterval(addObstacle,1000);
    }


    const addObstacle = () => {
        //foor loop!!!!
            let obstacle = document.createElement("div");
            obstacle.classList.add("obstacle");
            document.querySelector('section').appendChild(obstacle);
            obstacle.style.backgroundColor = determineObstacleColour();
            //obstacle.style.width = determineObstacleWidth();
            //obstacle.style.height = `${determineObstacleHeight()}px`;
            obstacle.style.height = 200;
            setInterval(() => {
                if(obstacleRightStart < 700){
                    obstacleRightStart += 10;
                    obstacle.style.right = obstacleRightStart;
                    //console.log(obstacleRightStart);
                }
            }, 100);
    }

    const collisionDetection = (dragonPosition,obstaclePosition) => {
        if(dragonPosition >= obstaclePosition){
            console.log('end');
        }
        // this will track if the cordinates of the dragon and the cordinates of the obstacle are the same and stop the game if they are
    }

    
    const scoreCounter = () => {
        //this will basically count the seconds you play for and increment up one for each second played
    }

    const fallingDragon = () => {
        setInterval(() => {
            if (dragonTop < 480) {
                dragonTop +=5 ;
                dragon.style.top = dragonTop;
                console.log(dragonTop);
                //console.log(obstacleHeight);
                console.log(obstacleTop);
                collisionDetection(dragonTop,obstacleTop);

                //win conditions need to be here as this most accurately captures the dragons position
            } 
        }, 100);
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
