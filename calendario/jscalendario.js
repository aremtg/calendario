//getDay de 1 a 6
//getDate trae el dia de 1 a 31 
let meses = ["Enero","Febrero","Marzo","Abril",
            "Mayo","Junio","Julio","Agosto","Septiembre",
            "Octubre","Noviembre","Diciembre"]
let date = new Date();
let nomDia = date.getDay();

let diaMes = date.getDate();
let mes = meses[date.getMonth()];
let año = date.getFullYear()

let active = document.querySelector(".semana li:nth-child("+nomDia+")");
active.classList.add(`actual`);

let h1 = document.createElement("h1");
h1.innerHTML = diaMes;
active.appendChild(h1)

let h2 = document.createElement("h2");
h2.innerHTML = mes + " del " + año;
active.appendChild(h2)
//------------
const elementoLi = document.querySelector('.semana li.actual');
const estiloLi = getComputedStyle(elementoLi, '::after');
const contenidoAfter = estiloLi.getPropertyValue('n');

