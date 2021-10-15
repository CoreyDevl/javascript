//|| \\
function contar() { 
    let ini = document.getElementById('boxnum1')
    let fim = document.getElementById('boxnum2')
    let pas = document.getElementById('boxnum3')
    let res = document.getElementById('res')
if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    res.innerHTML = `Burrice detectada. Faltam Dados`
}else{
    res.innerHTML = `Contando:`
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    if (i < f) {
        
      for (let c = 1; c <= f; c += p) {
//contagem crescente 
            res.innerHTML += `Blabla ${c} \u{1F603} `
    }
        
    }else{
        for (let c = i; c >= f; c -=p){
//contagem regressiva
            res.innerHTML += ` Blabla ${c} \u{1F603}`
        }
    }
    res.innerHTML += `TÁ FELIZ, ANIMAL?\u{1F434}`  
}
} 
