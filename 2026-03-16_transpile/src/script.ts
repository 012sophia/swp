import { holeEssen, loescheEssen } from "./essen.ts";
import ms from "ms";

// Function to handle ms conversion
function handleMsConversion() {
    const input = (document.getElementById("zeit-input") as HTMLInputElement).value;
    const output = document.getElementById("zeit-output");

    if (!output) {
        console.error("Output element not found");
        return;
    }

    try {
        const converted = ms(input);
        output.textContent = converted
            ? `${input} entspricht ${converted} ms`
            : "Ungültige Eingabe";
    } catch (error) {
        output.textContent = "Fehler bei der Umrechnung";
        console.error(error);
    }
}

// Function to format time
function displayTime() {
    const fiveMinutesAgo = Date.now() - ms("5 minutes");
    const formattedTime = `vor ${ms(Date.now() - fiveMinutesAgo)}`;

    const timeDisplay = document.getElementById("time-display");
    if (timeDisplay) {
        timeDisplay.textContent = formattedTime;
    }
}

document.getElementById("hole-essen")?.addEventListener("click", holeEssen);
document.getElementById("loesche-essen")?.addEventListener("click", loescheEssen);
document.getElementById("hole-zeit")?.addEventListener("click", handleMsConversion);

displayTime();
