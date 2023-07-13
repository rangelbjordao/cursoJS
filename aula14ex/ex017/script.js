function tabuada() {
    let num = document.querySelector('input#txtnum')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        window.alert(`Digite um numero`)
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}