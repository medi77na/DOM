//Lista de mascotas
let mascotas = [
    {
        nombre: "Luna",
        especie: "Perro",
        raza: "Pitbull",
        edad: 1,
        peso: 20,
        estado: "estable",
        propietario: {
            nombre: "David Medina",
            documento: "12345",
            telefono: "54321",
            correo: "davidmedina@gmail.com"
        },
        imagen: "./public/img/can1.webp"
    },
    {
        nombre: "Toby",
        especie: "Perro",
        raza: "Doberman",
        edad: 3,
        peso: 25,
        estado: "crítico",
        propietario: {
            nombre: "Laura González",
            documento: "987",
            telefono: "987654321",
            correo: "lauragonzalez@gmail.com"
        },
        imagen: "./public/img/can2.webp"
    },
    {
        nombre: "Whiskers",
        especie: "Gato",
        raza: "Siamés",
        edad: 2,
        peso: 12,
        estado: "estable",
        propietario:{
            nombre: "Carlos Pérez",
            documento: "567890123",
            telefono: "567890123",
            correo: "carlosperez@gmail.com"
        },
        imagen: "./public/img/gatoSiames001.webp"
    },
    {
        nombre: "Buddy",
        especie: "Perro",
        raza: "Golden Retriever",
        edad: 4,
        peso: 30,
        estado: "crítico",
        nombrePropietario: "David Medina",
        documentoPropietario: "12345",
        telefonoPropietario: "54321",
        correoPropietario: "davidmedina@gmail.com"
    },
    {
        nombre: "Simba",
        especie: "Gato",
        raza: "Persa",
        edad: 5,
        peso: 15,
        estado: "estable",
        nombrePropietario: "María Rodríguez",
        documentoPropietario: "345678901",
        telefonoPropietario: "345678901",
        correoPropietario: "mariarodriguez@gmail.com"
    },
    {
        nombre: "Rocky",
        especie: "Perro",
        raza: "Bulldog Francés",
        edad: 2,
        peso: 18,
        estado: "crítico",
        nombrePropietario: "David Medina",
        documentoPropietario: "12345",
        telefonoPropietario: "54321",
        correoPropietario: "davidmedina@gmail.com"
    },
    {
        nombre: "Coco",
        especie: "Perro",
        raza: "Chihuahua",
        edad: 2,
        peso: 5,
        estado: "estable",
        nombrePropietario: "Laura González",
        documentoPropietario: "987",
        telefonoPropietario: "987654321",
        correoPropietario: "lauragonzalez@gmail.com"
    },
    {
        nombre: "Bella",
        especie: "Gato",
        raza: "Maine Coon",
        edad: 3,
        peso: 20,
        estado: "crítico",
        nombrePropietario: "Elena Martínez",
        documentoPropietario: "901234567",
        telefonoPropietario: "901234567",
        correoPropietario: "elenamartinez@gmail.com"
    },
    {
        nombre: "Max",
        especie: "Perro",
        raza: "Dálmata",
        edad: 1,
        peso: 22,
        estado: "estable",
        nombrePropietario: "Mario Pérez",
        documentoPropietario: "678901234",
        telefonoPropietario: "678901234",
        correoPropietario: "marioperez@gmail.com"
    },
    {
        nombre: "Sasha",
        especie: "Gato",
        raza: "Siamesa",
        edad: 4,
        peso: 14,
        estado: "crítico",
        nombrePropietario: "Lucía Rodríguez",
        documentoPropietario: "789012345",
        telefonoPropietario: "789012345",
        correoPropietario: "luciarodriguez@gmail.com"
    }
];

const main = document.querySelector("main")

//Agregamos un atributo class a main y le dimos clases de flex con BOOSTRAP
main.setAttribute("class", "d-flex flex-wrap justify-content-center")

for (let i = 0; i < 3; i++) {

    main.innerHTML += `
    <div id="div_I" class="col-sm border border-info m-3">
            <img src=${mascotas[i].imagen} class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${mascotas[i].nombre} </h5>
                <p class="card-text">
                    <strong>Edad: </strong>${mascotas[i].edad} <br>
                    <strong>Raza: </strong>${mascotas[i].raza}
                </p>
                <a href="#" class="btn btn-primary m-3">Go somewhere</a>
            </div>
        </div>`

}