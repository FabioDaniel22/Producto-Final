let suma = 0;
//se utilizara para almacenar la suma de los numeros pares

for (let i = 0; i <= 100; i++) {
    //El bucle se ejecutará mientras i sea menor o igual a 100
    if (i % 2 == 0) {
        // esta línea verifica si el valor actual de i es par
        suma += i;
       // Si el número i es par se agrega su valor a la variable suma
    }
}

console.log("La suma de todos los números pares del 0 al 100 es: " + suma);
