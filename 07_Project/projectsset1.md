# Project related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution code

## Project 1

```JavaScript
console.log("Sumant Rai")


const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((button) => {
  
  button.addEventListener('click', (e) => {
    
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
     if(e.target.id === 'white'){
       body.style.backgroundColor = e.target.id
     }
     if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }

  })


});


```