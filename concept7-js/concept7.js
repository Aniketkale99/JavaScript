// this keywrod - refers to the object that is executing the current piece of code 

// when we define an function insiade a object many times the function cannnot acess the elements of the object and this key word helps the function to get the object


const student={
    name: 'Aniket',
    age: 24,
    math:100,
    phy:95,
    chem:92,

   getAvg(){
        let avg = (this.math +this.phy +this.chem)/3;
        console.log(avg);
        console.log(`${this.name} got avg marks= ${avg}`); 
    }
};

// student.getAvg();

// what is defined with ' this' keyword becomes the object and can hence be accesed 


////////...................................................


// try and catch - used when we are writing a bulk code and we have a doubt in a code which is somewhere in the middle then in order to execute the earlier and later code also the error should be thrown this is used.


console.log('hi');
console.log('hi');
try{
    console.log(a);
}catch{
    console.log('error statement variable is not defined');
}
console.log('hi');
console.log('hi');
console.log('hi');

// try throws the error and catch catches the error and shows it to us
