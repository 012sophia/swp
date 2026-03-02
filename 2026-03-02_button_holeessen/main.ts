import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { Database } from "@db/sqlite";

const app = new Hono();
const db = new Database("lieblingsessen.db");

app.use("/*", serveStatic({ root: "./static" }));

app.get("/essen", (c) => {
  const rows = db.query<[string, string]>(
    `SELECT person.name, essen.essen 
    FROM person 
    JOIN essen
    ON person.lieblingsessen = essen.id`
  );
  return c.json(rows.map(([name, essen]: [string, string]) => ({ name, essen })));
});

Deno.serve(app.fetch);