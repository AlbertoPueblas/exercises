//////////////////////////////////////////////
// // JavaScript II
//////////////////////////////////////////////

//--------------------------------------------

// // 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// // Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
// // valores necesarios para calcular el área. Para ello has de crear un método por cada figura
// // para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
// // Aquí te mostramos que necesita cada figura:
// // • Circulo: (radio^2)*PI
// // • Triangulo: (base * altura) / 2
// // • Cuadrado: lado * lado

// function area() {
//     let figura = prompt('Dime de que figura quieres saber el area (circulo, triangulo, cuadrado)')
//     let resultado;

//     switch (figura) {
//         case 'circulo':
//             let radio = +prompt('Dame el radio')
//             resultado = (radio ** 2) * 3.14
//             alert(`El area es: ${resultado}`)
//             break;

//         case 'cuadrado':
//             let lado = +prompt('Dame el lado')
//             resultado = lado * lado
//             alert(`El area es: ${resultado}`)
//             break;

//         case 'triangulo':
//             let base = +prompt('Dame el base')
//             let altura = +prompt('Dame la altura')
//             resultado = (base * altura) / 2
//             alert(`El area es: ${resultado}`)
//             break;
//         default:
//             alert('Dato no valido')
//             break;
//     }
// }
// area()

//--------------------------------------------

// // 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// // por el usuario (prompt). Crea un método donde pasamos como parámetros entre qué
// // números queremos que los genere, podemos pedirlas al usuario antes de generar los
// // números. Este método devolverá un número entero aleatorio. Muestra estos números por
// // consola.
// let cantidad = +prompt('Cuantos números quieres')
// let min = +prompt(`Dame el número de inicio`)
// let max = +prompt(`Dame el número maximo`)

// for(let i = 0; i < cantidad; i++) {
//     let randomN = Math.floor(Math.random() * (max - min +1)) + min
//     console.log(randomN);

// }
// console.log(`La peticion de números aleatorios: ${cantidad}`);
// console.log(`El número minimo es: ${min}`);
// console.log(`El número maximo es: ${max}2`);

//--------------------------------------------

// // 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
// // por parámetro para que nos indique si es o no un número primo, debe devolver true si es
// // primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
// // ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

// function primo(num) {
//     if (num <=1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// let numeroUsuario = +prompt(`Dime un número y te diré si es primo o no`)

// if(primo(numeroUsuario)){
//     console.log(`${numeroUsuario} es un número primo`);
// } else{
//     console.log(`${numeroUsuario} no es un número primo`);

// }

//--------------------------------------------

// // 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// // realizará mediante un método al que le pasamos el número como parámetro. Para calcular
// // el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si
// // introducimos un 5, realizará esta operación 5*4*3*2*1=120.

// function calculoFactor(numero) {
//     if(numero < 0){
//         return 'El factorial no está definido'
//     }
//     let factorial = 1;
//     for (let i = 1; i <= numero; i++) {
//         factorial *= i
//     }
//     return factorial
// }

// let num= +prompt(`Dame un numero y lo factorizo`)
// let resultado = calculoFactor(num);
// console.log(`El factorial de ${num} es: ${resultado}`);

//--------------------------------------------

// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un String
// con el número convertido a binario. Para convertir un número decimal a binario, debemos
// dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que
// no se pueda dividir más, el resto que obtengamos de cada división formará el número
// binario, de abajo a arriba.

// // Función para convertir un número decimal a binario
// function convertirDecimalABinario(numero) {
//     if (numero === 0) {
//         return "0"; // Si el número es 0, su binario es 0
//     }

//     let binario = ""; // Almacenamos el número binario en forma de cadena

//     while (numero > 0) {
//         binario = (numero % 2) + binario; // Obtenemos el resto y lo agregamos al principio
//         numero = Math.floor(numero / 2); // Dividimos el número entre 2 y redondeamos hacia abajo
//     }

//     return binario; // Retornamos el número binario como string
// }

// // Pedimos al usuario un número mediante prompt
// let numeroUsuario = parseInt(prompt("Introduce un número decimal para convertir a binario:"));

// // Llamamos a la función convertirDecimalABinario y mostramos el resultado
// let resultadoBinario = convertirDecimalABinario(numeroUsuario);
// console.log(`El número ${numeroUsuario} en binario es: ${resultadoBinario}`);

//--------------------------------------------

// // 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// // (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, pasando
// // el número por parámetro devolverá el número de cifras.

// // Función para contar el número de cifras de un número
// function contarCifras(numero) {
//     if (numero < 0) {
//         return "Por favor, introduce un número entero positivo."; // Controlamos que sea positivo
//     }

//     return numero.toString().length; // Convertimos el número a string y contamos su longitud
// }

// // Pedimos al usuario un número mediante prompt
// let numeroUsuario = parseInt(prompt("Introduce un número entero positivo:"));

// // Verificamos si el número es válido y mostramos el resultado
// if (Number.isInteger(numeroUsuario) && numeroUsuario >= 0) {
//     let cifras = contarCifras(numeroUsuario);
//     console.log(`El número ${numeroUsuario} tiene ${cifras} cifra(s).`);
// } else {
//     console.log("Por favor, introduce un número entero positivo válido.");
// }

//--------------------------------------------

// // 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// // otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// // parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// // devolverá ningún valor, mostrará un mensaje indicando el cambio.
// // El cambio de divisas es:
// // • 0.86 libras es un 1 €
// // • 1.28611 $ es un 1 €
// // • 129.852 yenes es un 1 €

// let numero = +prompt(`Dame una cantidad de € y lo convertiré a otra moneda`);

// let dolar = numero * 1.28611
// let libra = numero * 0.86
// let yenes = numero * 129.852

// console.log(`${numero} € son: ${dolar} dolares`);
// console.log(`${numero} € son: ${libra} libras`);
// console.log(`${numero} € son: ${yenes} yenes`);

//--------------------------------------------

// // 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// // por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
// // valores y otro para mostrar.

// let array = [];

// function rellenarArray() {
//     for (let i = 0; i < 10; i++) {
//         let numero = +prompt(`Introduce el número en la posición ${i}:`)
//         array.push(numero)
//     }
// }

// function mostrarArray() {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`indice-> ${i}, valor->${array[i]}`);

//     }
// }
// rellenarArray();
// mostrarArray();
// console.log(array);

//--------------------------------------------

// // 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// // rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
// // valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método para
// // rellenar el array(que tenga como parámetros los números entre los que tenga que generar)
// // y otro para mostrar el contenido y la suma del array.

// let array = [];

// function rellenarArray(min, max) {
//     let tamaño = +prompt(`Dime el tamaño del array que necesitas`)

//     for (let i = 0; i < tamaño; i++) {
//         let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
//         array.push(numeroAleatorio)
//     }
// }

// function mostrarArray() {
//     let suma = 0;

//     for (let i = 0; i < array.length; i++) {
//         console.log(`indice-> ${i}, valor-> ${array[i]}`);
//         suma += array[i];
//     }
//     console.log(`Suma total: ${suma}`);
// }

// rellenarArray(0, 9);
// mostrarArray();

//--------------------------------------------

// // 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá
// // números aleatorios primos entre los números deseados, por último, nos indica cuál es el
// // mayor de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// // hacer todos los métodos que necesites.

// let array = [];

// // Función para verificar si un número es primo
// function esPrimo(numero) {
//     if (numero < 2) return false; // Los números menores a 2 no son primos
//     for (let i = 2; i <= Math.sqrt(numero); i++) { // Verificamos si tiene divisores
//         if (numero % i === 0) return false;
//     }
//     return true;
// }

// function rellenarArray(min, max) {
//     let tamaño = +prompt(`Dime el tamaño del array a generar `)

//     while (array.length < tamaño) {
//         let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

//         // Solo añadimos el número al array si es primo
//         if (esPrimo(numeroAleatorio)) {
//             array.push(numeroAleatorio);
//         }
//     }
// }

// function mostrarMax() {
//     let numeroMaximo = Math.max(...array);
//     console.log(`El numero mas grande es: ${numeroMaximo}`);

// }
// rellenarArray(0, 100);
// mostrarMax();
// console.log(array);



//--------------------------------------------

// // 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
// // rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
// // del segundo array con valores aleatorios. Después, crea un método que tenga como
// // parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0 del
// // array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de cada
// // array.

// let array1 = [];
// let array2 = [];

// function rellenarArray(min, max) {
//     let tamañoArray = +prompt('Dime el tamaño del array')

//     for (let i = 0; i < tamañoArray; i++) {
//         let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
//         array1.push(numAleatorio)
//     }
//     array2 = array1.slice()
//     console.log(`Array1: ${array1}`);
//     console.log(`Array2 (copia de array1): ${array2}`);


// }

// function reasignacionArr2(min, max){
//     for (let i = 0; i < array2.length; i++) {
//         let cambioArray = Math.floor(Math.random() * (max - min + 1)) + min;
//         array2[i] = cambioArray

//     }
//     console.log(`Valores reasignados: ${array2}`);  
// }

// function multiplicarArrays(arr1, arr2) {
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] * arr2[i]);
//     }
//     return result
// }

// rellenarArray(0, 20);
// reasignacionArr2(0, 20)
// multiplicarArrays(array1, array2)

// let arrayMultiplicado = multiplicarArrays(array1, array2);
// console.log(`Resultado de la multiplicación de ambos arrays: ${arrayMultiplicado}`);

//--------------------------------------------

// // 12. Crea un array de números de un tamaño pasado por prompt, el array contendrá
// // números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
// // nosotros le indiquemos por prompt (debes controlar que se introduce un número correcto),
// // estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10 posiciones le
// // indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

// let array = [];
// let arrayFiltrado = [];

// function rellenarArray(min, max) {
//     let tamañoArray = +prompt(`Dame la longitud del arreglo`)
//     let digitoFinal;

//     do {
//         digitoFinal = +prompt(`Dame el ultimo digito para completar el array con esas terminaciones`)
//     } while (isNaN(digitoFinal) || digitoFinal < 0 || digitoFinal > 9);

//     for (let i = 0; i < tamañoArray; i++) {
//         let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
//         array.push(numAleatorio)
//     }

//     arrayFiltrado = array.filter(num => num % 10 === digitoFinal)

//     console.log("Array original:", array);
//     console.log(`Números que terminan en ${digitoFinal}:`, arrayFiltrado);

// }
// rellenarArray(1, 300)
