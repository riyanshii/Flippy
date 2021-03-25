score = 0;
cross = true;
// alert("Space bar for Jump and left and right key for forward and backward movement");
document.onkeydown = function(e){
    if(e.keyCode == 32)
    {
        nobita = document.querySelector('.nobita');
        nobita.classList.add('anobita');
        setTimeout(() => {
            nobita.classList.remove('anobita');
        }, 1000);
    }
    if(e.keyCode == 39)
    {
        nobita = document.querySelector('.nobita');
        nobitax = parseInt(window.getComputedStyle(nobita,null).getPropertyValue('left'));
        nobita.style.left = (nobitax + 100) + "px";
    }
    if(e.keyCode == 37)
    {
        nobita = document.querySelector('.nobita');
        nobitax = parseInt(window.getComputedStyle(nobita,null).getPropertyValue('left'));
        nobita.style.left = (nobitax - 100) + "px";
    }



}

setInterval(() => {
    nobita = document.querySelector('.nobita');
    gameover = document.querySelector('.gameover');
    doremon = document.querySelector('.doremon');

    dx = parseInt(window.getComputedStyle(nobita,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(nobita,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(doremon,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(doremon,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX< 105 && offsetY<105)
    {
        // gameover.style.visibility = 'visible';
        gameover.innerHTML =  "Game Over"
        doremon.classList.remove('adoremon');
    }
    else if(offsetX < 150 && cross){
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur =  parseFloat(window.getComputedStyle(doremon,null).getPropertyValue('animation-duration'));
            newDur = anidur - 0.01;
            doremon.style.animationDuration = newDur + 's';
        }, 500);
       
    }
}, 10);

function updatescore(score){
    scorecard.innerHTML = "Your Score " + score
}