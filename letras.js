// Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
const saludo = "Hola";
let nombre = "Mundo";

const concatenarTextos = (a , b) => a + " " + b; 
console.log(concatenarTextos(saludo, nombre));

// Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
let frase = "Hace mucho frio, pero es mejor que calor";

const longitudCadena = (a) => a.length; //como a.lenght no es una función, no lleva paréntesis
console.log(longitudCadena(frase));

// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
const texto = "esto es una prueba";

const convertirMayusculas = (a) => a.toUpperCase();
console.log(convertirMayusculas(texto));

// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
const convertirMinusculas = (a) => a.toLowerCase();
console.log(convertirMinusculas(texto));

// Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.



// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
let palabra = "JavaScript";

const invertirCadena = (a) => a.split("").reverse().join(""); //convertirlo en array, invertir el array y volver a unirlo.
console.log(invertirCadena(palabra));

// Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.



// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.



// Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.



// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.


