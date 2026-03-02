const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const stepInput = document.getElementById("step");
const tableBody = document.getElementById("table-body");

function f(x) {
    return x * x;
}
function g(x) {
    return x * x / 4;
}
function h(x) {
    return x * x - 4;
}
function i(x) {
    return x * x/4 - 4;
}

function row(x, fx, gx, hx, ix) { 
    const row = document.createElement("tr");

    const xCell = document.createElement("td");
    xCell.textContent = x;
    row.appendChild(xCell);

    const fxCell = document.createElement("td");
    fxCell.textContent = fx;
    row.appendChild(fxCell);

    const gxCell = document.createElement("td");
    gxCell.textContent = gx;
    row.appendChild(gxCell);

    const hxCell = document.createElement("td");
    hxCell.textContent = hx;   
    row.appendChild(hxCell);

    const ixCell = document.createElement("td");
    ixCell.textContent = ix;
    row.appendChild(ixCell);

    tableBody.appendChild(row);
}

document.getElementById("calculate").addEventListener("click", function() { 

    const start = parseFloat(startInput.value);
    const end = parseFloat(endInput.value);
    const step = parseFloat(stepInput.value);

    if (isNaN(start) || isNaN(end) || isNaN(step)) {
        alert("Gültige Zahlen eingeben");
        return;
    }

    tableBody.innerHTML = "";

    for(let x = start; x <= end; x += step) {
        row(x, f(x), g(x), h(x), i(x));
    }
});