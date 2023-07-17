var array = []
function adicionar() {
    let num = document.querySelector('input#txtnum')
    let tab = document.querySelector('select#seltab')
    let item = document.createElement('option')
    let n = Number(num.value)



    if (n < 1 || n > 100) {
        alert('valor invalido')
    } else {
        array.push(n)
        item.innerHTML = `Valor ${n} adicionado`
        tab.appendChild(item)
    }
}

function finalizar() {
    for (let index = 0; index < array.length; index++) {
        if (array[index] > array[index - 1]) {
            var maior = array[index];
        }
    }
    
    for (let index = 0; index < array.length; index++) {
        if (array[index] < array[index - 1]) {
            var menor = array[index];
        }
    }

    let res = document.querySelector('div#res')
    res.innerHTML = `<br>Ao todo temos ${array.length} numeros cadastrados <br><br>`
    res.innerHTML += `O maior valor informado foi ${maior} <br><br>`
    res.innerHTML += `O menor valor informado foi ${menor} <br><br>`
}