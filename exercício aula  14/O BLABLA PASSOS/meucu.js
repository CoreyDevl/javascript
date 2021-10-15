//||
function contar() {
    var ini = document.getElementById('boxnum1')
    var fim = document.getElementById('boxnum2')
    var pas = document.getElementById('boxnum3')
    var res = document.getElementById('res')
    var c = ini
    if (ini.value.length == 0 || ini.value < 1) {
        window.alert('erro no INICIO')
    } else if (fim.value.length == 0 || fim.value < ini.value) {
        window.alert('erro no FIM')
    }
    else if (pas.value.length == 0 || pas.value <= 0) {
        window.alert('erro no PASSO')
    }
    else {
        for (c = ini; c <= fim; c + pas ) {
            res.innerHTML = `Contando... ${c}`
        }
    }

}
    



