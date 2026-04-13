import { holeEssen, loescheEssen } from "./essen.ts";
import { handleMsConversion } from "./zeit.ts";

type EssenGlobals = typeof globalThis & {
    holeEssen: typeof holeEssen;
    loescheEssen: typeof loescheEssen;
};

const globals = globalThis as EssenGlobals;

globals.holeEssen = holeEssen;
globals.loescheEssen = loescheEssen;

document.getElementById("hole-essen")?.addEventListener("click", holeEssen);
document.getElementById("loesche-essen")?.addEventListener("click", loescheEssen);
document.getElementById("hole-zeit")?.addEventListener("click", handleMsConversion);