document.getElementById("buscar").addEventListener("click", async function () {
    const numeroAcordada = document.getElementById("numeroAcordada").value;
    const juzgado = document.getElementById("juzgadoSeleccionado").value;
    const resultadoDiv = document.getElementById("resultado");

    if (!numeroAcordada) {
        alert("Por favor, ingrese un número de acordada.");
        return;
    }

    resultadoDiv.innerHTML = "Buscando la acordada...";

    try {
        const response = await fetch(`https://tu-servidor.com/api/buscar?acordada=${encodeURIComponent(numeroAcordada)}&juzgado=${encodeURIComponent(juzgado)}`);
        const data = await response.json();

        if (data.error) {
            resultadoDiv.innerHTML = `<br><br>Error: ${data.error}`;
            return;
        }

        let resultados = "Expedientes encontrados:\n\n";
        data.expedientes.forEach(exp => {
            resultados += `Número: ${exp.numero} - Carátula: ${exp.caratula}\n`;
        });

        resultadoDiv.innerHTML = resultados;
    } catch (error) {
        resultadoDiv.innerHTML = "<br><br>Error en la búsqueda.";
        console.error(error);
    }
});
