bruch1 = "3 3/4";
bruch2 = "4 5/7";


function string2bruch(bruch)
{
    const splitter = bruch.split(" ");
    if (splitter.length == 2)
    {
       const bruchsplitter = splitter[1].split("/");

        let ganz = Number(splitter[0]);
        let zaehler = Number(bruchsplitter[0]);
        let nenner = Number(bruchsplitter[1]);
        return {ganz, zaehler, nenner};   
    }
    else if (bruch.length == 1)
    {
        const bruchsplitter = bruch.split("/");
        if (bruchsplitter.length == 2)
        {
            let zaehler = Number(bruchsplitter[0]);
            let nenner = Number(bruchsplitter[1]);
            let ganz = 0;
            return {ganz, zaehler, nenner};
        }
        else if (bruch.length == 1)
        {
            let ganz = Number(splitter[0]);
            let zaehler = 0;
            let nenner = 1;
            return {ganz, zaehler, nenner};
        }
    }
    else
    {
        throw("Eingabefehler");
    }
}

console.log(string2bruch(bruch1));
console.log(string2bruch(bruch2));