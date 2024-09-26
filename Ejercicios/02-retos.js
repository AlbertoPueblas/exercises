//////////////////////////////////////////////
// // JavaScript (POO)
//////////////////////////////////////////////

//--------------------------------------------

// // Haz una clase llamada Persona que siga las siguientes condiciones:
// // ● Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
// // ● Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0
// // números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una
// // constante para ello.
// // ● Instancia al menos tres objetos.

// class Persona {
//     static sexoPersona = 'H'
//     constructor(nombre = '', edad = 0, dni = 0, sexo = Persona.sexoPersona, peso = 0, altura = 0) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.dni = dni;
//         this.sexo = sexo;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     mostrar() {

//         console.log(`Nombre: ${this.nombre}`);
//         console.log(`Edad: ${this.edad} años`);
//         console.log(`Dni: ${this.dni}`);
//         console.log(`Sexo: ${this.sexo}`);
//         console.log(`Peso: ${this.peso} Kg`);
//         console.log(`Altura: ${this.altura} cm`);
//         console.log(`----------------------`);

//     }
// }
// let person1 = new Persona(
//     'Tomas',
//     30,
//     4930394,
//     'Hombre',
//     90,
//     1.80
// )
// let person2 = new Persona(
//     'Ana',
//     37,
//     93934534,
//     'Mujer',
//     70,
//     1.67
// )
// let person3 = new Persona(

// );

// let listaPersonas = [person1, person2, person3];

// function mostrarPersonas(personas) {
//     personas.forEach(persona => persona.mostrar());
// }
// mostrarPersonas(listaPersonas);

//--------------------------------------------

// // Haz una clase llamada Password que siga las siguientes condiciones:
// // ● Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8. ●
// // Los constructores serán los siguientes:
// // Incluye el método que genere una contraseña aleatoria con esa longitud.

// class Password {
//     static longitudPassword = 8

//     constructor(longitud = Password.longitudPassword, contraseña = '') {
//         this.longitud = longitud >= 4 ? longitud : Password.longitudPassword
//         this.contraseña = contraseña || this.generarPasswordAleatorio();
//     }

//     generarPasswordAleatorio() {
//         const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let contraseñaGenerada = ''

//         for (let i = 0; i < this.longitud; i++) {
//             let randomPassword = Math.floor(Math.random() * caracteres.length);
//             contraseñaGenerada += caracteres[randomPassword];
//         }
//         return contraseñaGenerada
//     }

//     mostrarPassword() {
//         console.log(this.contraseña);
//         console.log(this.longitud);
//     }
// }
// let password1 = new Password(
//     8,
//     'oi7erda34'
// )
// let password2 = new Password(

// )

// let listasPassword = [password1, password2];

// function todasContraseñas(contraseñas) {
//     contraseñas.forEach(contraseña => contraseña.mostrarPassword());
// }
// todasContraseñas(listasPassword);

//--------------------------------------------
//--------------------------------------------

// // Crearemos una superclase llamada Electrodoméstico con las siguientes características:
// // • Sus atributos son precio base, color, consumo energético (letras entre A y F) y
// // peso. Indica que se podrán heredar.
// // • Por defecto, el color será blanco, el consumo energético será F, el precio Base es de
// // 100 € y el peso de 5 kg. Usa constantes para ello.
// // • Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el nombre
// // está en mayúsculas o en minúsculas.

// // Los métodos que implementara serán:
// // • Métodos get de todos los atributos.
// // • comprobarConsumoEnergetico(char letra): comprueba que la letra es correcta, sino
// // es correcta usara la letra por defecto. Se invocara al crear el objeto y no será visible.
// // • comprobarColor(String color): comprueba que el color es correcto, sino lo es usa el
// // color por defecto. Se invocara al crear el objeto y no será visible.
// // • precioFinal(): según el consumo energético, aumentara su precio, y según su
// // tamaño, también.

// // Esta es la lista de precios:
// // letra:      precios:                                 Tamaño:                Precio:
// // A           100€                                      Entre  0 y 19 kg         10€
// // B            80€                                      Entre 20 y 49 kg         50€
// // C            60€                                      Entre 50 y 79 kg         80€
// // D            50€                                      Entre Mas  80 kg        100€
// // E            30€
// // F            10€

// // Crearemos una subclase llamada Lavadora con las siguientes características:
// // ● Su atributo es carga, además de los atributos heredados.
// // ● Por defecto, la carga es de 5 kg. Usa una constante para ello.
// // Recuerda que debes llamar al constructor de la clase padre.
// // Los métodos que se implementara serán:
// // ● Método get de carga.
// // ● precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino es así
// // no se incrementara el precio. Llama al método padre y añade el código necesario.
// // Recuerda que las condiciones que hemos visto en la clase Electrodomestico también
// // deben afectar al precio.

// //--------------------------------------------

// // Crearemos una subclase llamada Televisión con las siguientes características:
// // ● Sus atributos son resolución (en pulgadas) y 4K(booleano), además de los atributos
// // heredados.
// // ● Por defecto, la resolución será de 20 pulgadas y el 4k será false.
// // Recuerda que debes llamar al constructor de la clase padre.
// // Los métodos que se implementara serán:
// // ● Método get de resolución y atributo de 4K.
// // ● precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementará el precio
// // un 30% y si tiene 4k incorporado, aumentará 50 €. Recuerda que las condiciones que
// // hemos visto en la clase Electrodoméstico también deben afectar al precio.

// //--------------------------------------------

// // Ahora crea una clase mainApp que realice lo siguiente:
// // • Crea un array de Electrodomésticos de 10 posiciones.
// // • Asigna a cada posición un objeto de las clases anteriores con los valores que desees. •
// // Ahora, recorre este array y ejecuta el método precioFinal().
// // • Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por
// // un lado, el de las lavadoras por otro y la suma de los Electrodomésticos(puedes crear
// //     objetos Electrodoméstico, pero recuerda que Televisión y Lavadora también son
// //     electrodomésticos).Por ejemplo, si tenemos un Electrodoméstico con un precio final de 300,
// //     una lavadora de 200 y una televisión de 500, el resultado final será de 1000
// //         (300 + 200 + 500) para electrodomésticos, 200 para lavadora y 500 para televisión.

// //--------------------------------------------
// //--------------------------------------------

// class Electrodomestico {
//     static colorDefecto = 'Blanco';
//     static coloresPermitidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];

//     static consumoDefecto = 'F';
//     static consumoPermitido = ['A', 'B', 'C', 'D', 'E', 'F'];

//     static precioBase = 100;
//     static pesoDefecto = 5;

//     constructor(
//         precio = Electrodomestico.precioBase,
//         color = Electrodomestico.colorDefecto,
//         consumo = Electrodomestico.consumoDefecto,
//         peso = Electrodomestico.pesoDefecto
//     ) {
//         this.precio = precio;
//         this.color = this.comprobarColor(color);
//         this.consumo = this.comprobarConsumo(consumo);
//         this.peso = peso;
//     }

//     get getPrecio() {
//         return this.precio;
//     };
//     get getColor() {
//         return this.color;
//     };
//     get getConsumo() {
//         return this.consumo;
//     };
//     get getPeso() {
//         return this.peso;
//     }

//     // Validamos si el color está permitido, de lo contrario asignamos el color por defecto.
//     comprobarColor(color) {

//         color = color.toLowerCase(); // Convertimos a minúsculas para asegurar consistencia

//         if (Electrodomestico.coloresPermitidos.includes(color)) {
//             return color.charAt(0).toUpperCase() + color.slice(1);
//         } else {
//             return Electrodomestico.colorDefecto;
//         }
//     }
//     // Validamos si el consumo está permitido, de lo contrario asignamos el consumo por defecto.
//     comprobarConsumo(consumo) {

//         consumo = consumo.toUpperCase();

//         if (Electrodomestico.consumoPermitido.includes(consumo)) {
//             return consumo;
//         } else {
//             return Electrodomestico.consumoDefecto;
//         }

//     }
//     precioFinal() {
//         let incremento = 0;
//         // incremento por consumo.
//         switch (this.consumo) {
//             case 'A': incremento += 100; break;
//             case 'B': incremento += 80; break;
//             case 'C': incremento += 60; break;
//             case 'D': incremento += 50; break;
//             case 'E': incremento += 30; break;
//             case 'F': incremento += 10; break;
//         }
//         // Incremento por peso
//         if (this.peso >= 80) incremento += 100;
//         else if (this.peso >= 50) incremento += 80;
//         else if (this.peso >= 20) incremento += 50;
//         else incremento += 10;

//         return this.precio + incremento;
//     }

//     mostrarElectrodomestico() {
//         console.log(`Precio: ${this.precio}`);
//         console.log(`Color: ${this.color}`);
//         console.log(`Consumo: ${this.consumo}`);
//         console.log(`Peso: ${this.peso} Kg`);
//         console.log(`Precio Final: ${this.precioFinal()} €`);
//         console.log(`----------------------`);
//     }
// }
// let electrodoméstico1 = new Electrodomestico();
// let electrodoméstico2 = new Electrodomestico(200, 'verde', 'j', 7,);
// let electrodomestico3 = new Electrodomestico(190, 'negro', 'a', 9);
// let electrodomestico4 = new Electrodomestico(195, 'azul', 'a', 82);

// let listaElectrodomestico = [
//     electrodoméstico1,
//     electrodoméstico2,
//     electrodomestico3,
//     electrodomestico4,
// ];

// class Lavadora extends Electrodomestico {
//     static cargaDefecto = 5

//     constructor(
//         precio,
//         color,
//         consumo = Electrodomestico.consumoDefecto,
//         peso = Electrodomestico.pesoDefecto,
//         carga = Lavadora.cargaDefecto

//     ) {
//         super(precio, color, consumo, peso); // Llamada al constructor de la superclase
//         this.carga = carga;
//     }
//     get getCarga() {
//         return this.carga;
//     }
//     precioFinalLavadora() {
//         let precioFinal = super.precioFinal();
//         if (this.carga > 30) {
//             precioFinal += 50;
//         }
//         return precioFinal;
//     }

//     mostrarLavadora() {
//         super.mostrarElectrodomestico();
//         console.log(`Carga: ${this.carga}`);
//         console.log(`Precio Final de Lavadora: ${this.precioFinalLavadora()} €`);

//     }
// }
// let lavadora1 = new Lavadora(190, 'azul', 'a', 18);

// let listaLavadoras = [
//     lavadora1
// ];

// class Televisor extends Electrodomestico {
//     static resolucionDefecto = 20;
//     static calidadDefecto = false;

//     constructor(
//         precio,
//         color,
//         consumo = Electrodomestico.consumoDefecto,
//         peso = Electrodomestico.pesoDefecto,
//         resolucion = Televisor.resolucionDefecto,
//         calidadImagen = Televisor.calidadDefecto,

//     ) {
//         super(precio, color, consumo, peso);
//         this.resolucion = resolucion;
//         this.calidadImagen = calidadImagen;
//     }
//     get getResolucion() {
//         return this.resolucion;
//     }
//     get getCalidadImg() {
//         return this.calidadImgagen;
//     }
//     precioFinalTv() {
//         let precioFinal = super.precioFinal();
//         if (this.resolucion >= 40) {
//             precioFinal += (precioFinal * (0.3))
//         }
//         if (this.calidadImagen === true) {
//             precioFinal += 50;
//         }
//         return precioFinal;
//     }
//     mostrarTv() {
//         super.mostrarElectrodomestico();
//         console.log(`Resolucion: ${this.resolucion}`);
//         console.log(`Calidad de imagen (4K): ${this.calidadImagen}`);
//         console.log(`Precio final tv: ${this.precioFinalTv()} €`);
//     }
// }
// let tv1 = new Televisor();
// let tv2 = new Televisor(430, 'negro', 'b', 8, 50, true);

// let listaTv = [
//     tv1,
//     tv2
// ];

// class mainApp {
//     constructor() {
//         this.electrodomesticos = [];
//         this.totalElectrodomesticos = 0;
//         this.totalLavadoras = 0;
//         this.totalTelevisores = 0;
//     }
//     inicializarElectrodomesticos() {
//         this.electrodomesticos = [
//             new Electrodomestico(100, 'blanco', 'C', 10),
//             new Lavadora(200, 'gris', 'B', 25, 35),
//             new Televisor(500, 'negro', 'A', 15, 42, true),
//             new Electrodomestico(120, 'rojo', 'D', 50),
//             new Lavadora(300, 'azul', 'A', 60, 40),
//             new Televisor(700, 'gris', 'B', 30, 55, false),
//             new Electrodomestico(90, 'blanco', 'F', 70),
//             new Lavadora(220, 'blanco', 'C', 80, 25),
//             new Televisor(400, 'rojo', 'E', 18, 32, true),
//             new Electrodomestico(110, 'negro', 'D', 25)
//         ];
//     }
//     calcuarPrecios() {
//         this.electrodomesticos.forEach((electrodomestico) => {
//             let precioFinal = electrodomestico.precioFinal();
//             // Verificamos si es una instancia de Lavadora o Televisor
//             if (electrodomestico instanceof Lavadora) {
//                 precioFinal = electrodomestico.precioFinalLavadora();
//                 this.totalLavadoras += precioFinal;

//             } else if (electrodomestico instanceof Televisor) {
//                 precioFinal = electrodomestico.precioFinalTv();
//                 this.totalTelevisores += precioFinal
//             }
//             this.totalElectrodomesticos += precioFinal;

//         })
//     }
//     mostrarResultados() {
//         console.log(`Total precio de todos los electrodomésticos: ${this.totalElectrodomesticos} €`);
//         console.log(`Total precio de todas las lavadoras: ${this.totalLavadoras} €`);
//         console.log(`Total precio de todas las televisiones: ${this.totalTelevisores} €`);
//     }
//     ejecutar() {
//         this.inicializarElectrodomesticos();
//         this.calcuarPrecios();
//         this.mostrarResultados();
//     }
// }

// function todosElectrodomesticos(electrodomesticos, lavadoras, televisiones) {
//     electrodomesticos.forEach(electrodomestico => electrodomestico.mostrarElectrodomestico());
//     lavadoras.forEach(lavadora => lavadora.mostrarLavadora());
//     televisiones.forEach(television => television.mostrarTv());
// }
// todosElectrodomesticos(listaElectrodomestico, listaLavadoras, listaTv);
// let app = new mainApp();
// app.ejecutar();
