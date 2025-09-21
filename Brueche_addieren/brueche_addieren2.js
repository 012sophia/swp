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

    static ggtVonNennern(bruch1, bruch2) 
    {
        let nenner1 = bruch1.nenner;
        let nenner2 = bruch2.nenner;
        while (nenner2 !== 0) 
        {
            [nenner1, nenner2] = [nenner2, nenner1 % nenner2];
        }
        return Math.abs(nenner1);
    }

    static kgv(bruch1, bruch2)
    {
        let nenner1 = bruch1.nenner;
        let nenner2 = bruch2.nenner;
        return Math.abs(nenner1 * nenner2) / Bruch.ggtVonNennern(bruch1, bruch2);
    }
}