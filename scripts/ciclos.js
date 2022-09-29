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

Array.from(`pepe pecas pica papas pero`).map(element=> (element == "e") * 1 ).reduce((a,b)=>a+b);

const contarCaracteres = (frase, character) => frase.split("").filter(elemento => elemento === character).length

`pepe pecas pica papas pero`.split("").filter(elemento => elemento === 'p').length


`pepe pecas pica papas pero`
.toLowerCase()//Convierte en minusculas.
.split("") //Separa el texto en un arreglo.
.filter(elemento => elemento === 'p') //Nuevo arreglo, que cumpla la condición.
//.filter (elemento => elemento === 'p' || elemento === 'P') 
.length //Obtiene la cantidad de elementos de un arreglo.

`Pepe Pecas Pica Papas Pero`.match("");//Busca lo que le indicamos dentro del paréntesis

//let char = "p";
//let regex = new RegExp( char, gi );

//-----------------------------------------------------
console.log("\n #####Ciclo For #####")
/**
 * Sintaxis del ciclo for
 *  for (inicio(variable)'1'; condición'2'(si es falsa se sale del ciclo for); expresiónFinal'4' ) {
 *       instrucciones'3'; //Si la condición es verdadera se ejecutan las instrucciones.
 *  }
 */

// (let i=0; i<=10;  ++i) {
    //console.log("El valor de la iteración es: " + i);
// }

for (let i=0; i<=10; ++i)
     console.log("El valor de la iteración es: " + i);
     //console.log("El valor de la iteración +1 = : " + (i*2) );
    

console.log("\n### For con continue y break ###");
/**
 * La instrucción Break, rompe el ciclo for, num. de iteración
 * en la que se encuentre.
 * La instrucción Continue, interrumpe la iteración en curso y
 * continua a la sig. iteración. 
 */
let ch18 = ["Abelardo", "Audrey", "Angel", "Sharon", "Bren", "Pato Lucas", "Víctor", "Alex"];
/*for (let i = 0; i< ch18.length; i++) {
    if(ch18[i] === "Pato Lucas"){
        console.warn("Atención esta persona no pertenece a la ch18: " + ch18[i] );
        break;
    }
     console.log("Persona de ch18: " + ch18[i]);
    
}*/


for (let i = 0; i< ch18.length; i++) {
    if( ch18[i] !== "Pato Lucas") 
    continue;
    console.warn("Atención esta persona no pertenece a la ch18: " + ch18[i] );
}


console.log("\n### Matrices ###")

//const generation = [ [] , [] , [] ]; //Arreglo de 2 dimensiones.
const generation = [ 
      //Columna    //Columna   //Columna  //Columna
    ["Abelardo" , "Audrey"   , "Angel"  , "Sharon" , "Bren", "Pato Lucas", "Víctor", "Alex"] , //Fila
    ["Yosceline", "Mariana"  , "Karen"  , "Pedro"] ,                                           //Fila
    ["Emiliano" , "Jonathan" , "Esteban", "El Bromas"]                                         //Fila
];

//for (let i =0 ; i<generation.length; i++) {
  
//   }



//Iterar todos los elmentos del arreglo:
for(let i=0; i<generation.length;i++){
    console.log(`Los integrantes de la corte ${i+1} son: `)
    for(let j=0; j<generation[i].length;j++){
        console.log(generation[i][j]);// [i ¡Fila!] [j ¡Columna!]
    }
}

//console.log("Próxima presentación :" + generation [1][2]); //Estp apunta a Karen.

//Detectar a "El Bromas" e indicar on una alerta la cohorte donde se encuentra.
/*for(let i=0; i<generation.length;i++){
    for (let j = 0; j < generation[i].length; j++)
    if( generation[i][j] == "El Bromas") 
    console.warn(`El bromas se encuentra en la corte ${i+1} en la posicion ${j+1} `);
    continue;
}*/

continua_buscando:
for (let i = 0; i < generation.length; i++) {
    for (let j = 0; j < generation[i].length; j++) {
      if(generation[i][j] === 'El bromas'){
        console.warn(`El bromas se encuentra en la corte ${i} en la posicion ${j} `);
        //continue continua_buscando; //Se va a la iteracion del primer for, por lo que ¡parte! el ciclo.
        break continua_buscando;
      }
      console.log(`Número de iteración ${i}-${j} `);
    }
  }
  

  //################## Ciclo While ##################
  console.log("\n### Ciclo While ###");
  /**
   * Sintaxis: //
   *     while (condición) {
   *           instrucción;
   * }
   */
 
  //Encontrar un nímero que pensé del 1 al 10;
  /*let findNumber= true;
  let number = 1;
  while( findNumber) {
    if (confirm(`¿El número es? ${number}?`) ) {
        findNumber = false;
        alert (`Fántastico, tu número es el ${number}`);
         }
    else if( number>=10) { 
        findNumber = false;
        alert (`Humano, ya vete, no sabes jugar`);
        }
    number++;
  }*/

  /** Primero hacemos la acción y luego preguntamos.
   * Sintaxis do-while
   *    do{
   * 
   *   } while ( condición );
   * 
   */

  let bandera = false;
  while ( bandera ) { //Permiso
    console.log("Mensaje dentro del ciclo while")
  }

//Más vale pedir perdón que pedir permiso.

  do { //Perdón
    console.log("Mensaje dentro del do-while")
  } while (  bandera  )//Se va a ejecutar aunque sea 1 vez.
//------------------------------------
  let contador= 0;
  do {
    console.log("Mensaje dentro del do-while")

  } while (  ++contador<10  ); //NO EJECUTAR EN CONSOLA

  contador = 3;//Contador empieza en 3
  while( contador++<10 ){ //Post incremento 3-4-1 , 4-5-2 , 5-6-3 , 6-7-4...(Contador-PostImpresion-Impresion)
    console.log("Valor de contador: " + contador)
  }
  console.log("Valor final de contador =" + contador );