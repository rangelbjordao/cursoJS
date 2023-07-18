let num = document.querySelector('input#txtnum')
let tab = document.querySelector('select#seltab')
let res = document.querySelector('div#res')
let valores = []

function adicionar() {
    let n = Number(num.value)
    let item = document.createElement('option')

    //validação
    if (n < 1 || n > 100 || valores.indexOf(n) != -1) {
        alert('valor invalido ou ja encontrado na lista')
    } else {
        //adiciona na lista e array
        valores.push(n)
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let total = valores.length
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0
    let media = 0

    for (let index = 0; index < valores.length; index++) {
        //verifica maior
        if (valores[index] > maior) {
            maior = valores[index]
        }
        //verifica menor
        if (valores[index] < menor) {
            menor = valores[index]
        }
        //soma dos valores
        soma += valores[index]
    }
    //media dos valores
    media = soma / total

    if (total <= 0) {
        alert('adicione valores antes de finalizar')
    } else {
        res.innerHTML = `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados e ${media}</p>`
    }
}