let numPantalla = "0";
let pantallaConN = "si"; //si o no
let usarPunto = "no";
let numEspera = 0;
let operacionPendiente = "";
let solucion = "";

function ingresarNumero(x) {

    if (x !== ".") {

        if (numPantalla == "0" || pantallaConN == "si") {
            document.Calculadora.txtnros.value = x;
            numPantalla = x;
        }
        else if (x != ".") {
            document.Calculadora.txtnros.value += x;
            numPantalla += x;
        }
    }

}