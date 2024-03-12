// To connect this file to the web-browser we first need tob establish a link between the index.html file and then it will work fine

console.log('Aniket Kale');

// JS uses a console which uses REPL- read-evaluate-print-loop

// Variables are the memory spaces which store different types of values in it.

//Arithematic Operators

let a=5;
let b=4;

let sum=a+b;
console.log(sum);

//similarly the other operators like divide, multiply, add, substract work.

//Modulo - % gives you the remainder

let mod=b %= a;
console.log(mod);

let exp= a**b;
console.log(exp);

//Variable names are always given in camel case in JS-

let fullName= 'Aniket Kale';
console.log(fullName.length)
console.log(fullName[5]);
// this is the way in which the string letters can be accessed

// always it is a  practice where you initialise the variable using let.

let num1=4;
let num2=6;
let sum1= num1+num2;
console.log(sum1);

// Many a times we need a constant value that has to be used in an equation 
const pi=3.14;
let r=4;
let area= pi*(r**2);
console.log(area);


// ..........................................................................................................

// Unary Operators

let age=20;

// pre increament

let newAge= ++age;
// The value first gets increamented and then saved
// Increamented value is printed 
console.log("newAge is"+" "+ newAge);
// new value is saved 
console.log("age is"+" "+ age);

//post increament 

let year=2000;
let newYear= year++;
// the value is saved first to the left variable and then increamented
// old value is saved 
console.log('newYear is '+" "+newYear);
// increamented value is saved and printed
console.log('year is' + " "+year);



// ..............................................................................................................


// Object in JS

// the items inside a object are always seperated by comma
// object is a collection of different elements

const student={
fullName:'Aniket Kale',
age:24,
CGPA:9,
isPass:true,
};

console.log(student);

// to print a particluar element of the object

console.log(student.age);

console.log(student['fullName']);

// both the above mentioned ways are correct)

// trying to make an object of product which is a ball pen 

const product={
title:'Ball Pen',
rating:4,
offer:5,
price:270
};

console.log(product);

// trying to make an object of instagram profile

const profile={
    name:'Aniket Kale',
    followers:1320,
    likes:400,
    messages:10,
    follow:true,
};

console.log(profile);

console.log(typeof(profile.followers));


// ...................................................................................................




// logical operators &&(and) , ||(or) , !(not)
// &&
let n1=5;
let n2=6;

let c1= n1<n2;
let c2= n1===5;

console.log('c1 && c2', c1&&c2);

// || or

let c3= n1>n2;
let c4= n2==6;

console.log('c3 || c4', c3||c4);

// not operator !

console.log(' !(n1==5)', !(n1==5));



// Class - Monday - 11-03-2024

// Template Literals

let pencil=10;
let eraser=5;
let output=` The total price is: ${pencil+eraser} Rupees`;
console.log(output);


// Comparison Operators

let c=5;
let d=6;

console.log('c>d', c>d);

console.log('c==d',+c==d);
// will give the output as false as a and be are different

console.log('c!=d',c!=d);

// Stricter version of comparison as this not only check sthe value but also checks the datatype 
let name1='Msd';
let n=18;

console.log('name!==n', name!==n);
// true as both data types are different

// Comparison of non numbers - here the unicode of that charechter is taken into consideration

let output1= `a < A is ${'a'<'A'}`;
console.log(output1);

// false as unicode of small letters are greater than that of capital letters

// CONDITIONAL STATEMENTS

// if-else

let age1=16;

if(age1>=18){
    console.log('VOTE karo')
}
else(
    console.log('Balak Ho')
)
// traffic light question 

let color='yellow';

if (color==='red'){
    console.log('STOP')

}

if( color==='yellow'){
    console.log('Slow Down')
}

if(color==='green'){
    console.log('GO')
}

// if and else if statement

let mark=22;

if(mark>=80){
    console.log('A+');
}

else if( mark>=60){
    console.log('B+')
}

else if(mark>=40){
    console.log('C+')
}

else(
    console.log("FAIL")
)


// Practice question

let s= "Banana"

if (s.length>3 && s[0]==='a'){
    console.log("s is a good string");
}

else{
    console.log('s is a bad string');
}


// truthy and falsy values 