var siguiente=false;

function turno(boton) {
    GamepadButton.disabled=true;
    
    boton.value = !siguiente ? "O" : "X"; // siguiente == false

    siguiente = !siguiente;

    document.getElementById("Turno").innerHTML=siguiente ? "Turno: O" : "Turno: X";

    verificar();
}

function verificar() {
    var botones = document.querySelectorAll("input[type='button'");
    if (botones[0].value==botones[1].value && 
        botones[1].value==botones[2] && botones[0].value!="") {
    document.getElementById("Turno").innerHTML=`Gana: ${botones[0].value}`;
    } 
    else if (botones[3].value==botones[4].value && 
        botones[4].value==botones[5] && botones[3].value!="") {
    document.getElementById("Turno").innerHTML=`Gana: ${botones[3].value}`;
    } 
    else if (botones[6].value==botones[7].value && 
        botones[7].value==botones[8] && botones[6].value!="") {
    document.getElementById("Turno").innerHTML=`Gana: ${botones[6].value}`;
    } 
}