// Accessing the elements of html

let btn= document.querySelector('button');
let ul= document.querySelector('ul');
let input= document.querySelector('input');


// adding event listner for the button for click
btn.addEventListener('click', function(){
    let item=document.createElement('li');
    item.innerText=input.value;
    ul.appendChild(item);
    // printing the input value on console
    console.log(input.value);
    // resetting the input value to empyt once task is added 
    input.value='';

    // adding the delete button infront of the items 
    let delBtn=document.createElement('button');
    delBtn.innerText='delete';
    delBtn.classList.add('delete');
    item.appendChild(delBtn);
});

// let delBtns=document.querySelectorAll('.delete');

// for(delBtn of delBtns){
//     delBtn.addEventListener('click', function(){
//         // console.log('element deleted');
//         let parent=this.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// };

// the above code is only valid for the already existing delete buttons and not the newely created delete buttons 

// in order to delete the newely created li >delete buttons we use EVENT DELEGATION METHOD

// the logic is target the parent element and using the conceot of EVENT BUBBLING we can delete the newly created li items 
// eventlistner iin this case is added to ul(parent of li)
ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log('deleted');
    }
});