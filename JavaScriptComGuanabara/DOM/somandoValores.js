
var tn1 = window.document.getElementById('txtn1')
var tn2 = window.document.querySelector('input#txtn2')
var res = window.document.querySelector('div#resultado')

function somar() {
    var num1 = Number(tn1.value)
    var num2 = Number(tn2.value)
    var s = num1 + num2
    res.innerHTML = `A soma entre ${num1} e ${num2} é igual a <strong>${s}</strong>`
}