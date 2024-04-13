// call stack 

function hello(){
    console.log('inside hello function');
    console.log('hello');
}

function demo(){
    console.log("inside demo function");
    hello();
}

console.log('calling demo function');
demo();
console.log('BYe guys!');

// calling demo function
//  inside demo function
// inside hello function
// hello
// BYe guys!


function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans = two()+one();
    console.log(ans);
}




// cALLBACK hELL

let h1 = document.querySelector('h1');

function changeColor(color, delay, nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

// nesting of callback is called as callback hell which is scene in the below example
changeColor('red',1000, ()=>{
    changeColor("orange",1000,()=>{
        changeColor("blue",1000,()=>{
            changeColor('green',1000);
        });
    });
});

// these callback hells are generally observed during the production as they are commonly used to get rid of this at some extend JS has made provisions of promises, async and await objects and method



// Example of callback hell

// function savetoDB(data, success, failure){
//     let internetSpeed= Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     } else{
//         failure();
//     }
// }

// savetoDB('Aniket',()=>{
//     console.log('Success your data1 is saved');
//     savetoDB('Rajesh', ()=>{
//         console.log('Success2 : data2  is saved ');
//         savetoDB('Kale', ()=>{
//             console.log('Success3: ypur data3 is saved');
//         }, ()=>{
//             console.log('failure 3:weak connection');
//         })
//     },()=>{
//         console.log('failure2: weak connection');
//     })
// }, ()=>{
//     console.log('Failure1: weak connection');
// })

// Promise - object in JS which represents the completion or failure of an asynchronous opertaion and its resulting value

function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed= Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve('success : data was saved');
        } else{
            reject('failure : weak connection');
        }
    });
}

// savetoDB('Aniket Kale')
// .then(()=>{
//     console.log('promise was resolved');
// })

// .catch(()=>{
//     console.log('promise was rejected');
// })


// Results and error in promise

savetoDB('Aniket Kale')
.then((result)=>{
    console.log('result in promise is ', result);
    console.log('data1 was saved');
    return savetoDB('Rajesh Kale');
})

.then((result)=>{
    console.log('result in promise is ', result);
    console.log('data2 was saved');

})
.catch((error)=>{
    console.log('error in promise is ', error);
    console.log('promise was rejected');
})


// promise chaining

// savetoDB('Aniket Kale')
// .then(()=>{
//     console.log('data1 was saved');
//     return savetoDB('Rajesh Kale');
// })

// .then(()=>{
//     console.log('data2 was saved');

// })
// .catch(()=>{
//     console.log('promise was rejected');
// })