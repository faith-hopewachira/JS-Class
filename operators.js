let a = 20;
let b = 30;
let add = a + b;
console.log({add});

let sutract = a - b;
console.log({sutract});

let division = a / b;
console.log({division});

let multiply = a * b;
console.log({multiply});

let c = '20';

let looselyEqualTo = a ==c;
console.log({looselyEqualTo });

let strictlyEqualTo = a === c;
console.log({strictlyEqualTo });

let notEqualTo = a != c;
console.log({notEqualTo});

let strictlyNotEqualTo = a !==c;
console.log({strictlyNotEqualTo});

a++;
console.log('increment', a);

b--;
console.log('decrement', b);

let compound = a += b;
console.log({ compound });

console.log('b', typeof b);


// Implicit coercion
let d = a * c;
console.log({d});
console.log('d- type', typeof d);

let f = +c;
console.log({f});


//Explicit coercion
console.log({c});
let e = Number(c);
console.log({e});

const q = "akirachix is fun";
console.log(
    (q.match(/fun/g).length));

const r = "faith is pretty";
console.log(
    (r.match(/pretty/g)).length);

const o = "the dog is dead";
const t = "almost";
const j = `the dog is $t dead`;













