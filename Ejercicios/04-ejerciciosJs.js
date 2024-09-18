//////////////////////////////////////////////
// // JavaScript III
//////////////////////////////////////////////
// // CONDICIONALES
//////////////////////////////////////////////


//-------------------------------------------------------------------

// // 1. Pedir dos números y decir si son múltiplos o no.

// let num1 = +prompt(`Dame el primer número`);
// let num2 = +prompt(`Dame el segundo número`);

// if (num1 % num2 === 0) {
//     console.log(`El número: ${num1} es múltiplo de: ${num2}`);
// } else {
//     console.log(`El número: ${num1} NO es múltiplo de: ${num2}`);
// }

//-------------------------------------------------------------------

// 2. Pedir dos números y decir cual es el mayor.

// let num1 = +prompt(`Dame el primer número`);
// let num2 = +prompt(`Dame el segundo número`);

// if (num1 > num2) {
//     console.log(`El número: ${num1} es mayor que: ${num2}`);
// } else {
//     console.log(`El número: ${num2} es mayor que: ${num1}`); 
// }

//-------------------------------------------------------------------

// // 3. Pedir un número y decir si es un número negativo, si es positivo o cero.

// let numero = +prompt(`Dame un número y te diré si es negativo, positivo o 0`)

// if (numero < 0) {
//     console.log(`El numero: ${numero} es negativo`);
// } else if (numero === 0) {
//     console.log(`El número: ${numero} es cero`);
// } else {
//     console.log(`El número: ${numero} es positivo`);
// }

//-------------------------------------------------------------------

// // 4. Pedir un string y determinar si tiene cinco caracteres o más.

// let texto = prompt(`Dame una palabra y te diré cuantas letras tiene`);

// console.log(`La palabra-> ${texto} tiene: ${texto.length} caracteres`);

//-------------------------------------------------------------------

// // 5. Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres
// // números y determinar si el promedio es mayor que cinco.

// let num1 = +prompt(`Dime el primer número`);
// let num2 = +prompt(`Dime el segundo número`);
// let num3 = +prompt(`Dime el tercer número`);

// if ((num1 >= 1 && num1 <= 10) && (num2 >= 1 && num2 <= 10) && (num3 >= 1 && num3 <= 10)) {
//     let promedio = (num1 + num2 + num3) / 3;

//     if (promedio >= 5) {

//         console.log(`El promedio es: ${promedio} así que es mayor que 5`);
//     } else {

//         console.log(`El promedio es: ${promedio} y es menor a 5`);
//     }
// } else {
//     console.log(`Los numeros tienen que estar entre 1-10`);
// }

//-------------------------------------------------------------------

// // 6. Pedir una cadena de texto y comprobar que todas sus letras estén en minúsculas.

// let cadena = prompt(`Introduce una cadena de texto`)

// if (cadena === cadena.toLowerCase()) {
//     console.log(`Todas las letras están es minúsculas.`);
// } else {
//     console.log(`ATENCIÓN: no todas las letras están es minúsculas.`);
// }

//-------------------------------------------------------------------

// // 7. Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además
// // el número.

// let numero = +prompt(`Dame un número y te dire si es par o impar, (rango entre 1 -20)`);

// if (numero >= 1 && numero <= 20) {
//     if (numero % 2 === 0) {
//         console.log(`El número: ${numero} es par`);
//     } else if (numero % 2 !== 0) {
//         console.log(`El número: ${numero} es impar`);
//     }
// } else {
//     console.log('El numero introducido no está entre 1 - 20');
// }

//-------------------------------------------------------------------

// // 8. Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha
// // aprobado o no.

// let nota1 = +prompt(`Dame la nota 1`);
// let nota2 = +prompt(`Dame la nota 2`);
// let nota3 = +prompt(`Dame la nota 3`);

// let totalNota = (nota1 + nota2 + nota3) / 3;

// if (totalNota >= 5 ) {
//     console.log(`Enhorabuena tu nota es: ${totalNota.toFixed(2)}, estás aprobado`); // toFixed para mostrar los decimales elegidos
// } else {
//     console.log(`Lo sentimos tu nota es: ${totalNota.toFixed(2)}, no has aprobado`);
// }

//-------------------------------------------------------------------

// // 9. Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el
// // descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %.
// // El usuario introduce marca y modelo y el programa saca el descuento correspondiente por
// // pantalla.

// //OPCIÓN 1
// // Pedimos al usuario que ingrese la marca y modelo del coche
// let cocheElegido = prompt('Escribe si quieres un ford fiesta o un ford focus').toLowerCase(); // Convertimos a minúsculas para evitar problemas de mayúsculas/minúsculas

// // Verificamos la combinación de marca y modelo para aplicar el descuento correspondiente
// if (cocheElegido === 'ford fiesta') {
//     console.log(`El coche: ${cocheElegido} tiene un 5 % de descuento`);
// } else if(cocheElegido === 'ford focus') {
//     console.log(`El coche: ${cocheElegido} tiene un 10 % de descuento`);
// } else {
//     console.log(`el modelo ${cocheElegido} no esta en stock`);   
// }
// //OPCIÓN 2
// // Pedimos al usuario que ingrese la marca del coche
// let marca = prompt('Escribe la marca del coche (por ejemplo, Ford)').toLowerCase(); // Convertimos a minúsculas

// // Pedimos al usuario que ingrese el modelo del coche
// let modelo = prompt('Escribe el modelo del coche (por ejemplo, Fiesta o Focus)').toLowerCase(); // Convertimos a minúsculas

// // Verificamos la combinación de marca y modelo para aplicar el descuento correspondiente
// if (marca === 'ford' && modelo === 'fiesta') {
//     console.log(`El coche: ${marca} ${modelo} tiene un 5 % de descuento.`);
// } else if (marca === 'ford' && modelo === 'focus') {
//     console.log(`El coche: ${marca} ${modelo} tiene un 10 % de descuento.`);
// } else {
//     console.log(`El modelo ${marca} ${modelo} no está en stock.`);
// }

//-------------------------------------------------------------------

// // 10. Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y el
// // código responda cuántos días tiene ese mes.

// let numeroMes = +prompt(`Dime un mes en numero y te diré cuantos dias tiene`);

// let dias;

// switch (numeroMes) {
//     case 1:// Enero
//     case 3:// Marzo
//     case 5:// Mayo
//     case 7:// Julio
//     case 8:// Agosto
//     case 10:// Octubre
//     case 12:// Diciembre
//         dias = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dias = 30;
//         break;
//         case 2: // Febrero
//         //Pediremos el año para determinar si es bisiesto o no y dar los dias correctos
//         let año = +prompt('Dime el año:');
//         // Comprobamos si el año es bisiesto
//         if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
//             dias = 29; // Año bisiesto
//         } else {
//             dias = 28; // No es bisiesto
//         }
//         break;
//     default:
//         console.log('Número de mes inválido. Debe estar entre 1 y 12.');
//         dias = null;
// }
// if (dias !== null){
//     console.log(`El mes ${numeroMes} tiene ${dias} días.`);
// }

//-------------------------------------------------------------------

// // 11. Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y
// // realice las siguientes operaciones:
// // a) Si el diámetro es superior a 1.4 metros debe mostrarse el mensaje “La rueda es para un
// // vehículo grande”. Si es menor o igual a 1.4 metros pero mayor que 0.8 debe mostrarse el
// // mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
// // condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un
// // vehículo pequeño”.
// // b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor o
// // igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje
// // “El grosor para esta rueda es inferior al recomendado”
// // A)
// let diametro = +prompt(`Dame el diámetro`);

// if (diametro > 1.4) {
//     console.log('La rueda es para un vehículo grande');
// } else if (diametro <= 1.4 && diametro > 0.8) {
//     console.log('La rueda es para un vehículo mediano');
// } else {
//     console.log('La rueda es para un vehiculo pequeño');
// }
// // B
// let grosor = +prompt(`Dame el grosor`);

// if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
//     console.log('El grosor de la rueda es inferior al recomendado');
// }

//-------------------------------------------------------------------

// // 12. Crea un programa en que se definan variables para el precio por kilómetro, el vehículo y
// // los kilómetros recorridos. El vehículo y los kilómetros recorridos deben ser proporcionados
// // por el usuario. A continuación, el programa debe realizar los cálculos para obtener el total a
// // pagar, teniendo en cuenta las siguientes consideraciones: si el vehículo es “coche”, el precio
// // por kilómetro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús”, 0.5.

// let vehiculo = prompt(`De que vehiculo se trata. (coche, moto, autobus)`);
// let km = +prompt(`Cuantos km has recorrido?`);

// if (vehiculo === 'coche') {
//     let precio = km * 0.10;
//     console.log(`vehiculo: ${vehiculo}, km recorridos: ${km}, precio por km: ${precio}`);
// } else if (vehiculo === 'moto') {
//     let precio = km * 0.20;
//     console.log(`vehiculo: ${vehiculo}, km recorridos: ${km}, precio por km: ${precio}`);
// } else if (vehiculo === 'autobus') {
//     let precio = km * 0.50;
//     console.log(`vehiculo: ${vehiculo}, km recorridos: ${km}, precio por km: ${precio}`);
// } else {
//     console.log('vehiculo no valido');
// }

//-------------------------------------------------------------------
//////////////////////////////
///////// BUCLES
//////////////////////////////

// // 1. Escribir un script que pida un valor entero y muestre en pantalla una lista de números
// // desde el 0 al valor tecleado. Los números se separarán por comas.

// let numero = +prompt('Dame la longitud de numero que quieres.')
// let lista = ''; //Aqui almacenamos los numeros.

// for (let i = 0; i <= numero; i++) {
//     lista += i
//     if (i < numero) { // Bucle if para evitar poner una coma al final
//         lista += ', '
//     }
// }
// console.log(lista); 

//-------------------------------------------------------------------

// // 2. Hacer un programa que cuente de N en N hasta un número M proporcionado por el
// // usuario. El usuario también ha de proporcionar N.

// let m = +prompt(`Dame el último número del bucle`);
// let n = +prompt(`Dame el intervalo de números a mostrar`);
// let cuenta = n++
// for (let i = 0; i <= m; i+= n) {
//     console.log(i);
// }

//-------------------------------------------------------------------

// // 3. Genera una lista con todos los números pares positivos por debajo del número tecleado
// // por el usuario.
// let numFinal = +prompt('Dime donde terminamos el bucle');

// for (let i = 1; i < numFinal; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i}`);   
//     }  
// }

//-------------------------------------------------------------------

// // 4. Escribe la tabla de multiplicar de un número introducido por el usuario.

// let numero = +prompt('Dame un número y te doy su tabla de múltiplicar');

// for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i
//     console.log(`${numero} * ${i} = ${resultado}`);
// }

//-------------------------------------------------------------------

// // 5. Formar un triángulo de este estilo
// // *
// // **
// // ***
// // ****

// let simbolo = '*'

// for (let i = '0'; i <= 4; i++) {
//     console.log(simbolo.repeat(i));
// }

//-------------------------------------------------------------------

// // 6. Realiza el ejercicio anterior con la cantidad de líneas que indique el usuario.

// let tamaño = + prompt('Cuantos * quieres');
// let simbolo = '*'

// for (let i = 0; i <= tamaño; i++) {
//     console.log(simbolo.repeat(i));
// }

//-------------------------------------------------------------------

// // 7. Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por
// // el usuario.

// let numero = +prompt('Dame cuantos números quieres');
// let suma = 0;

// for (let i = 1; i <= numero; i++) {
//     suma += i;
//     console.log(`${suma}`);
// }

//-------------------------------------------------------------------

// // 8. Pide al usuario que teclee 4 números (uno cada vez). Con esos números el programa
// // deberá calcular la media aritmética (la suma de todos ellos dividido por la cantidad de
// // números).

// let suma = 0;

// for (let i = 1; i <=4; i++) {
//     let numeros = +prompt(`Dame el número ${i}`);
//     suma += numeros
// }

// let media = suma / 4

// console.log(`La suma de los 4 números es: ${suma}`);
// console.log(`La media aritmética es: ${media}`);

//-------------------------------------------------------------------

// // 9. Saca por consola los números primos del 0 al número que introduzca un usuario por
// // prompt.

// let tamaño = +prompt('Dime hasta qué número debo buscar números primos');

// for (let i = 0; i <= tamaño; i++) {
//     let esPrimo = true; // Suponemos que el número es primo

//     // Verificamos si tiene algún divisor entre 2 y la raíz cuadrada del número
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             esPrimo = false; // Si encontramos un divisor, no es primo
//             break; // Salimos del bucle interno, ya no necesitamos seguir revisando
//         }
//     }

//     if (esPrimo) {
//         console.log(i); // Si es primo, lo imprimimos
//     }
// }

//-------------------------------------------------------------------

// // 10. Dado un número entero, muestra una cuenta atrás desde el número tecleado hasta el 0.
// // Modifica el programa para que el usuario introduzca dos números y se efectúe una cuenta
// // atrás desde el primer número hasta el segundo. Modifícalo de nuevo para que el programa
// // determine qué número es el mayor y cuente desde el mayor hasta el menor.

// let numero = +prompt('Dime el número desde el que empezar la cuenta atras');
// let numero2 = +prompt('Dame el numero de corte');

// console.log(`Número de inicio: ${numero}, número de corte ${numero2}`);
// for (let i = numero; i >= numero2; i--) {
//     console.log(`Cuenta atras -> ${i}`);
// }

//-------------------------------------------------------------------

// 11. Pide al usuario cinco números, almacénalos en un array y muestra por consola el
// resultado de cada uno de ellos multiplicado por 3. Muestra también un array que contenga
// todos los resultados.

// let array1 = [];
// let arrayMultiplicado = [];

// for (let i = 1; i <=5; i++) {
//     let numeros = +prompt(`Dime el número ${i}`);
//     array1.push(numeros);
//     arrayMultiplicado.push(numeros * 3);
//     console.log(`Array original ${array1} --> Nuevo array ${arrayMultiplicado}`);
// }

//-------------------------------------------------------------------
//////////////////////////////
///////// FUNCIONES
//////////////////////////////
//-------------------------------------------------------------------

// // 1. Crea una función que convierta grados celsius a grados fahrenheit.

// let celsius = +prompt('Introduce la temperatura en grados Celsius:');
// let fahrenheit = (celsius * 9/5) + 32;
// console.log(`${celsius}°C es igual a ${fahrenheit}°F`);

//-------------------------------------------------------------------

// // 2. Crea una función que determine si un número es par o impar.

// function parOimpar(numero) {
//     // Verifica si el número es un entero
//     if (Number.isInteger(numero)) {
//         if (numero % 2 === 0) {
//             console.log(`El número ${numero} es par.`);
//         } else {
//             console.log(`El número ${numero} es impar.`);
//         }
//     } else {
//         console.log('Por favor, introduce un número entero válido.');
//     }
// }
// parOimpar(3);   
// parOimpar(4);  
// parOimpar(8.2);  

//-------------------------------------------------------------------

// // 3. Crea una función que determine si un número es primo o no.

// function primo(numero) {
//     // Comprobar si el número es menor que 2
//     if (numero < 2) {
//         console.log(`${numero} no es un número primo.`);
//         return;
//     }

//     // Comprobar si el número tiene divisores
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             console.log(`${numero} no es un número primo.`);
//             return;
//         }
//     }

//     console.log(`${numero} es un número primo.`);
// }
// primo(3);  // 3 es un número primo.
// primo(4);  // 4 no es un número primo.
// primo(17); // 17 es un número primo.
// primo(1);  // 1 no es un número primo.

//-------------------------------------------------------------------

// // 4. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva
// // incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.

// function precioConIva(precio, iva = 21) {
//     let precioConIva = precio + (precio * iva / 100);
//     return precioConIva
// }
// let precio = +prompt(`Introduce el precio:`);
// let ivaInput = parseFloat(prompt('Introduce el IVA (dejar en blanco para aplicar el 21%):'));
// let iva = ivaInput ? parseFloat(ivaInput) : undefined;// Asegura que, si no se introduce nada se aplique el 21% (con un condicional (? '' : ''))
// precioFinal = precioConIva(precio, iva);

// console.log(`Precio introducido -> ${precio}--> Iva introducido ->20 ${iva}`);
// console.log(`El precio con IVA incluido es: ${precioFinal.toFixed(2)} €`);// Precio final con dos decimales (toFixed(''))

//-------------------------------------------------------------------

// // 5. Crea una función que determine si una letra es una vocal o una consonante.

// let letra = prompt('Dame una letra y te dire si es vocal o consonante').toLocaleLowerCase(); // no distinguir entre Mayúscula y minuscula
// let vocales = ['a','e','i','o','u'];
// if (vocales.includes(letra)) {
//     console.log(`La letra introducida es: ${letra}, por lo tanto es una vocal`);
// } else if (letra.match(/[a-z]/i)) { // verifica que la letra esté dentro del abecedario.
//     console.log(`La letra introducida es: ${letra}, por lo tanto es una consonante`); 
// } else {
//     console.log('El valor introducido no es valido');
// }

//-------------------------------------------------------------------

// // 6. Crea una función que, dada una frase, convierta las A en 4, las E en 3, las I en 1 y las O en 0.

// function convertirFrase(frase) {
//     // Utilizamos el método replace con una expresión regular para cada letra que se debe reemplazar
//     return frase
//         .replace(/a/gi, '4')  // Reemplaza 'a' o 'A' por '4'
//         .replace(/e/gi, '3')  // Reemplaza 'e' o 'E' por '3'
//         .replace(/i/gi, '1')  // Reemplaza 'i' o 'I' por '1'
//         .replace(/o/gi, '0'); // Reemplaza 'o' o 'O' por '0'
// }

// let fraseUsuario = prompt('Escribe una frase y convertiré las A en 4, las E en 3, las I en 1 y las O en 0');
// let fraseConvertida = convertirFrase(fraseUsuario);
// console.log(fraseConvertida);

//-------------------------------------------------------------------

// // 7. Crea una función que, dada una frase, cuente la cantidad de una letra en la misma. Por
// // ejemplo, dada la palabra “javascript” y la letra “a”, debería devolver un 2.

// function contarLetra(frase, letraBuscada) {
//     // Convertimos la frase y la letra a minúsculas para que no importe si son mayúsculas o minúsculas
//     frase = frase.toLowerCase();
//     letraBuscada = letraBuscada.toLowerCase();

//     // Utilizamos el método split para separar por la letra buscada y ver cuántos fragmentos hay
//     return frase.split(letraBuscada).length - 1;
// }

// // Ejemplo de uso
// let fraseUsuario = prompt('Escribe una frase:');
// let letraUsuario = prompt('Escribe la letra que quieres contar:');
// let cantidad = contarLetra(fraseUsuario, letraUsuario);

// console.log(`La letra "${letraUsuario}" aparece ${cantidad} veces en la frase.`);

//-------------------------------------------------------------------

// // 8. Crea una función que, dado un array de números, devuelva el número más grande del mismo.

// function numeroMasGrande(arrayNumeros) {
//     // Utilizamos el método Math.max junto con el spread operator para encontrar el número más grande
//     return Math.max(...arrayNumeros);
// }

// // Ejemplo de uso
// let numeros = [3, 7, 1, 22, 9, 122];
// let mayorNumero = numeroMasGrande(numeros);

// console.log(`El número más grande del array es: ${mayorNumero}`);

//-------------------------------------------------------------------

// // 9. Crea una función que, dado un array de números, devuelva la suma de todos los
// // números que contiene.

// function sumarNumeros(arrayNumeros) {
//     // Utilizamos el método reduce para sumar todos los números del array
//     return arrayNumeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
// }

// // Ejemplo de uso
// let numeros = [5, 1, 9, 2, 11, 32];
// let sumaTotal = sumarNumeros(numeros);

// console.log(`La suma de los números del array es: ${sumaTotal}`);

//-------------------------------------------------------------------

// // 11. Crea una función que, dados dos números A y B, obtenga el porcentaje(B) de un
// // número(A).

// function calcularPorcentaje(A, B) {
//     // Fórmula para calcular el porcentaje: (B / 100) * A
//     return (B / 100) * A;
// }

// // Ejemplo de uso
// let A = 200;
// let B = 15;
// let resultado = calcularPorcentaje(A, B);

// console.log(`${B}% de ${A} es: ${resultado}`);

