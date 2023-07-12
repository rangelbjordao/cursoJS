function contar() {
    var res = document.querySelector('div#res')
    var inicio = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpas')

    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)
    
    res.innerHTML = `<br>Contando: <br> `
    while (inicio <= fim) {
        res.innerHTML += `${inicio} `
        inicio += passo
    }
}