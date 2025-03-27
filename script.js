document.addEventListener('DOMContentLoaded', function() {
    // Cargar acordadas desde el archivo JSON en el repositorio
    fetch('https://raw.githubusercontent.com/josemartinez9/ofdestruccion/main/acordadas.json')
        .then(response => response.json())
        .then(acordadas => {
            const acordadaSeleccionada = document.getElementById('acordadaSeleccionada');
            acordadas.forEach(acordada => {
                const option = document.createElement('option');
                option.value = acordada;
                option.textContent = acordada;
                acordadaSeleccionada.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar las acordadas:', error));
});

document.getElementById('buscar').addEventListener('click', function() {
    try {
        const numeroExpediente = document.getElementById('numeroExpediente').value;
        const acordadaSeleccionada = document.getElementById('acordadaSeleccionada').value;

        console.log('Número de Expediente:', numeroExpediente);
        console.log('Acordada Seleccionada:', acordadaSeleccionada);

        const resultados = buscarExpedientes(numeroExpediente, acordadaSeleccionada);
        console.log('Resultados:', resultados);

        document.getElementById('resultado').textContent = resultados || 'No se encontraron resultados.';
    } catch (error) {
        console.error('Error al buscar expedientes:', error);
        document.getElementById('resultado').textContent = 'Ocurrió un error al buscar los expedientes.';
    }
});

function buscarExpedientes(numeroExpediente, acordadaSeleccionada) {
    // Simulación de datos de expedientes
    const expedientes = [
        'Expediente 12345/23 - JUZGADO DEL TRABAJO - VI NOMINACIÓN CAPITAL - Acordada n°: 243/23',
        'Expediente 67890/23 - JUZGADO DEL TRABAJO - VI NOMINACIÓN CAPITAL - Acordada n°: 248/23',
        // Agrega más expedientes aquí si es necesario
    ];

    // Filtrar expedientes dependiendo del número de expediente y acordada seleccionada
    return expedientes.filter(expediente => {
        const expedienteCoincide = expediente.includes(numeroExpediente);
        const acordadaCoincide = expediente.includes(acordadaSeleccionada);
        return expedienteCoincide && acordadaCoincide;
    }).join('\n');
}
