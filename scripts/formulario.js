console.log("Sesión JS06 Formularios");

//const form = document.getElementById("registro");
const objForm = document.forms["registro"];//Con esto le indicamos que hacemos referencia al formulario.

                      //( evento, funciónCallBack )
objForm.addEventListener('submit', event =>{
    event.preventDefault();//Previene que se eliminen los datos del formulario.
    console.log("El evento submit se ha generado");
    let email = objForm.elements['inputEmail4'].value;
    console.log(email);
    console.log(objForm.elements['inputPassword4'].value );

});