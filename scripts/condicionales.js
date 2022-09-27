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

if ( edad > 24 ) console.log("La edad es mayor a 25"); //¡=> sintaxis de función flecha! //Else siempre lleva IF
else {
    console.log("La edad es menor a 25"); //Mas de 1 instrucción usamos esas madres ----> {}
    console.log("Seguiremos evaluando");
}

console.log("<----Declaración despues del IF ***");


//+++++++++++++Operador ternario++++++++++++++++
// sintaxis:      condición ? condición_verdadera : condición_falsa   
console.log (`La edad es ${ edad>24 ? "mayor":"menor" } a 25`);
console.log (`La edad es ${ edad===25 ? "es igual": (edad>24 ? "mayor":"menor") } a 25`); //Los parentesis de edad>24 no son necesarios pero lo hace mas entendible