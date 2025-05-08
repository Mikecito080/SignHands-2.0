function siguiente(preguntaIdActual, preguntaIdSiguiente) {
    const preguntaActual = document.getElementById('pregunta' + preguntaIdActual);
    const opcionesSeleccionadas = preguntaActual.querySelectorAll('input[type="radio"]:checked');

    if (opcionesSeleccionadas.length === 0) {
        alert("Por favor selecciona una respuesta antes de continuar.");
        return;
    }

    // Ocultar la pregunta actual
    preguntaActual.classList.add('hidden');

    // Mostrar la siguiente pregunta
    const siguientePregunta = document.getElementById('pregunta' + preguntaIdSiguiente);
    if (siguientePregunta) {
        siguientePregunta.classList.remove('hidden');
    }
}

function anterior(preguntaIdAnterior) {
    // Ocultar todas las preguntas
    let preguntas = document.querySelectorAll('.pregunta');
    preguntas.forEach(function(pregunta) {
        pregunta.classList.add('hidden');
    });

    // Mostrar la pregunta anterior
    let anteriorPregunta = document.getElementById('pregunta' + preguntaIdAnterior);
    if (anteriorPregunta) {
        anteriorPregunta.classList.remove('hidden');
    }
}
