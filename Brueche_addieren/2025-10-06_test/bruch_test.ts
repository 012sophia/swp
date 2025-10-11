import { assertEquals } from "@std/assert";
import { Bruch } from "./bruch.ts";

Deno.test("bruchTest", () => {
  for (let i = 0; i < 15; i++) {
    const zaehler = Math.ceil(Math.random() * 100);
    const nenner = Math.ceil(Math.random() * 100);
    const ergebnis_bruch = new Bruch(0, zaehler, nenner);


    const zaehler1 = Math.ceil(Math.random() * zaehler);
    const zaehler2 = zaehler - zaehler1;

    const erweitert_zahl1 = Math.ceil(Math.random() * 20);
    const erweitert_zahl2 = Math.ceil(Math.random() * 20);

    const bruch1 = new Bruch(0, zaehler1 * erweitert_zahl1, nenner * erweitert_zahl1);
    const bruch2 = new Bruch(0, zaehler2 * erweitert_zahl2, nenner * erweitert_zahl2);

    console.log(`Testing: ${bruch1.toString()} + ${bruch2.toString()} =?= ${ergebnis_bruch.toString()}`);
  }
});