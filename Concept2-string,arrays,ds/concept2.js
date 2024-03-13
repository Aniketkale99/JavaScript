// JAVA LECTURE 3-


// trim method-

let msg='     hello       ';

let newMsg=msg.trim();
console.log('This is the trim string saved in a new variable- ',newMsg);
console.log('This string has no change as strings in JS are immutable-',msg);

// aofter trim the value is always stored in a new variable , the old variable remains the same.


// toUppercase / toLowerCase

let p= 'ssup'
let newP= p.toUpperCase();
console.log(newP);

// we can always fire two commands in the same line 
newP= '             ANIKET KALE           '
let q= newP.toLowerCase().trim();
// Always the execution of commands will be from left to right

console.log(q);



// String Slicing-
// Method 1 using the index only

let str= 'IloveCoding'
console.log(str.slice(4));   
// ecoding - printed 


// Method 2 - giving the start and the end of the string to be sliced
console.log(str.slice(1,5));
// love - printed


// Method3- giving negative indices, the JS takes it and then calculates length - num and slices the string
console.log(str.slice(-1));
// g

console.log(str.slice(-4));
// ding - printed 


// Replacing the values of a string - always the first occurance gets replaced 


console.log(str.replace('love','type'));
// the above is a new string completely changed string
console.log(str);
// the original string does not change


// Repeat is used to makes copies of the string value
let str1= str.repeat(2);
console.log(str1);


// practice Q
// Q1
let msg1='help!';
// used method chaining
let msg2= msg1.trim().toUpperCase();
console.log(msg2);

// Q2
let Name='ApnaCollege';

console.log(Name.slice(4,9));
// colle

// getting the index of the following 
console.log(Name.indexOf('na'));
// 2

let newName= Name.slice(4).replace('l','t');
console.log(newName);



// ARRAYS - for multiple elements we do not need to store themin different variables but array stores them all in one memory place(Linear collection of things)

let student=['aniket', 'varun', 'ravi'];
console.log(student);

// As the string has length and index, Array also has index and lenghth
// student.length()= 3
console.log('The length of the student string is-',student.length);

// Visualizing an Array

let nums1=[2,4,6,8];
console.log(nums1);
// We can also access the element of the array same as we did it in striing

console.log('This is the 2 element of nums1 array-',nums1[2]);

console.log(typeof(nums1));
// arrays in JS are considered as OBJECT

// array can be created with same datatype elements or mixed datatype elements

let x1=[25,26,27];
// contains single datatype = number
let x2=['aniket', 'rajesh',25,100];
// contains string and number called as 'mixed array'

// creating an empty array is also possible 
let newArr=[];
console.log(newArr);

// chaining is also possible in Array
console.log(x2[0][2]);
// aniket-->i will be printed
// [0]--> aniket  , [2]--->i the flow always goes from left to right and hence i is printed


// Arrays are mutable-
/*this means that the changes will be made in the original array and no new array will be formed as was in the case of strings as strings were immutable*/

let fruit=['apple', 'mango', 'litchi'];
console.log(fruit);

// changing the elements of the array
fruit[1]='watermelon';
console.log(fruit);

// we can add elements to any index number which does not exists as well
fruit[5]='kiwi';
console.log(fruit);
// total length of the array will be 6 (last element +1)


// METHODS IN ARRAY-

// 1. Push- add at end  (always at the end )
  let cars=['mercedes', 'audi', 'bmw', 'maruti', 'mahindra-xuv']

  cars.push('toyota');
  console.log(cars);

// 2. pop- delete from end and return it

cars.pop();
// the last element is returned and printed 

//Unshift- element added at the start

cars.unshift('ferrari');
console.log(cars);

// shift- deletes the first element of the array

cars.shift();
console.log(cars);

// Practice Q

let start=['january', 'july','march', 'august']

start.shift();
start.shift();
console.log(start);
start.unshift('june');
start.unshift('july');
console.log(start);


// indexof - Array methods (searches the index of the value)
let primary=['red','yellow','blue'];
console.log(primary.indexOf('yellow'));

// includes - search the value 

console.log(primary.includes('red'));
// true- return

// Concatenate method- ARRAY

let secondary=['orange', 'green', 'voilet'];

// merge/ join/ concatenate array primary and secondary
// concatenated array is simply a new array 
let colours= primary.concat(secondary);
console.log(colours);

// reversing the order of the arra4
colours.reverse();
console.log(colours);



// SLICE- Method in array

// same as string slicing method 

// giving no argument makes the copy of the array and prints the whole array
colours.slice();
console.log(colours);

// giving the starting index and ending index
let c=colours.slice(2, 5);
// 2 inclusive and end is 5-1=4

console.log(c);



// SPLICE- method 
// removes/adds / replaces elements in place
// splice(start, deleteCount, item0,item1...itemN)
// makes changes in the original array and returns the changed array

// earlier - orange blue yellow 
c.splice(0,1);
// will delete the 0th element of the array 

// now- blue , yellow 
console.log(c);


// adding elements on the deleted index

c.splice(0,1,'red ','purple','brown');
// the 0th element goes and red and purple will be added to that position making the array a bit longer 

console.log(c);


// SORTING in arrays
let squares=[4,9,25,16,36,49,1,64];
console.log(squares);
squares.sort();
// the array is arranged in ascending order
console.log(squares);


// in sort method - internally first the elements of the array are converted too a string and then sorting is done thus if an array has string as an element the sorting will bne done al[habetically but in case of numbers the sorting process is 

/* numbers ---> string ----> unicode is checked and sorting is done

squares=[4, 9, 25, 16, 36, 49, 1, 64];

expected squares post sort
squares=[1,4,9,16,25,36,49,64];

resulted

squares=[1, 16, 25, 36, 4, 49, 64, 9]

as in our example */

// Practice Q

let newMonths=['january', 'july','march', 'august'];

// using splice
newMonths.splice(0,2,'july','june');

// 0- start , 2- kitna delete karna hain , elements to be added 

console.log(newMonths);
// ['july', 'june', 'march', 'august']



// Constant array can go under various operations such as push pop etc whereas a const string cannot be changed.
// but we cannot completely change the constant array

// const arr=[]
/* cars=[]
arr=cars   cannot be done as the address of the constant variable cannot be override
*/




// Nested Arrays 

let n= [[1,2], [3,4],[5,6]];
console.log(n);

// no of arrays = rows 
// no of elements = columns 


// Practice Q

let game=[['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(game);
game[0][1]='O';

console.log(game);

