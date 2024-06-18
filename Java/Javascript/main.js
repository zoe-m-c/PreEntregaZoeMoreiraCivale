//entrada de datos
let nombreDelAlumno = prompt("ingresa su Nombre y Apellido");
let primera = parseFloat(prompt("ingresa tus 1ra nota"));
let segunda = parseFloat(prompt("ingresa tus 2da nota"));
let tercera = parseFloat(prompt("ingresa tus 3ra nota"));
//procesamiento de datos

function promedio(a1, a2, a3) {
  return (a1 + a2 + a3) / 3;
}

let resultado = promedio(primera, segunda, tercera);
// salida

let dudas = prompt("estas seguro que queres ver tus notas?");
while (dudas == "si") {
  if (resultado < 6) {
    alert("estas desaprobado" + nombreDelAlumno);
  } else {
    alert("estas aprobado" + nombreDelAlumno);
  }
  break;
}
