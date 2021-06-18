//console.log("> existe y antes do bloco? ", y); erro, y n esta visivel

{
// console.log("> existe y antes do bloco? ", y); erro n conseguiu acessar y
   let y = 1 // penas funciona no escopo, local
   console.log("> existe y? ", y);
}

// console.log("> existe y antes do bloco? ", y); erro, fora do escopo