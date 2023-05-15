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
let año = date.getFullYear();

let tituloFecha = document.querySelector(".tituloFecha");
tituloFecha.innerHTML =  "<h1>" + mes + " del " + año + "</h1>";

let active = document.querySelector(".semana li:nth-child("+nomDia+")");
activar();
function activar() {
    active.classList.add(`actual`);
    let h1 = document.createElement("h1");
    h1.innerHTML = diaMes;
    active.appendChild(h1);

    let listaDeEventos = document.querySelector(".listaDeEventos");

    listaDeEventos.innerHTML = ` `;
     actualizarNumerito()
function actualizarNumerito(){
  let numEventos = listaDeEventos.childElementCount;
     let span = document.createElement("span");
     span.innerHTML = numEventos;
     span.classList.add("spanRojito");
     active.appendChild(span);
}

}  
let botonAgregarEventos = document.querySelector(".agregarEventos");

botonAgregarEventos.addEventListener("click", function(){
    let listaDeEventos = document.querySelector(".listaDeEventos");

    let nuevoElemento = document.createElement("input");
      listaDeEventos.appendChild(nuevoElemento);
      nuevoElemento.classList.add("evento");
    
    let numEventos = listaDeEventos.childElementCount;

    if(numEventos <= 6){
      let span = document.createElement("span");
      span.innerHTML = numEventos;
      span.classList.add("spanRojito");
      active.appendChild(span);
        
    }else if(numEventos > 6){
      let multiuso = document.querySelector(".multiuso");
      multiuso.innerHTML = `<div class="alerta">
      <span class="cerrar">&times;</span>
      <p>Error: no se pueden agregar más de 6 eventos.</p>
      </div>`;
      let alerta = document.querySelector(".alerta");
      let cerrarAlerta = document.querySelector(".cerrar");
      cerrarAlerta.addEventListener("click", function() {
      alerta.style.display = "none";
        
      });
      nuevoElemento.remove();
      }
    
  });

  $(".spanRojito").click(function () { 
    $(".spanRojito").addClass("hojitas");
     
  })
});

