//getDay de 1 a 6
//getDate trae el dia de 1 a 31 
$(document).ready(function () {
let meses = ["Enero","Febrero","Marzo","Abril",
            "Mayo","Junio","Julio","Agosto","Septiembre",
            "Octubre","Noviembre","Diciembre"]
let date = new Date();
let nomDia = date.getDay();

let diaMes = date.getDate();
let mes = meses[date.getMonth()];
let año = date.getFullYear()

let active = document.querySelector(".semana li:nth-child("+nomDia+")");
activar();

function activar() {
    active.classList.add(`actual`);
    let h1 = document.createElement("h1");
    h1.innerHTML = diaMes;
    active.appendChild(h1);
  
    let h2 = document.createElement("h2");
    h2.innerHTML = mes + " del " + año;
    active.appendChild(h2);
  
    let span = document.createElement("span");
    span.innerHTML = "n";
    span.classList.add("spanRojito");
    active.appendChild(span);

    let listaDeEventos = document.querySelector(".listaDeEventos");

    listaDeEventos.innerHTML = `<li class="evento even1">Problemas de luz</li>
                                <li class="evento even2">algo</li>
                                <li class="evento even3">Exposición en auditorio 8am-9:30am</li>  `;
}  
    let diasDeLaSemana = document.querySelectorAll(".semana li");

  diasDeLaSemana.forEach(dia => 
        dia.addEventListener("click", function(){
         let multiuso = document.querySelector(".multiuso");
         multiuso.innerHTML = `<div class="alerta">
         <span class="cerrar">&times;</span>
         <p>No es posible ver los eventos futuros, <br> consulte con su instructor</p>
       </div>`;
       let alerta = document.querySelector(".alerta");
       let cerrarAlerta = document.querySelector(".cerrar");

        cerrarAlerta.addEventListener("click", function() {
        alerta.style.display = "none";
        })
       
        })
    )


});