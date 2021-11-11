
var nascido = window.document.getElementById('ano')
var genero = document.getElementsByName('sexo')
var result = window.document.querySelector('div#resultado')

var botao = window.document.getElementById('botao_verificar')

botao.addEventListener('click', click_botao);

function click_botao() {    
    var aux = Number(nascido.value)
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - aux
    var img = document.createElement('img')
    img.setAttribute('id', 'imagem-pessoas') // mesmo q ir no HTML e fazer: <img id="foto">
    
    result.style.textAlign = 'center'

    if (idade < 1) {
        window.alert('Idade invalida!')
    }
    else if (idade > 150) {
        window.alert('Idade invalida!')
    }
    else if (!(genero[0].checked || genero[1].checked)) {
        window.alert('Selecione um sexo!')
    }
    else if (idade > 59) {
        // FAZENDO DE UMA FORMA DIFERENTE DAS DEMAIS:
        if (genero[0].checked) {
            img.setAttribute('src', './assets/img/velho.jpg')
            result.innerHTML = `Detectamos um Senhor de ${idade} anos.<br>`
            result.appendChild(img)
        } else {
            img.setAttribute('src', './assets/img/velha.jpg')
            result.innerHTML = `Detectamos uma Senhora de ${idade} anos.<br>`
            result.appendChild(img)
        }
        /* TAMBEM PODERIA SER FEITO DA SEGUINTE FORMA:
        genero[0].checked ? result.innerHTML = `Detectamos um Senhor de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/velho.jpg"/>` : result.innerHTML = `Detectamos uma Senhora de ${idade} anos.<br><img id="imagem-pessoas" src="./assets/img/velha.jpg"/>`
        */        
    }
    else if (idade > 20) {
        genero[0].checked ? result.innerHTML = `Detectamos um Homem de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/homem.jpg"/>` : result.innerHTML = `Detectamos uma Mulher de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/mulher.jpg"/>`
    }
    else if (idade > 11) {
        genero[0].checked ? result.innerHTML = `Detectamos um adolecente de ${idade} anos.<br><img id="imagem-pessoas" src="./assets/img/garoto.jpg"/>` : result.innerHTML = `Detectamos uma adolecente de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/garota.jpg"/>`
    }
    else {
        genero[0].checked ? result.innerHTML = `Detectamos uma criança de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/menino.jpg"/>` : result.innerHTML = `Detectamos uma criança de ${idade} anos. <br><img id="imagem-pessoas" src="./assets/img/menina.jpg"/>`
    }
}

