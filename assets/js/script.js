function jugar() {
  let numGames = Number(document.getElementById("numPartidas").value); // lee el numero de partidas, lo convierte a número y el valor se lo asigna a la variable numGames
  let resultsDiv = document.getElementById("results");

  for (var i = 0; i < numGames; i++) {
    // contador for
    let opcionUsuario = prompt(
      "Elige tu jugada: Piedra, Papel o Tijera"
    ).toLowerCase();
    if (
      opcionUsuario !== "piedra" &&
      opcionUsuario !== "papel" &&
      opcionUsuario !== "tijera"
    ) {
      alert("Por favor, elige una opción válida: piedra, papel o tijera.");
      // Pedir al usuario que vuelva a elegir si la opción no es válida
    }

    let opcionPC = jugadaAutomatica();
    let result = quienGana(opcionUsuario, opcionPC);

    alert(
      "Tu elección: " +
        opcionUsuario +
        ". Elección Máquina: " +
        opcionPC +
        ". Resultado: " +
        result
    );

    // Cuando deseaba imprimir el resultado en este punto en el html,
    // no me lo imprimía antes de la siguiente jugada,
    // pero al usar el alert, sí entrega el resultado de la partida, antes de la siguiente jugada
    // decidí dejar la combinación de ambos, aunque el resultado en el index me lo imprime al final de todo

    resultsDiv.innerHTML +=
      "<p>Tu elección: " +
      opcionUsuario +
      "<br>Elección de la máquina: " +
      opcionPC +
      "<br>" +
      result +
      "</p>";
  }
}

// función que generar una jugada automática para la maquina usando la función Math.random()
function jugadaAutomatica() {
  // Generar un número aleatorio entre 0 y 2 (ambos incluidos)
  var randomNumber = Math.floor(Math.random() * 3);

  // Utilizar un switch para asignar cada número a una opción

  switch (randomNumber) {
    case 0:
      return "piedra";
    case 1:
      return "papel";
    case 2:
      return "tijera";
  }
}

// función que compara la opción del Usuario con la opción del PC para determinar ganador o empate
// se reciben los parámetros de la función
function quienGana(opcionUsuario, opcionPC) {
  if (opcionUsuario === opcionPC) {
    //si opción del usuario es igual a la opción de la máquina, es empate
    return "¡Empate!";
  }
  //opciones en las que gana el usuario
  else if (
    (opcionUsuario === "piedra" && opcionPC === "tijera") ||
    (opcionUsuario === "papel" && opcionPC === "piedra") ||
    (opcionUsuario === "tijera" && opcionPC === "papel")
  ) {
    return "¡Felicidades! ¡Has ganado!";
  } else {
    //cualquier otro caso, gana la máquina:
    return " Chan, Chan... ¡Has perdido contra la máquina!";
  }
}
