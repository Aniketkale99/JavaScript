// selecting the element on which the action has to be performed
let btn = document.querySelector('button');
let h3= document.querySelector('h3');
let div= document.querySelector('div');


// using the addEventlistner on the btn stating the action and the callbac which shows the action is being performed
btn.addEventListener('click',function(){
    
    // calling the getRandomColor() function 
    let randomColor=getRandomColor();
    h3.innerText=randomColor;

    // assigning the random colour function to the div using the selectors
    div.style.backgroundColor=randomColor;
   
    console.log('Random color is generated');
});

// generating an random color

function getRandomColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;

    return color;
};


// when the  button is clicked the event is triggered and the actoins of changing the title to random rgb color and changing the color of the div takes place


// when the mouse is inside box - this was just to tell that events can be added to any element of the 

div.addEventListener('mouseenter',function(){
    console.log('mouse inside box');
});