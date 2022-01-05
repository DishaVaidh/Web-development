score=0
cross=true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.wav');

setTimeout(() => {
    audio.play()
}, 1000);


document.onkeydown = function(e){//This tell which button pressed
    console.log("key is",e.key,typeof(e.key))
    if(e.key=="ArrowUp"){
        dino=document.querySelector(".dino")
        dino.classList.add('animateDino')
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },700);//after 0.7 sec we want class to be removed means dino jump only once when press key
    }

    if(e.key=="ArrowRight") {
        dino=document.querySelector(".dino")
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }

    if(e.key=="ArrowLeft") {
        dino=document.querySelector(".dino")
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }


}


setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    
    //this null is selector(pseudo)
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
 
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
 
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);    
    console.log(offsetX, offsetY)
 
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')

        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }

    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);//for 1 sec,cross is false and in that time they cross each other
 
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);//this function is for fast obstacle animation when the score increases
    }
}, 10);//This whole function work in every 10 ms.

function updateScore(score){
    scoreCont.innerHTML="Your Score :"+score
}