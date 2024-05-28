let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow","red","green","purple"];
let h3 = document.querySelector("h3")

document.addEventListener("keypress", function()
{
    if(started == false)
    {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
}

function levelUp(){

    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    //random btn choose
    let rndIdx = Math.floor(Math.random() * 3);
    let rndColor = btns[rndIdx];
    let rndButton = document.querySelector(`.${rndColor}`);
    // console.log(rndIdx);
    // console.log(rndColor);
    // console.log(rndButton);
    gameSeq.push(rndColor);
    console.log(gameSeq);
    btnFlash(rndButton);
}
function check(idx)
{
    // console.log("curr level: ",level);
    if(userSeq[idx] == gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML = `GAME OVER! <b> Your score was ${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress()
{
    let btn = this;
    btnFlash(btn);

    let color = btn.getAttribute("id");
    console.log(color);
    userSeq.push(color);

    check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}