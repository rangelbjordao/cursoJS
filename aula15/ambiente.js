let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num);
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor e ${num[0]}`)

let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor nao foi encontrado');
} else {
    console.log(`O valor 8 esta na posicao ${pos}`);
}

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}