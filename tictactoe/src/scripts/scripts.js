var siguiente=false;

function turno(boton) {
    GamepadButton.disabled=true;
    
    boton.value = !siguiente ? "O" : "X"; // siguiente == false

    siguiente = !siguiente;

    document.getElementById("Turno").innerHTML=siguiente ? "Turno: O" : "Turno: X";
}