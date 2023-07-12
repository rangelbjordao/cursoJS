function contar() {
    var res = document.querySelector('div#res')
    var inicio = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpas')


    if (inicio.value.length == 0) {
        res.innerHTML = `<br>Impossivel contar`
    } else if (Number(passo.value) == 0) {
        alert(`Passo invalido! Considerando PASSO 1`)
        passo = 1
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        res.innerHTML = `<br>Contando: <br> `
        while (inicio <= fim) {
            res.innerHTML += `${inicio} `
            inicio += passo
        }
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        res.innerHTML = `<br>Contando: <br> `
        while (inicio <= fim) {
            res.innerHTML += `${inicio} `
            inicio += passo
        }
    }
}