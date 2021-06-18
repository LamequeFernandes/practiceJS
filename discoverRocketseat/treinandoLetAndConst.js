//console.log("> existe y antes do bloco? ", y); erro, y n esta visivel
const x = 5;

{
// console.log("> existe y antes do bloco? ", y); erro n conseguiu acessar y
   let y = 1; // penas funciona no escopo, local
   console.log("> existe y? ", y);
}

// x = 10; erro, const n pode mudar de valor
// console.log("> existe y antes do bloco? ", y); erro, fora do escopo

let y = 0;
{
      y = 1; // penas funciona no escopo, local
      console.log("> existe y? ", y);
      const t = "sim"
}
console.log("> existe y? ", y);
console.log("> const funciona fora do escopo em q foi criado? ", t);