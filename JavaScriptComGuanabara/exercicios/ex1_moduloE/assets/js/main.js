var t_inicio = document.querySelector('input#inicio');
var t_fim = document.querySelector('input#fim');
var t_passos = document.querySelector('input#n_passos')
var botao_contar = document.querySelector('input#botao_contar');

var div_result = document.querySelector('div#result');

botao_contar.addEventListener('click', click_botao);

function click_botao() {
    var num_inicio = Number(t_inicio.value);
    var num_fim = Number(t_fim.value);
    var num_passos = Number(t_passos.value);


    for (var i = num_inicio; i <= num_fim; i += num_passos) {
        div_result.innerHTML += `${i}  `
    }
}
