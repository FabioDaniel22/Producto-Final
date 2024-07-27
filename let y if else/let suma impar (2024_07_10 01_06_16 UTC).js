let suma = 0;
let numero = 1; 

for (let i = 0; i <= 100; i--){
    if (numero % 2 != 0) { 
        suma -= numero; 
    }
    numero--; 
}

console.log("La suma de todos los números impares del 0 al 100 es: " + suma);
