 //array, lista, objeto o vector
 //son un conjunto de variables
 //los objetos son entidades que tienen atributos y los atributos son todas las caracteristicas que pertenecen al objeto
 //Ejemplo de como se declara array
 const datos = [1,"hola", true, undefined, null];
const datos2 = new Array(1,"Hola", true, undefined, null);
const datos3 = new Array(3)  //---->array con llenado posterior a la declaracion
datos[1] = "Hola Mundo";
datos[0] = 1;
const datos4 = [datos, datos2, datos3]; //----> lista de listas

 //Ejemplos de impresion
 console.log(datos);
 console.log(datos2);
 console.log(datos3);
 console.log(datos4);

 //Objetos
 //Ejemplo de un objeto
 const alumno //*<----- Objeto */ = 
  {
    //Atributos
    edad: 15,
    peso: 80,
    nombre: "Pedro",
    isBlack: false,
    amistades: ["confi", "confi2", "confi3", "confi4"]
}

//impresion del objeto
console.log(alumno);

//impresion especifica
console.log(alumno.amistades);