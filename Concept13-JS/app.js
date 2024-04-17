// let url= 'https://catfact.ninja/fact';


// // Accessing the button and paragraph

let btn = document.querySelector('button');
// let para= document.querySelector('#result');

// // adding eventlistner to button

// btn.addEventListener('click', async()=>{
//     // 
//     let fact= await getFacts();
//     console.log(fact);
//     para.innerText=fact;
// })

// async function getFacts(){

// try{
//     let res= await axios.get(url);
//    return res.data.fact;
// }

// catch(err){
//     console.log('error is-',err);
//     return 'NO Fact found';
// }

// }


let url2='https://dog.ceo/api/breeds/image/random';
let img= document.querySelector('#result')

btn.addEventListener('click', async()=>{
    let link= await getImage();
    // the link gets stored in src attribute of the image which then prints the image
    img.setAttribute('src',link);

})



async function getImage(){

try{
    let res= await axios.get(url2);
    return res.data.message;
}

catch(err){
    console.log('error is-',err);
    return 'NO Image found';
}

}