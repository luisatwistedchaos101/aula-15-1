const limpar = document.getElementbyid('limpar')
const maisOuMenos = document.getElementbyid('maisOuMenos')
const porcentagem = document.getElementbyid('porcentagem')
const divisao = document.getElementbyid('divisao')
const sete = document.getElementbyid('sete')
const oito = document.getElementbyid('oito')
const nove = document.getElementbyid('nove')
const multiplicacao = document.getElementbyid('multiplicacao')
const quatro = document.getElementbyid('quatro')
const cinco = document.getElementbyid('cinco')
const seis = document.getElementbyid('seis')
const subtracao = document.getElementbyid('subtracao')
const um = document.getElementbyid('um')
const dois = document.getElementbyid('dois')
const tres = document.getElementbyid('tres')
const adicao = document.getElementbyid('adicao')
const ponto = document.getElementbyid('ponto')
const zero = document.getElementbyid('zero')
const deletar = document.getElementbyid('deletar')
const calcular = document.getElementById('calcular')

const listaDeNumeros = [];

limpar.addEventListener("click", () => {
    console.log("Clicou no limpar")
    listaDeNumeros.splice(0, listaDeNumeros.length)
})

maisOuMenos.addEventListener("click", () => {})
 
porcentagem.addEventListener("click", () => {
    listaDeNumero.push('/100')
})

zero.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

um.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

dois.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

tres.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

quatro.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

cinco.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

seis.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

sete.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

oito.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

nove.addEventListener("click", () => {
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

function formaLista(){
    return listaDeNumeros.join(""); 
}