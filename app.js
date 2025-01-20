// crea el array amigos//
const amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada//
    const nombreInput = document.getElementById("amigo"); 
    const nombre = nombreInput.value;
  
    // Validar la entrada//
    if (nombre.trim() === "") {
      alert("Por favor, inserte un nombre.");
      return;
    }
  
    //  Actualizar el array de amigos //
    amigos.push(nombre);

   // Limpiar el campo de entrada//
  nombreInput.value = "";
}

function actualizarListaAmigos(amigos) {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");
  
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";
  
    //  Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
      // Agregar elementos a la lista
      const li = document.createElement("li");
      li.textContent = amigos[i];
      listaAmigos.appendChild(li);
    }
  }

  function sortearAmigo() {
    //  Validar que haya amigos disponibles
    if (amigos.length === 0) {
      alert("No hay amigos en la lista para sortear.");
      return;
    }
  
    //  Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    //  Mostrar el resultado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
  }


  