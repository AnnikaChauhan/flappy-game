const gameStartUp = () => {
    const ball = document.getElementById("ball");
    let ballTop = 200;

    const fallingBall = () => {
        const myInterval = setInterval(() => {
            if (ballTop < 480) {
                ballTop +=1 ;
                ball.style.top = ballTop;
                //console.log(ballTop);
            } 
        }, 100);
    }

    const addObstacle = () => {
        let obstacleRightStart = 0;
        const obstacle = $('section').append('<div class="obstacle"></div>');

        obstacleRightStart += 2;
    }

    addObstacle();

    //begin the game
    document.onkeypress = () => {
        if(event.which === 13){
            console.log('enter');
            fallingBall();
            //setTimeout(addObstacle,1000);
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
