// Lista de contactos de jugadores de fútbol
let listaContactos = [
    {
        id: 1,
        nombres: "Lionel",
        apellidos: "Messi",
        telefono: "+123456789",
        ubicaciones: [
            {
                ciudad: "Barcelona",
                direccion: "Avenida Diagonal"
            }
        ]
    },
    {
        id: 2,
        nombres: "Cristiano",
        apellidos: "Ronaldo",
        telefono: "+987654321",
        ubicaciones: [
            {
                ciudad: "Turín",
                direccion: "Piazza San Carlo"
            }
        ]
    },
    // Añade más contactos aquí si es necesario
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(contacto) {
    listaContactos.push(contacto);
    console.log(`¡${contacto.nombres} ${contacto.apellidos} ha sido añadido a la lista de contactos!`);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
    const index = listaContactos.findIndex(contacto => contacto.id === id);
    if (index !== -1) {
        const contactoEliminado = listaContactos.splice(index, 1)[0];
        console.log(`¡${contactoEliminado.nombres} ${contactoEliminado.apellidos} ha sido eliminado de la lista de contactos!`);
    } else {
        console.log(`No se encontró ningún contacto con el ID ${id} en la lista de contactos.`);
    }
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
    console.log("Lista de contactos:");
    listaContactos.forEach(contacto => console.log(`${contacto.nombres} ${contacto.apellidos} - Teléfono: ${contacto.telefono}`));
}

// Ejemplo de uso:
console.log("Lista inicial de contactos:");
imprimirContactos();

// Añadir un nuevo contacto
const nuevoContacto = {
    id: 3,
    nombres: "Neymar",
    apellidos: "Jr",
    telefono: "+555555555",
    ubicaciones: [
        {
            ciudad: "París",
            direccion: "Avenue des Champs-Élysées"
        }
    ]
};
agregarContacto(nuevoContacto);
console.log("Lista después de añadir un nuevo contacto:");
imprimirContactos();

// Eliminar un contacto
const idAEliminar = 2; // ID del contacto a eliminar
borrarContacto(idAEliminar);
console.log("Lista después de eliminar un contacto:");
imprimirContactos();

// Función para actualizar un contacto existente en la lista
function actualizarContacto(id, nuevoContacto) {
    const index = listaContactos.findIndex(contacto => contacto.id === id);
    if (index !== -1) {
        listaContactos[index] = { ...listaContactos[index], ...nuevoContacto };
        console.log(`¡${listaContactos[index].nombres} ${listaContactos[index].apellidos} ha sido actualizado en la lista de contactos!`);
    } else {
        console.log(`No se encontró ningún contacto con el ID ${id} en la lista de contactos.`);
    }
}

// Ejemplo de uso:
const idAActualizar = 1; // ID del contacto a actualizar
const nuevoDatosContacto = {
    nombres: "Lionel Andrés",
    apellidos: "Messi Cuccittini",
    telefono: "+987654321",
    ubicaciones: [
        {
            ciudad: "París",
            direccion: "Avenue des Champs-Élysées"
        }
    ]
};
actualizarContacto(idAActualizar, nuevoDatosContacto);
console.log("Lista después de actualizar un contacto:");
imprimirContactos();

