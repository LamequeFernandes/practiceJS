/*
Primitivos (imutaveis) - string, number, boolean, undefined, null, (bigint, symbol) - valor

Referencia (mutavel) - array, object, function
*/
let a = "A";
let b = a; // cópia
console.log(a, b);

a = "Outra coisa";
console.log(a, b);

////////////////////////////////

let x = [1, 2, 3];
let y = x; //apontando para o mesmo local na memoria q a
let c = [...x]; // copia de x
console.log(x, y);

x.push(4);
console.log(x, y);

