let contadorGlobalDeProductos = 1; // Contador global para rastrear el número total de productos

// Función para obtener la primer respuesta y que sea válida
function primerPregunta() {
  while (true) {
    let respuesta = prompt('¿Suele llegar al supermercado y no acordarse de lo que debía comprar? 🤔\n1 - Sí\n2 - No');

    if (respuesta === '1' || respuesta === '2') {
      return respuesta;
    } else {
      alert('Respuesta no válida. Por favor, ingresa 1 o 2.');
    }
  }
}

// Función para obtener la segunda respuesta y que sea válida
function segundaPregunta() {
  while (true) {
    let respuesta2 = prompt('Le gustaría solucionarlo?😏\n1 - Sí \n2 - No');

    if (respuesta2 === '1' || respuesta2 === '2') {
      return respuesta2;
    } else {
      alert('Respuesta no válida. Por favor, ingresa 1 o 2.');
    }
  }
}

// Función para ingresar datos de lista de compras en un array
function ingresarLista() {
  let listaDeCompras = [];
  let contadorDeProductos = contadorGlobalDeProductos;

  while (true) {
    let nuevoProducto = prompt(`Ingresa el ${contadorDeProductos}° producto que desea comprar (o presiona Cancel para finalizar la lista)`);

    if (nuevoProducto === null) {
      break; // Sale del bucle si el usuario presiona Cancelar
    } else if (nuevoProducto.trim() === "") {
      alert('Por favor, ingresa un producto válido.');
    } else {
      listaDeCompras.push(nuevoProducto);
      contadorDeProductos++;
      contadorGlobalDeProductos++; // Incrementa el contador global
    }
  }

  return listaDeCompras;
}

// Primer pregunta
const primerRespuesta = primerPregunta(); //¿Suele llegar al supermercado y no acordarse de lo que debía comprar?

switch (primerRespuesta) {
  case '1': // si la respuesta es Si
    const segundaRespuesta = segundaPregunta(); //Le gustaría solucionarlo?

    switch (segundaRespuesta) {
      case '1': // si la respuesta es Si
        if (confirm('A continuación podrá hacer una lista de compras. ¡Empecemos!💪')) {
          let datosIngresados = ingresarLista(); //Ingresa el x° producto que desea comprar

          //Una vez cancelado el confirm muestra la lista de productos 
          alert('Esta es su lista de compras:\n' + datosIngresados.join(', ')); //('\n') lista

          // Preguntar si desea agregar más productos
          while (confirm('¿Le gustaría agregar más productos a la lista?')) {
            datosIngresados = datosIngresados.concat(ingresarLista());
            alert('Esta es su lista de compras actualizada:\n' + datosIngresados.join(', ')); //('\n') lista
          }

          alert('Que tenga suerte con sus compras.🍀'); //una vez terminado el proceso
        }
        break;

      case '2': // si la respuesta es No
        alert('Que tenga suerte con sus compras.🍀');
        break;

      default: // si elcaracter ingresado NO es 1 o 2
        alert('Respuesta no válida. Por favor, ingresa 1 o 2.');
        break;
    }
    break;

  case '2': // si la respuesta es NO
    alert('Usted es una persona memoriosa 😉');
    break;

  default: // si elcaracter ingresado NO es 1 o 2
    alert('Respuesta no válida. Por favor, ingresa 1 o 2.');
    break;
}




















