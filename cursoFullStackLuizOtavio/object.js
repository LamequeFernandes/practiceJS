function criaPessoa (nome, sobrenome, idade) {
   return {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade
   };
};
//ou
const pessoa1 = {
   nome: "Lameque",
   sobrenome: "Fernandes",
   idade: 21
};

const pessoa2 = criaPessoa("Mayra", "Ramos", 17);
const pessoa3 = criaPessoa("Ellys Rebeca", "Fernandes", 17)
const pessoa4 = criaPessoa("Atania Maria", "Fernandes", 46)
const pessoa5 = criaPessoa("Ronaldo", "Azevedo", 53)

const usandooThis = {
   nome: "Lameque",
   sobrenome: "Fernandes",
   idade: 21,

   fala() {
      console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
   }
};

usandooThis.fala();