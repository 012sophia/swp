import { concat } from "@std/bytes";

export type EssenEintrag = {
    name: string;
    essen: string;
};
export type MSeintrag = {
    zeit: string;
    in_ms: string;
};

function createTabellen2Markup(daten: MSeintrag[]): string {
    const encoder = new TextEncoder();
    const bytes = daten.map((eintrag) =>
        encoder.encode(`
        <tr>
          <td>${eintrag.zeit}</td>
          <td>${eintrag.in_ms}</td>
        </tr>
      `)
    );

    return new TextDecoder().decode(concat(bytes));
}

export async function holeZeit(): Promise<void> {
    try {
        const response = await fetch("/essen");
        const daten = await response.json() as MSeintrag[];
        const tabelle2 = document.getElementById("tabelle2");

        if (!tabelle2) {
            throw new Error("Element with id 'tabelle2' not found");
        }

        tabelle2.innerHTML = createTabellen2Markup(daten);
    } catch (error) {
        console.info("Fehler beim Laden der Daten", error);
    }
}

export function loescheZeit(): void {
    const tabelle2 = document.getElementById("tabelle");

    if (!tabelle2) {
        throw new Error("Element with id 'tabelle' not found");
    }

    tabelle2.innerHTML = "";
}


function createTabellenMarkup(daten: EssenEintrag[]): string {
    const encoder = new TextEncoder();
    const bytes = daten.map((eintrag) =>
        encoder.encode(`
        <tr>
          <td>${eintrag.name}</td>
          <td>${eintrag.essen}</td>
        </tr>
      `)
    );

    return new TextDecoder().decode(concat(bytes));
}

export async function holeEssen(): Promise<void> {
    try {
        const response = await fetch("/essen");
        const daten = await response.json() as EssenEintrag[];
        const tabelle = document.getElementById("tabelle");

        if (!tabelle) {
            throw new Error("Element with id 'tabelle' not found");
        }

        tabelle.innerHTML = createTabellenMarkup(daten);
    } catch (error) {
        console.info("Fehler beim Laden der Daten", error);
    }
}

export function loescheEssen(): void {
    const tabelle = document.getElementById("tabelle");

    if (!tabelle) {
        throw new Error("Element with id 'tabelle' not found");
    }

    tabelle.innerHTML = "";
}
