import { holeEssen, holeZeit, loescheEssen, loescheZeit } from "./essen.ts"; // so ists ideal
// import * as essensfunctions from "./essen.ts";  -> neues Objekt mit essensfunctions.holeEssen
// import "./essen.ts"; --> es wird nur das Modul ausgeführt, aber keine Funktionen importiert
import _ms from "npm:ms";

type EssenGlobals = typeof globalThis & {
    holeEssen: typeof holeEssen;
    loescheEssen: typeof loescheEssen;
};

type MSGlobal = typeof globalThis & {
    holeZeit: typeof holeZeit;
    loescheZeit: typeof loescheZeit;
};

const globals = globalThis as EssenGlobals;
const msGlobals = globalThis as MSGlobal;

globals.holeEssen = holeEssen;
globals.loescheEssen = loescheEssen;

msGlobals.holeZeit = holeZeit;
msGlobals.loescheZeit = loescheZeit;

document.getElementById("hole-essen")?.addEventListener("click", holeEssen);
document.getElementById("loesche-essen")?.addEventListener(
    "click",
    loescheEssen,
);

document.getElementById("hole-zeit")?.addEventListener("click", holeZeit);
document.getElementById("loesche-zeit")?.addEventListener(
    "click",
    loescheZeit,
);
