let result = prompt('Adivinhe um número que estou pensando. Está entre 1 e 10')
const randomNumber = Math.round(Math.random() * 10)
let x = 1

while (Number(result) != randomNumber){
    result = prompt('Erro! Tente novamente')
    x++
}

alert(`Parabéns! Acertou em ${x} tentativas`)