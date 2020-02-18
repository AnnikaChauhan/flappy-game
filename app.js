const gameStartUp = () => {
    const dragon = $('#dragon');
    document.onkeydown = () => {
        if(event.which === 32) {
            //connection tests
            console.log('space');
            dragon.css({'color':'red'});
        }
    }
}

$(gameStartUp);

//make the on click part of a loop, basically the entire game should sit within a loop including the if for a collision
