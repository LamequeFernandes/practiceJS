function retornaFrase(imc) {
   if (imc < 18.5)
      return "(Abaixo do peso)";
   else if (imc => 18.5 && imc <= 24,9)
      return "(Peso normal)";
   else if (imc => 25 && imc <= 29,9)
      return "(Sobrepeso)";
   else if (imc => 30 && imc <= 34,9)
      return "(Obesidade grau 1)";
   else if (imc => 35 && imc <= 39,9)
      return "(Obesidade grau 2)";
   else if (imc >= 40)
      return "(Obesidade grau 3)";
}

function calculoImc(){
   const imcInput = document.querySelector(".imc");
   const resultado = document.querySelector(".resultado");

   let imc;

   function recebeEventoForm(evento){
      evento.preventDefault();

      const inputPeso = imcInput.querySelector(".peso");
      const inputAltura = imcInput.querySelector(".altura");

      const peso = Number(inputPeso.value);
      const altura = Number(inputAltura.value);

      imc = peso / altura**2;

      if (!altura || altura <= 0.50 || altura >= 2.80) {
         resultado.innerHTML += `<p>Altura invalida!</p>`
         return;
      }
      else if (!peso || peso <= 2.5 || peso >= 600 ) {
         resultado.innerHTML += `<p>Peso invalida!</p>`
         return;
      }
      else{
         console.log(imc);

         resultado.innerHTML += `<p>O seu IMC é ${imc} ${retornaFrase(imc)}</p>`
      }
   }
   imcInput.addEventListener("submit", recebeEventoForm);
}

calculoImc();