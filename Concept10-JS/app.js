// let btn = document.querySelector('button');
// console.dir(btn);


// now providing the onclick method a function which when the button is clicked will be triggered.

// btn.onclick= function () {
//     console.log('Button was clicked');

//     // alert message will pop up
//     alert('Button was clicked');
// };


// we can also create a seperate function and then call that function onClick

function sayHello(){
    console.log('hello');

};

function sayName(){

    console.log('Aniket Kale');
}

// btn.onclick=sayHello;


// when we have multiple buttons and we want to add the onclick command to all the buttons

// let buttons = document.querySelectorAll('button');
// for(button of buttons){
//     button.onclick =sayHello;
//     // when hovered over any button or entered into the button space it gets triggered and displays the message below
//     button.onmouseenter = function () {
//         console.log('you entered the button');
//     };
// };


// adding EVENT LISTNERS-

let buttons = document.querySelectorAll('button');


for(button of buttons){
    button.addEventListener('click',sayHello);
    button.addEventListener('click',sayName);
    button.addEventListener('dblclick',function(){
        console.log('You have double clicked')
    });
};




// this method

let h1=document.querySelector('h1');
let h2=document.querySelector('h2');
let p=document.querySelector('p');

function changeColor(){
    this.style.backgroundColor='blue';
    console.log(this.innerText);
}

h1.addEventListener('click',changeColor);
h2.addEventListener('click',changeColor);
p.addEventListener('click',changeColor);

// keyboard events 

let inp=document.querySelector('input');
inp.addEventListener('keypress',function(event){
    console.log('key was pressed');
    console.log(event.code);
    console.log(event.key);
});

