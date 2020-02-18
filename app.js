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