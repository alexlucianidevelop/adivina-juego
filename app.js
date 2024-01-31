// let numeroMaximoPosible = 100;
// let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
// let numeroUsuario = 0;
// let intentos = 1;
// //let palabraVeces = 'vez';
// let maximosIntentos = 6;

// //"while es el "loops o bucles con jerarquia
// //el operador diferente de ('!=') comparar y si es "verdadero" cuando son "es diferentes de"
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

// let contador = 1;
// while (contador <= 10) {
//     alert(contador);
//     contador++;
// }

// let contador = 10;
// while (contador >= 0) {
//     alert(contador);
//     contador--;
// }
// let numeroUsuario = parseInt(prompt("Ingrese un numero"));
// let cronoContador = 0;
// while (numeroUsuario > cronoContador) {
//     cronoContador++; 
//     alert(`${cronoContador}`);
// }
// alert("Termino conteo");

let numeroUsuario = 0
let contador = 0;
while (contador < numeroUsuario) {
    numeroUsuario = parseInt(prompt("Introduce el numero para empezar a contar desde cero"));
    contador++;
    alert(`${contador}`);    
}
alert(`termino conteo, el numero que ingresaste es : ${numeroUsuario}`);