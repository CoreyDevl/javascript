//|| \\
function contar() { 
    let ini = document.getElementById('boxnum1')
    let fim = document.getElementById('boxnum2')
    let pas = document.getElementById('boxnum3')
    let res = document.getElementById('res')
    


    //let c = ini
    
    /*if (ini.value.length == 0 || fim.value.length == 0|| pas.value.
   length == 0)
   ----------esse é o comando do guanabara  
   */

    if (ini.value.length == 0 || ini.value <= 1) {
        window.alert('erro no INICIO')
        res.innerHTML = `Burrice detectada, impossível Contar..`
    } else if (fim.value.length == 0 || fim.value  <= 1) {
        window.alert('erro no FIM')
        res.innerHTML = `Burrice detectada, impossível Contar..`
    }
    else if (pas.value.length == 0 || pas.value  <= 1) {
        window.alert('erro no PASSO')
        res.innerHTML = `Burrice detectada, impossível Contar..`
    }
    else {
        // alert('tudo ok')  <----fazer os testes de forma simples
        /*
        for (c = ini; c <= fim; c + pas ) {
            res.innerHTML = `Contando... ${c}`   <----isso era o meu
            */
           res.innerHTML = `Contando:`
           let i = Number(ini.value)  //sou burro e tinha skicido disso
           let f = Number(fim.value)  //sou burro e tinha skicido disso
           let p = Number(pas.value)  //sou burro e tinha skicido disso
            if ( i < f){
           for (let c = i; c <= f;c += p) { 
           res.innerHTML += ` blabla ${c} \u{1F449}` // <--EMOJI
           /* o '+='  sou burro e tinha skicido disso
           CONTAGEM PROGRESSIVA
           */
           }
           } 
               for (let c = 1; c >= f; c -= p){ 
               res.innerHTML += ` blabla ${c} \u{1F449}`
                 /*  
                 CONTAGEM REGRESSIVA
                */
            }
            
            if(i > f) { 
             for(let c = i; c >= f; c -= p){
              re.innerHTML += `${c}`
            } 
              res.innerHTML += `Tá feliz agora, animal? \u{1F434}`
        /* o RESULTADO FINAL ja está fora da FOR ..e leva um emoji*/
        }
      
    }
    }




