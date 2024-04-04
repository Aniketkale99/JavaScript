// to print all the elements of an array

let arr=[1,2,3,4,5];
// Method1-
// let print= function(el){
//     console.log(el);
// };


// arr.forEach(print);



// directly using arr.forEach and the calling the function


// method2-
arr.forEach(function(el){
    console.log(el);
});

// this can be also done for an array of objects

let students=[{name:'Aniket',age:20, marks:95,},
{name:'Varun', age:25, marks:92,},
{name:'Ravi', age:24 , marks:91,}];

// using arrow funtion
students.forEach((student)=>{
    console.log(student.age);
});

// ..............................................................................

// MAP and FILTER

// Map- stores the return value of the funtion in an different array but of the same size

let num=[1,2,3,4];
// this code will double the elements of num array and will store the elements in new array of same size


let double= num.map((el)=>{
    return el*2;
});

console.log(double);



// creating the gpa of students in students array

let gpa= students.map((el)=>{
    return el.marks/10;
});

console.log(gpa);



// Filter - stores the old array elements which meet the cindition of callback in the new array

let nums=[1,2,4,9,8,18,19,22,21,25,36,40,11,13,17];

let even= nums.filter((el)=>{
    return el%2==0;
    // returns all even values
});

console.log('the array of even no is:',even);



// EVERY- returns true if all the elements of an array gives true to the call back funtion else returns false

[2,4,4,6,8,10,12].every((el)=> (el%2==0));
// true
[2,4,4,6,8,10,11].every((el)=> (el%2==0));
// false



// REDUCE method 

[2,4,6,8].reduce((acc,el)=>(acc+el));
// 20





// q- printing the maximum in an array
let nums1=[1,30,45,100,20,15,6];

let max=-1;
for (let i=0; i<nums1.length; i++ ){
    if(max<nums1[i]){
        max=nums1[i];
    }
};

console.log(max);

// above function using the reduced method

let nums2=[1,30,45,100,20,15,6,9500];
let maximum= nums2.reduce((maximum,el)=>{
    if(maximum<el){
        return el;
    }
    else{
        return maximum;
    }
});

console.log(maximum);


// to check all numbers of arrau are multiples of 10

let array=[10,20,30,40,50,60,70,80,90,100]

array.every((el)=>(el%10==0));


let nums3=[-5,10,20,11,1,-1];
let min = nums3.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});

console.log(min);



// Default Parameters 

function sum(a, b=2){
    return a+b;
}

// b is taken as default parameter which when not specified while calling takes up that defcult value



// Spread Function- helps to disintegrate the iterable into multiple values

let array1=[1,3,6,8,9,0,-1,-5,-9,-100,200,250];
let min1= Math.min(...array1);
console.log(min1);



// Spreads can be used to store the values of an old array in new  one and also the case with string values to be stored in an array

let array3=[...array1];
console.log("This is an array made using spread method-",array3);

let nameArray=[...'Aniket'];
console.log(nameArray);
// now the charectres of aniket will get stored ass individual elements in that array



// to combine the arrays we can also use spread 2 times
let comArray=[...array3, ...nameArray];
console.log(comArray);
// [1, 3, 6, 8, 9, 0, -1, -5, -9, -100, 200, 250, 'A', 'n', 'i', 'k', 'e', 't']

// The spread method can also be used for object literals

let prof1={
    name:"Aniket",
    age:24,
    subject:"Math",
};

let prof1_id={...prof1, id:123};
console.log(prof1_id);
// {name: 'Aniket', age: 24, subject: 'Math', id: 123}


// Rest Method

function sum(...args){
    return args.reduce((sum,el)=>(sum+el));
};


// Destructuring 

let names=['MSD','VK','Rohit',"KL",'Pant','Iyer'];
let[winner, firstRunnerup, secondRunnerup, ...other]=names;



// Destructuring Objects 

const student ={
    name: 'Aniket',
    age:24,
    marks:95,
    username:'kale.aniket99',
    password:'MSd@2011'
};

// step to destructure is saving the values of the object in some variable 
let{username, password:pass}=student;



// Q
let arr1=[1,2,3,4,5]
let newArr1= arr1.map((el)=>{
    return el+5;
});

console.log(newArr1);