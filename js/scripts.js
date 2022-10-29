// querySelector
const heading = document.querySelector('.header__texto h2'); //retorna 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para Enlace';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

//getElementById

//const heading2 = document.getElementById('#heading');

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


// Eventos

// console.log(1);

// window.addEventListener('load', function(){ //Esperar a que el JS y los archivos que dependen del html esten listos
//     console.log(2);
// });

// window.onload = function(){
//     console.log(3);   
// }

// document.addEventListener('DOMContentLoaded', function(){   //Solo espera a que se descargue el HTML, pero no espera CSS i imagenes
//     console.log(4);
// });


// console.log(5);

// window.onscroll = function(){
//     console.log('scrolling...')
// }


// Seleccionar elemntos y asociarles un nombre
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     // Validar un formulario

//     console.log('Enviando formulario');
// });


//Eventos de los Inputs y TextArea

///Variables
const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

//EventListener
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar Formulario
    const {nombre, email, mensaje} = datos;
    
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; //Corta la ejecucuon del codigo
    }
    //Crear la alerta de enciar correctamente
    mostrarAlerta('Mensaje enviado correctamente');

});

//Funciones
function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;


    //console.log(datos);
};


function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    //Desaparezca en 5seg
    setTimeout(() =>{
        alerta.remove();
    }, 5000)
}









