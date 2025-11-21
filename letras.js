// Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
const concatenarTextos = (a, b) => a + " " + b;
console.log(concatenarTextos("Hola", "mundo"));

// Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
const longitudCadena = (str) => str.length; // como a.lenght no es una función, no lleva paréntesis
console.log(longitudCadena("Hace mucho frio, pero es mejor que calor"));

// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
const convertirMayusculas = str => str.toUpperCase();
console.log(convertirMayusculas("esto es una prueba"));

// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
const convertirMinusculas = (str) => str.toLowerCase();
console.log(convertirMinusculas("esto es una prueba"));

// Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
const obtenerCaracter = (cadena, i) => cadena[i];
console.log(obtenerCaracter("JavaScript", 4));

// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
const invertirCadena = str => str.split("").reverse().join("");
console.log(invertirCadena("JavaScript"));

// Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
const contarCaracter = (cadena, caracter) => [...cadena].filter(c => c === caracter).length;
console.log(contarCaracter("Abercrombie", "e"));

// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
const quitarEspacios = str => str.replaceAll(" ", "");
console.log(quitarEspacios("Hace mucho frio"));

// Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
const esPalindromo = str => str.toLowerCase().replaceAll(" ", "") === str.toLowerCase().replaceAll(" ", "").split("").reverse().join(""); //Todo a minúsculas y quitamos espacios, convertir la versión limpia al revés y comparar
console.log(esPalindromo("Anita lava la tina"));

// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
const capitalizarPro = str => str.toLowerCase().split(" ").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" "); // Primero limpiamos todo a minúsculas, luego separamos por palabras, después capitalizamos la primera letra de cada palabra y finalmente unimos todo con espacios
console.log(capitalizarPro("hOLa mUNDo"));


