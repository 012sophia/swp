class Bruch
{
    constructor(ganz, zaehler, nenner)
    {
        const unechterZaehler = ganz * nenner + zaehler;
        const ggt = Bruch.ggt(Math.abs(unechterZaehler), nenner);

        const gekZaehler = unechterZaehler / ggt;
        const gekNenner = nenner / ggt;

        this.ganz = Math.floor(gekZaehler / gekNenner);
        this.zaehler = gekZaehler % gekNenner;
        this.nenner = gekNenner;
    }

    static ggt(a, b)
    {
        while (b !== 0) [a, b] = [b, a % b];
        return a;
    }

    static fromString(bruch)
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

    addition(other)
    {
        const z1 = this.ganz * this.nenner + this.zaehler;
        const z2 = other.ganz * other.nenner + other.zaehler;
        return new Bruch(0, z1 * other.nenner + z2 * this.nenner, this.nenner * other.nenner);
    }

    toString()
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
    const bruch1 = Bruch.fromString(process.argv[2]);
    const bruch2 = Bruch.fromString(process.argv[3]);
    const summe = bruch1.addition(bruch2);
    console.log(`${bruch1.toString()} + ${bruch2.toString()} = ${summe.toString()}`);
} 
catch (e) 
{
    console.error(e.message);
}