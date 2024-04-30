const can = document.createElement("img")
const main = document.getElementsByTagName("main")
// const main = document.querySelector("main") Hace lo mismo que la línea anterior

main[0].appendChild(can)
// main.appendChild(can) Funciona con el querySelector

can.id = "perro";
can.src = "./public/img/can2.webp";
