//////////////////////////////////////////////
// // JavaScript IV (Array, objetos, POO)
//////////////////////////////////////////////

//-------------------------------------------------------------------------------------------

// // 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// // consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del array
// // y lo saque por consola.

// let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// function longitudArray() {
//     console.log(`La longitud del array es: ${array.length}`);

// }

// function arrayRandom() {
//     let aleatorio = Math.floor(Math.random() * array.length);

//     console.log(`Elemento random del array: ${array[aleatorio]}`);

// }
// longitudArray();
// arrayRandom();

//-------------------------------------------------------------------------------------------

// // 2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
// // los liste y los saque por consola.

// let planetas = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno',];

// function listaPlanetas() {
//     tamañoLista = planetas.length
//     console.log(`Lista de planetas: ${tamañoLista}`);
//     console.log(`Nombres: ${planetas.join(', ')}`);

// }
// listaPlanetas();

//-------------------------------------------------------------------------------------------

// // 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
// // array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en su
// // lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los últimos dos
// // elementos. Obtén el índice del elemento "Funciones".

// let array = ["DOM", "BOM", "Funciones", "Arrays"];

// let modificar = array.splice(0,1,'Objetos');
// let modificar2 = array.splice(3,1,'ArraysDificiles');
// let indice = array.splice(0,2);

// console.log('Opción 1', array);

//-------------------------------------------------------------------------------------------

// // 4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
// // Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

// let string = 'Hola'
// let array = string.split('');
// let invertido = array.reverse()
// let invertidoString = invertido.join('')

// console.log(invertidoString);

//-------------------------------------------------------------------------------------------

// // 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// // sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3] y
// // arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

// let arrayUno = [1, 2, 3];
// let arrayDos = [4, 5, 6];

// function intercalarArrays(array1, array2) {
//     let nuevoArray = [];// Nuevo Array para la iteración

//     if (array1.length !== array2.length) { // Asegura que los arrays tengan la misma longitud.
//         console.log('Los arrays no tienen la misma longitud');
//         return;
//     }

//     for (let i = 0; i < array1.length; i++) { // Bucle for para insertar un elemento de cada array
//         nuevoArray.push(array1[i]); // inserta el elemento++
//         nuevoArray.push(array2[i]); // inserta el segundo elemento++
//     }
//     // Vacia los array
//     array1.length = 0; 
//     array2.length = 0;

//     return nuevoArray;
// }
// let resultado = intercalarArrays(arrayUno, arrayDos);
// console.log("Nuevo array intercalado:", resultado);
// console.log("Array Uno vacío:", arrayUno);
// console.log("Array Dos vacío:", arrayDos); 

//-------------------------------------------------------------------------------------------

// // 6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
// // uno para pares y otro para impares. A continuación, saca por consola ambos arrays
// // resultantes concatenados.

// let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function parOimpar() {

//     let arrPares = [];
//     let arrImpares = [];

//     for (let i = 0; i < arrayNumeros.length; i++) {
//         if (arrayNumeros[i] % 2 === 0) {
//             arrPares.push(arrayNumeros[i]);

//         } else if(arrayNumeros[i] % 2 !== 0){
//             arrImpares.push(arrayNumeros[i]);
//         }
//     }
//     let arrConcatenado = arrPares.concat(arrImpares);
//     return arrConcatenado;
// }
// let resultado = parOimpar(arrayNumeros)
// console.log(resultado);

//-------------------------------------------------------------------------------------------

// // 7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
// // únicamente los números mayores que 5.

// let arrayNum = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

// function mayor5() {
//     let arrMayor5 = [];
//     for (let i = 0; i < arrayNum.length; i++) {
//         if (arrayNum[i] >= 5) {
//             arrMayor5.push(arrayNum[i])
//         }
//     }
//     return arrMayor5;    
// }
// let resultado = mayor5(arrayNum);
// console.log(resultado);

//-------------------------------------------------------------------------------------------

// // 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
// // ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún elemento
// // y lo saque por consola.
// let arr1 = ["DOM", "BOM", "Funciones", "Arrays"];
// let arr2 = ["Objetos", "Arrays", "ParseInt"];

// function repetido() {
//     let arrRepetidos = [];

//     for (let i = 0; i < arr1.length; i++) {

//         if (arr2.includes(arr1[i])) {
//             arrRepetidos.push(arr1[i])
//         }
//     }

//     if (arrRepetidos.length > 0) {
//         console.log(`Elementos repetidos -> ${arrRepetidos}`);  
//     } else {
//         console.log('no hay elementos repetidos.');

//     }
//     console.log(`array uno -> ${arr1} <-> array dos -> ${arr2}`);

// }
// repetido();

//-------------------------------------------------------------------------------------------

// // 9. Imagina que estamos en una carrera y los nombres de las personas que van llegando a la
// // meta se van almacenando en un array (el primero quedaría en la primera posición del array,
// // el segundo en la segunda, etc.). Crea un array con por lo menos cinco nombres.
// // Desestructura el array utilizando el operador rest de manera que puedas llamar al ganador,
// // al segundo y al resto de competidores por separado.

// let competidores = ["Juan", "María", "Pedro", "Ana", "Luis"];

// let [ganador, segundo, tercero, ...restoCompetidores] = competidores;

// console.log('Los participantes son:', competidores);
// console.log(`Ganador: ${ganador}`);
// console.log(`Segundo: ${segundo}`);
// console.log(`Tercero ${tercero}`);
// console.log(`Resto de participantes ${restoCompetidores}`);

//-------------------------------------------------------------------------------------------

// // 10. Crea un objeto que almacene los datos de una persona(nombre, apellidos, edad,
// // dirección, ciudad, país...y lo que quieras).Crea una función que saque por consola el
// // nombre completo(nombre y apellidos) de la persona a modo de string.

// let personas = [
//     {
//         nombre:'Alfredo',
//         apellido:'Godofredo',
//         edad:'33',
//         cuidad:'Guadalajara',
//         pais: 'España',
//         telefono:'58439038',
//         sexo:'Masculino'
//     },
// ];

// function parametros() {

//     let persona = personas[0]

//     let nombreCompleto = `${persona.nombre} ${persona.apellido}`
//     console.log(nombreCompleto);
// }
// parametros();

//-------------------------------------------------------------------------------------------

// // 11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente a
// // tres de esas propiedades.

// let personas = [
//     {
//         nombre:'Alfredo',
//         apellido:'Godofredo',
//         edad:'33',
//         cuidad:'Guadalajara',
//         pais: 'España',
//         telefono:'58439038',
//         sexo:'Masculino'
//     },
// ];

// let {nombre, apellido, edad} = personas[0]

// let datosPersona = `${nombre} ${apellido} ${edad}`

// console.log(datosPersona);

//-------------------------------------------------------------------------------------------

// // 12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al
// // menos tres) y distintos valores. Crea una función que saque por consola el valor de una de
// // las propiedades para todos los objetos.

// let personas = [
//     {
//         nombre: 'Alfredo',
//         apellido: 'Godofredo',
//         edad: '33',
//         cuidad: 'Malaga',
//     },
//     {
//         nombre: 'Hector',
//         apellido: 'Gomez',
//         edad: '23',
//         cuidad: 'Madrid',
//     },
//     {
//         nombre: 'Sara',
//         apellido: 'Connor',
//         edad: '36',
//         cuidad: 'Guadalajara',
//     },    
//     {
//         nombre: 'Marc',
//         apellido: 'Marquez',
//         edad: '36',
//         cuidad: 'Guadalajara',
//     },
// ];
// function objetos() {

//     for (let i = 0; i < personas.length; i++) {
//         let { nombre } = personas[i];

//         let elemento = `Nombre: ${nombre}`
//         console.log(elemento);
//     }

// }
// objetos();

//-------------------------------------------------------------------------------------------

// // 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// // nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola el
// // nombre, el tiempo y una lista de los ingredientes.

// let receta = [
//     {
//         nombre: 'Pasta Carbonara',
//         tiempo: '30 min',
//         ingredientes:
//             '100 gramos/persona de espaguetti, 1 pc de porqueta, 2 huevos, 50 g queso Grana padano',
//         receta:
//             'Rallar el queso, verter los huevos(sin clara), una pizca de sal otra de pimienta al gusto, remover bien. añadir la pasta '
//     },
// ];

// function mostrarReceta() {
//     let { nombre, tiempo, ingredientes } = receta[0];

//     console.log(nombre);
//     console.log(ingredientes);
//     console.log(tiempo);
// }
// mostrarReceta();

//-------------------------------------------------------------------------------------------

// 14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array.

// let receta = [
//     {
//         nombre: 'Pasta Carbonara',
//         tiempo: '30 min',
//         ingredientes: '100 gramos/persona de espaguetti, 1 pc de porqueta, 2 huevos, 50 g queso Grana padano',
//         receta: 'Rallar el queso, verter los huevos(sin clara), una pizca de sal otra de pimienta al gusto, remover bien. añadir la pasta '
//     },
//     {
//         nombre: 'Pasta al Pesto',
//         tiempo: '15 min',
//         ingredientes: '100 gramos/persona de espaguetti, pesto al gusto',
//         receta: 'Cocer la pasta, y verterla cocida sobre la salsa '
//     },
//     {
//         nombre: 'Pasta al oleo',
//         tiempo: '10 min',
//         ingredientes: '100 gramos/persona de espaguetti, 1 cucharada de aceite de oliva, una pizca de cayena, ajo',
//         receta: 'cocer la pasta con ajo sofrito y cayena remover  con la pasta y servir '
//     },
// ];

// function mostrarReceta() {
//     for (let i = 0; i < receta.length; i++) {
//         let { nombre, tiempo, ingredientes } = receta[i];


//         console.log(nombre);
//         console.log(ingredientes);
//         console.log(tiempo);
//         console.log('---------------------------------');

//     }
// }
// mostrarReceta();

//-------------------------------------------------------------------------------------------

// // 15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
// // recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
// // anterior para sacarlas por consola.


// class Receta {
//     constructor(nombre, tiempo, ingredientes) {
//         this.nombre = nombre;
//         this.tiempo = tiempo;
//         this.ingredientes = ingredientes
//     }

//     mostrarReceta() {
//         console.log(`Receta: ${this.nombre}`);
//         console.log(`Tiempo: ${this.tiempo}`);
//         console.log(`Ingredientes: ${this.ingredientes}`);
//         console.log(`Instrucciones: ${this.instrucciones}`);
//         console.log('-----------------------------');
//     }

// }
// let receta1 = new Receta(
//     'Pasta Carbonara',
//     '30 min',
//     '100 gramos/persona de espaguetti, 1 pc de porqueta, 2 huevos, 50 g queso Grana padano',
//     'Rallar el queso, verter los huevos(sin clara), una pizca de sal otra de pimienta al gusto, remover bien. añadir la pasta '
// );
// let receta2 = new Receta(
//     'Pasta al Pesto',
//     '15 min',
//     '100 gramos/persona de espaguetti, pesto al gusto',
//     'Cocer la pasta y verterla cocida sobre la salsa.'
// );
// let receta3 = new Receta(
//     'Pasta al Oleo',
//     '10 min',
//     '100 gramos/persona de espaguetti, 1 cucharada de aceite de oliva, una pizca de cayena, ajo',
//     'Cocer la pasta con ajo sofrito y cayena, remover con la pasta y servir.'
// );

// let listaRecetas = [receta1, receta2, receta3];

// function todas(recetas) {
//     recetas.forEach(receta => receta.mostrarReceta());
// }
// todas(listaRecetas);