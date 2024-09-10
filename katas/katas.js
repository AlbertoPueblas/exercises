
// //////////////////////
// // KATAS
// //////////////////////

// // 1 

// // Crea un programa el cual te pregunte por una nota del 0 al 10 y
// // dependiendo del número, te devuelva la siguiente clasificación.
// // Nota: Debes de usar el If.
// // 0 - 4: Insuficiente.
// // 5 - 6: Suficiente.
// // 7 - 8: Notable.
// // 9 - 10: Sobresaliente.

// // OPCION 1

// let nota = '';

// if (nota <= 4 && nota === 0){
//     console.log(`Insuficiente`);
// } else if (nota >4 && nota <= 6){
//     console.log(`Aprobado`);
// } else if (nota >6 && nota <=8 ){
//     console.log(`notable`);
// } else if (nota >8 && nota <=10){
//     console.log(`sobresaliente`);
// } else{
//     console.log(`Datos no validos`);
// }

// // OPCION 2

// let nota = 11
// let result;

// switch (nota) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         result = "insuficiente";
//         break;
//     case 5:
//     case 6:
//         result = `suficiente`;
//         break;
//     case 7:
//     case 8:
//         result = `notable`;
//         break;
//     case 9:
//     case 10:
//         result = `sobresaliente`;
//         break;

//     default:
//         result = 'parametros incorrectos';
// }
// console.log(result);

// //----------------------------------------------------------------------------------------

// 2

// // Crea un programa que pida al usuario un número, y de este, generé
// // su tabla de multiplicar del 0 al 10.

// // Nota: Debes de usar un While.

// let numero = +prompt(`introduce un número y te dare su tabla de multiplicar`)
// let i = 0

// while (i <= 10) {
//     let resultado = numero * i
//     console.log(`${numero} x ${resultado}`);
//     i++   
// }

// // Con bucle for.

// let numero = +prompt(`introduce un número y te dare su tabla de multiplicar`)

// for(let i = 0 ; i <= 10; i++){
//     let resultado = numero * i
//     console.log(`${numero} x ${i} = ${resultado}`);
// }

// //-------------------------------------------------------------------------------------------

// // 3

// // Crea una calculadora que tenga una:
// // ● Suma
// // ● Resta
// // ● Multiplicación
// // ● División

// let num1 = +prompt(`Dime el primer número a operar`)
// let num2 = +prompt(`Dame el segundo número`)

// let suma = num1 + num2;
// let resta = num1 - num2;
// let multi = num1 * num2;
// let div = num1 / num2;

// console.log(`Suma: ${suma}`);
// console.log(`Resta: ${resta}`);
// console.log(`Multiplicacion: ${multi}`);
// console.log(`Division2: ${div}`);

// // Vamos a refactorizar la kata para crear una calculadora más inteligente.
// // El programa empezará preguntando qué operación vamos a usar.
// // Luego el programa pide los dos números para hacer la operación
// // asignada y mostrarla en un alert()

// let operacion = prompt(`Que cuenta vamos a hacer`)
// let num1 = +prompt(`Dime el primer número a operar`)
// let num2 = +prompt(`Dame el segundo número`)

// function cuenta() {
//     let resultado;

//     if(operacion === 'sumar'){

//         resultado = num1 + num2;
//         alert(`El resultado de la suma es ${resultado}`)

//     }else if (operacion === 'restar'){
//         resultado = num1 - num2;
//         alert(`El resultado de la resta es: ${resultado}`)
//     }else if (operacion === 'multiplicar'){
//         resultado = num1 * num2;
//         alert(`El resultado de la multiplicacion es: ${resultado}`)
//     }else if (operacion === 'dividir'){
//         resultado = num1 / num2;
//         alert(`El resultado de la division es: ${resultado}`)
//     } else {
//         alert(`error`)
//     }

// }
// cuenta();

// //---------------------------------------------------------------------------

// // 4

// // Vamos a crear una función que valide que un número de DNI y una letra son
// // compatibles para ello, necesitamos el siguiente algoritmo.
// // 1. Realizar el módulo del número del DNI entre 23.
// // 2. El resultado de ese módulo es la posición del siguiente array.
// // TRWAGMYFPDXBNJZSQVHLCKET


// // Array de letras para la validación del DNI
// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// // Función que valida si el número y la letra del DNI son correctos
// function validarDNI(dni, letra) {
//     // Calcular el módulo del número entre 23
//     let modulo = dni % 23;

//     // Obtener la letra correspondiente en el array
//     let letraCorrecta = letras[modulo];

//     // Comparar la letra ingresada con la letra correcta
//     if (letraCorrecta === letra.toUpperCase()) {
//         return `El DNI y la letra son válidos.`;
//     } else {
//         return `El DNI o la letra no son válidos. La letra correcta es: ${letraCorrecta}`;
//     }
// }

// // Solicitar al usuario el número del DNI y la letra
// let numeroDNI = parseInt(prompt("Introduce el número del DNI (sin letra):"));
// let letraDNI = prompt("Introduce la letra del DNI:");

// // Llamar a la función y mostrar el resultado
// alert(validarDNI(numeroDNI, letraDNI));

// //-----------------------------------------------------------------------------------------------

// // 5

// // Vamos a desarrollar un programa, que a partir
// // de una lista de películas, diga al usuarios que
// // películas pueden ver o no, según estas reglas.
// // 1. La edad del usuario tiene que ser mayor
// // o igual a la edad recomendada de la
// // película.
// // 2. Por seguridad, se necesita nombre, edad.

// // Listado de Películas:
// // 1. Soy Leyenda, +13
// // 2. Rey León, +3
// // 3. La Marca del Demonio +18
// // 4. A todo Gas +10

// let nombre = '';
// let edad = 18;

// if (edad <= 3 || edad <=9) {
//     console.log(`${nombre} Solo puedes ver El rey león`);

// } else if (edad <=10 && edad <= 13) {
//     console.log(`${nombre} Solo puedes ver El rey león y a todo gas`);


// } else if (edad <=13 || edad <= 17) {
//     console.log(`${nombre} Solo puedes ver El rey león, a todo gas y Soy leyenda`);

// } else if (edad >= 18) {
//     console.log(`${nombre} eres mayor de edad`);

// } else {
//     console.log(`El bebe es demasiado pequeño`);
// }
