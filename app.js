// let numeroMaximoPosible = 100;
// let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
// let numeroUsuario = 0;
// let intentos = 1;
// //let palabraVeces = 'vez';
// let maximosIntentos = 6;

// // "while es el "loops o bucles con jerarquia
// // el operador diferente de ('!=') comparar y si es "verdadero" cuando son "es diferentes de"
// while (numeroUsuario != numeroSecreto){
//     numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));
//     console.log(typeof(numeroUsuario));
//    // el operador ('==?) es igual cuando la variable A es igual a la variable B
//     if (numeroUsuario == numeroSecreto) {
//         //Acertamos, fue verdadera la condición
//         // templey string = ("${})") llama a la variable
//         //{se llama string}, ? interrogacion se refiere a if(si) y 2 puntos (:) es sino o "else"
//     alert(`Acertaste, el número es : ${numeroUsuario}. lo hichiste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
//     //else se "si no"
//     } else{
//         if (numeroUsuario > numeroSecreto) {
//             alert('El numero secreto es menor');
//         } else {
//             alert('El numero secreto es mayor');
//         }
//        //intentos = intentos + 1;
//        //intentos += 1;
//        intentos++;
//        //palabraVeces = "veces";
//        if (intentos > maximosIntentos) {
//             alert(`llegaste al número máximo de ${maximosIntentos} intentos`);
//             break;  
//        }
//     }
// }    
// Cuando utilizamos bucles con contadores, debemos asegurarnos de que en algún momento alcancen la condición de parada 
// del bucle. En el código anterior, el contador no tiene su valor alterado, y para resolver el bucle infinito, 
// simplemente debes decrementarlo en cada iteración, agregando la línea 'contador--' dentro del bucle.

// let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite el numero:'));
//     soma += numero;
// }

// let promedio = soma / qtdNumeros;

// console.log(promedio);






// Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
// Declara una variable llamada nombre y asígnale el valor "Luna".
// Crea una variable llamada edady asígnale el valor 25.
// Establece una variable numeroDeVentas y asígnale el valor 50.
// Establece una variable saldoDisponible y asígnale el valor 1000.
// Muestra una alerta con el texto "¡Error! Completa todos los campos".
// Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
// Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
// Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
// Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
// alert("¡Bienvenida y bievenido a nuestro sitio web!");
// let nombre = prompt('Nombre del Usuario');
// let edad = prompt('Edad del Usuario');
// if (edad >= 18) {
//     alert('¡Puedes obtener tu licencia de conducir!');
// } 
// let mensajeDeError = ("¡Error! Completa todos los campos");
// alert(mensajeDeError);
// let numeroDeVentas = 50;
// let saldoDisponible = 1000;


// let contraseniaDelSistema = "contraseniaPrueba!";

// let contrasenia = prompt("Ingrese la contraseña del sistema:");

// if (contrasenia = contraseniaDelSistema){
//     alert("Acceso al sistema garantizado");
// }
// variable edad
// let edad = prompt("Ingrese su edad:");
// //si es mayor de 18 o igual 
// if (edad >= 18) {
//   console.log("Eres mayor de edad.");
// } else {
//   console.log("Eres menor de edad.");
// }
//Pregunta de "TRABAJANDO CON CONDICIONALES"
// let porcentajeDescuento = 0;
// let cantidadDeMillas = prompt("Ingrese la cantidad de millas");
// if (cantidadDeMillas > 30000) {
//     porcentajeDescuento = porcentajeDescuento + 20;
// } else {
//     if (cantidadDeMillas > 5000) {
//         porcentajeDescuento = porcentajeDescuento + 10;
//     }
// }
//DESAFIO
// 1.Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
// 2.Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
// 3.Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
// 4.Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
// 5.Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
    contador--
}

let promedio = soma / qtdNumeros;

console.log(promedio);




