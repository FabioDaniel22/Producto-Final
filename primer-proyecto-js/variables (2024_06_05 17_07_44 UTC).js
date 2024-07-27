//Variables
//¿Que es una variable?

//Declarar variables
var variableVAR; //variable de instancia
let variableLET; //variable local

for(let i = 3; i <  5; i++){ //i es una variable local
    console.log(i)  
}

var i=9;
console.log(i)//i es un variable de instancia
             //independiente de la i dentro del for

//Como se declara las variables
var x;
x = 0;
console.log(x)

var z = 8;
console.log(z)

let s;
s = 7;
console.log(s)

let f =27;
console.log(f)

//Variable LET mal declara o redundante
var variable = "Soy una variable VAR";
let variable1 = "Soy una variable LET";
for(let i =3; i < 5; i++){ //i es una variable local
    let variable = "Soy una variable LET reutilizada";
}

//Variable LET declarada despues de usarla
var variable = "Soy una variable VAR";
for(let i =3; i < 5; i++){ //i es una variable local
    let variable1 = "Soy una variable LET";
}
let variable = "Soy una variable let"
