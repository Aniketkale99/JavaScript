let gameSeq=[];
let userSeq=[];

let started=false;
let level= 0;
let btns=['yellow', 'red', 'purple','green']

let h2= document.querySelector('h2');

// to start the game at any key press

document.addEventListener('keypress', function(){
   
    if(started==false){
        console.log('game started');
        started=true;
        levelUp();
    }
})

// game started after any button press
// now flashing the random tile abd levelling upb the game 


function btnFlash(btn){

    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    }, 1000);
}

function userFlash(btn){

    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    }, 1000);
}

function levelUp(){
    // setting the userSeq to empty value so that the user inputs the buttons from the start
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    // generating random index
    let randomIdx= Math.floor(Math.random()*3);
    // choose random button
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomColor);
    // console.log(randomBtn);
    // console.log(randomIdx);

    // pushing the randomcolor in gameSeq array
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randomBtn);

};


function checkAns(idx){
    // console.log('current level:', level);
    
    
    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
       setTimeout(levelUp,1000);
       }
    } else{
        h2.innerHTML=`Game Over! your score wa <b>${level}</b> <br>Press any key to start again.`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150)
        reset();
    }
   
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor= btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}