
function saudacao(nome) {
   return `Bom dia ${nome}`;
}

const variavel = saudacao("lameque");
console.log(variavel);

const raiz_funcaoAnonima = function (x) {
   return x ** 0.5;
};
console.log(raiz_funcaoAnonima(9));

const raiz_arrowFunction = x => x ** 0.5;
console.log(raiz_arrowFunction(9));