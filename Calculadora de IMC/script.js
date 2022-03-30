//declaração de variaveis utilizando LET
let fomulario = document.querySelector('form')
let cxAltura = document.querySelector('#altura') 
let cxPeso = document.querySelector('#peso')
let cxImc = document.querySelector('#resultadoImc')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

//Evento do botão
btnCalcular.addEventListener('click', function (e){

let altura = cxAltura.value;
let peso = cxPeso.value;
let imc =  (peso / (altura * altura)).toFixed(1)

console.log(altura)
console.log(peso)
console.log(imc)

cxImc.value = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit


let pessoa = {
    altura : altura,
    peso   : peso,
    imc    : imc
 }

 //ligado a Resultado anteriores de IMC
 console.log(pessoa)
 dados[1].textContent = pessoa.altura + " m"
 dados[2].textContent = pessoa.peso + " Kg"
 dados[3].textContent = pessoa.imc + " "

 // previnir o comportamento padrao
 e.preventDefault()
})


//tabela de IMC
function situacaoDoPeso(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'	
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}