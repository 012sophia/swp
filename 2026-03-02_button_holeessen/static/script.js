async function _holeEssen() {
    const response = await fetch("/essen");
    const daten = await response.json();

    let html = "";

    daten.forEach(eintrag => {
        html += `<tr><td>${eintrag.name}</td><td>${eintrag.essen}</td></tr>`;
    });

    document.getElementById("tabelle").innerHTML = html;
}