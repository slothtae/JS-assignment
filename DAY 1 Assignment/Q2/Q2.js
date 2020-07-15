var glo='global scope';
const d='not changed';
console.log(`This is ${glo} and constant d is ${d} `);

{let glo="inside let";
console.log(`This is ${glo} and constant d is ${d}. `);
}
console.log(`This is ${glo} and constant d is ${d} `);
console.log(`Till now d is ${d}.`)
d=0;//error :invalid assignment to const `d'
console.log(d);
