let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
valores.push(6)
console.log(valores)
  
for(pos in valores) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

pos = valores.indexOf(6)
if (pos == -1) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor esta na posicao ${pos}`)
}
