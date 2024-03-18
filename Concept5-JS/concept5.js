// Arrays are object

// Object literals are different from object
// Object Literals- used to store key collections and complex entities
// they are the collections of property

let student1={
    Name:'Aniket',
    Age: 24,
    marks:95
};

// here in the above student object there are key value pairs which make one property so this object has 3 properties

// in object while printing the order is not the same. but in the array the order always remains constant

let colors={
    primary:['red','blue','green'],
    secondary:['yellow','orange','white']
}
console.log(colors);
// the primary key can store multiple value in an object in the form of an array

// Problem Q

const post={
    userName:'kale.aniket99',
    content:'This is my #firstPost',
    likes:150,
    repost:10,
    tags:['ravikumar_10','varunBhardwaj','drChitale']
};

console.log(post);

// printing a particular value of an key

// Method 1 -object['key];
console.log(post['userName']);


// method 2 - object.key
console.log(post.likes);

// JS converts all the keys of the object to string and then reads it



// Adding /Updating values in an object
let newStudent={
    Name:'Aniket Kale',
    age:24,
    city:'Pune',
    marks:95
}

console.log(newStudent);

// updating the current value 
newStudent.city='Berlin';
console.log(newStudent);

// adding a new key:value pair to the object 
newStudent.gender='Male';
console.log(newStudent);
// the new added property gets addded at the end of the object initially

// to delete the property of an object

delete newStudent.marks;
console.log(newStudent); 


// Object of Object --> Nested Objects


const classInfo={
    aniket:{
        marks:95,
        age:24
    },
varun:{
    marks:96,
    age:25
},

ravi:{
    marks:85,
    age:24
}

};

console.log(classInfo);

// Accessing the key:value pair of an nested object 
console.log(classInfo.aniket.marks);
console.log(classInfo.varun);


// we can also store the data of the students in an array of objects 

const classBInfo=[
    {name:'Aniket',
marks:95,
city:'Pune'},
{name:'pankaj',
marks:80,
city:'Nashik'},
{name:'Aaryak',
marks:90,
city:'Bhopal'}
];

console.log(classBInfo);

// accessing the individual key value pair of this array

console.log(classBInfo[1].name);

// we can also update the data present in this array of object
classBInfo[1].name='Mudit';
console.log(classBInfo[1]);

// creating and adding a new key value pair is alos possible

classBInfo[1].gender='Male';
console.log(classBInfo[1]);


// ...............................................................................................................

// JavaScript has predefined maths objects 
// Math object has many properties and methods 

// the properties are in the form of key:value pairs of the constants that are generally required such as pi , e, etc

// Math Object - Methods 


// generating integers from 1-10 using Math.random()

let num= Math.random();
console.log(num);
num*=10;
console.log(num);
num=Math.floor(num);
console.log(num);
num+=1;
console.log(num);



 
// Random number guessing game

const max=prompt('enter a number');

const random=Math.floor(Math.random()*max)+1;

let guess=prompt('guess the number');


while(true){
    if(guess=='quit'){
        console.log('You quit the game');
        break;
    }

    if(guess==random){
        console.log('you have guessed the number right! Congrats!');
        break;
    } else if(guess<random){
        guess=prompt('your guess was too small');
    }

    else{
        guess=prompt('your guess was too large');
    }
}
