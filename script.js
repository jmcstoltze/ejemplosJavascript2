/* 1. Desde la consola */

function saludo() {
    console.log('¡¡Hola mundo!!');
}

saludo();

/* 2. Ingresa nombre */
/* Muestra el nombre en la consola */

function mostrarNombreConsola(nombre) {
    console.log(`Hola ${nombre}!`);
    alert(`Hola ${nombre}!`);
}

let nombre = prompt('Ingrese su nombre: ');
mostrarNombreConsola(nombre);

/* 3. Recibe número como parámetro y devuelve el doble del número */

function mostrarDobleNumero(numero) {
    
    let dobleNumero = numero * 2;
    let msg = `El doble del número ingresado es ${dobleNumero}`;

    console.log(msg);
    alert(msg);
}

let numero = parseInt(prompt('Ingrese número'));
mostrarDobleNumero(numero);

/* 4. Recibe tres números como parámetros y devuelve su promedio */

function promedioNumeros(num1, num2, num3) {
    let promedio = (num1 + num2 + num3)/3;
    let msg = `El promedio de los número es: ${promedio}`;
    
    console.log(msg);
    alert(msg);
}

let num1 = parseInt(prompt('Ingrese un primer número: '));
let num2 = parseInt(prompt('Ingrese un segundo número: '));
let num3 = parseInt(prompt('Ingrese un tercer número: '));
promedioNumeros(num1, num2, num3);

/* 5. Recibe dos números y devuelve el mayor de ello */

function mostrarNumeroMayor(numero1, numero2) {
    
    let msg = '';

    if (numero1 > numero2) {
        msg = `El primer número ingresado ${numero1} es el mayor`;
    } else if (numero1 < numero2) {
        msg = `El segundo número ingresado ${numero2} es el mayor`;
    } else if (numero1 == numero2) {
        msg = 'Los números son iguales';
    }
    console.log(msg);
    alert(msg);
}

let numero1 = parseInt(prompt('Ingrese un primer número'));
let numero2 = parseInt(prompt('Ingrese un segundo número'));
mostrarNumeroMayor(numero1, numero2);

/* 6. Recibe un número y muestra el cuadrado del número */

function mostrarCuadradroNumero(nro) {
    
    let cuadrado = Math.round(nro * nro);
    msg = `El cuadrado de ${nro} es ${cuadrado}`;
    
    console.log(msg);
    alert(msg);
}

let nro = parseInt(prompt('Ingrese un número: '));
mostrarCuadradroNumero(nro);
