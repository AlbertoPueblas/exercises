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

// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
// por parámetro para que nos indique si es o no un número primo, debe devolver true si es
// primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
// ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.