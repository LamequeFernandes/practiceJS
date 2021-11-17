let lista_numeros = []

let t_num = document.querySelector('input#num')
let select_numeros = document.querySelector('select#numeros')
let botao_adicionar = document.querySelector('input#botao-adicionar')
let botao_finalizar = document.querySelector('input#botao-finalizar')
let resultado = document.querySelector('div#saida')

botao_adicionar.addEventListener('click', adiciona_na_lista)
botao_finalizar.addEventListener('click', resultados)

function adiciona_na_lista () {
    let num = Number(t_num.value)
    if (num > 0 && num < 101) {
        lista_numeros.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        select_numeros.appendChild(item)
    } else {
        window.alert('Digite um número entre 1 e 100!')
    }
    t_num.value = ``
    t_num.focus()
}

function soma_array (lista) {
    let result = 0
    for (i in lista) {
        result += lista[i]
    }
    if (result != 0)
        return result
}

function resultados () {
    if (lista_numeros.length == 0)
        return window.alert("Digite um número entre 1 e 100!")

    lista_numeros.sort()
    let qnt_numeros = `<p>Ao todo, temos ${lista_numeros.length} cadastrados.</p>`
    let menor = `<p>O menor valor adicionado foi o ${lista_numeros[0]}.</p>`
    let maior = `<p>O maior valor adicionado foi o ${lista_numeros[lista_numeros.length - 1]}.</p>`
    let soma_total = `<p>Somando toso os valores, temos ${soma_array(lista_numeros)}</p>`
    let media = `<p>A média dos valores digitados é ${soma_array(lista_numeros)/lista_numeros.length}</p>`
 
    resultado.innerHTML = ''    
    resultado.innerHTML += qnt_numeros
    resultado.innerHTML += menor
    resultado.innerHTML += maior
    resultado.innerHTML += soma_total
    resultado.innerHTML += media
}
