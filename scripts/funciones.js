console.log("Sesión JS02 funciones");

//+++++++++++++Función declarada+++++++++++++
//llamado de la función delcarada.
console.log("Multiplica 5 * 6= " + multiplica(5,6));

/**
 * Este es un ejemplo de una función declarada (function declaration, function statement).
 * Una característica de las funciones declaradas es que tiene un hoisting (elevación).
 * Reliza la maltupliación de 2 números
 * @param {Number} a multiplicando 1
 * @param {Number} b multiplicando 2
 * @returns resultado de la multipliación de a*b
 */
function multiplica(a, b){
    //let multiplica = a * b; Es mas lento
    //return multiplica; Es mas lento
    return a* b;
}

console.log("Multiplica 5 * 6= " + multiplica(5,6));


//+++++++++++++Función expresada+++++++++++++
/**
 * Las funciones expresadas (function expressions)
 * son declardas dentro de la asisganción de una variable.
 * Estas fuciones pueden ser anónimas (no tener nombre)
 * Las funciones expresadas no tiene hoisting.
 */

/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns El resultado de a+b
 */

const suma = function (a, b) {return a+b;}

console.log("El resultado es 56 + 4 = " + suma(56, 4));


//+++++++++++++Funciones autoinvocadas+++++++++++++

/**
 * Las funciones autoinvocadas (self-invoking functions)
 * Pueden ser anónimas y se autoejecutan() en su declaración.
 */

(function (){
    console.log("==============");
    console.log("Holi crayoli")
    console.log("==============");
})();


//+++++++++++++Funciones flecha+++++++++++++

/**
 * Las funciones flecha (arrow functions) son funciones similares a las
 * declaradas, pero no requieren la palabra "function"
 * y si tienen una sola instrucción y es el retorne, no 
 * requiere la instrucción "return".
 */

/**
 * Realiza la operación de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns La resta de a-b
 */
const resta = (a, b) => a-b;

console.log("La resta de 10-5 = " + resta(10,5));


//+++++++++++++Parámetros default+++++++++++++
/**
 * Función con parámetros inicializados.
 */


function divide(a,b=0){
    return a/b;
}

console.log("La división de a/b =" + divide(4))

//++++++++++++Funciones recursivas++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}

console.log("Factorial de 4 = " + factorial(4));


//++++++++++++Rest parameters++++++++++++++

//(parameters) => operation;
// (param1, param2) =>    

//return data
//};

//function sum(a, b, ...resto){
    //let suma = a+b;
    //resto.forEach(element => { //Función flecha ¡array.forEach( *aqui va la función*  )!
        //suma= suma + element; es la misma función pero mas larga
        //suma+= element;
        
    //});
    //return suma;
//}

//console.log("El resultado de sumar varios números es: " + sum(2,3,5,7,3));

 function sum( a, b, ...resto){
        let suma = a+b;
    resto.forEach( dato => {suma+=dato;});
    return suma;
 }

console.log("El resultado de sumar varios números es: " + sum(2,3,5,1));