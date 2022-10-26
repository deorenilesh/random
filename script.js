
let r1 =Math.floor((Math.random() * 100000)+1);
console.log(r1);
let r2 =Math.floor((Math.random() * 100000)+1);
console.log(r2);

let add=r1+r2;
console.log(`Addtion of two random numbers is =${add}`);


// var signature = "Hello";
// function addVal(){


//     document.getElementById('content').value = signature
// }

function addVal(){
    document.getElementById('f').value= r1
    document.getElementById('s').value= r2
}



function correctNumber(){
    document.getElementById('c').value=add
}


function myFunction() {
  let x = document.getElementById("myTextarea").value;
//   document.getElementById("demo").innerHTML = x;

if (x==add) {

    document.getElementById("demo").innerHTML = `Congratulations your answer ${x} is correct`;
    
    
} else {
    document.getElementById("demo").innerHTML= `Tune galti kar di, sahi answer ${add} he`
}

 
}


