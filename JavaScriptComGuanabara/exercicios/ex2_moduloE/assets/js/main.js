let txt_num = document.querySelector('input#num')
let botao_gerar = document.querySelector('input#botao_gerar')
let result = document.querySelector('select#result')

botao_gerar.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    if (txt_num.value.length == 0) window.alert("Por favor, digite um número!")
    else {
        let num = Number(txt_num.value)
        result.innerHTML = ''
        for (let i = 1; i < 11; i++) {
            let item = document.createElement('option')
            item.text = `${num} * ${i} = ${num*i}`
            result.appendChild(item)
        }
    }
}