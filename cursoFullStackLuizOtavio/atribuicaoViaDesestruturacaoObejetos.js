const pessoa = {
   nome: "Lameque",
   sobrenome: "Fernandes",
   idade: 21,
   endereco:{
      rua: "QR 218 conj J",
      numero: 32
   }
};
const { nome: n = "", sobrenome, endereco } = pessoa;
console.log(n, sobrenome, endereco);
const{ endereco: {rua, numero} } = pessoa;
console.log(rua, numero);