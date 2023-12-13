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
    let respuesta2 = prompt('Le gustaría solucionarlo?\n1 - Sí \n2 - No');

    if (respuesta2 === '1' || respuesta2 === '2') {
    return respuesta2;
    } else {
    alert('Respuesta no válida. Por favor, ingresa 1 o 2.');
    }
}
}
  
// Primer pregunta
const primerRespuesta = primerPregunta(); //'¿Suele llegar al supermercado y no acordarse de lo que debía comprar?
  
switch (primerRespuesta) { // creamos un switch que verifica si o no o dato erroneo

    case '1': // Si la respuesta es 'Sí'

      const segundaRespuesta = segundaPregunta(); //'Le gustaría solucionarlo?
      
      switch (segundaRespuesta) {  // creamos un switch que verifica si o no o dato erroneo

        case '1':
          confirm('¡Bien, empecemos! 💪');
          break;  
  
        case '2':
          alert('Que tenga suerte con sus compras.');
          break;

        default:
          alert('Respuesta no válida. Por favor, ingresa 1 o 2.');
          break;
      }
    break;
        
case '2': // Si la respuesta es 'No'
    alert('Usted es una persona memoriosa 😉');
    break;

default:
    alert('Respuesta no válida. Por favor, ingresa 1 o 2.');
    break;
}
  
//agregar array: lista de compras, cuanta cantidad y que se pueda visualizar

































