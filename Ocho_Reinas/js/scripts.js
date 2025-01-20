// Declaracion de variables globales
var contador = 0;
var queen = "./img/queen.png"

function showQueen(celda) {
  if (window.getComputedStyle(celda).backgroundImage=='none') {
    if (contador < 8) {
      /*INTERPOLACION*/
      celda.style=`
              background-image: url(${queen});
              background-repeat: no-repeat;
              background-position: center;`;
              contador++;
    }
  } else {
    celda.style=`
              background-image: none;`;
              contador--;
  }
}

function changeColor(r, c) { /* Renglones Columnas*/
  var celda = document.getElementById("tablero");
  var r1 = r, c1 = c, r2 = r, c2 = c;
  var r3 = r, c3 = c, r4 = r, c4 = c;
  for (let i = 0; i < 8; i++) { /* Let para variables locales (dentro de una funcion) */
    celda.rows[r].cells[i].style.backgroundColor="red";
    celda.rows[i].cells[c].style.backgroundColor="red";

    if (r1 < 8 && c1 < 8) 
      celda.rows[r1++].cells[c1++].style.backgroundColor="red";
  
    if (r2 > -1 && c2 < 8) 
      celda.rows[r2--].cells[c2++].style.backgroundColor="red";
    
    if (r3 > -1 && c3 > -1) 
      celda.rows[r3--].cells[c3--].style.backgroundColor="red";
  
    if (r4 < 8 && c4 > -1) 
      celda.rows[r4++].cells[c4--].style.backgroundColor="red";
  }
}

function clean() {
  document.querySelectorAll("td").forEach(td => td.style.backgroundColor="")
}