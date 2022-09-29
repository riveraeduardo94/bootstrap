console.log("Sesión JS05 Operadores");

//El que tenga mayor número de jararquía () <---- Es lo primero que se va a resolver
//--------------------------------------  . <---- El puntito tiene 2da prioridad
//-------------------------------------- [] <---- 3ra prioridad

//Operadores aritméticos:
// + - / * % **

let suma = 3 * 4;

console.log("Valor de suma = " + suma);

//Operadores aritméticos:

suma = 10;
suma += 10;  // suma = suma + 5;

//Operadores de asignación:

let numero;
numero = 10;
numero += 10;  //numero = numero +5;
numero -=5;   //numero = numero -5;

console.log("Valor de número= " + (numero+=3));//18
numero *=2;
numero /=3;
numero %=2;
numero **=3;

console.log("Valor de número= " + numero++);//0
console.log("Valor de número= " + ++numero);//2

//Operadores lógicos && || !
let valorB = true && true;
valorB = true && true || !false && true && "Hola"; //De izquierda a derecha

console.log("El valor booleano " + valorB);
