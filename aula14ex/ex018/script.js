var array = []
let res = document.querySelector('div#res')
function adicionar() {
    let num = document.querySelector('input#txtnum')
    let tab = document.querySelector('select#seltab')
    let item = document.createElement('option')
    let n = Number(num.value)

    res.innerHTML = ''
    for (let index = 0; index < array.length; index++) {
        if (n == array[index]) {
            n = 0
        }
    }
    if (n < 1 || n > 100) {
        alert('valor invalido ou ja encontrado na lista')
    } else {
        array.push(n)
        item.innerHTML = `Valor ${n} adicionado`
        tab.appendChild(item)
    }
}

function finalizar() {
    let maior = array[0];
    let menor = array[0];
    let soma = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] > maior) {
            maior = array[index]
        }
        if (array[index] < menor) {
            menor = array[index]
        }
        soma += array[index]
    }
    let media = soma / array.length

    if (array.length <= 0) {
        alert('adicione valores antes de finalizar')
    } else {
        res.innerHTML = `<br>Ao todo temos ${array.length} números cadastrados <br><br>`
        res.innerHTML += `O maior valor informado foi ${maior} <br><br>`
        res.innerHTML += `O menor valor informado foi ${menor} <br><br>`
        res.innerHTML += `Somando todos os valores, temos ${soma} <br><br>`
        res.innerHTML += `A media dos valores digitados e ${media} <br><br>`
    }
}