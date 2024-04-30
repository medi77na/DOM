// // PRIMER EJEMPLO
// let one = document.getElementById("btn-one")
// let two = document.getElementsByClassName("btn-two")
// let three = document.getElementsByName("btn-three")
// let four = document.getElementsByTagName("button")

// // //Cambiar contenido de botón
// // one.textContent = "hOLA"

// console.log(one);
// console.log(two[0]);
// console.log(three[0]);
// console.log(four);

// SEGUNDO EJEMPLO
let one = document.querySelector(".btn-outline-primary")
let two = document.querySelector(".btn-outline-secondary")
let three = document.querySelector(".btn-outline-success")
let four = document.querySelector(".btn-outline-danger")
let all = document.querySelectorAll(".btn")

// LLAMAR POR DIFERENTES TIPOS:
// ID: #var
// CLASE: .var
// NAME: "[name='name'"]"
// ETIQUETA: button

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(all);