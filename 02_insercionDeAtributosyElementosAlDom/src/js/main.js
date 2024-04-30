// const can = document.createElement("img")
// const main = document.getElementsByTagName("main")
// // const main = document.querySelector("main") Hace lo mismo que la línea anterior

// main[0].appendChild(can)
// // main.appendChild(can) Funciona con el querySelector

// can.id = "perro";
// can.src = "./public/img/can2.webp";

// can.remove(id)

// const main = document.querySelector("main")

const main = document.querySelector("main")

main.setAttribute("class","d-flex flex-wrap justify-content-center")

for (let i = 0; i < 10; i++) {
    
    main.innerHTML += `
    <div id="div_I" class="card mb-3" style="width: 30%;">
            <img src="./public/img/can1.webp" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">Lucas</h5>
                <p class="card-text">
                    <strong>Edad: </strong>1 <br>
                    <strong>Raza: </strong>Pitbull
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
}