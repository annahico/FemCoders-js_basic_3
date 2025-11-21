// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
const sumarArray = num => num.reduce((a, b) => a + b, 0); // con reduce ponemos siempre al final ,0

const resultadoSuma = [10, 56, 4, 3, 23];
console.log(sumarArray(resultadoSuma));

// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
const calcularPromedio = num => num.reduce((a, b) => a + b, 0) / num.length; // Divide esa suma entre la cantidad de números

const notas = [3, 2, 8, 9, 10];
console.log(calcularPromedio(notas));

// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
const ordenarAscensente = num => num.toSorted((a, b) => a - b);

const lista = [78, 5, 1, 0, 254];
console.log(ordenarAscensente(lista));

// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
const filtrarMayores = (a , b) => a.filter( num => num > b);

const numeros = [45, 7, 9, 88, 2]
const limite = 15;
console.log(filtrarMayores(numeros, limite));

// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
const unirArrays = (a, b) => [...a, ...b];

const frutas = ["Manzana", "Pera"];
const verduras = ["Lechuga", "Zanahoria"];
console.log(unirArrays(frutas, verduras)); 

// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.



// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.



// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.



// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.



// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.


