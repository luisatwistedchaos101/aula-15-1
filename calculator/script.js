const limpar = document.getElementById('limpar')
const maisOuMenos = document.getElementById('maisOuMenos')
const porcentagem = document.getElementById('porcentagem')
const divisao = document.getElementById('divisao')
const sete = document.getElementById('sete')
const oito = document.getElementById('oito')
const nove = document.getElementById('nove')
const multiplicacao = document.getElementById('multiplicacao')
const quatro = document.getElementById('quatro')
const cinco = document.getElementById('cinco')
const seis = document.getElementById('seis')
const subtracao = document.getElementById('subtracao')
const um = document.getElementById('um')
const dois = document.getElementById('dois')
const tres = document.getElementById('tres')
const adicao = document.getElementById('adicao')
const ponto = document.getElementById('ponto')
const zero = document.getElementById('zero')
const deletar = document.getElementById('deletar')
const calcular = document.getElementById('calcular')

const listaDeNumeros = [];

limpar.addEventListener("click", () => {
    listaDeNumeros.splice(0, listaDeNumeros.length) 
    const resultado = eval(listaDeNumeros);
    document.getElementById("resultado").innerHTML = resultado;
})

maisOuMenos.addEventListener("click", () => {
    encontrou: for (let i = listaDeNumeros.length; i => 0; i--) {
        if (listaDeNumeros[i] == "+") {
            listaDeNumeros.splice(i, 1, "-");
            break encontrou }

        if (listaDeNumeros[i] == "-") {
            listaDeNumeros.splice(i, 1,"+");
            break encontrou;
        }
        
        if (listaDeNumeros[i] == "*" || listaDeNumeros[i] == "/") {
            listaDeNumeros.splice(i + 1, 0, "-");
            break encontrou;
        }
        listaDeNumeros.unshift ("-");
        break encontrou;
    }
})

 
porcentagem.addEventListener("click", () => {
    listaDeNumeros.push('/100');
    const resultado = eval(listaDeNumeros);
    document.getElementById("resultado").innerHTML = resultado;
})

adicao.addEventListener("click", ()=>{
    listaDeNumeros.push("+");
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

subtracao.addEventListener("click", () => {
    listaDeNumeros.push("-");
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

multiplicacao.addEventListener("click", ()=> {
    listaDeNumeros.push("*");
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
}
)

divisao.addEventListener("click", () => {
listaDeNumeros.push("/");
const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;

})

zero.addEventListener("click", () => {
    listaDeNumeros.push("0")
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

um.addEventListener("click", () => {
    listaDeNumeros.push("1")
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

dois.addEventListener("click", () => {
    listaDeNumeros.push("2")
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

tres.addEventListener("click", () => {
    listaDeNumeros.push("3")
    const numeroString = formaLista();
    const resultado = eval(numeroStrings);
    document.getElementById("resultado").innerHTML = resultado;
})

quatro.addEventListener("click", () => {
    listaDeNumeros.push("4")
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

cinco.addEventListener("click", () => {
    listaDeNumeros.push("5")
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

seis.addEventListener("click", () => {
    listaDeNumeros.push("6")
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

sete.addEventListener("click", () => {
    listaDeNumeros.push("7")
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

oito.addEventListener("click", () => {
    listaDeNumeros.push("8")
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})

nove.addEventListener("click", () => {
    listaDeNumeros.push("9")
    const numeroString = formaLista();
    const resultado = eval(numeroString);
    document.getElementById("resultado").innerHTML = resultado;
})


function formaLista(){
    return listaDeNumeros.join(""); 
}