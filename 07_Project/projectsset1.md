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

# Project 2
``` javascript 
const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  
 const height = parseInt(document.querySelector("#height").value)
 const weight = parseInt(document.querySelector("#weight").value)
 const results = document.querySelector("#results")

 if(height === '' || height < 0 || isNaN(height)){
   results.innerHTML = `please give a valid height ${height}`

 }else if(weight === '' || weight < 0 || isNaN(weight)){
   results.innerHTML = `please give a valid weight ${weight}`

 }else {
   const bmi = (weight/((height*height)/10000)).toFixed(2)

   results.innerHTML = `<span>${bmi}</span>`
 }

})
```

# Project 3

```javascript

const clock = document.querySelector('#clock');

setInterval(() => {
  clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);

```