### Hausübung: Der Pizza-Service (Promise-Kette)

**Ziel:** Du sollst lernen, mehrere asynchrone Schritte nacheinander auszuführen. Wenn ein Schritt scheitert (z.B. Ofen kaputt), darf der nächste (z.B. Pizza backen) nicht stattfinden.

#### Aufgabe 1: Der Ofen-Check (10 Min)

```js
function checkOven() {
    const isOvenHot = true;
    return new Promise((resolve, reject) => {
        if (isOvenHot) {
            resolve({ success: true, message: "Ofen ist bereit!" });
        } else {
            reject({ success: false, message: "Ofen ist defekt." });
        }
    });
}
```

#### Aufgabe 2: Pizza Backen (15 Min)

```js
function bakePizza(pizzaName) {
    return new Promise((resolve, reject) => {
        if (!pizzaName) {
            reject("Fehler: Keine Pizza ausgewählt.");
        } else {
            resolve(`Pizza ${pizzaName} ist fertig gebacken!`);
        }
    });
}
```

#### Aufgabe 3: Die Kette (Chaining) (20 Min)

```js
function main() {
    checkOven()
        .then((ovenStatus) => {
            console.log(ovenStatus.message);
            return bakePizza("Margherita");
        })
        .then((pizzaMessage) => {
            console.log(pizzaMessage);
        })
        .catch((error) => {
            console.error("Fehler:", error);
        });
}

main();
```

---

### Hinweise

1. **Das "return" im `.then()`:** Das ist meist der häufigste Fehler. Die Schüler vergessen oft, dass sie das zweite Promise (von `bakePizza`) zurückgeben müssen, damit die Kette im nächsten `.then()` weitergehen kann.
2. **Ein vs. zwei `.catch()`:** Achte darauf, dass sie verstehen, warum ein `.catch()` am Ende der Kette reicht. Wenn der erste Schritt (Ofen) scheitert, wird das Promise direkt "rejected", und die Kette springt automatisch zum letzten `.catch()` – die `bakePizza`-Funktion wird dann gar nicht erst ausgeführt. Das ist das "Aha-Erlebnis" für Kontrollfluss!
3. **JSON-Objekte:** Dass wir jetzt Objekte `{ success: true, ... }` verwenden statt simpler Strings, bereitet uns auf die spätere Arbeit mit APIs (`fetch`) vor, wo wir JSON-Antworten genau so verarbeiten müssen.
