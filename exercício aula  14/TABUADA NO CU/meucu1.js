function varar() { 
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')
    
    if (num.value.length == 0) {
        alert('erro')
    }else{ 
        tab.innerHTML = ''   
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * (c++)}`
            tab.value = `tab ${c}` //isso é pra uso em php e outras linguagens 
            tab.appendChild(item)
            
        }
    }
}