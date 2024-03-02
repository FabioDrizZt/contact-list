// Lista de contactos de jugadores de fútbol
let listaContactos = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Neymar Jr",
    "Kylian Mbappé",
    "Robert Lewandowski"
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreApellido) {
    listaContactos.push(nombreApellido);
    console.log(`¡${nombreApellido} ha sido añadido a la lista de contactos!`);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreApellido) {
    const index = listaContactos.indexOf(nombreApellido);
    if (index !== -1) {
        listaContactos.splice(index, 1);
        console.log(`¡${nombreApellido} ha sido eliminado de la lista de contactos!`);
    } else {
        console.log(`${nombreApellido} no se encontró en la lista de contactos.`);
    }
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
    console.log("Lista de contactos:");
    listaContactos.forEach(contacto => console.log(contacto));
}

// Ejemplo de uso:
console.log("Lista inicial de contactos:");
imprimirContactos();

agregarContacto("Luis Suárez");
console.log("Lista después de añadir un nuevo contacto:");
imprimirContactos();

borrarContacto("Neymar Jr");
console.log("Lista después de eliminar un contacto:");
imprimirContactos();
