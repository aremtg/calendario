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

    listaDeEventos.innerHTML =
    ` `;
     actualizarNumerito()
function actualizarNumerito(){
  let numLi = listaDeEventos.childElementCount;
     let span = document.createElement("span");
     span.innerHTML = numLi;
     span.classList.add("spanRojito");
     active.appendChild(span);
}
     

}  
let botonagregarEventos = document.querySelector(".agregarEventos");

botonagregarEventos.addEventListener("click", function(){
  let listaDeEventos = document.querySelector(".listaDeEventos");

    let nuevoElemento = document.createElement("input");
    listaDeEventos.appendChild(nuevoElemento);
    nuevoElemento.classList.add("evento")
   
  let numLi = listaDeEventos.childElementCount;

     

     if(numLi <= 6){
      let span = document.createElement("span");
     span.innerHTML = numLi;
     span.classList.add("spanRojito");
     active.appendChild(span);
      
    }else if(numLi > 6){
      let multiuso = document.querySelector(".multiuso");
      multiuso.innerHTML = `<div class="alerta">
      <span class="cerrar">&times;</span>
      <p>MAXIMO NUMERO DE EVENTOS</p>
      </div>`;
      let alerta = document.querySelector(".alerta");
      let cerrarAlerta = document.querySelector(".cerrar");
      cerrarAlerta.addEventListener("click", function() {
        alerta.style.display = "none";
        
      })
      nuevoElemento.remove()
    }

    //   for(let i = 7; i<=numLi;i--){
    //     console.log(i)
    //     if(i == 0){
    //       console.log(i)
    //        let multiuso = document.querySelector(".multiuso");
    //          multiuso.innerHTML = `<div class="alerta">
    //          <span class="cerrar">&times;</span>
    //          <p>MAXIMO NUMERO DE EVENTOS</p>
    //        </div>`;
    //         let alerta = document.querySelector(".alerta");
    //         let cerrarAlerta = document.querySelector(".cerrar");
    //         cerrarAlerta.addEventListener("click", function() {
    //           alerta.style.display = "none";
    //         })
    //   } 
    // }
});

 
});
  //   let diasDeLaSemana = document.querySelectorAll(".semana li");

  // diasDeLaSemana.forEach(dia => 
  //       dia.addEventListener("click", function(){
  //        let multiuso = document.querySelector(".multiuso");
  //        multiuso.innerHTML = `<div class="alerta">
  //        <span class="cerrar">&times;</span>
  //        <p>No es posible ver los eventos futuros, <br> consulte con su instructor</p>
  //      </div>`;
  //      let alerta = document.querySelector(".alerta");
  //      let cerrarAlerta = document.querySelector(".cerrar");

  //       // cerrarAlerta.addEventListener("click", function() {
  //       // alerta.style.display = "none";
        // })
       
    //     })
    // )
