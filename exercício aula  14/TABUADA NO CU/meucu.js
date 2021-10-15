function varar() {
    let num = window.document.getElementById('num')
    let tab = window.document.getElementById('tab') 

    if (num.value.length == 0 ) {
        alert('erro')
    }else{
        let n = Number(num.value)
        for (let c = n ; c <= 10 ; c * c ) {
           tab.innerHTML = `${c}`
       }
    }
}