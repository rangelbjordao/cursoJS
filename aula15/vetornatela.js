let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//console.log(valores[0])
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`)
}