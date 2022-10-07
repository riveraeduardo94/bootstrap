/*
class Banda {
    //Se definen los atributos
#creacion;      //Encapsulamiento
#nombre;        //Encapsulamiento
#nParticipantes;//Encapsulamiento
#pais;          //Encapsulamiento
   // nombre;//Atributo de la clase
    //nParticipantes;
    //pais;

    constructor( nombre/*Parámetro de la clase*/ /*, nParticipantes, pais ){
        this.#nombre = nombre;
        this.#creacionnParticipantes = nParticipantes;
        this.#pais = pais;//Todo lo que lleve This es un atributo
                        //this.pais(Atributo) = pais(parametro)
        this.#creacion = new Date();//Con # encapsulamos el atributo
    }

    /***
     * Texto con los datos principales de la banda
     * @return mensaje con datos principales.
     */

    /*
    imprimir(){
        return `Grupo: ${this.#nombre} de ${this.#nParticipantes} integrantes del pais ${this.#pais}`//Regresa un string
    }

    //Get le da permiso a creacion de entrar
    get creacion (){ //Setter y Getter //Encapsular = proteger
        return this.#creacion;
    }

    get nParticipantes(){
        return this.#nParticipantes;
    }

    set nParticipantes(nuevoNumero){
        this.#nParticipantes = nuevoNumero;
    }

} 
*/

//----Código Serch----


class Banda {
    // Se definen los atributos
   #creacion;
   #nombre;
   #nParticipantes;
   #pais;

    constructor(nombre, nParticipantes, pais ){
        this.#nombre = nombre;
        this.#nParticipantes  = nParticipantes;
        this.#pais = pais;
        this.#creacion= new Date();        
    }
    /**
     * Texto con los datos principales de la banda
     * @returns mensaje con datos principales.
     */
    imprimir(){
        return `Grupo: ${this.#nombre} de ${this.#nParticipantes} integrantes, del país ${this.#pais}`
    }

    get creacion (){
        return this.#creacion;
    }

    get nParticipantes(){
        return this.#nParticipantes;
    }

    set nParticipantes(nuevoNumero){
        this.#nParticipantes = nuevoNumero;
    }
}

export {Banda}; 