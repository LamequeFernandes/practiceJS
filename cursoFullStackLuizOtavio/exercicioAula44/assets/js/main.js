function retornaFrase(imc) {
   const nivel = ["(Abaixo do peso)", "(Peso normal)", "(Sobrepeso)", "(Obesidade grau 1)", "(Obesidade grau 2)", "(Obesidade grau 3)"];

   if (imc >= 39.9) return nivel[5];
   if (imc >= 34.9) return nivel[4];
   if (imc >= 29.9) return nivel[3];
   if (imc >= 24.9) return nivel[2];
   if (imc >= 18.5) return nivel[1];
   if (imc < 18.5) return nivel[0];
}

function calculoImc(){
   const imcInput = document.querySelector(".imc");
   const resultado = document.querySelector(".resultado");

   let imc;

   imcInput.addEventListener("submit", function (evento){
      evento.preventDefault();

      const inputPeso = imcInput.querySelector(".peso");
      const inputAltura = imcInput.querySelector(".altura");

      const peso = Number(inputPeso.value);
      const altura = Number(inputAltura.value);

      imc = peso / altura**2;

      if (!altura || altura <= 0.50 || altura >= 2.80) {
         resultado.innerHTML = `<p>Altura invalida!</p>`
         return;
      }
      else if (!peso || peso <= 2.5 || peso >= 600 ) {
         resultado.innerHTML = `<p>Peso invalida!</p>`
         return;
      }
      else{
         console.log(imc);
         resultado.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)} ${retornaFrase(imc)}</p>`
         return;
      }
   });
}

calculoImc();