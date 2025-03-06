let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();
    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

    if (nombreAmigo) {
        if (!soloLetras.test(nombreAmigo)) {
            alert("El nombre no puede contener números u otros caracteres especiales.");
            return;
        }

        if (nombreAmigo !== "") {
            listaAmigos.push(nombreAmigo);
            document.getElementById("amigo").value = "";
            mostrarAmigos();
        }
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    listaAmigos.forEach((amigo) => {
        let elemento = document.createElement("li");
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        mostrarResultado("Agrega al menos un amigo para hacer el sorteo.");
        return;
    }

    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    mostrarResultado(`El amigo secreto es: ${amigoSecreto}`);
}

function mostrarResultado(mensaje) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>${mensaje}</li>`;
}
