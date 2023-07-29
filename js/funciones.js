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
    } else if (x != ".") {
      document.Calculadora.txtnros.value += x;
      numPantalla += x;
    }
  }
  if (x == "." && usarPunto == "no" && numPantalla == "0") {
    document.Calculadora.txtnros.value = "0.";
    numPantalla = x;
    usarPunto = "si";
  } else if (x == "." && usarPunto == "no") {
    document.Calculadora.txtnros.value += x;
    numPantalla += x;
    usarPunto = "si";
  } else if (x == "." && usarPunto == "si") {
  }
  pantallaConN = "no";
}
  
  function ingresarOperacion (y) {
    if (operacionPendiente == "") {
      numEspera=document.Calculadora.txtnros.value;
      document.Calculadora.txtnros.value +=y;
      operacionPendiente = y;
      pantallaConN == "no";
      numPantalla = "";
      usarPunto = "no";
    }
  }
  
  
  function resultado(){
  if(operacionPendiente != ""){
    solucion = numEspera+operacionPendiente+numPantalla;
    document.Calculadora.txtnros.value=eval(solucion);
    numPantalla = eval(solucion);
    pantallaConN = "si";
    operacionPendiente = "";
    usarPunto = "no";
  
  }
  }
  
  function raiz(){
   if (operacionPendiente == ""){
      document.Calculadora.txtnros.value=Math.sqrt(numPantalla);
      pantallaConN = "si";
      operacionPendiente="";
      usarPunto = "no";
   }
  }
  
  function limpiar(){
  
  numPantalla="0";
  pantallaConN="si";
  usarPunto="no";
  numEspera=0;
  operacionPendiente="";
  solucion="";
  document.Calculadora.txtnros.value="0";
  }