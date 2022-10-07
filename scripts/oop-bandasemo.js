import {Banda} from './bandasemo.js';
import {BandaEmo} from './bandas-emo.js';

console.log("JS08 Un día triste como todas los démas");

const angelesAzules = new Banda("Angeles Azules", 50, "Mexico");//clase Banda

console.log(angelesAzules.imprimir() ); //Método 

const FOB = new Banda("FOB", 4, "USA");
console.log(FOB.imprimir() );

const pXNDX = new Banda("PXNDX", 4, "Mexico");
console.log(pXNDX.imprimir() );
//Encapsulación = proteger los tados u objetos

//---Verificar la fecha de creación---

console.log(`Fecha de creación de ${angelesAzules.nombre} fue el ${angelesAzules.creacion}`);
console.log(`Fecha de creación de ${pXNDX.nombre} fue el ${pXNDX.creacion}`);
/*pXNDX.creacion = "sepa tu";//Este atributo crea nuevos atributos
pXNDX.nuevoAtributo = "Nuevos datos";
console.log(`Fecha de creación de ${pXNDX.nombre} fue el ${pXNDX.creacion}`);*/

angelesAzules.nParticipantes += 1;
console.log(angelesAzules.imprimir() );

//Instanciar una banda Emo
const paramore = new BandaEmo("Paramore", 3, "USA", "3.5");
console.log( paramore.imprimir() );
//console.log( paramore.imprimirEmo() );

//Usando polimorfismo--->
muestraDatos(angelesAzules);
muestraDatos(paramore);
muestraDatos("Cámara ya que se acabe la clase!");

function muestraDatos( objBanda ){
    let esTipoBanda = objBanda instanceof Banda;
    console.log("El dato es del tipo Banda (o heredado): " + esTipoBanda);
    if(esTipoBanda){ 
    console.log("=== Atención, toquín de ===")
    console.log(objBanda.imprimir() );
    console.log("=== No te lo pierdas ===")
    }
}