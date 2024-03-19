// creating a function to print the sum from 1to n
function getSum(n){
// sum=(n*(n+1))/2;
// return sum;

// method 2

let sum=0;
    for(let i=1; i<=n; i++) {
    sum+=i;
    }
    return sum;
}

// writing a function to add the elements of an array and then returning the concatenated string

let arr1=['hello','guys','good','morning!']
function conString(arr1){
    let result;
    for(let k=0; k<arr1.length;  k++){
        result+=arr1[k];
    }
    return result;
}

conString(arr1);


// global scope 
avg=90;

// function scope cannot be accessed from outside and is used in function
function getAvg(a,b){
avg=(a+b)/2; 
// avg here is a function scope
return avg;
}


// lexical scope - the variables that are defined inside a function can be accessed from the inner/nested function 

function outerFunc() {
    let x=5;
    let y=7;
   function innerFunc() {
            console.log(x);
            console.log(y);
        }
     innerFunc();
    }


let greet='Hello'  //Global Scope

function changeGreet(){
    let greet='Namaste';
    console.log(greet);

    function innerGreet(){
        console.log(greet);
    }
    // here we havent called the inner function so namsste will be printed from the outer console.log(greet)
}
console.log(greet);
changeGreet();

// output "Hello"
// 'Namaste'


function changeGreet(){
    let greet='Namaste'; //function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet);   //lexical scope
    }


    innerGreet();
    // as we have called the inner function as well thus the console.log(greet) from both outer and inbner function will be printed 
}
console.log(greet);
changeGreet();

// output "Hello"
// 'Namaste'
// 'Namaste'


// Defining a function using a variable 

// these are called as funtion expressions- they do not have a function name but are stored in a variable and are called using the same variable name
let mean =function(a,b) {
    return (a+b)/2;
}



// Higher order functions 

// to call a function multiple times it takes the function as an input and also the count 

function multipleGreet(func, n){
    for(let i=1 ; i<=n ; i++){
        func();
    }
}

let greet1=function (){
    console.log('Hello ji');
}

multipleGreet(greet1, 10);
