//LOGICA

const rowElem = document.querySelector(".row");
console.log(rowElem);

let gridString = "";
let bgColor =""

for (let i = 1; i <= 100; i++ ) {
    let result;

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        result = "FizzBuzz";
        bgColor = "bg-fizz-buzz";
        
    } else if (i % 3 === 0) {
        console.log("Fizz");
        result = "Fizz";
        bgColor = "bg-fizz";
         
    }else if (i % 5 === 0 ) {
        console.log("Buzz");
        result = "Buzz"
        bgColor = "bg-buzz"

    } else {
        console.log(i);
        result = i
        bgColor = "bg-number"
  
    }

    //console.log(i, result);
    gridString += `<div class="square ${bgColor}">${result}</div>`
    console.log(gridString);
}


rowElem.innerHTML = gridString;