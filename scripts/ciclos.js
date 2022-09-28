console.log("Sesión J04 Ciclos");

/**
 * La razón del porqué se recomienda declarar un arreglo
 * u objeto con const, es para evitar que se cambie el *tipo* de dato.
 */

let arrayLet = [1,2,3,4]; //Con let puedo modificar el tipo de dato
const myArray = [10,11,12]; //Con const NO puedo modificar el tipo de dato  ¡Tipo de dato = arreglo! 

//arrayLet = "Holi crayoli";
myArray.push("Holi crayoli 2");
myArray[myArray.length] = "Holi crayoli 3";
myArray[5] = "XD"; //Índice 5

//console.log(arrayLet);

myArray[3] = "Eduardo"; //Se reemplaza Holi craoyli 2

function reemplazar(myArray) {
for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] === "Holi crayoli 3") myArray[index] = "Omar";
    }
      return myArray;
}

/*
function reemplazarMargarita(myArray){
    return evaluacion ? myArray[myArray.indexOf('XD')] : myArray.indexOf('XD'); 

}*/

//Rafa
function reemplazarR(myArray, stringToReplace, newString) {
    const index = myArray.indexOf(stringToReplace) //Si no existe retorna -1
    if (index >-1)myArray[index] = newString;
    return myArray;
}
console.log(reemplazarR(myArray, "xd456", "Rafa"));

//Rafa 2.0
/*function reemplazarOInsertar(myArray, stringToReplace, newString) {
    const reemplaza = myArray.includes(stringToReplace) //condicion ? true : false
    ? myArray[myArray.indexOf(stringToReplace) ] =newString  // myArray[i] = newData;
    : myArray;

    return reemplaza;
}
console.log(myArray);
console.log(reemplazarOInsertar(myArray, "Holi mcrayoli", "Masterchief"));
console.log(reemplazarR(myArray, 11, "Masterchief"));*/

//Rafa 2.5
function reemplazarOInsertar(myA, stringToReplace, newString) {
    return  myA.includes(stringToReplace) //condicon ? true : false
         ? myA[ myA.indexOf(stringToReplace) ]= newString  // myArray[i] = newData;
         : null;           
}
console.log(myArray);
console.log(reemplazarOInsertar(myArray, "Holi crayoli 3", "Rodrigo"));
console.log(myArray);
//console.log(reemplazar(myArray));

//---------------------------------------------------------------------

/**
 * FIFO:
 *           
 *  E3 E2 E1 ---> [ arreglo ] ---> E3 E2 E1
 * 
 * LIFO:
 *           
 *  E3 E2 E1 ---> [ arreglo ] ---> E3 E2 E1 
 * 
 */
 console.log("#####  FIFO LIFO ######");
                   //   1            2        3 
const perecederos = ["manzanas", "quesos", "fresa"];

//Agregamos un elemento al inicio del arreglo:
perecederos.push("leche"); //será mi 4to elemento
console.log(perecederos);
//Sacamos el primer elemento del arreglo:
console.log("Elemento eliminado:" + perecederos.shift() )
console.log(perecederos);
// LIFO
console.log("/n ---- LIFO ----");
const tienda = [...perecederos];//Se clona el arreglo const tienda = perecederos.slice();
console.log(tienda);
//Agregamos el primer elemento del arreglo:
perecederos.push("el amor")//Será mi 4to elemento
console.log(tienda);
//Sacamos el último elemento en entrar
console.log("Elemento: " + tienda.pop() );
console.log(tienda);
//----------------------------------------
//Modificar el arreglo
// [2,4,5,6] x 2 = [4,8,10,12]
const arrayNumbers = [1, 2, 3, 4, 5];


   function duplicar (array1){
    let total = []
     for (let i=0; i<array1.length; i++){
        //total.push(array1[i] * 2)
        //array1[i]*=2; //array1[i] = array[i] * 2
        //total.push(array1[i] * 2);
        total*=2;
     }
       return total;
   }

//Refactorización
const duplicated = arrayNumbers.map(num => num * 2)


console.log("original" + arrayNumbers); 
console.log(duplicar (arrayNumbers));
console.log(duplicated)

//------------------------------------------------
//--------------------------------------------------------
console.log("##### Calccular el factorial de un número ######");

//--------------------------------------------------------
console.log('##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e" tiene ######');
 const myArrayPP = ["Pepe Pecas Pica Papas"];

 function buscarE(myArrayPP) {
    for (let index = 0; index < myArrayPP.length; index++) {
        if (myArrayPP[index] === "e");
        }
          return myArrayPP;
    }

    console.log(myArrayPP);