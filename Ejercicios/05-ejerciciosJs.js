//////////////////////////////////////////////
// // JavaScript IV (Array)
//////////////////////////////////////////////

//-------------------------------------------------------------------------------------------

// // 1. Escribe una función que devuelva el último elemento de un array. Además, debe tener
// // otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números
// // empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como
// // parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe
// // devolverme solo el 5.

// function obtenerUltimosElementos(array, cantidad = 1) {
//     // Si se pasa la cantidad, devolvemos los últimos elementos desde esa cantidad
//     return array.slice(-cantidad);
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Si no paso el segundo parámetro, devuelve el último elemento
// console.log(obtenerUltimosElementos(array)); // [9]

// // Si paso el segundo parámetro, devuelve los últimos N elementos
// console.log(obtenerUltimosElementos(array, 2)); // [7, 8, 9]

//-------------------------------------------------------------------------------------------

// // 2. Escribe una función que, dado un array de números, devuelva una string con todos esos
// // números e inserte guiones entre los números pares. Es decir, dado el array [0, 2, 3, 4,
// // 6, 7, 8], me devolvería “0 2 3 4-6 7 8”

// let array = ['1', '2', '3', '4', '6', '8', '10'];

// function guionPares(array) {
//     let resultado = '';

//     for (let i = 0; i < array.length; i++) {
//         resultado += array[i]; // Agregamos el número actual al resultado

//         // Verificamos si el número actual y el siguiente son pares
//         if (array[i] % 2 === 0 && array[i + 1] % 2 === 0) {
//             resultado += '-'; // Insertamos un guion entre los números pares
//         } else if (i < array.length -1) {
//             resultado += ' '; // Insertamos un espacio si no es el último número
//         }
//     }
//     return resultado;
// }
// let paresConGuion = guionPares(array)
// console.log(paresConGuion);

//-------------------------------------------------------------------------------------------

// // 3. Dado un array con elementos repetidos, determina qué elemento es el más frecuente y
// // cuántas veces se ha repetido

// let array = [1, 2, 3, 4, 2, 5, 3, 3, 6, 7, 2];

// function contarRepetiods(params) {
//     let contador = {}; //Objeto para almacenar el conteo de cada número

//     for (let numero of array) {
//         if(contador[numero]) {
//             contador[numero] += 1
//         } else {
//             contador[numero] = 1
//         }
//     }

//     let repetidos = {};
//     for(let numero in contador) {
//         if(contador[numero] > 1) {
//             repetidos[numero] = contador[numero];
//         }
//     }
//     return repetidos;
// }
// let numerosRepetidos = contarRepetiods(array);
// console.log(numerosRepetidos);

//-------------------------------------------------------------------------------------------

// // 4. Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y
// // todas sus minúsculas a mayúsculas y devuelva una nueva string.(“Hola” devolvería
// // “hOLA”)

// let texto = 'Hola Mundo'
// function mayusculaMinuscula(texto) {

//     let resultado = '';

//     for (let i = 0; i < texto.length; i++) {
//         let caracter = texto[i];
//         // Si el carácter es una mayúscula, lo convertimos a minúscula
//         if (caracter === caracter.toUpperCase()) {
//             resultado += caracter.toLowerCase();
//         // Si es una minúscula, lo convertimos a mayúscula
//         } else {
//             resultado += caracter.toUpperCase();
//         }
//     }
//     return resultado
// }
// let textoCambiado = mayusculaMinuscula(texto);
// console.log(textoCambiado);

//-------------------------------------------------------------------------------------------

// // 5. Crea una función que, dado el siguiente array: [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4,
// //     28, 14], [3, 10, 26, 7]] saque por consola cada uno de sus arrays interiores separados por
// //     indicadores con el número de fila, es decir:
// //     Fila 1 : 1 2 1 24
// //     Fila 2 : 8 11 9 4....

// let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

// function filasDeArrays(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`Fila ${i + 1}: ${array[i].join(' ')}`);
//     }
// }
// filasDeArrays(array)

//-------------------------------------------------------------------------------------------

// // 6. Escribe una función que devuelva los años bisiestos en cierto rango de años.

// function esBisiesto(año) {
//     // Verifica si el año es bisiesto
//     return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
// }

// function obtenerAniosBisiestos(añoInicio, añoFin) {
//     let bisiestos = [];

//     // Recorremos el rango de años
//     for (let i = añoInicio; i <= añoFin; i++) {
//         // Si el año es bisiesto, lo añadimos al array
//         if (esBisiesto(i)) {
//             bisiestos.push(i);
//         }
//     }
//     return bisiestos;
// }

// let añoInicio = 2000;
// let añoFin = 2024;
// let añosBisiestos = obtenerAniosBisiestos(añoInicio, añoFin);

// console.log("Años bisiestos en el rango:", añosBisiestos);

//-------------------------------------------------------------------------------------------

// // 7. Crea una función que, dados un array y uno de sus elementos, elimine ese elemento del
// // array

// let array = [1, 2, 3, 4, 5];
// let index = array.indexOf(3); // Encuentra el índice del valor 3
// if (index > -1) {
//     array.splice(index, 1); // Elimina un elemento en el índice dado
// }
// console.log(array); // Resultado: [1, 2, 4, 5]


//-------------------------------------------------------------------------------------------

// // 8. Crea una función que, dados dos arrays, devuelva un único array con ambos arrays
// // concatenados pero que elimine los elementos repetidos de los mismos.

// let array1 = [1, 2, 3, 4, 5, 6];
// let array2 = [2, 7, 3, 8, 9, 10];

// function concatenarArray(arr1, arr2) {
//     let nuevoArray = arr1.concat(arr2)
//     let arrayFiltrado = nuevoArray.filter((item, index) => nuevoArray.indexOf(item) === index)

//     console.log(arrayFiltrado);
// }
// concatenarArray(array1, array2)


//-------------------------------------------------------------------------------------------

// // 9. Crea una función que determine si un array contiene cierto elemento, pasando ambos
// // como argumentos a la misma

// function contieneElemento(array, elemento) {
//     // Verifica si el array contiene el elemento
//     return array.includes(elemento);
// }

// let miArray = [1, 2, 3, 4, 5, 6];
// let elementoBuscado = 6;

// let resultado = contieneElemento(miArray, elementoBuscado);
// console.log(resultado);

//-------------------------------------------------------------------------------------------

// // 10. Escribe una función que rellene un array con un determinado número de elementos y
// // pasa ambas cosas por parámetro. Es decir, la ejecución de rellenar(3, 4) sería [4, 4, 4]

// function rellenarArray(longitud, valor) {
//     return new Array(longitud).fill(valor);
// }
// let resultado = rellenarArray(7, 4)
// console.log(resultado);

//-------------------------------------------------------------------------------------------

// 11. Escribe una función para intercambiar las posiciones de dos elementos en un array.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function intercambioPosiciones(array, index1, index2) {
//     if (index1 < 0 || index2 < 0 || index1 >= array.length || index2 >= array.length) {
//         console.log('Fuera de rango');
//         return;
//     }
//     [array[index1], array[index2]] = [array[index2], array[index1]];  // Intercambiar los elementos usando destructuring
// }
// console.log(`Array original -> ${array}`);
// intercambioPosiciones(array, 2, 8);
// console.log(`Array modificado -> ${array}`);

//-------------------------------------------------------------------------------------------

// // 12. Escribe una función que genere un array de números y pásale por parámetro el número inicial
// // y el largo del array. El array resultante debe ir sumando de uno en uno hasta alcanzar el largo
// // deseado.

// let numInicial = 1;
// let longitudArray = 10;

// function sumaArray(numInicial, longitudArray) {
//     let resultado = [];

//     for (let i = 0; i < longitudArray; i++) {
//         resultado.push(numInicial + i)
//     }
//     return resultado
// }
// console.log(sumaArray(numInicial, longitudArray));

//-------------------------------------------------------------------------------------------

// // 13. Escribe una función que, al pasarle un array como argumento, determine qué elementos de
// // ese array son números y devuelva la suma de los mismos.

// function tipoArray(arr) {
//     let suma = 0; // Inicializamos una variable para la suma.

//     // Recorremos el array.
//     for (let i = 0; i < arr.length; i++) {
//         // Verificamos si el elemento es de tipo 'number'.
//         if (typeof arr[i] === 'number') {
//             suma += arr[i]; // Si es un número, lo sumamos a 'suma'.
//         }
//     }

//     return suma; // Devolvemos la suma total.
// }

// let miArray = [1, 'a', 2, true, 3, 4, 'b', 5];

// console.log(tipoArray(miArray));

//-------------------------------------------------------------------------------------------

// // 14. Escribe una función que determine la palabra más larga de una string

// function stringMax(array) {
//     let palabraLarga = '';

//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > palabraLarga.length) {
//             palabraLarga = array[i];
//         }
//     }
//     return palabraLarga;
// }
// let palabras = ['casa', 'camion', 'compañia'];
// console.log(stringMax(palabras));

//-------------------------------------------------------------------------------------------

// // 15. Crea una función que, dada una string, cuente cuántas vocales hay en la misma y devuelva el
// // resultado

// function contarVocales(string) {
//     let contador = 0;
//     let vocales = ['a', 'e', 'i', 'o', 'u'];
//     for (let i = 0; i < string.length; i++) {

//         let texto = string[i].toLowerCase();// Convertimos el carácter a minúscula para evitar problemas con mayúsculas.

//         if (vocales.includes(texto)) {
//             contador++   
//         }
//     }
//     console.log(`Palabra -> ${palabra} <-> número de vocales ->  ${contador}`);
//     return contador
// }
// let palabra = 'vehiculo';
// contarVocales(palabra);

//-------------------------------------------------------------------------------------------

// // 16. Crea una función que genere una contraseña aleatoria. Debes pasar por parámetro la cantidad
// // de caracteres que quieres que tenga la contraseña.

// function passwordRandom(longitud) {
//     const caracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789,.';
//     let contraseña = '';

//     for (let i = 0; i < longitud; i++) {
//         let aleatoria = Math.floor(Math.random() * caracteres.length);
//         contraseña += caracteres[aleatoria]
//     }
//     return contraseña;
// }
// let longitudContraseña = 8;
// console.log(passwordRandom(longitudContraseña));

//-------------------------------------------------------------------------------------------

// // 17. Crea una función reloj que vaya desde las 23:58:00 hasta las 00:00:00 y saque por consola
// // cada segundo y minuto entre ambas.

// function reloj() {

//     let horas = 23;
//     let min = 58;
//     let seg = 0;

//     let intervalo = setInterval(function () { // Función anónima
//         let horaFormateada =
//             String(horas).padStart(2, 0) + ':' +
//             String(min).padStart(2, 0) + ':' +
//             String(seg).padStart(2, 0)

//             document.getElementById('reloj').textContent = horaFormateada;
//         seg++;

//         if (seg === 60) {
//             segundos = 0
//             min++
//         }
//         if (min === 60) {
//             min = 0
//             horas++
//         }
//         if (horas === 23 && min === 59 && seg === 60) {

//             clearInterval(intervalo);

//             document.getElementById('reloj').textContent = '00:00:00 Cronometro completado'
//             console.log('Cronómetro completado!!');
//         }
//     }, 1000) //intervalo de 1 seg (Asíncronia)
// }
// reloj();

//-------------------------------------------------------------------------------------------

// // 18. Escribe una función que compruebe si un objeto tiene determinada propiedad (pasando como
// // parámetro el objeto y la propiedad en cuestión)

// function objetos() {
//     let personas = [
//         { nombre: "Mara", edad: 30 },
//         { nombre: "Pablo", edad: 35 },
//         { nombre: "Juan", edad: 26 },
//         { nombre: "Marta", edad: 56 },
//         { nombre: "Rodrigo", edad: 31 },
//     ];

//     personas.forEach(persona => {// Arrow function
//         console.log(`Nombre ${persona.nombre}. edad: ${persona.edad}`);
//     });
// }
// objetos()

//-------------------------------------------------------------------------------------------

// // 19. Escribe una función que sume todos sus argumentos,
// // independientemente de cuántos sean

// function sumaArgumentos() {
//     let suma = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         suma += arguments[i];
//     }
//     return suma;
// }
// console.log(sumaArgumentos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,5));

//-------------------------------------------------------------------------------------------

// // 20. Escribe una función que me diga si un alumno está aprobado o no, a la cual puedo pasar
// // cualquier cantidad de notas como parámetro

// function aprobado() {
//     let numNotas = +prompt('Cuantas notas vas a introducir');
//     let suma = 0;

//     for (let i = 1; i <= numNotas; i++) {
//         let nota = +prompt(`Dame la nota ${i}`);
//         suma += nota

//         if (nota < 0 || nota > 10) {
//             console.log('Rango de 0 a 10');
//             return;

//         }
//     };
//     let media = (suma) / numNotas;

//     if (media >= 5 && media <= 10) {
//         console.log('Enhorabuena estas aprobado!!!');

//     } else {
//         console.log('lo siento estas suspenso');

//     }

//     console.log('notas', numNotas, 'suma', suma, 'media', media);
// }
// aprobado();

//-------------------------------------------------------------------------------------------

// // 21. Escribe una función que reciba un array de números como argumento y saque la diferencia
// // entre el número más alto y el más bajo del mismo. Utiliza el operador …

// function numeros() {
//     let array = [-23, 2, 3, 4, 5, 6, 7, 8, 9, 10, 300]
//     let max = Math.max(...array);
//     let min = Math.min(...array);
//     let diferencia = max - min;

//     console.log(`Array: ${array}, número mas alto : ${max}, número mas bajo: ${min}.`);
//     console.log(`Diferencia: ${diferencia}`);

// }
// numeros();

//-------------------------------------------------------------------------------------------

// // 22. Crea dos arrays de objetos. El primero debe contener los nombres y apellidos de por lo menos
// // tres personas. El segundo debe contener otros datos de esas mismas personas, como su dirección
// // y su número de teléfono. Utiliza una función para combinar ambos arrays y obtener un array nuevo
// // en que cada objeto contiene toda la información de cada persona.
// let arr1 = [
//     {
//         nombre: 'Antonio',
//         apellido: 'Díaz',
//         edad: 38
//     }, {
//         nombre: 'Pedro',
//         apellido: 'García',
//         edad: 14

//     }, {
//         nombre: 'Sara',
//         apellido: 'Connor',
//         edad: 44
//     }];
// let arr2 = [
//     {
//         direccion: 'C/ Salmonete',
//         telefono: '00043'
//     },
//     {
//         direccion: 'C/ Piruleta',
//         telefono: '65443'
//     },
//     {
//         direccion: 'C/ Salsipuedes',
//         telefono: '676466'
//     },
// ];
// function combinar(arr1, arr2) {
//     return arr1.map((persona, index) => {
//         return {...persona, ...arr2[index]}
//     })  
// }
// let arrayCombinado = combinar(arr1, arr2);
// console.log(arrayCombinado);


//-------------------------------------------------------------------------------------------

// // 23. Dado el objeto combinado del ejercicio anterior, crea una función que saque cada uno de los
// // objetos excluyendo la edad de la persona. Es decir, debo ver todas las propiedades de cada objeto
// // menos la edad. Hazlo utilizando el operador ...

// let arr1 = [
//     {
//         nombre: 'Antonio',
//         apellido: 'Díaz',
//         edad: 38
//     }, {
//         nombre: 'Pedro',
//         apellido: 'García',
//         edad: 14

//     }, {
//         nombre: 'Sara',
//         apellido: 'Connor',
//         edad: 44
//     }];
// let arr2 = [
//     {
//         direccion: 'C/ Salmonete',
//         telefono: '00043'
//     },
//     {
//         direccion: 'C/ Piruleta',
//         telefono: '65443'
//     },
//     {
//         direccion: 'C/ Salsipuedes',
//         telefono: '676466'
//     },
// ];
// function combinar(arr1, arr2) {
//     return arr1.map((persona, index) => {
//         const {edad, ...sinEdad} = persona;
//         return {...sinEdad, ...arr2[index]};
//     })  
// }
// let arrayCombinado = combinar(arr1, arr2);
// console.log(arrayCombinado);

//-------------------------------------------------------------------------------------------

// // 24. Dado el array de nombres ["mara", "pAblo", "juan", "MARCOS"], devuelve otro en que la
// // primera letra de cada uno sea mayúscula y el resto minúsculas

// let array = ["mara", "pAblo", "juan", "MARCOS"];

// let arrayTransformado = array.map(nombre => {
//     return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()
// })
// console.log(arrayTransformado);


//-------------------------------------------------------------------------------------------

// // 25. Crea un array con únicamente los nombres de los siguientes objetos
// // let personas = [
// // { nombre: "Mara", edad: 30 },
// // { nombre: "Pablo", edad: 35 },
// // { nombre: "Juan", edad: 26 },
// // { nombre: "Marta", edad: 56 },
// // { nombre: "Rodrigo", edad: 31 },
// // ];
// // Además, saca un array únicamente con los nombres de los mayores de 30

// let personas = [
//     { nombre: "Mara", edad: 30 },
//     { nombre: "Pablo", edad: 35 },
//     { nombre: "Juan", edad: 26 },
//     { nombre: "Marta", edad: 56 },
//     { nombre: "Rodrigo", edad: 31 },
// ];

// function nombreYedad() {
//     let nombre = personas.map(persona => persona.nombre);
//     console.log('Array de nombres:', nombre);

//     let masDe30 = personas
//         .filter(persona => persona.edad > 30)
//         .map(persona => persona.nombre)

//         console.log(`Mas de 30 -> ${masDe30}`);

// }
// nombreYedad();

//-------------------------------------------------------------------------------------------

// // 26. Dado un array de números, crea una función que sume solo los
// // pares

// function sumarPares(arrNumeros) {

//     let suma = 0;

//     for (let i = 0; i < arrNumeros.length; i++) {
//         if (arrNumeros[i] % 2 === 0) {
//             suma += arrNumeros[i];
//         }
//     }
//     return suma;
// }
// let arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let resultado = sumarPares(arrNumeros)
// console.log(`Array: ${arrNumeros}`);

// console.log("Suma de números pares:", resultado);

//-------------------------------------------------------------------------------------------

// // 27. Dado un nombre completo (en string), obtén sus iniciales y sácalas también en una string

// let fullName = ['Alfred Varela', 'Camilo Alvarez'];

// function obtenerInicial(names) {
//     return names.map(name => {
//         let partes = name.split(' ');
//         return partes.map(part => part.charAt(0).toUpperCase()).join('');
//     });
// }
// let iniciales = obtenerInicial(fullName);
// console.log(iniciales);

//-------------------------------------------------------------------------------------------

// // 28. Saca únicamente los nombres de los estudiantes que tengan una media por encima de 9

// let alumnos = [
//     { nombre: 'Mara', notas: [10, 7, 8, 8, 9] },
//     { nombre: 'David', notas: [6, 2, 5, 10, 7] },
//     { nombre: 'Marcos', notas: [3, 5, 2, 8, 5] },
//     { nombre: 'Pablo', notas: [10, 10, 9, 8, 9] },
// ];

// function obtenerAlumnosConMediaSuperiorA9() {
//     return alumnos
//         .filter(alumno => {
//             let media = alumno.notas.reduce((acc, nota) => acc + nota, 0) / alumno.notas.length;
//             return media > 9;
//         })
//         .map(alumno => alumno.nombre);  // Extrae solo los nombres
// }

// console.log(obtenerAlumnosConMediaSuperiorA9());
