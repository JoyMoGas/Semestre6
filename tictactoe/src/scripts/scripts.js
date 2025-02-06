var siguiente = false;
var contador = 0;

function turno(boton) {
    boton.disable = true;

    !siguiente ? boton.value = "X" : boton.value = "O"

    siguiente = !siguiente;

    document.getElementById("turno").innerHTML = siguiente ? "Turno Siguiente: O" : "Turno Siguiente: X";

    verificar();

}

function verificar() {
    var botones = document.querySelectorAll("input[type='button']");

    const estilo = document.createElement("style");

    if (++contador == 9) {
        document.getElementById("turno").innerHTML = `Empate`;
        bloquear();

    }

    //horizontales
    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[0].value}`;
        bloquear();
        estilo.textContent = `tr:nth-child(1)::after {
                                content: "";
                                position: absolute;
                                top: 50%;
                                right: 5px;
                                left: 0;
                                height: 5px;
                                background-color: #C45886;
                                z-index: 1;
                                pointer-events: none;
                            }`;
    }

    else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[3].value}`;
        bloquear();
        estilo.textContent = `tr:nth-child(2)::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 5px;
            left: 0;
            height: 5px;
            background-color: #C45886;
            z-index: 1;
            pointer-events: none;
        }`;
    }

    else if (botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[6].value}`;
        bloquear();
        estilo.textContent = `tr:nth-child(3)::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 5px;
            left: 0;
            height: 5px;
            background-color: #C45886;
            z-index: 1;
            pointer-events: none;
        }`;
    }

    /*else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[3].value}`;
        bloquear();
    }*/

    //verticales
    else if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[0].value}`;
        bloquear();
        estilo.textContent = `td:nth-child(1)::after {
                                content: "";
                                position: absolute;
                                top: -1px;
                                bottom: -1px;
                                left: 50%;
                                width: 5px;
                                background-color: #C45886;
                                z-index: 1;
                                pointer-events: none;

                            }`;
    }

    else if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[1].value}`;
        bloquear();
        estilo.textContent = `td:nth-child(2)::after {
                                content: "";
                                position: absolute;
                                top: -1px;
                                bottom: -1px;
                                left: 50%;
                                width: 5px;
                                background-color: #C45886;
                                z-index: 1;
                                pointer-events: none;
                            
                            }`;
    }

    else if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[2].value}`;
        bloquear();
        estilo.textContent = `td:nth-child(3)::after {
                                content: "";
                                position: absolute;
                                top: -1px;
                                bottom: -1px;
                                left: 50%;
                                width: 5px;
                                background-color: #C45886;
                                z-index: 1;
                                pointer-events: none;
                            
                            }`;
        
                
    }

    //Diagonales
    else if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[0].value}`;
        bloquear();
        estilo.textContent = `table::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100% * 1.4);
            height: calc(100% * 1.4);
            border-top: 5px solid black;
            transform: rotate(45deg);
            transform-origin: top left;
            z-index: 1;
            pointer-events: none;
        }`;   
    }

    else if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value != "") {
        document.getElementById("turno").innerHTML = `Gana: ${botones[2].value}`;
        bloquear();
        estilo.textContent = `table::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: calc(100% * 1.4);
            height: calc(100% * 1.4);
            border-top: 5px solid black;
            transform: rotate(-45deg);
            transform-origin: top right;
            z-index: 1;
            pointer-events: none;
        }`;               
    }

    document.head.appendChild(estilo); //meterlo al css


}

function bloquear() {
    var botones = document.querySelectorAll("input[type='button']");
    for (let i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
    }
}