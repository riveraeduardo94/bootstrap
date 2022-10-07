/*
console.log("Sesión JS08 - POO");

const miArreglo = [5,7,3,2];
const miArregloConstructor = new Array(5,7,3,2);//Instanciar objetos de una clase

console.log(miArreglo);
console.log(miArregloConstructor);
//Propiedades de mi arreglo
console.log(miArreglo.length );
console.log(miArregloConstructor.length );
//Método del arreglo
console.log( miArreglo.sort() );
console.log( miArregloConstructor.sort() );
//=========================================

let coraline ={
    region: [4,1,2],
    nombre: "Coraline y la puerta secreta",
    duracion: 100,
    genero: ["Animación", "Misterio", "Fantasía"],
    clasificacion: "B15",
    actores: [  //[{nombre: "", pais:""}, {} , {} ]
        {
            nombre: "Teri Hatcher",
            pais: "USA"
        },//, = separación de los datos del arreglo
        {
            nombre: "Jennifer Saunders",
            pais: "USA"
        },
        {
            nombre:  "Dakota Fanning",
            pais: "USA"
        }
    ],
    directores: {
        nombre: "Henry Selik",
        pais: "USA"
    },
    /*mostrarActores: () => {
        coralineforEach( (info) => 
           console.log(`${info.nombre} del pais ${info.pais}`)
        );*/
 /*       function mostrarActores () {
        //La palabra reservada This hace referencia al objeto que lo invoque
        this.actores.forEach( info=> {
            console.log(`${info.nombre} del pais ${info.pais}.`)
            } );
        }
    // },    

// };
//Accediendo al nombre
console.log("Pelicula: " + coraline.nombre);

coraline.actores.forEach( info => {
    console.log(`Actor: ${info.nombre} del país ${info.pais}`);
})
//console.log("¿Eres arreglo?" + Array.isArray(coraline.actores));

console.log("Actores: " + coraline.actores);

//Mostrando el director
coraline.directores.forEach( (infoDir) => {
    console.log(`El director es ${infoDir.nombre} originario de ${infoDir.pais}`);
});

//Cambiando la clasifiación
coraline.clasificacion = "C";
console.log("Clasifacion:" + coraline.clasificacion);*/




//----Código Serch----

console.log("Sesion JS08 OOP");

const miArreglo = [5, 7, 3, 2];
const miArregloConstructor = new Array(5, 7, 3, 2);

console.log(miArreglo);
console.log(miArregloConstructor);
//Propiedades del mi arreglo
console.log(miArreglo.length);
console.log(miArregloConstructor.length);
//Método del arreglo
console.log(miArreglo.sort());
console.log(miArregloConstructor.sort());
//=================================================

const coraline = {
  nombre: "Coraline y la puerta secreta",
  duracion: 100,
  genero: ["Animación", "Misterio", "Fantasía"],
  clasificacion: "B15",
  actores: [
    // [{nombre: "", pais:""} , {} , {} ]
    {
      nombre: "Teri Hatcher",
      pais: "USA",
    },
    {
      nombre: "Jennifer Saunders",
      pais: "UK",
    },
    {
      nombre: "Dakota Fanning",
      pais: "USA",
    },
  ],
  director: {
    nombre: "Henry Selik",
    pais: "USA",
  },
/*     mostrarActores: () => {
    coraline.actores.forEach((info) =>
      console.log(`${info.nombre} del país ${info.pais}`)
    ); 
  } */
   mostrarActores: function (){
    //La palabra reservada this hace referencia al objeto que lo invoque
    this.actores.forEach( (info) => 
      console.log(`${info.nombre} del país ${info.pais}`)
    );
  },
  /**
   * Mostrar todos los datos de la película
   */
   mostrarTodaInfo: function(){
    console.log("==*==*==*==*==*==*==*");
    console.log(this.nombre);
    console.log("Duración : " + this.duracion);
    this.genero.forEach( (info) =>{
      console.log(`Genero: ${info}`);
    });
    console.log("Clasificación :" + this.clasificacion);
    console.log('Actores:' );
    this.mostrarActores();
    console.log(`Director: ${this.director.nombre} del pais ${this.director.pais}` );
    console.log("==*==*==*==*==*==*==*");
  }

};

//Accediendo al nombre:
console.log("Película: " + coraline.nombre);
console.log("Eres arreglo?" + Array.isArray(coraline.actores));

coraline.actores.forEach((info) => {
  console.log(`Actor: ${info.nombre} del país ${info.pais}`);
});

//Mostrando el director:
console.log("Director: " + coraline.director.nombre);

//Cambiando la clasificación:
coraline.clasificacion = "C";
console.log("Clasificación: " + coraline.clasificacion);

//Agregando al actor: Ian McShane de UK, Daw French de UK.
coraline.actores.push({ nombre: "Ian McShane", pais: "UK" });
coraline.actores.push({ nombre: "Daw French", pais: "UK" });

//Iteramos los actores:
/* coraline.actores.forEach((info) => {
  console.log(`Actor: ${info.nombre} del país ${info.pais}`);
}); */
//coraline.mostrarActores();

coraline.mostrarTodaInfo();