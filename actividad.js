
// 1. Algoritmo para imprimir números del 1 al 10
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10); 

// 2. Algoritmo para sumar los primeros 10 números
let sum = 0;
let j = 1;
do {
    sum += j;
    j++;
} while (j <= 10);
console.log("La suma de los primeros 10 números es: " + sum);

// 3. Algoritmo para generar la tabla de un numero dado por argumento en una función
function tablaDeMultiplicar(numero) {
    let k = 1;
    console.log("Tabla de multiplicar del " + numero + ":");
    do {
        console.log(numero + " x " + k + " = " + (numero * k));
        k++;
    }
    while (k <= 10);
}
tablaDeMultiplicar(5);

// 4. Algoritmo para contar ocurrencias de 'a' en un texto
function contarOcurrenciasA(texto) {
    let contador = 0;
    let index = 0;
    do {
        if (texto.charAt(index).toLowerCase() === 'a') {
            contador++;
        }
        index++;
    } while (index < texto.length);
    return contador;
}
let texto = "Amanecer en la aldea";
console.log("Número de ocurrencias de 'a': " + contarOcurrenciasA(texto));

// 5. Algoritmo para calcular el factorial de un número
function factorial(n) {
    let resultado = 1;
    let m = 1;

    do {
        resultado *= m;
        m++;
    }
    while (m <= n);
    return resultado;
}
console.log("El factorial de 5 es: " + factorial(5));

// 6. Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.
function filtrarPares(array) {
    let pares = [];
    let n = 0;
    do {
        if (array[n] % 2 === 0) {
            pares.push(array[n]);
        }
        n++;
    } while (n < array.length);
    return pares;
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números pares: " + filtrarPares(numeros));

// 7. Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.
function sumaCuadrados(N) {
    let suma = 0;
    let p = 1;
    do {
        suma += p * p;
        p++;
    }
    while (p <= N);
    return suma;
}
console.log("La suma de los cuadrados de los primeros 5 números naturales es: " + sumaCuadrados(5));


// 8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.
function potencia(base, exponente) {
    let resultado = 1;
    let q = 1;
    do {
        resultado *= base;
        q++;
    } while (q <= exponente);
    return resultado;
}
console.log("2 elevado a la 3 es: " + potencia(2, 3));

// 9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.
function fibonacci(N) {
    let fib = [];
    let a = 0, b = 1, r = 0;
    let count = 0;
    do {
        fib.push(a);
        r = a + b;
        a = b;
        b = r;
        count++;
    } while (count < N);
    return fib;
}
console.log("Los primeros 10 términos de la serie de Fibonacci son: " + fibonacci(10));

// 10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
function tablasDeMultiplicar(numero) {
    let s = 1;
    let resultadoTablas = [];
    do {
        let tabla = [];
        let t = 1;
        do {
            tabla(numero + " x " + t + " = " + (numero * t));
            t++;
        }
        while (t <= 10);
        resultadoTablas(tabla);
        s++;
    }
    while (s <= numero);
    return resultadoTablas;
}
console.log("Tablas de multiplicar hasta el 5: " +tablasDeMultiplicar(5));