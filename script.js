function generateResponse() {
    const prompt = document.getElementById('prompt').value;
    const fileInput = document.getElementById('fileInput');
    const urlInput = document.getElementById('urlInput').value;
    const responseDiv = document.getElementById('response');

    // Simulación de respuesta con archivo Excel
    const excelUrl = 'ruta/al/archivo/excel.xlsx';
    const response = `
        <p>Aquí está el plan de medios generado según tu prompt:</p>
        <ul>
            <li>Presupuesto total: MXN 2,604,405 pesos mexicanos</li>
            <li>Objetivo: Maximizar conversiones y CTR</li>
            <li>Segmento: Empresa de cuidado personal</li>
            <li>Canales propuestos: [Lista de canales]</li>
        </ul>
        <p>Puedes descargar el plan detallado en formato Excel <a href="${excelUrl}" download>aquí</a>.</p>
    `;

    responseDiv.innerHTML = response;
}
