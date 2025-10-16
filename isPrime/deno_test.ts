import { assertEquals } from "@std/assert";
import { isPrime } from "./main.ts";

Deno.test("primzahl", () => {
    for (let i = 1; i <= 10; i++) {
        assertEquals(isPrime(i), [false, `${i} ist keine Primzahl, weil sie durch ${i} teilbar ist`]);
    }
    for (let i = 11; i <= 20; i++) {
        assertEquals(isPrime(i), [true, `${i} ist eine Primzahl`]);
    }
});