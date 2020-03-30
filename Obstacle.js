export default class Obstacle {
    costructor(height, width){
        this.height = height;
        this.width = width;
    }

    determineColor() {
        let randomCOnumberR = Math.floor(Math.random() * 255);
        let randomCOnumberG = Math.floor(Math.random() * 255);
        let randomCOnumberB = Math.floor(Math.random() * 255);
        return `rgb(${randomCOnumberR},${randomCOnumberG},${randomCOnumberB})`;
    }

    height(){

    }
}