var num = [5, 8, 2, 9 ,3]

num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor e ${num[0]}`)

valor = 3
let pos = num.indexOf(valor)
if (pos == - 1) {
    console.log(`o valor ${valor} nao foi encontrado`)
} else {
    console.log(`o valor ${valor} esta na posicao ${pos}`)
}