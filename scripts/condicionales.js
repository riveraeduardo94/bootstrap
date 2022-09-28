console.log("Sesión JS03 Condicionales");


//+++++++++Declaración de bloque+++++++++++++


let nombre = "Betty"; //Aquí hay alcance en todo el código
let ciudad = "Guadalajara"
//const listado = ["Olivia", "Benja", "Luis", "Linda"]; //¡Mejor se usa en bloque!

{
    //let nombre = "Edu";
    const listado = ["Olivia", "Benja", "Luis", "Linda"];
    let nombre = "Edu";
    let ciudad = "CDMX"; //Color tenue: no esta utulizando la variable
    let apellido = "Rivera"; //Bloque, solamente hay alcance local "solamente en el bloque"
    console.log(`Mi nombre es ${nombre} ${apellido}, vive en ${ciudad}`); //Edu CDMX
}

console.log(`Participante: ${nombre}, que vive en ${ciudad}`); // Betty Guadalajara  //${} "con esto mando a llamar a la variable"


//+++++++++++++Condicional IF++++++++++++++++

//** 
// Sintaxis
//   if (condiciónVerdera) instrucción;
//   
//   if (condiciónVerdadera) {
//         instrucciones;    
//        }

let edad = 25;

console.log("*** Declaración antes del IF ---->");

if (edad > 24) console.log("La edad es mayor a 25"); //¡=> sintaxis de función flecha! //Else siempre lleva IF
else {
    console.log("La edad es menor a 25"); //Mas de 1 instrucción usamos esas madres ----> {}
    console.log("Seguiremos evaluando");
}

console.log("<----Declaración despues del IF ***");


//+++++++++++++Operador ternario++++++++++++++++

// sintaxis:      condición ? condición_verdadera : condición_falsa   
console.log(`La edad es ${edad > 24 ? "mayor" : "menor"} a 25`);
let comparacion = edad === 25 ? "es igual" : edad > 24 ? "mayor" : "menor";
console.log(`La edad es ${edad === 25 ? "es igual" : (edad > 24 ? "mayor" : "menor")} a 25`); //Los parentesis de edad>24 no son necesarios pero lo hace mas entendible


//+++++++++++++Condicional IF, ELSE IF, ELSE++++++++++++++++

// Sintaxis
//
//   if (condiciónVerdera) {
//        instrucciones;
//        }
//   else if (otraCondicion) {
//         instrucciones;    
//        }
//   else if (otraCondicion) {   
//        }
//   else  {
//         instrucciones;    
//        }
//      

console.log("====Uso de if, else if, else====");
añosss = 21;

if (añosss > 25) {
    console.log("la edad es mayor a 25");
} else if (añosss === 25) {
    console.log("La edad es 25");
} else console.log("La edad es menor a 25");

console.log(`La edad es ${edad === 25 ? "es igual" : edad > 24 ? "mayor" : "menor"} a 25`); //Es lo mismo como diferente

if (añosss === 25) comparacion = "igual"; //Es lo mismo pero diferente
else if (añosss > 24) comparacion = "mayor";
else comparacion = "menor";

console.log(`(claru) La edad es ${comparacion} a 25`);;


//+++++++++++++Condicional switch++++++++++++++++
/**
 * Sintaxis:
 *     switch(expresion){
 *         case valor1:
 *                   instrucciones;
 *                   break; 
 *         case valor2:
 *                   instrucciones;
 *                   break;
 *         case valor3:
 *                   instrucciones;
 *                   break;
 *          default:
 *                   instrucciones;
 *  
 *  }
 */

//No se puede usar mayor que, menor que
//puedes juntarlos case 25:case 26:case27:
edad = 20;
comparacion = "";

switch (edad) {
    case 25:
        comparacion = "es igual";
        break;
    case 24:
        comparacion = "es menor";
        break;
    case 26:
        comparacion = "es mayor";
        break;
    default:
        comparacion = "No se puede saber";
}

console.log(`(swtich) La edad es ${comparacion} a 25`);



let valor = Math.sign(25 - edad);
switch (valor) {
    case -1:
        comparacion = "mayor";
        break;
    case 1:
        comparacion = "menor";
        break;
    case 0:
        comparacion = "igual";
        break;
}

console.log(`La edad es ${comparacion} a 25.`);


let numeroMes = 9;
estacion = "", mes = "";

switch (numeroMes) {
    case 12:
        mes = "Diciembre";
        estacion = "Invierno";
        break;
    case 1:
        mes = "Enero";
        estacion = "Invierno";
        break;
    case 2:
        mes = "Febrero";
        estacion = "Invierno";
        break;
    case 3:
        mes = "Marzo";
        estacion = "Primavera";
        break;
    case 4:
        mes = "Abril";
        estacion = "Primavera";
        break;
    case 5:
        mes = "Mayo";
        estacion = "Primavera";
        break;
    case 6:
        mes = "Junio";
        estacion = "Verano";
        break;
    case 7:
        mes = "Julio";
        estacion = "Verano";
        break;
    case 8:
        mes = "Agosto";
        estacion = "Verano";
        break;
    case 9:
        mes = "Septiembre";
        estacion = "Otoño";
        break;
    case 10:
        mes = "Octubre";
        estacion = "Otoño";
        break;
    case 11:
        mes = "Noviembre";
        estacion = "Otoño";
        break;
}

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);



numeroMes = 12;
invierno = "estacion";
mes = "diciembre";

numeroMes = 12;
estacion = "";
mes = "";

//Respuesta
if (numeroMes === 12 || numeroMes === 1 || numeroMes === 2) {
    estacion = "Invierno";
    if (numeroMes === 12) mes = "Diciembre";
    else if (numeroMes === 1) mes = "Enero";
    else mes = "Febrero";
  }
  else if (numeroMes >= 3 && numeroMes <= 5) {
    estacion = "Primavera";
    if (numeroMes === 3) mes = "Marzo";
    else if (numeroMes === 4) mes = "Abril";
    else mes = "Mayo";
  }
  else if (numeroMes >= 6 && numeroMes <= 8) {
    estacion = "Verano";
    if (numeroMes === 6) mes = "Junio";
    else if (numeroMes === 7) mes = "Julio";
    else mes = "Agosto";
  }
  else if (numeroMes >= 9 && numeroMes <= 11) {
    estacion = "Otoño";
    if (numeroMes === 9) mes = "Septiembre";
    else if (numeroMes === 10) mes = "Octubre";
    else mes = "Noviembre";
  }
  else {
    estacion = "No se encontro";
    mes = "No se encontro";
  }
  console.log("(Alan)El mes de " + mes + " se encuentra en la estación " + estacion);


let online = true;
let active = true;
if(online) {
  if (active) {
    console.log('James')
  }
}

online && console.log("james") || active
