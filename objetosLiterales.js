// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
const obtenerNombre = (objeto) => {
    return objeto.nombre;
}

const user = {
    nombre: "Anna",
    edad: 32
};

console.log(obtenerNombre(user));
console.log(user.edad);

// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
const actualizarEdad = (objecto, nuevaEdad) => {
    objecto.edad = nuevaEdad;
    return objecto;
}

let persona = {
    nombre: "Anna",
    edad: 32,
    ciudad: "Barcelona"
};
console.log("Edad inicial:", persona.edad);

actualizarEdad(persona, 33);
console.log("Edad después de la actualización:", persona.edad);

// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
const agregarPropiedadNull = (objeto, nombrePropiedad) => {
    objeto[nombrePropiedad] = null;
    return objeto;
};

let producto = {
    id: 101,
    nombre: "Laptop"
};
console.log("Objeto inicial:", producto);

agregarPropiedadNull(producto, "stock");
console.log("Objeto final:", producto);

const eliminarPropiedad = (objeto, nombrePropiedad) => {
    return delete objeto [nombrePropiedad];
};

let configuracion = {
    tema: "oscuro",
    notificaciones: true,
    idioma: "es"
};
console.log("Objeto inicial:", configuracion);

eliminarPropiedad(configuracion, "notificaciones");
console.log("Objeto después de la eliminación", configuracion);

const resultado = eliminarPropiedad(configuracion, "perfil");
console.log("Objeto después de intentar eliminar 'perfil':", configuracion);
console.log("Resultado de 'delete' (propiedad no existente:", resultado);

// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
const contarPropiedades = (objeto) => {
    return Object.keys(objeto).length;
};

let estudiante = {
    id: 42,
    nombre: "María",
    grado: "Séptimo"
};
const numPropiedadesEstudiante = contarPropiedades(estudiante);
console.log(`El objeto estudiante tiene ${numPropiedadesEstudiante} propiedades.`); 

let objetoVacio = {};
const numPropiedadesVacio = contarPropiedades(objetoVacio); 
console.log(`El objeto vacío tiene ${numPropiedadesVacio} propiedades.`);

// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.



// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.



// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.



// 9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.



// 10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.



