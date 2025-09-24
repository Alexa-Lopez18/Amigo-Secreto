// Declarar el array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // quitar espacios vacíos

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}

// Función para mostrar los nombres en la lista
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista antes de actualizar

    // Recorrer el array y agregar cada nombre como <li>
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Por favor, ingrese al menos un nombre para sortear.");
        return;
    }

    // Generar índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

