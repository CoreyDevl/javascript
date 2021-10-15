let carro = {
    marca: "Vw",
    preço: "1000",
    andar: function () {
        return console.log('andou')
    }
}

let nome = 'Andre'
console.log(nome.toUpperCase())

function $(nome) {
    return {
        hide(){
            console.log('Esconder o ' + nome)
        }
    }
}
$('Mijo').hide()

//nesse curso vimos que javascript é uma linguagem efetiva em tratar como objeto todo tipo de informação, torna mais eficiente as açoes.  e nem é tao complicado assim.