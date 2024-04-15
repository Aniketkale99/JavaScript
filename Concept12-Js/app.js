// // Async function
// async function hello() {
//     return 'hello';
// }


// hello()

// .then((result)=>{
//     console.log('promise was resolved');
//     console.log('result was:', result);
// })

// .catch((err)=>{
//     console.log('promise was rejected');
//     console.log('error was', err)
// })


// // Await keyword - pause the surrounding async function until its call is finished

// // function getNum(){
// //     return new Promise((resolve, reject) => {
// //         // this is an async function as setTimeOut is used
// //         setTimeout(()=>{
// //             let num= Math.floor(Math.random()*10)+1;
// //             console.log(num);
// //             resolve();
// //         }, 1000);
// //     })
// // }


// // async function demo(){
// //     await getNum();
// //     await getNum();
// //     await getNum();
// //     await getNum();
// //     await getNum();
// // };


// // Color change of h1 using promise async and await 

// h1= document.querySelector('h1');

// function colorChange(color,delay){
//     new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             h1.style.color= color;
//             console.log(`color changed to ${color}!`);
//             resolve('color changed');
//         },delay);
//     });
// }

// async function colorSet(){
//     await colorChange('red',1000);
//     await colorChange('green',1000);
//     await colorChange('orange',1000);
//      colorChange('blue',1000);
// }


// // Handling rejections using try and catch block


// function colorChange(color,delay){
//     new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let num1= Math.floor(Math.random()*5)+1;
//             if(num>3){
//                 reject('promise rejected!');
//             }
//             h1.style.color= color;
//             console.log(`color changed to ${color}!`);
//             resolve('color changed');
//         },delay);
//     });
// }

// async function colorSet(){
//     try{
//         await colorChange('red',1000);
//         await colorChange('green',1000);
//         await colorChange('orange',1000);
//          colorChange('blue',1000);
    
//     }
//     catch(err){
//     console.log('error');
//     }

//      let a=5;
//      console.log('final ans :', a+5);
// }

// // when we have an error (promise is rejected) then the later code is not executed for that we use try and catch block which is mentioned  above 



// // Accessing JSON data ( actions are parsing - converting one data format to other and vice versa)

// let jsonRes= '{"name":"John", "age":30, "car":null}';

// let validRes= JSON.parse(jsonRes);
// // converting json data to a JS Object
// console.log(validRes);
// // typeof(validRes) is object


// let student={
//     name:'Aniket Kale',
//     age:24,
//     cgpa:9.0,
// }

// // converting JS object to JSON data 

// let jsonData= JSON.stringify(student);

 let url= 'https://catfact.ninja/fact';

//  creating a demo url whose data will be fetched

fetch(url)
// resquest to the api is given 

// we will not get readable data by this.
// if promise is returned and if succesfull

.then((response)=>{
    console.log(response);
    //  to get the readable data we call it in this form --> it is returned ass an promise 
    response.json().then((data1)=>{
        console.log('data1-',data1);
        return fetch(url);
    })

    .then((response)=>{
        response.json();
    })

    .then((data2)=>{
        console.log('data2-', data2);
    })
})

// if promise is returned and if failure/error

.catch((error)=>{
    console.log(error);
})


// Now while giving the above calls which are asynchronously acting if we wish to print something else that will be printedn first and the calls (API calls) will act at the back end and give us the output

console.log('Hello guys I am very happy')



// Using async function and await keyword to fetch the data from the url-API calling

async function getFacts(){

    try{
    // first step  (handelled by await keyword)
    let res= await fetch(url);
    // second step (handelled by await keyword)
    // convert the data returned in json form
    let data= await res.json(); 
    console.log(data);

// using chaining to call other facts

    // first step  (handelled by await keyword)
    let res2= await fetch(url);
    // second step (handelled by await keyword)
    // convert the data returned in json form
    let data2= await res2.json(); 
    console.log(data2);

    } catch (error){
        console.log('error catched', error);
    }
     console.log('bye');
}

