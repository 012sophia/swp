import { assertEquals , assertThrows } from "@std/assert";
import { Bruch } from "./bruch.ts";

// Testfall 1: 1/2 + 1/3 = 5/6
Deno.test("bruchTest", () => {
  const bruch1 = Bruch.fromString("1/2");
  const bruch2 = Bruch.fromString("1/3");
  assertEquals(bruch1.addiere(bruch2).toString(), "5/6");
});

// Testfall 2: 1 1/4 + 2 3/4 = 4
Deno.test("ganze und gemischte Zahlen", () => {
  const bruch1 = Bruch.fromString("1 1/4");
  const bruch2 = Bruch.fromString("2 3/4");
  assertEquals(bruch1.addiere(bruch2).toString(), "4");
});

// Testfall 3: Ungültiges Format → Fehler
Deno.test("ungültiger String", () => {
  assertThrows(
    () => Bruch.fromString("abc"),
    Error,
    "Ungültige Zahlen im Eingabestring."
  );
});

// Testfall 4: Nenner ist 0 → Fehler
Deno.test("division durch null", () => {
  assertThrows(
    () => Bruch.fromString("3/0"),
    Error,
    "Nenner darf nicht 0 sein."
  );
});

// Testfall 5: Ganze Zahlen addieren
Deno.test("ganze Zahlen addieren", () => {
  const bruch1 = Bruch.fromString("2");
  const bruch2 = Bruch.fromString("3");
  assertEquals(bruch1.addiere(bruch2).toString(), "5");
});
//testfälle von chatgpt