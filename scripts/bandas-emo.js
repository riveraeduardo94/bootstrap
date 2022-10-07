import {Banda} from './bandasemo.js';

class BandaEmo extends Banda  {
    #nivelTristeza;
    constructor(nombre, nParticipantes, pais, nivelTristeza){
        super(nombre, nParticipantes, pais);
        this.#nivelTristeza = nivelTristeza;
    }

    imprimir(){
        return `${super.imprimir()} con el nivel de tristeza de ${this.#nivelTristeza}`
    }

}

export {BandaEmo};