
var nascido = window.document.getElementById('ano')
var masc = window.document.getElementById('masculino');
var fem = window.document.querySelector('input#feminino');
var result = window.document.querySelector('div#resultado')

var botao = window.document.getElementById('botao_verificar')

botao.addEventListener('click', click_botao);
masc.addEventListener('click', click_masc)
fem.addEventListener('click', click_fem)

var sexo = ""

function click_masc() {
    sexo = "masculino_selecionado"
    return sexo
}

function click_fem() {
    sexo = "feminino_selecionado"
    return sexo
}

function click_botao() {    
    var aux = Number(nascido.value)
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - aux
    
    if (idade < 1) {
        window.alert('Idade invalida!')
    }
    else if (idade > 150) {
        window.alert('Idade invalida!')
    }
    else if (sexo == ""){
        window.alert('Selecione o sexo da pessoa!')
    }
    else if (idade > 59) {
        sexo == "masculino_selecionado" ? result.innerHTML = `Detectamos um Senhor de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/velho.jpg"/>` : result.innerHTML = `Detectamos uma Senhora de ${idade} anos.<br><img id="imagem-pessoas" src="./assets/img/velha.jpg"/>`
    }
    else if (idade > 20) {
        sexo == "masculino_selecionado" ? result.innerHTML = `Detectamos um Homem de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/homem.jpg"/>` : result.innerHTML = `Detectamos uma Mulher de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/mulher.jpg"/>`
    }
    else if (idade > 11) {
        sexo == "masculino_selecionado" ? result.innerHTML = `Detectamos um adolecente de ${idade} anos.<br><img id="imagem-pessoas" src="./assets/img/garoto.jpg"/>` : result.innerHTML = `Detectamos uma adolecente de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/garota.jpg"/>`
    }
    else {
        sexo == "masculino_selecionado" ? result.innerHTML = `Detectamos uma criança de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/menino.jpg"/>` : result.innerHTML = `Detectamos uma criança de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/menina.jpg"/>`
    }
}

