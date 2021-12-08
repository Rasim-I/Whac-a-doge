let score = 0;
let timer = 15;
let timerId = null;
let countDownTimer;

function gameStart() {
    gameStop();
    for (let num = 1; num < 10; num ++){
        resetDog('doge'+num);
    }
    countDownTimer = setInterval(countDown, 1000);

    spawnDoge();
}

function gameStop() {
    clearTime();
    score = 0;
    changeScore();
    timer = 15;
    timeLeft.textContent = timer;

    for (let num = 1; num < 10; num ++){
        hideDog('doge'+num);
    }

}

function hideDog(doge) {
    document.getElementById(doge).style.opacity = '0';
    document.getElementById(doge).style.pointerEvents = 'none';
}

function resetDog(doge){
    document.getElementById(doge).style.opacity = '1';
    document.getElementById(doge).style.pointerEvents = 'auto';
    document.getElementById(doge).style.top = '0px';
}

function spawnDoge() {
    timerId = setInterval(randomDoge, 500);
}

function randomDoge() {

    let randomNumber = Math.floor( Math.random() * (10 - 1) + 1);
    let doge = document.getElementById('doge' + randomNumber);
    doge.style.top = '0px';
    doge.style.opacity = '1';
    doge.style.pointerEvents = 'auto';
}

function countDown() {
    timeLeft.textContent = timer;
    timer--;

    if (timer == 0){
        timeLeft.textContent = timer;
        clearTime();
    }
}

function clearTime() {
    clearInterval(countDownTimer)
    clearInterval(timerId);
}

function onClickDoge(dogeToEdit){
    let doge = document.getElementById(dogeToEdit);

    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        doge.style.top = timePassed / 5 + 'px';

        if (timePassed > 500) {
            clearInterval(timer);
            doge.style.pointerEvents = 'none';
            doge.style.opacity = '0';
            //doge.style.zIndex = '-1';
        }
        }, 20);

    score++;
    changeScore();
}

function changeScore() {
    document.getElementById('score').textContent = score.toString();
}

function takeWeapon(){
        document.getElementById('field-container').insertAdjacentHTML('afterbegin', '<img src="img/baseball2.png" id="weapon">');
        let weapon = document.getElementById('weapon');
        weapon.style.position = 'fixed';
        weapon.style.zIndex = '2';
        document.onclick = function(event){
            weapon.style.left = event.clientX +-150+'px';
            weapon.style.top = event.clientY +-100+'px';
        }

        weapon.style.pointerEvents = 'none';

}

function putDownWeapon() {
    let weapon = document.getElementById('weapon');
    weapon.remove();
}

