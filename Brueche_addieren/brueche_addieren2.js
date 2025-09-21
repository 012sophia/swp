class Bruch
{
    constructor(ganz, zaehler, nenner)
    {
        this.ganz = ganz;
        this.zaehler = zaehler;
        this.nenner = nenner;
    }

    static string2bruch(bruch)
    {
        const splitter = bruch.trim().split(" ");
        if (splitter.length === 2)
        {
            const bruchsplitter = splitter[1].split("/");
            if (bruchsplitter.length !== 2)
            {
                throw new Error("Eingabefehler: Ungültiger Bruchteil");
            }
            let ganz = Number(splitter[0]);
            let zaehler = Number(bruchsplitter[0]);
            let nenner = Number(bruchsplitter[1]);
            if (isNaN(ganz) || isNaN(zaehler) || isNaN(nenner))
            {
                throw new Error("Eingabefehler: Keine Zahl erkannt");
            }
            if (nenner === 0)
            {
                throw new Error("Eingabefehler: Nenner darf nicht 0 sein");
            }
            return new Bruch(ganz, zaehler, nenner);   
        }
        else if (splitter.length === 1)
        {
            const bruchsplitter = splitter[0].split("/");
            if (bruchsplitter.length === 2)
            {
                let zaehler = Number(bruchsplitter[0]);
                let nenner = Number(bruchsplitter[1]);
                let ganz = 0;
                if (isNaN(zaehler) || isNaN(nenner))
                {
                    throw new Error("Eingabefehler: Keine Zahl erkannt");
                }
                if (nenner === 0)
                {
                    throw new Error("Eingabefehler: Nenner darf nicht 0 sein");
                }
                return new Bruch(ganz, zaehler, nenner);
            }
            else if (bruchsplitter.length === 1)
            {
                let ganz = Number(splitter[0]);
                if (isNaN(ganz))
                {
                    throw new Error("Eingabefehler: Keine Zahl erkannt");
                }
                let zaehler = 0;
                let nenner = 1;
                return new Bruch(ganz, zaehler, nenner);
            }
            else
            {
                throw new Error("Eingabefehler: Ungültiges Format");
            }
        }
        else
        {
            throw new Error("Eingabefehler: Zu viele Leerzeichen");
        }
    }

    static ggtVonNennern(zaehler, nenner) 
    {
        while (nenner !== 0) 
        {
            [zaehler, nenner] = [nenner, zaehler % nenner];
        }
        return Math.abs(zaehler);
    }

    static kgv(bruch1, bruch2)
    {
        let nenner1 = bruch1.nenner;
        let nenner2 = bruch2.nenner;
        return Math.abs(nenner1 * nenner2) / Bruch.ggtVonNennern(nenner1, nenner2);
    }

    gemischteZahl2UnechterBruch()
    {
        return {
                zaehler: this.ganz * this.nenner + this.zaehler,
                nenner: this.nenner
                };
    }

    static addition(bruch1, bruch2)
    {
        const b1 = bruch1.gemischteZahl2UnechterBruch();
        const b2 = bruch2.gemischteZahl2UnechterBruch();

        const gemeinsamerNenner = Bruch.kgv(bruch1, bruch2);

        const neuerZaehler1 = b1.zaehler * (gemeinsamerNenner / b1.nenner);
        const neuerZaehler2 = b2.zaehler * (gemeinsamerNenner / b2.nenner);

        const addierterZaehler = neuerZaehler1 + neuerZaehler2;

        // Kürzen
        const ggt = Bruch.ggtVonNennern(addierterZaehler, gemeinsamerNenner);
        const gekuerzterZaehler = addierterZaehler / ggt;
        const gekuerzterNenner = gemeinsamerNenner / ggt;

        // In gemischte Zahl umwandeln
        const neu_ganz = Math.floor(gekuerzterZaehler / gekuerzterNenner);
        const neu_zaehler = gekuerzterZaehler % gekuerzterNenner;
        return new Bruch(neu_ganz, neu_zaehler, gekuerzterNenner);
    }

    bruch2string()
    {
        if (this.ganz !== 0 && this.zaehler !== 0)
        {
            return `${this.ganz} ${this.zaehler}/${this.nenner}`;
        }
        if (this.ganz !== 0)
        {
            return `${this.ganz}`;
        }
        if (this.zaehler !== 0)
        {
            return `${this.zaehler}/${this.nenner}`;
        }
        return "0";
    }
}

try 
{
    const eingabe1 = "3 3/4";
    const eingabe2 = "4 5/7";
    const bruch1 = Bruch.string2bruch(eingabe1);
    const bruch2 = Bruch.string2bruch(eingabe2);
    const summe = Bruch.addition(bruch1, bruch2);
    console.log(`${eingabe1} + ${eingabe2} = ${summe.bruch2string()}`);
} 
catch (e) 
{
    console.error(e.message);
}