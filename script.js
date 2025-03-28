document.addEventListener('DOMContentLoaded', function() {
    // List of judicial accords
    const accords = [
        "JUZGADO DEL TRABAJO - VI NOMINACIÓN CAPITAL - Acordada n°: 248/23",
        "JUZGADO DEL TRABAJO - VI NOMINACIÓN CAPITAL (GAT1) - Acordada n°: 1243/24",
        "JUZGADO DEL TRABAJO - III NOMINACIÓN CAPITAL (GAT3) - Acordada n°: 941/24",
        "JUZGADO DEL TRABAJO - I NOMINACIÓN CAPITAL - Acordada n°: 1617/22",
        "JUZGADO DEL TRABAJO - II NOMINACIÓN CAPITAL - Acordada n°: 1617/22",
        "JUZGADO DEL TRABAJO - III NOMINACIÓN CAPITAL - Acordada n°: 1617/22",
        "JUZGADO DEL TRABAJO - IV NOMINACIÓN CAPITAL - Acordada n°: 1617/22",
        "JUZGADO DEL TRABAJO - V NOMINACIÓN CAPITAL - Acordada n°: 1617/22",
        "JUZGADO DEL TRABAJO - XI NOMINACIÓN CAPITAL - Acordada n°: 1617/22",
        "JUZGADO DEL TRABAJO - VI NOMINACIÓN CAPITAL - Acordada n°: 1617/22",
        "JUZGADO DEL TRABAJO - I NOMINACIÓN CAPITAL - Acordada n°: 248/23",
        "JUZGADO DEL TRABAJO - II NOMINACIÓN CAPITAL - Acordada n°: 248/23",
        "JUZGADO CIVIL y COMERCIAL COMUN - IV y VIII NOMINACIÓN CAPITAL - Acordada n°: 1477/23",
        "JUZGADO CIVIL y COMERCIAL COMUN - II, IV, V y VI NOMINACIÓN CAPITAL - Acordada n°: 1432/23",
        "JUZGADO CIVIL y COMERCIAL COMUN - IV y V NOMINACIÓN CAPITAL - Acordada n°: 1443/23",
        "JUZGADO CORRECCIONAL - SIN NOMINACIÓN CAPITAL - Acordada n°: 332/24",
        "JUZGADO INSTRUCCION - II NOMINACIÓN CAPITAL - Acordada n°: 332/24",
        "JUZGADO INSTRUCCION - I NOMINACIÓN CAPITAL - Acordada n°: 332/24",
        "JUZGADO CORRECCIONAL - SIN NOMINACIÓN CAPITAL - Acordada n°: 1683/22",
        "EX JUZGADO MENORES - SIN NOMINACIÓN CAPITAL - Acordada n°: 446/23",
        "JUZGADO DEL TRABAJO - XI NOMINACIÓN CAPITAL - Acordada n°: 248/23",
        "JUZGADO DEL TRABAJO - III, IV, V, VI y XI NOMINACIÓN CAPITAL - Acordada n°: 1015/23",
        "JUZGADO DEL TRABAJO - I, II, III, IV, V y VI NOMINACIÓN CAPITAL - Acordada n°: 1514/23",
        "JUZGADO DEL TRABAJO - VI, V y XI NOMINACIÓN CAPITAL - Acordada n°: 1441/23",
        "JUZGADO DEL TRABAJO - III y IV NOMINACIÓN CAPITAL - Acordada n°: 1441/23",
        "JUZGADO CIVIL y COMERCIAL COMUN - I NOMINACIÓN CAPITAL (GEACC2) - Acordada n°: 941/24",
        "JUZGADO CIVIL y COMERCIAL COMUN - II y VII NOMINACIÓN CAPITAL (GEACC4) - Acordada n°: 941/24",
        "JUZGADO FAMILIA Y SUCESIONES - II NOMINACIÓN CAPITAL - Acordada n°: 540/24",
        "JUZGADO CIVIL y COMERCIAL COMUN - I NOMINACIÓN CAPITAL - Acordada n°: 1209/21",
        "JUZGADO CIVIL y COMERCIAL COMUN - III NOMINACIÓN CAPITAL - Acordada n°: 1209/21",
        "JUZGADO CIVIL y COMERCIAL COMUN - IV NOMINACIÓN CAPITAL - Acordada n°: 1209/21",
        "JUZGADO CIVIL y COMERCIAL COMUN - VIII NOMINACIÓN CAPITAL - Acordada n°: 1209/21",
        "JUZGADO CIVIL y COMERCIAL COMUN - V NOMINACIÓN CAPITAL - Acordada n°: 1209/21",
        "JUZGADO CIVIL y COMERCIAL COMUN - VI NOMINACIÓN CAPITAL - Acordada n°: 1209/21",
        "JUZGADO CIVIL y COMERCIAL COMUN - II NOMINACIÓN CAPITAL - Acordada n°: 1209/21",
        "JUZGADO CIVIL y COMERCIAL COMUN - VII NOMINACIÓN CAPITAL - Acordada n°: 1209/21",
        "JUZGADO FAMILIA Y SUCESIONES - I NOMINACIÓN CAPITAL - Acordada n°: 1006/22",
        "JUZGADO FAMILIA Y SUCESIONES - II NOMINACIÓN CAPITAL - Acordada n°: 1006/22",
        "JUZGADO FAMILIA Y SUCESIONES - IV NOMINACIÓN CAPITAL - Acordada n°: 1006/22",
        "JUZGADO FAMILIA Y SUCESIONES - V NOMINACIÓN CAPITAL - Acordada n°: 1006/22",
        "JUZGADO FAMILIA Y SUCESIONES - VI NOMINACIÓN CAPITAL - Acordada n°: 1006/22",
        "JUZGADO FAMILIA Y SUCESIONES - VII NOMINACIÓN CAPITAL - Acordada n°: 1006/22",
        "JUZGADO DOCUMENTOS Y LOCACIONES - 1243/24 NOMINACIÓN CAPITAL (GEADL1) - Acordada n°: 1243/24",
        "JUZGADO DOCUMENTOS Y LOCACIONES - VII NOMINACIÓN CAPITAL (GEADL2) - Acordada n°: 1243/24",
        "JUZGADO DOCUMENTOS Y LOCACIONES - IV NOMINACIÓN CAPITAL (GEADL3) - Acordada n°: 1243/24",
        "JUZGADO CIVIL y COMERCIAL COMUN - IV, V y VI NOMINACIÓN CAPITAL - Acordada n°: 14/23",
        "JUZGADO FAMILIA Y SUCESIONES - II, III, y IV NOMINACIÓN CONCEPCION - Acordada n°: 682/23",
        "JUZGADO CIVIL y COMERCIAL COMUN - I NOMINACIÓN CONCEPCION (GEACC1) - Acordada n°: 36/25",
        "JUZGADO FAMILIA Y SUCESIONES - I NOMINACIÓN CONCEPCION - Acordada n°: 246/23",
        "JUZGADO CIVIL y COMERCIAL COMUN - VIII NOMINACIÓN CONCEPCION (GEACC3) - Acordada n°: 36/25",
        "JUZGADO CIVIL y COMERCIAL COMUN - III NOMINACIÓN CONCEPCION (GEACC3) - Acordada n°: 36/25",
        "JUZGADO FAMILIA Y SUCESIONES - I NOMINACIÓN ESTE (GEAF1) - Acordada n°: 320/24",
        "JUZGADO CIVIL y COMERCIAL COMUN - I NOMINACIÓN MONTEROS - Acordada n°: 36/25",
        "JUZGADO DEL TRABAJO - I NOMINACIÓN MONTEROS - Acordada n°: 36/25",
        "EX JUZGADO CORRECCIONAL - II NOMINACIÓN CAPITAL - Acordada n°: 1587/22",
        "CÁMARA CONTENCIOSO ADMINISTRATIVO SALA II CAPITAL - Acordada n°: 40/25",
        "JUZGADO DOCUMENTOS Y LOCACIONES - IX NOMINACIÓN CAPITAL - Acordada n°: 37/25",
        "EX JUZGADO INSTRUCCION - III NOMINACIÓN CAPITAL - Acordada n°: 635/23",
        "EX JUZGADO INSTRUCCION - III NOMINACIÓN CAPITAL - Acordada n°: 651/23",
        "EX JUZGADO INSTRUCCION - IV NOMINACIÓN CAPITAL - Acordada n°: 907/23",
        "EX JUZGADO INSTRUCCION - V NOMINACIÓN CAPITAL - Acordada n°: 1067/23",
        "EX JUZGADO MENORES - II NOMINACIÓN CAPITAL - Acordada n°: 1065/23",
        "EX JUZGADO MENORES - I NOMINACIÓN CAPITAL - Acordada n°: 1194/23",
        "EX JUZGADO MENORES - III NOMINACIÓN CAPITAL - Acordada n°: 1197/23",
        "EX CÁMARA PENAL SALA V CAPITAL - Acordada n°: 519/24",
        "EX JUZGADO INSTRUCCION - SIN NOMINACIÓN CAPITAL - Acordada n°: 519/24",
        "EX JUZGADO CORRECCIONAL - I NOMINACIÓN CAPITAL - Acordada n°: 519/24",
        "JUZGADO CIVIL y COMERCIAL COMUN - IV NOMINACIÓN CAPITAL - Acordada n°: 1887/22",
        "JUZGADO FAMILIA Y SUCESIONES - V NOMINACIÓN CAPITAL - Acordada n°: 205/22",
        "JUZGADO DEL TRABAJO - V NOMINACIÓN CAPITAL - Acordada n°: 04/22",
        "JUZGADO DEL TRABAJO - I, II, III, IV, V y VI NOMINACIÓN CAPITAL - Acordada n°: 645/22",
        "CÁMARA DEL TRABAJO SALA I, II, III, IV, V y VI CAPITAL - Acordada n°: 645/22",
        "JUZGADO DEL TRABAJO - I, II, III y V NOMINACIÓN CAPITAL - Acordada n°: 1005/22",
        "JUZGADO DEL TRABAJO - III NOMINACIÓN CAPITAL - Acordada n°: 03/22",
        "JUZGADO DEL TRABAJO - I NOMINACIÓN CAPITAL - Acordada n°: 04/22",
        "CÁMARA DEL TRABAJO SALA III y IV CAPITAL - Acordada n°: 04/22",
        "JUZGADO DEL TRABAJO - I, II y III NOMINACIÓN CAPITAL - Acordada n°: 1454/22",
        "JUZGADO DEL TRABAJO - II NOMINACIÓN CAPITAL - Acordada n°: 1888/22",
        "JUZGADO DEL TRABAJO - IV, V y VI NOMINACIÓN CAPITAL - Acordada n°: 33/23",
        "CÁMARA DEL TRABAJO SALA I y VI CAPITAL - Acordada n°: 905/23",
        "JUZGADO DEL TRABAJO - I, II, III, IV, V y VI NOMINACIÓN CAPITAL - Acordada n°: 905/23",
        "JUZGADO DEL TRABAJO - I, II, III, IV, V y VI NOMINACIÓN CAPITAL - Acordada n°: 1512/23",
        "CÁMARA DEL TRABAJO SALA II, III, IV, V y VI CAPITAL - Acordada n°: 1512/23",
        "JUZGADO COBROS Y APREMIOS - I NOMINACIÓN CAPITAL - Acordada n°: 412/23",
        "CÁMARA CONTENCIOSO ADMINISTRATIVO SALA III CAPITAL - Acordada n°: 40/25",
        "JUZGADO COBROS Y APREMIOS - I NOMINACIÓN CAPITAL - Acordada n°: 689/24",
        "JUZGADO COBROS Y APREMIOS - I NOMINACIÓN CAPITAL - Acordada n°: 1092/24",
        "JUZGADO DOCUMENTOS Y LOCACIONES - VIII NOMINACIÓN CAPITAL - Acordada n°: 1122/24",
        "JUZGADO DOCUMENTOS Y LOCACIONES - VII NOMINACIÓN CAPITAL - Acordada n°: 795/24",
        "JUZGADO DOCUMENTOS Y LOCACIONES - VII NOMINACIÓN CAPITAL - Acordada n°: 478/24",
        "JUZGADO DOCUMENTOS Y LOCACIONES - IV NOMINACIÓN CAPITAL - Acordada n°: 1009/24",
        "JUZGADO DOCUMENTOS Y LOCACIONES - VI NOMINACIÓN CAPITAL - Acordada n°: 1014/24",
        "JUZGADO DOCUMENTOS Y LOCACIONES - II, III, IV, V, VI, VII, VIII y IX NOMINACIÓN CAPITAL - Acordada n°: 310/22",
        "CÁMARA DOCUMENTOS Y LOCACIONES SALA II CAPITAL - Acordada n°: 310/22",
        "JUZGADO CIVIL y COMERCIAL COMUN - I, II, III, IV, V, VI, VII, VIII, IX NOMINACIÓN CAPITAL - Acordada n°: 642/22",
        "CÁMARA DOCUMENTOS Y LOCACIONES SALA II y III CAPITAL - Acordada n°: 642/22"
    ];

    const acordadaSeleccionada = document.getElementById('acordadaSeleccionada');
    accords.forEach(acordada => {
        const option = document.createElement('option');
        option.value = acordada;
        option.textContent = acordada;
        acordadaSeleccionada.appendChild(option);
    });
});

document.getElementById('buscar').addEventListener('click', function() {
    const numeroExpediente = document.getElementById('numeroExpediente').value;
    const acordadaSeleccionada = document.getElementById('acordadaSeleccionada').value;
    const resultado = document.getElementById('resultado');

    // Fetch and parse the corresponding document (PDF or XLSX)
    fetchDocument(acordadaSeleccionada)
        .then(documentData => {
            const searchResult = searchExpedienteInDocument(documentData, numeroExpediente);
            resultado.textContent = searchResult || 'No se encontraron resultados.';
        })
        .catch(error => {
            console.error('Error al buscar expedientes:', error);
            resultado.textContent = 'Ocurrió un error al buscar los expedientes.';
        });
});

function fetchDocument(acordada) {
    return new Promise((resolve, reject) => {
        // Determine the document type and URL based on the selected acordada
        const documentUrl = getDocumentUrl(acordada);
        const documentType = getDocumentType(documentUrl);

        if (documentType === 'pdf') {
            parsePdfDocument(documentUrl).then(resolve).catch(reject);
        } else if (documentType === 'xlsx') {
            parseXlsxDocument(documentUrl).then(resolve).catch(reject);
        } else {
            reject('Unsupported document type');
        }
    });
}

function getDocumentUrl(acordada) {
    // Logic to determine the document URL based on the selected acordada
    // This is a placeholder implementation
    return 'path/to/document.pdf';
}

function getDocumentType(url) {
    if (url.endsWith('.pdf')) {
        return 'pdf';
    } else if (url.endsWith('.xlsx')) {
        return 'xlsx';
    }
    return null;
}

function parsePdfDocument(url) {
    return new Promise((resolve, reject) => {
        pdfjsLib.getDocument(url).promise
            .then(pdf => {
                let documentData = '';
                const numPages = pdf.numPages;
                let pagesPromises = [];

                for (let i = 1; i <= numPages; i++) {
                    pagesPromises.push(pdf.getPage(i).then(page => {
                        return page.getTextContent().then(textContent => {
                            textContent.items.forEach(item => {
                                documentData += item.str + ' ';
                            });
                        });
                    }));
                }

                Promise.all(pagesPromises).then(() => resolve(documentData)).catch(reject);
            })
            .catch(reject);
    });
}

function parseXlsxDocument(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                let documentData = '';
                workbook.SheetNames.forEach(sheetName => {
                    const sheet = workbook.Sheets[sheetName];
                    documentData += XLSX.utils.sheet_to_csv(sheet);
                });
                resolve(documentData);
            })
            .catch(reject);
    });
}

function searchExpedienteInDocument(documentData, numeroExpediente) {
    // Logic to search for the expedition number in the document data
    const lines = documentData.split('\n');
    for (let line of lines) {
        if (line.includes(numeroExpediente)) {
            return line;
        }
    }
    return null;
}
