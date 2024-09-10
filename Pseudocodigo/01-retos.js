// 1. Diseñar el pseudocódigo de un programa que sume dos números leídos por pantalla y
// muestre el resultado por terminal.

// let num1 = 6;
// let num2 = 6;
// let suma = num1 + num2

// console.log(`la suma de ${num1} y ${num2} es: ${suma} `);

//---------------------------------------------------------------------------------------------

// 2. Hacer el pseudocódigo de un programa que permita leer 2 números diferentes y nos
// diga cual es el mayor de los 2 números.

// let num1 = 6;
// let num2 = 5;

// if(num1>num2){
//     console.log(`el numero: ${num1} es mayor que ${num2}`);
// }else if(num1<num2){
//     console.log(`el numero: ${num2} es mayor que ${num1}`);
// }

//---------------------------------------------------------------------------------------------

// 3. Crear el pseudocódigo de un programa que almacene 3 números en 3 variables A, B y
// C. El diagrama debe decidir cuál es el mayor y cuál es el menor.

// let a = 6;
// let b = 5;
// let c = 2;

// if( a > b && a > c ){
//     console.log(`El numero ${a} es mayor que ${b} y que ${c} `);
// } else if( b > a && b > c ) {
//     console.log(`El numero ${b} es mayor que ${a} y que ${c} `);
// }else if( c > a && c > b ){
//     console.log(`El numero ${c} es mayor que ${a} y que ${b} `);
// }

//---------------------------------------------------------------------------------------------

// 4. Realizar el pseudocódigo de un programa que nos calcule la hipotenusa de un triángulo
// rectángulo, conocidos sus dos catetos.

// let cat1 = 4;
// let cat2 = 6;
// let calculo = (cat1 ** 2 + cat2 ** 2) / 2;

// console.log(`La hipotenusa de un triangulo con los catetos ${cat1} y ${cat2} es ${calculo}`);

//---------------------------------------------------------------------------------------------

// 5. Realiza el pseudocódigo de un programa que sume 10 números leídos por teclado.

// let num = +prompt(`Dame un numero y te dare sus diez siguientes.`)

// console.log(`El numero escogido es ${num}`);

// for(let i = 1; i <=10 ; i++ ){

//     console.log(i + num);
// }

//---------------------------------------------------------------------------------------------

// 6. Modificar el anterior para que permita sumar N números. El valor de N se debe leer
// previamente por teclado.

// let num1 = +prompt(`Dame el primer numero a sumar`)
// let num2 = +prompt(`Dame el segundo numero a sumar`)
// let resultado = num1 + num2;

// console.log(`La suma de ${num1} y ${num2} es: ${resultado}`);

//---------------------------------------------------------------------------------------------

// 7. Hacer el pseudocódigo de un programa que permita escribir los 100 primeros pares.

// for(let i = 0 ; i <= 100; i++){
//     if(i % 2 === 0) {
//         console.log('par', i);
//     }
// }
// // 7.1 Hacer el pseudocódigo de un programa que permita escribir los 100 primeros impares.

// for(let i = 0 ; i <= 100; i++){
//     if(i % 2 === 1) {
//         console.log('Impar', i);
//     }
// }

//---------------------------------------------------------------------------------------------

// 8. Diseña el pseudocódigo necesario para sumar los N primeros impares. Realizar después
// uno que haga lo mismo con los pares y otro con los múltiplos de 3. Crea un menú para
// ello.

// for(let i = 1 ; i<=20; i++) {
//     if(i % 2 === 0 ){
//         console.log(`${i} es Par`);
//     }
//     if(i % 2 === 1 ){
//         console.log(`${i} es Impar`);
//     }
//     if(i % 3 === 0 ){
//         console.log(`${i} es multiplo de`);
//     }
// }

//---------------------------------------------------------------------------------------------

// 9. Hacer el pseudocódigo de un programa que simule un reloj.

function actualizarReloj() {
    const now = new Date();
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const segundos = String(now.getSeconds()).padStart(2, '0');

    const reloj = document.getElementById('clock');
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualizar el reloj inmediatamente
actualizarReloj();

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

//---------------------------------------------------------------------------------------------

// 10. Define un diagrama de flujo que lea N números pedidos al usuario, calcule y escriba la
// suma de los pares y el producto de los impares.

// function parEimpar() {
//     let numbers = +prompt(`Cuantos números quieres calcular`)
//     let sumaPares = 0;
//     let producto = 1;

//     for(let i = 1 ; i <= numbers; i++){
//         let num = +prompt(`Dame el numero ${i}`)
//         if(num % 2 === 0 ) {
//             sumaPares += num
//         }else{
//             producto *= num

//         }
//         console.log(`los numeros escogidos son ${numbers} `);
//         console.log(`numeros a operar ${num}`);
//         console.log(` y su producto es ${producto}`);
//         console.log(`La suma es: ${sumaPares}`);
//     }
// }
// parEimpar()

//---------------------------------------------------------------------------------------------

// 11. Un año es bisiesto si es múltiplo de 4, exceptuando los múltiplos de 100, que sólo son
// bisiestos cuando son múltiplos además de 400, por ejemplo, el año 1900 no fue bisiesto,
// pero el año 2000 sí lo será. Hacer el pseudocódigo de un programa que dado un año A nos
// diga si es o no bisiesto.

// let año = +prompt('Dame un año y te diré si es bisiesto o no')

// if ( año % 400 === 0 ) {
//     console.log(`El año: ${año} es bisiesto`);
// } else if ( año % 100 === 0 ) {
//     console.log(`El año: ${año} no es bisiesto`);   
// } else if ( año % 4 === 0 ) {
//     console.log(`El año: ${año} es bisiesto`);
// } else {
//     console.log(`El año: ${año} no es bisiesto`);   
// }

//---------------------------------------------------------------------------------------------

// 12. Realiza el pseudocódigo de un programa que simule una caja registradora.

// Variable total global
// let total = 0;

// function agregarArticulo() {
//     // Obtener el valor del precio
//     const price = parseFloat(document.getElementById('price').value);

//     // Validar que el precio sea un número válido
//     if (isNaN(price) || price <= 0) {
//         alert("Por favor ingrese un precio válido");
//         return;
//     }

//     // Sumar el precio al total acumulado
//     total += price;

//     // Actualizar el total en la interfaz
//     document.getElementById('total').textContent = `Total: ${total.toFixed(2)} €`; //Redondea a dos decimales para un formato monetario correcto

//     // Limpiar los campos de entrada
//     document.getElementById('item').value = ''; // limpia los valores de entrada 
//     document.getElementById('price').value = ''; // limpia los valores de entrada 
// }

//---------------------------------------------------------------------------------------------

// 13. Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un
// algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final
// las dos variables (recuerda la asignación).

// let A = +prompt(`Dame el numero A`)
// let B = +prompt(`Dame el numero B`)

// console.log(`Valor original de A : ${A}`);
// console.log(`Valor original de B : ${B}`);

// let temp = A;
// A = B;
// B = temp

// console.log(`Valores despues del cambio`);

// console.log(`Valor nuevo de A : ${A}`);
// console.log(`Valor nuevo de B : ${B}`);

//---------------------------------------------------------------------------------------------

// 14. Algoritmo que lea dos números, calculando y escribiendo el valor de su suma, resta,
// producto y división.

// let num1 = +prompt(`Escoge el primer numero a calcular`)
// let num2 = +prompt(`Escoge el segundo numero a calcular`)

// let suma = num1 + num2;
// let resta = num1 - num2;
// let div = num1 / num2;
// let multi = num1 * num2;

// console.log(`Los numeros a calcular son: ${num1} y ${num2}`);
// console.log(`Suma: ${suma}`);
// console.log(`Resta: ${resta}`);
// console.log(`División: ${div}`);
// console.log(`Multiplicación: ${multi}`);

//---------------------------------------------------------------------------------------------

//15. Algoritmo que lea dos números y nos diga cuál de ellos es mayor o bien si son iguales
//(recuerda usar la estructura condicional SI).

// let num1 = 1;
// let num2 = 2;

// if ( num1 > num2 ) {
//     console.log(`${num1} es mayor que ${num2}`);
// } else if ( num1 < num2 ) {
//     console.log(`${num1} es menor que ${num2}`);
// } else if ( num1 === num2 ) {
//     console.log(`${num1} es igual que ${num2}`);
// } else  {
//     console.log(`Valor erroneo`);
// }

//---------------------------------------------------------------------------------------------

// 16. Algoritmo que lea tres números distintos y nos diga cuál de ellos es el mayor
// (recuerda usar la estructura condicional Si y los operadores lógicos).

// let num1 = 0;
// let num2 = 4;
// let num3 = 7;

// if ( num1 > num2 && num1 > num3 ) {

//     console.log(`${num1} es mayor que ${num2} y que ${num3}`);

// } else if ( num2 > num1 && num2 > num3 ) {

//     console.log(`${num2} es mayor que ${num1} y que ${num3}`);

// } else if ( num3 > num1 && num3 > num2 ) {

//     console.log(`${num3} es mayor que ${num1} y que ${num2}`);

// } else {
//     console.log(`Algun dato es erroneo`);
// }

//---------------------------------------------------------------------------------------------

// 17. Diseñar un algoritmo que pida por teclado tres números; si el primero es negativo,
// debe imprimir el producto de los tres y si no lo es, imprimirá la suma.

// let n1 = +prompt(`Dame el primer número`);
// let n2 = +prompt(`Dame el segundo número`);
// let n3 = +prompt(`Dame el último número`);

// let suma = n1 + n2 + n3;
// let producto = n1 * n2 * n3;

// if (n1 < 0) {
//     console.log(`${producto}`);
// } else {
//     console.log(suma);
// }

//---------------------------------------------------------------------------------------------

// 18. Realizar un algoritmo que lea un número por teclado. En caso de que ese número sea 0
// o menor que 0, se saldrá del programa imprimiendo antes un mensaje de error. Si es
// mayor que 0, se deberá calcular su cuadrado y la raíz cuadrada del mismo, visualizando el
// número que ha tecleado el usuario y su resultado (“Del número X, su potencia es X y su
// raíz X”). Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X) o con una
// potencia de 0,5.

// let num = +prompt(`Dame un número`)
// let cuadrado = num **2
// let raiz = Math.sqrt(num);

// if ( num <= 0 ){
//     alert('El numero no puede ser menor que 0')
// }else if (num > 0) {

//     console.log(`El cuadrado de ${num} es: ${cuadrado} `);
//     console.log(`La raíz de ${num} es: ${raiz} `);

// }

//---------------------------------------------------------------------------------------------

// 19. Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el
// curso actual. Diseñar un algoritmo para este propósito (recuerda que para calcular el
// porcentaje puedes hacer una regla de 3).

// let man = 120;
// let woman = 80;

// let total = man + woman;

// let porcentageM = ( man / total )* 100
// let porcentageF = ( woman / total )* 100

// console.log(`El total de alumnos varones es: ${man}`);
// console.log(`El total de alumnos mujeres es: ${woman}`);
// console.log(`El total de alumnos es: ${total}, 
// de los cuales el ${porcentageM} % son varones y el ${porcentageF} % son mujeres.`);

//---------------------------------------------------------------------------------------------

// 20. Una tienda ofrece un descuento del 15% sobre el total de la compra durante el
// mes de octubre. Dado un mes y un importe, calcular cuál es la cantidad que se
// debe cobrar al cliente.

// let price = 20
// let discount = price * 15 / 100

// let finalPrice = price - discount

// console.log(`Precio original es ${price} €, con descuento ${finalPrice} € se aplica un descuento de ${discount} €`);

// ---------------------------------------------------------------------------------------------

// 21. Realizar un algoritmo que, dado un número entero, visualice en pantalla si es par
// o impar. En el caso de ser 0, debe visualizar “el número no es par ni impar” (para
// que un número sea par, se debe dividir entre dos y que su resto sea 0).

// let num = 0

// if ( num === 0 ) {
//     console.log(`El número ${num}, no es par ni impar.`);
// } else if ( num % 2 === 0 ) {
//     console.log(`El número ${num}, es par.`);
// } else if ( num % 2 !== 0 ) {
//     console.log(`El número ${num}, es impar.`);
// }

// ---------------------------------------------------------------------------------------------

// 22. Modificar el algoritmo anterior, de forma que, si se teclea un cero, se vuelva a
// pedir el número por teclado (así hasta que se teclee un número mayor que cero)
// (recuerda la estructura mientras).

// let num;

// do {

//     num = +prompt(`Dame un número y te dire si es par o impar.`)

//     if ( num === 0 ) {
//         console.log(`El número ${num} no es par ni impar.`);

//     } else if ( num % 2 === 0 ) {
//         console.log(`El número ${num} es par.`);

//     } else if ( num % 2 !== 0 ){
//         console.log(`El número ${num} es par.`);
//     }

// } while ( num === 0 );

// 23. Algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo
// de grado superior o no. Para acceder a un grado superior, si se tiene un título de
// bachiller, en caso de no tenerlo, se puede acceder si hemos superado una prueba
// de acceso.

// 
// do {
//     if (bachiller = true ) {
//         console.log(`Puedes acceder`);
//     } else if (pruebaAcceso = true ) {
//         console.log(`Puedes acceder`);
//     } else {
//         console.log(`No puedes acceder`);
//     }
// } while (false);

//------------------------------------------------------------------------------------------------

// 24. Desarrollar un algoritmo que nos calcule el cuadrado de los 9 primeros números
// naturales (recuerda la estructura desde-hasta).

// for(let i = 1; i <= 9; i++){
//     let cuadrado = i ** 2
//     console.log(cuadrado);
// }

//------------------------------------------------------------------------------------------------

// 25. Se pide representar el algoritmo que nos calcule la suma de los N primeros
// números naturales. N se leerá por teclado (no tenemos por qué llamar a la
// variable N, podemos llamarla como queramos).

// function suma(params) {
//     let numero = +prompt(`Dame la cantidad de números a sumar`)
//     let suma = 0;

//     for(let i = 1; i <= numero; i++){
//         let nSuma = +prompt(`Dame los numero ${i}`)
//         suma += nSuma
//         console.log(`La cantidad de números es: ${numero} y los números son: ${nSuma}  y su suma es: ${suma}`);
//     }

// }
// suma()

//------------------------------------------------------------------------------------------------

// 26. Se pide representar el algoritmo que nos calcule la suma de los N primeros números
// pares. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.

// function sumaPares() {
//     let n = +prompt(`Dame un numero y te sumare los siguientes pares`)
//     let suma = 0;
//     let primerPar = n % 2 === 0 ? n + 2 : n + 1; //Determina cuanto sumar dependiendo si el número dado es par o impar

//         for(let i = 0; i <= n; i++){

//                 suma += primerPar
//                 primerPar += 2
//                 console.log(`${suma}`);
//         }

// }
// sumaPares();

//------------------------------------------------------------------------------------------------

// 28. Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una
// clave. Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un
// mensaje indicándonos que hemos agotado esos 3 intentos (Recomiendo utilizar un
// interruptor). Si acertamos la clave, saldremos directamente del programa.

// let correctPassword = 'eureka';
// let maxAttempts = 3;
// let attempts = 0;

// while (attempts < maxAttempts) {
//     // Pedimos al usuario que ingrese la clave
//     let enteredPassword = prompt('Introduce la clave:');

//     // Verificamos si la clave ingresada es correcta
//     if (enteredPassword === correctPassword) {
//         console.log('¡Clave correcta!');
//         break; // Salimos del bucle si la clave es correcta
//     } else {
//         console.log('Clave incorrecta.');
//         attempts++; // Aumentamos el contador de intentos fallidos
//     }

//     // Si hemos alcanzado el número máximo de intentos
//     if (attempts === maxAttempts) {
//         console.log('Has agotado los 3 intentos.');
//     }
// }

//------------------------------------------------------------------------------------------------

// 29. Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el
// mínimo y la media de todos ellos. Piensa cómo debemos inicializar las variables.

// let numero;
// let suma = 0;
// let contador = 0;
// let max = null;
// let min = null;

// do {
//     numero = +prompt(`Introduce un número o 0 para terminar `)
//     console.log(`Los números introducidos son ${numero}`);

//     if(numero !== 0) {
//         if (contador === 0) {
//             max = numero;
//             min = numero;
//         }

//         if(numero > max) {
//             max = numero;
//         }

//         if(numero < min) {
//             min = numero
//         }

//         suma += numero
//         contador++
//     }
    
// } while (numero !== 0);

// if(contador > 0) {
//     let media = suma / contador;
//     console.log(`El número más alto es: ${max}`);
//     console.log(`El número más bajo es: ${min}`);
//     console.log(`La media es: ${media}`);
// }else {
//     console.log(`No se han igresado números`);
// }

//------------------------------------------------------------------------------------------------

// 30. Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que
// hay entre 1 y 100.

// let multiplosDe2 = [];
// let multiplosDe3 = [];

// for(let i = 0; i <=100; i++){
//     if(i % 2 === 0){
//         multiplosDe2.push(i)
//     }
//     if(i % 3 === 0){
//         multiplosDe3.push(i)
        
//     }
// }
// console.log(`Los múltiplos de 2 son:`);
// console.log(multiplosDe2.join(', '))

// console.log(`Los múltiplos de 3 son:`);
// console.log(multiplosDe3.join(', '))

//------------------------------------------------------------------------------------------------

// 31. Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se
// calcula según el siguiente criterio: la parte práctica vale el 10%; la parte de problemas
// vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre del alumno, las tres
// notas, escribirá el resultado y volverá a pedir los datos del siguiente alumno hasta que el
// nombre sea una cadena vacía. Las notas deben estar entre 0 y 10, si no lo están, no
// imprimirá las notas, mostrará un mensaje de error y volverá a pedir otro alumno.


// function calculoNotas() {
//     while (true) {
//         let nombre = prompt('Introduce el nombre del alumno (dejar en blanco para abandonar):');

//         if (nombre === '') {
//             break;
//         }

//         let notaPractica = parseFloat(prompt('introduce la nota de la practica (0 a 10):'))
//         let notaTeoria = parseFloat(prompt('introduce la nota de la teoria (0 a 10):'))
//         let notaProblemas = parseFloat(prompt('introduce la nota de los problemas (0 a 10):'))

//         if (notaPractica < 0 || notaPractica > 10 || notaTeoria < 0 || notaTeoria > 10 || notaProblemas < 0 || notaProblemas > 10) {
//             console.log('Las notas tienen que estar comprendidas entre 0 - 10 por favor pruebe de nuevo');
//             continue;
//         }

//         let notaFinal = (notaPractica * 0.10) + (notaTeoria * 0.40) + (notaProblemas * 0.50)
//         console.log(`Alumno: ${nombre}`);
//         console.log(`nota final: ${notaFinal.toFixed(2)}`);
//     }
// }

// calculoNotas();