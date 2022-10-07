//console.log("JS07 Asincronía");//Línea del tiempo: Forma "Síncrona" 8---8---8---8
                               //"Asíncrono"
                               //8---8---8---8---8
                               //    |       |
                               //    8-------8
                               //Aparecen en ese orden: 01,02,03,01.5
                               //Con este se detiene --> clearInterval() Method


//console.log("01- Primera instrucción");

//SetTimout( funcion Callback, tiempo_para ejecutar*esta en milisegundos*);
//setTimeout( ()=> console.log("01.5 Holi crayoli") , 3000 );
//const temporizador = (retardo, msj) =>{
    //setTimeout( ()=> console.log(msj), retardo);
// }

//const intervalo = ( tiempo, msj  ) => {
    //setInterval( ()=>console.log(msj), tiempo )
// }

//temporizador(5000, "02- Segunda instrucción");
//intervalo(2000, "Ya me aburrí");
//console.log("03- Tercera instrucción");

//******************************************* */
//API Fetch.
//console.log("01- Antes de la solicitud fetch")
//Asíncrono                        Respuesta en then; 1 solo parámetro no necesita paréntesis
//function solicitudFetch(userToFind){
    //fetch("https://reqres.in/api/users?delay=3")
    //.then((response) => response.json)
    //.then((conversion) => {
        //let encontrado = conversion.data.find( //Sin esto no podemos leer el dato
            //( data => data.first_name === userToFind );

   // }
// }
//fetch("https://reqres.in/api/users?delay=3")//Solicitud (Con retardo)
//fetch("https://reqres.in/api/users?page=1")//Solicitud  (Sin retardo)

    //.then( response=> response.json() )//La solicitud la obtiene response

    //.then( conversion=>{ 
        //console.log(conversion);
        //Buscando a Michael
        //console.log(conversion.data[0].first_name); //para el nombre
        //console.log(conversion.data[0].email); //para el correo

        //1° resolución let {email, first_name} = conversion.data[0];
        //              console.log(first_name, email);
        //              console.log(conversion.data);
        //
        //let encontrado = conversion.data.find( data => data first_name==="Michael" );
        //
        //2° 
        //let encontrado = conversion.data.find( 
            //( data => data.first_name === userToFind );
    //function leerUsuario(usuario){
        //console.log("Usuario buscar:" + usuario)
        // );
    //}
         //let objUser = document.getElementById("user-name");//Referencia
        // objUser.value = `${encontrado.first_name} tiene ${encontrado.email}`;//Concatenación de nombre y correo
   // });

//console.log("03- Después de la solicitud fetch");//El resultado da un objeto, un objeto tiene llaves de apertura y de cierre

//--function usarLocalStorage(){

// }

//--console.log(encontrado);
      //--let objUser = document.getElementById("user-name");
      //--let objEmail = document.getElementById("user-email");
      //--objUser.value= encontrado.first_name;
      //--objEmail.value= encontrado.email;
      //---------Guardar datos-----------------------
      //--localSrotage.setItem('clave', valor)
      //--localstorage.setItem("name", objUser.value);
      //--localstorage.setItem("email", objEmail.value);
      //--Aplicación-->Almacenamiento local-->http-->Clave, Valor

      //Para convertir un objeto a JSON: JSON.stringify( obj )
      //localStorage.setItem("user", JSON.stringify( user ) );
      //usarLocalStorage() ---> Se guarda localmente
      //Para convertir un JSON a objeto: JSON.parse( texto ) ; response.json()
      //const user = JSON.parse(localStorage.getItem("user") );
      //Leer local storage -- const user = JSON.parse(localStorage.getItem("user") );
      //if(user) {
      //  leerLocalStorage
      // }
      //else {
      //  solicitudFetch(usuario); 
      // }

//-----------------------------Código Serch**

console.log("JS07 asincronia");

console.log("01- Primera instrucción");

//SetTimeout( funcion Callback , tiempo_para ejecutar(ms) );
//setTimeout( ()=> console.log("01.5 Holi Crayoli")  , 3000 );
const temporizador = (retardo, msj) => {
  setTimeout(() => console.log(msj), retardo);
};

const intervalo = (tiempo, msj) => {
  setInterval(() => console.log(msj), tiempo);
};

//temporizador(5000, "02- Segunda instrucción");
//intervalo( 2000, "Holi Crayoli" );
console.log("03- Tercera instrucción");

//***************************************************** */
// API Fetch.

console.log("01- Antes de la solicitud fetch");

function solicitudFetch(userToFind) {
  fetch("https://reqres.in/api/users?delay=3")//Promesa ; quitamos el "n" en "in"
    .then((response) => response.json())
    .then((conversion) => {
      //console.log(conversion);
      //Buscando a Michael
      //console.log(conversion.data[0].first_name);
      //console.log(conversion.data[0].email);
      /* let { email, first_name } = conversion.data[0];
      console.log(first_name, email);
      console.log(conversion.data);
      */
      let encontrado = conversion.data.find(
        (data) => data.first_name === userToFind
      );
      console.log(encontrado);
      let objUser = document.getElementById("user-name");
      let objEmail = document.getElementById("user-email");
      objUser.value= encontrado.first_name;
      objEmail.value= encontrado.email;
      usarLocalStorage();
      return "hola";
    })
    .then ( msj => console.log("Retorno del then anterior:" + msj) )
    .catch ( err => {
        //Procesando el error
        console.log(err) 
      });
}

//function error (err){
    //console.log(err)//Función callBack
// }

function leerUsuario(usuario){
    console.log("Usuario a buscar:" + usuario);
    const user =  JSON.parse(  localStorage.getItem("user")  );  
    if( user &&  user.time >  Date.now()  ){
        leerLocalStorage();
    }
    else{
        solicitudFetch(usuario);
    }   
}

function usarLocalStorage(){
    let objUser = document.getElementById("user-name");
    let objEmail = document.getElementById("user-email");
    // localStorage.setItem('clave', valor )
    let user = {
        name: objUser.value,
        email: objEmail.value,
        time: Date.now()+60000  // leer el tiempo actual y sumarle 1 minuto.
    }
    localStorage.setItem("name", objUser.value);
    localStorage.setItem("email", objEmail.value);
    //Para convertir un objeto a JSON: JSON.stringify( Obj )
    localStorage.setItem("user",  JSON.stringify( user) );
}

function leerLocalStorage(){
    const objUser = document.getElementById("user-name");
    const objEmail = document.getElementById("user-email");

    //Convertir de JSON a objeto:  JSON.parse( texto  );
    const user =  JSON.parse(  localStorage.getItem("user")  );    
    console.log(user);
    console.log(typeof user);
    objUser.value= user.name;
    objEmail.value= user.email;
}


//Asíncrono
function miPromesa(){
                                   //Parámetros
    let promesa  = new Promise( ( resolve, reject )=>{  //Así definimos una promesa
        const expresion = false; //Variable, podemos simular cualqier cosa

        if(expresion) resolve ("La promesa fue exitosa");//Puedo devolver cualquier tipo de dato
        else reject ("La promesa NO se resolvió");
    });

    promesa//Consumiendo la promesa
      .then( response => console.log(response) )
      .catch( error => console.log(error) )
      .finally( console.log("Se terminó de ejecutar la promesa") );
    
}

//miPromesa();

let divison = (a, b) => {
    return new Promise( (resolve, reject)=>{ 
        if (b!==0) resolve (a/b);
        else reject("No se puede realizar una divisón entre cero")
    });
}

 /*     //a,b
divison(4,0)
    .then(resultado => console.log("El resultado de la div: " + resultado) )
    .catch( error => console.log("Error en la división "+ error));

divison(4,2)
    .then(resultado => console.log("El resultado de la div: " + resultado) )
    .catch( error => console.log("Error en la división "+ error)); */

//Aysnc, await.
async function operaciones(){

    //Los bloques try y catch nos sirven para el manejo de errores
    try{
        const result1 = await divison(4,0);//Función asíncrona
    console.log("El resultado de la div es: " + result1);
    }
    catch (error){//Cachar el error y que no se detenga
        console.log("No se pudo realizar la división: " + error)
    }

    try{
        const result2 = await divison(4,2);
    console.log("El resultado de la div es: " + result2);
    }
    catch (error){
        console.log("No se pudo realizar la división: " + error)
    }

}
operaciones();