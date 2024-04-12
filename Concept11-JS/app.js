// When for nested elements of html we create event listener it is called as event bubbling 

// task here is we will axis the individual elemnets and for all of them we will ad event listners

let div=document.querySelector('div');
let ul=document.querySelector('ul');
// because there are multiple list items so querySelectorAll
let lis=document.querySelectorAll('li');

// here when the parent is clicked then only parent event is triggered 
// when we click the child in this case the child and its parent is also triggered
// so when we click div (only div)
// when we click ul (ul,div)
// when we click li (li,ul,div)- this phenomenon is called as event bubbling and this is always true 

div.addEventListener('click', function(){
    console.log('div was clicked')
});

ul.addEventListener('click', function(){
    console.log('ul was clicked')
});


for(li of lis){
    li.addEventListener('click', function(){
        console.log('div was clicked')
    });
}

// no when we wish to stop this event bubbling then we use stop.propogation method

// ul.addEventListener('click', function(event){
//     event.stopPropagation();
//     console.log('ul was clicked')
// });


// for(li of lis){
//     li.addEventListener('click', function(event){
//         event.stopPropagation();
//         console.log('div was clicked')
//     });
// }