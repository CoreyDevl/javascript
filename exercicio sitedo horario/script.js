 function darocuzao() {
    var body = window.document.getElementById('body')
    var msg = window.document.getElementById('msg') 
    var foto = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
     
     if (hora > 5 && hora <= 12) {
        msg.innerHTML = `Quando eu te comi era ${hora} hora(s) . <br> Bom dia, seu ANIMAL.`
    } else {
        if (hora >= 12 && hora <= 18) {
            msg.innerHTML = `Quando eu te comi era ${hora} hora(s) . <br> BOA TARDE, desGRAÇA!`
            img.src = 'horroria2.png'
            document.body.style.background = '#FFE493'           
         
        } else if (hora >= 19 && hora < 23) {
            msg.innerHTML = `Quando eu te comi era ${hora} hora(s) . <br> Boa noite, seu animal!`
            img.src = 'drogadia2.png'
            document.body.style.background = '#03082A'
        } else if (hora >=23){
            msg.innerHTML = `Vai dormir sua peste, são ${hora} horas.`
            img.src = 'putaria2.png'
            document.body.style.background = '#0F0D0A'
        }

    }
    
}
