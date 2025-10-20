import { assertEquals } from "@std/assert";
import { isPrime } from "./main.ts";

Deno.test("primzahl", () => {
    const primzahlen = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    for(let i = 0; i < primzahlen.length; i++) {
    const num:number = primzahlen[i];
    const antwort: [boolean, string] = isPrime(num);
    const wahr_oder_falsch: boolean = antwort[0];
    const message: string = antwort[1];
    assertEquals(wahr_oder_falsch, true, `Fehler bei der Zahl ${num}`);
    assertEquals(message, `${num} ist eine Primzahl`, `Falsche Nachricht bei Zahl ${num}`);
    }
});

Deno.test("nicht primzahl", () => {
    const nicht_primzahlen = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18];
    for(let i = 0; i < nicht_primzahlen.length; i++) {
    const num:number = nicht_primzahlen[i];
    const antwort: [boolean, string] = isPrime(num);
    const wahr_oder_falsch: boolean = antwort[0];
    const message: string = antwort[1];
    assertEquals(wahr_oder_falsch, false, `Fehler bei der Zahl ${num}`);
    assertEquals(message.startsWith(`${num} ist keine Primzahl`), true, `Falsche Nachricht bei Zahl ${num}`);

    }
});