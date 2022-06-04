// FUNCIONES
// Elementos que creamos con la intención de agrupar instrucciones
// a ser utilizadas una o más veces, a lo largo del script

// Declaracion--------------

function sumar(a, b){
    return a + b
}

//Invocacion-----------
// sumar(3, 5)

//Invocacion repetida-----------
// sumar(2, 5)
// sumar(5, 9)

//Invocacion de forma consecutiva-------------

let repeticiones = +(prompt("Ingrese la cantidad de repeticiones: "));
for(let i = 1; i <= repeticiones; i++){
    let a = +(prompt("Ingrese el primer numero a sumar: "));
    let b = +(prompt("Ingrese el segundo numero a sumar: "));
    let resultado = sumar (a, b);
    alert(`El resultado n°: ${i} es ${resultado}`) // 'El resultado' + i + 
}

//Variables globales ---------------------
// Variables globales: si una variable se declara fuera de cualquier función o bloque, automáticamente se transforma en variable global

// let resultado = 0
// function sumar(a, b) {
//     resultado = a + b;
// }
// sumar(5,6);

// console.log(resultado);
//Se puede acceder a la variable resultado porque es global

// Variables locales: -----------------------
//cuando definimos una variable dentro de una función o bloque, será accesible sólo dentro de ese espacio. Si quisiéramos utilizarla por fuera, la variable no existirá para el intérprete

// function sumar(a, b) {
//     let resultado = a + b;
// }
// console.log(resultado);
//No se puede acceder a la variable resultado fuera del bloque

//Funciones anonimas --------------
//Se define sin nombre, se usan para ser pasadas como parametro o asignarlas a variables.

//const suma = function (a, b) { return a + b}

//Funciones flecha---------------
//son una forma más acotada de declarar funciones anónimas

//const suma = (a, b) => {return a + b}

//RESUMEN FUNCIONES---------------------------------
//Funcion declarada
// function sumar (a, b){
//     return a + b;
// }

//Funcion anonima
//const sumar = function(a, b){ return a + b }

//Funcion flecha
//const sumar = (a, b) => a + b;