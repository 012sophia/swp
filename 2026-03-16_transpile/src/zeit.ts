import ms from "npm:ms";

export function handleMsConversion(): void {
    const inputElement = document.getElementById('zeit-input') as HTMLInputElement | null;
    const outputElement = document.getElementById('zeit-output');

    if (!inputElement || !outputElement) {
        console.error("Input or output element not found");
        return;
    }

    const userInput = inputElement.value;

    try {
        const convertedMs = ms(userInput);
        outputElement.textContent = convertedMs
            ? `${userInput} entspricht ${convertedMs} ms`
            : "Ungültige Eingabe";
    } catch (error) {
        outputElement.textContent = "Fehler bei der Umrechnung";
        console.error("Error during ms conversion:", error);
    }
}

function displayCustomTime() {
    const inputElement = document.getElementById('zeit-input') as HTMLInputElement | null;
    const timeDisplay = document.getElementById('time-display');

    if (!inputElement || !timeDisplay) {
        console.error("Input or display element not found");
        return;
    }

    const userInput = inputElement.value;

    try {
        const customTime = Date.now() - ms(userInput);
        const formattedTime = `vor ${ms(Date.now() - customTime)}`;
        timeDisplay.textContent = formattedTime;
    } catch (error) {
        timeDisplay.textContent = "Ungültige Eingabe";
        console.error(error);
    }
}

displayCustomTime();