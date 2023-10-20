//LOGICA

const rowElem = document.querySelector(".row");
console.log(rowElem);

let gridString = "";

for (let i = 1; i <= 100; i++ ) {
    let result;

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        result = "FizzBuzz"
        
    } else if (i % 3 === 0) {
        console.log("Fizz");
        result = "Fizz"
         
    }else if (i % 5 === 0 ) {
        console.log("Buzz");
        result = "Buzz"

    } else {
        console.log(i);
        result = i
  
    }

    //console.log(i, result);
    gridString += `<div class="square">${result}</div>`
    console.log(gridString);
}


rowElem.innerHTML = gridString;