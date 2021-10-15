//||
//res.innerHTML = `Você ja é burro a ${idade} anos.`
function run(){
   var data = new Date()
   var ano = data.getFullYear()
   var ano2 = window.document.getElementById('ano2')
   var res = window.document.getElementById('res')
   var img = window.document.getElementById('img')
   if (ano2.value.length == 0 || ano2.value > ano ) {
    window.alert('Você veio do futuro, é? Seu animal!')
} else { 
    var sex = window.document.getElementsByName('sexo')
    var idade = ano - ano2.value
    var gen = ''

    if (sex[0].checked) {
        gen = 'Homenzinho'
        if (idade > 0 && idade < 10) {
            img.src = 'homem-crian.png'
        }

        else if (idade < 21) {
            img.src = 'homem-jov.png'
        }

        else if (idade < 50) {
            img.src = 'homem-adulto.png'    
        } 

        else {
            img.src = 'homem-idoso.png'
    } }
     else if (sex[1].checked) {
        gen = 'Mulherzinha'
        if (idade >= 0 && idade < 10) {
            img.src = 'mulher-crian.png'
        }

        else if (idade < 21) {
            img.src = 'mulher-jov.png'
        }

        else if (idade < 50) {
            img.src = 'mulher-adulto.png'    
        } 

        else {
            img.src = 'mulher-idoso.png'
    }
         
}
    res.style.textAlign = 'center'
    res.innerHTML = `O VB destectou que você é ${gen}, e que você ja é burro a ${idade} anos.`
    
}

}

