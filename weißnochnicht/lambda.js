const input = [7,2,6,3,8,0];

function ist_gerade(n) {
    return (n % 2 == 0);
}

const ouput = input.filter(ist_gerade);
console.log(ouput);

// mit lambda

const ouput2 = input.filter(_=>_%2==0);
console.log(ouput2);

// mit geschwungene Klammern

const output3 = input.filter((number_to_be_examined) => {
    console.log(`wurde gefragt nach ${number_to_be_examined}`);
    return number_to_be_examined % 2 == 0;
    });
console.log(output3);

// 

const output4 = input.filter(_ => _%2==0);
console.log(output4);

// mit vertauschen

const output5 = input.sort((a,b) => a-b);
console.log(output5);