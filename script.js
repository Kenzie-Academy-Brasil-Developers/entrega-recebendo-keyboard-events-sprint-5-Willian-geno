const boxToBody = document.querySelector('#box'); 

let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log('keydown event\n\n' + 'key: ' + keyName);
    if(keyName === 'ArrowUp'){
        boxTop -= 10 ;  
        boxToBody.style.top = boxTop + "px";
    console.log(boxTop); 
    }
    if(keyName === 'ArrowDown'){
        boxTop += 10;
        boxToBody.style.top = boxTop + "px";
        console.log(boxTop); 
    }
    if(keyName === 'ArrowRight'){
        boxLeft += 10;
        boxToBody.classList.add('reversCar');
        boxToBody.style.left = boxLeft + "px";
        console.log(boxLeft); 
    }
    if(keyName === 'ArrowLeft'){
        boxLeft -= 10;
        boxToBody.classList.remove('reversCar');
        boxToBody.style.left = boxLeft + "px";
        console.log(boxLeft); 
    }
});

