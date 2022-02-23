/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado" */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumbers = 0

for(let index = 0; index < numbers.length; index++){
    let currentNumber = numbers[index]
    if(currentNumber % 2 !== 0){
        oddNumbers ++
    }
}

if(oddNumbers === 0){
    console.log("nenhum valor ímpar encontrado")
}else{
    console.log("Há", oddNumbers, " números ímpares")
}
