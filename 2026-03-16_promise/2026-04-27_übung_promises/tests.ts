// Variante A
const pA = new Promise<string>((resolve, reject) => {
  throw new Error("Fehler A");
});

// Variante B
const pB = new Promise<string>((resolve, reject) => {
  reject(new Error("Fehler B"));
});

pA.catch((err:unknown )=> console.log("Catch promise 1:", (err as Error).message));
pB.catch((err: unknown)=> console.log("Catch promise 2:", (err as Error).message));

const p3a = new Promise<string>((resolve) => {
  resolve("fertig");
  throw new Error("Zu spät!");
});

function loadConfig(): string {
  throw new Error("Konfiguration nicht gefunden");
}

const p4a = new Promise<string>((resolve, reject) => {
  const config = loadConfig();
  resolve(config);
});

p4a.catch((err) => {
  console.log("Gefangen in .catch():", (err as Error).message);
});

function loadConfig2(): string {
  throw new Error("Konfiguration nicht gefunden");
}

// Version 1: Automatisch (throw)
const p4b_v1 = new Promise<string>((resolve, reject) => {
  // TODO: Rufe loadConfig2() auf (wirft Exception)
  const config2a =loadConfig2();
  resolve(config2a);
});

p4b_v1.catch((err)=> (console.log("fehler config2_a"), (err as Error).message));

// Version 2: Manuell (try/catch + reject)
const p4b_v2 = new Promise<string>((resolve, reject) => {
  // TODO: try/catch um loadConfig2(), bei Fehler reject()
  reject(new Error("fehler config2_b"));
});

p4b_v2.catch((err)=> (console.log("fehler config2_b"), (err as Error).message));

function fetchData2(): string {
  throw new Error("Netzwerkfehler");
}

const Data = new Promise<string>((resolve,reject)=>{
  const fetchdata=fetchData2();
  resolve (fetchdata);
})

Data.catch((err)=>{
  console.log("fehler datafetch"), (err as Error).message
});