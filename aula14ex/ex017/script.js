function tabuada() {
    var res = document.querySelector('div#res')
    var num = document.querySelector('input#txtnum').value

    res.innerHTML = 'Digite um numero acima <br>'
    if (num.length == 0) {
        alert(`Digite um numero`)
    } else {
        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
            var resultado = num * multiplicador
            res.innerHTML += `${num} X ${multiplicador} = ${resultado}<br>`
        }
    }
}