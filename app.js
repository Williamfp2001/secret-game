

//let parrafo = document.querySelector("p"); //conecta con el parrafo
//parrafo.innerHTML = "Indica un número del 1 al 10";

//function asignarTextoElemento() {
//    let titulo = document.querySelector("h1"); //conectar con HTML
//    titulo.innerHTML = "JUEGO DEL NUMERO SECRETO";
//}
let numeroSecreto = 0; //la varaible es igual a la funcion, es decir, se llama a la accion de dicha funcion
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //conectar con HTML
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario == numeroSecreto) { //comparamos valores
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos == 1 ? "intento!" : "intentos!"}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //Habilita el boton de "Nuevo Juego cuando se termina de jugar"
    
    } else {
        //Acciones cuando el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es Menor");
        } else {
            asignarTextoElemento("p", "El número secreto es Mayor");
        }
        intentos++; //se incrementa cada que falla el ususario
        limpiarCaja(); //se limpia la caja cada que no se acierta
    }
    return; 
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}  

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1; //retorna el valor de la variable
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) { //Para analizar el total de numeros sorteados (se resuelve el problema de la recursividad)
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) { //Validar Si el numero generado SI esta incluido en la lista
            return generarNumeroSecreto(); //SI esta, generar nuero numero por medio de la RECURSIBIDAD -Llamarse a si misma la funcion-
        } else { //cuando el numero aleatorio no esta incluido en la lista
            listaNumerosSorteados.push(numeroGenerado); //se incluye el numero generado
            return numeroGenerado;
        }
    }
        
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "JUEGO DEL NUMERO SECRETO!");    //Indicar mensaje de intervalo de numeros
    asignarTextoElemento("P", `Indica un número del 1 al ${numeroMaximo}`);    //Indicar mensaje de intervalo de numeros
    numeroSecreto = generarNumeroSecreto();     //Generar el numero aleatorio
    intentos = 1;    //Reiniciar el numero de intentos
}


function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Reiniciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el botono de "Nuevo Juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();



