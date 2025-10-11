import { Bruch } from "./bruch.ts";
const args = Deno.args;

try 
{
  const bruch1 = Bruch.fromString(args[2]);
  const bruch2 = Bruch.fromString(args[3]);
  const summe = bruch1.addiere(bruch2);
  console.log(`${bruch1.toString()} + ${bruch2.toString()} = ${summe.toString()}`);
} 
catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unbekannter Fehler:", error);
  }
  Deno.exit(1);
}