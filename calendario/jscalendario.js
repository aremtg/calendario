//getDate trae el dia de 1 a 31 
//getDay de 1 a 6

let date = new Date();
let numDia = date.getDay();
let active = document.querySelector(".semana li:nth-child("+numDia+")");
active.classList.add(`actual`);