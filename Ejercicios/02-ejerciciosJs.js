//////////////////////////////////////////////
// // JavaScript I
//////////////////////////////////////////////

//--------------------------------------------------------------------

// // 1. Declara 2 variables numéricas (con el valor que desees), he indica cual es mayor de los
// // dos. Si son iguales indicarlo también. Ves cambiando los valores para comprobar que
// // funciona.

// let num1 = 2;
// let num2 = 2;

// if (num1 < num2) {
//     console.log(`El número: ${num1} es menor que el número: ${num2}`);
// } else if (num1 > num2) {
//     console.log(`El número: ${num1} es mayor que el número: ${num2}`);
// } else if (num1 === num2){
//     console.log(`El número: ${num1} es igual que el número: ${num2}`);
// } else {
//     console.log(`Valor erroneo (no es un número)`);
// }

//--------------------------------------------------------------------

// // 2. Declara un String que contenga tu nombre, después muestra un mensaje de bienvenida
// // por consola. Por ejemplo: si introduzco “Fernando”, me aparezca “Bienvenido Fernando”.

// let name = 'Alberto'

// console.log(`Bienvenido ${name}`);

//--------------------------------------------------------------------

// // 3. Modifica la aplicación anterior, para que nos pida el nombre que queremos introducir
// // (recuerda usar prompt).

// let name = prompt(`Hola como te llamas`)

// console.log(`Bienvenido ${name}`);

//--------------------------------------------------------------------

// // 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado
// //. Usa la constante PI.

// let pi = 3.14
// let radio = +prompt(`Dame el radio del circulo a calcular`)
// let result = pi * (radio)**2
// console.log(result);

//--------------------------------------------------------------------

// // 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también
// // debemos indicarlo.

// let num = +prompt(`Dame un número y te dire si es divisible por 2 o no`)

// if(num % 2 === 0) {
//     console.log(`El número: ${num} es divisible entre 2`);
// }else if (num % 2 !== 0) {
//     console.log(`El número: ${num} no es divisible entre 2`);
// }

//--------------------------------------------------------------------

// // 6. Lee un número por teclado que pida el precio de un producto (puede tener decimales) y
// // calcule el precio final con IVA. El IVA será una constante que sera del 21%

// let price = +prompt(`Dame el precio del articulo y te calculo el iva`)
// let iva = price * 0.21
// let result = iva + price

// console.log(`El incremento del iva es: ${iva} por tanto el precio total es: ${result}`);

//--------------------------------------------------------------------

// 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.

// let num = 1;
// while (num  <= 100) {
//     console.log(num);
//     num++
// }

//--------------------------------------------------------------------

// // 8. Haz el mismo ejercicio anterior con un bucle for.

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

//--------------------------------------------------------------------

// // 9.Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle
// // que desees.

// let num = 0;

// while (num <= 100) {
//     if (num % 2 === 0) {
//         console.log(`${num} es divisible entre 2`);
//     } else if (num % 3 === 0) {
//         console.log(`${num} es divisible entre 3`);
//     }
//     num++

// }

//--------------------------------------------------------------------

// // 10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
// // pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
// // mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.

// let nVentas = +prompt(`Dime cuantas ventas necesitas calcular`);
// let suma = 0;

// for(let i = 1; i <= nVentas; i++) {
//     let num = +prompt(`Escribe el número ${i}`);
//     suma += num
//     console.log(suma);
// }

//--------------------------------------------------------------------

// // 11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral
// // o no. Usa un switch para ello.


// let result;
// let key = 'sabado'

// switch (key) {
//     case 'lunes':
//     case 'martes':
//     case 'miercoles':
//     case 'jueves':
//     case 'viernes':
//         result = 'Dia laboral'

//         break;
//     case 'sabado':
//     case 'domingo':
//         result = 'Dia no laborable'

//         break
//     default:
//         break;
// }
// console.log(result);

//--------------------------------------------------------------------

// // 12. Escribe una aplicación con un String que contenga una contraseña cualquiera. Después
// // se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá
// // más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la
// // condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

// let password = 'contraseña';
// let intentos = 3;
// let maxIntentos = 0;

// while (intentos > maxIntentos) {
//     let contraseña = prompt('Dame la contraseña')
//     intentos--
//     if (contraseña === password) {
//         alert(`contraseña correcta`);
//         break
//     } else {
//         alert(`contraseña incorrecta te quedan ${intentos}`);
//     }
//     if (intentos === maxIntentos) {
//         alert(`maximos intentos alcanzados`)
//     }
// }

//--------------------------------------------------------------------

// // 13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo
// // aritmético (String), según este último se realizará la operación correspondiente. Al final
// // mostrará el resultado en un cuadro de diálogo.
// // Los signos aritméticos disponibles son:
// // +: suma los dos operandos.
// // -: resta los operandos.
// // *: multiplica los operandos.
// // /: divide los operandos, este debe dar un resultado con decimales (double)
// // ^: 1o operando como base y 2o como exponente.
// // %: módulo, resto de la división entre operando1 y operando2.

// function calculadora() {

//     let num1 = +prompt(`dame el primer número a operar`);
//     let num2 = +prompt(`dame el segundo número a operar`);
//     let signo = prompt(`introduce el signo (+, -, *, /, ^, %)`)

//     let resultado;

//     switch (signo) {
//         case '+':
//             resultado = num1 + num2;
//             break;
//         case '-':
//             resultado = num1 - num2;
//             break;
//         case '*':
//             resultado = num1 * num2;
//             break;
//         case '/':
//             resultado = num1 / num2;
//             break;
//         case '^':
//             resultado = Math.pow(num1, num2);
//             break;
//         case '%':
//             resultado = num1 % num2;
//             break;

//         default:
//             alert('signo no válido')
//             return;
//     }
//     alert(`El resultado es: ${resultado}`)
// }
// calculadora()