const gameStartUp = () => {
    const ball = document.getElementById("ball");
    let ballTop = 200;
    let obstacleRightStart = 0;

    const fallingBall = () => {
        const myInterval = setInterval(() => {
            if (ballTop < 480) {
                ballTop +=5 ;
                ball.style.top = ballTop;
                //console.log(ballTop);
            } 
        }, 100);
    }


    // this creates multiple obstacles
    const addObstacles = () => {
        setInterval(addObstacle,1000);
    }


    const addObstacle = () => {
            let obstacle = document.createElement("div");
            obstacle.classList.add("obstacle");
            document.querySelector('section').appendChild(obstacle);
            setInterval(() => {
                if(obstacleRightStart < 700){
                    obstacleRightStart += 10;
                    obstacle.style.right = obstacleRightStart;
                    console.log(obstacleRightStart);
                }
            }, 500);
    }

    const collisionDetection = () => {

    }

    //begin the game
    document.onkeypress = () => {
        if(event.which === 13){
            console.log('enter');
            fallingBall();
            setTimeout(addObstacles,50);
            //click enter/spacebar to begin the setInterval
            //wait 10 seconds and then begin the obstacles
        }  
    }

    // initiate game play with space bars - have collision logic here
    document.onkeydown = () => {
        if(event.which === 32) {
            ballTop -= 40;
            ball.style.top = ballTop;
        }
    }


}

$(gameStartUp);

//make the on click part of a loop, basically the entire game should sit within a loop including the if for a collision
