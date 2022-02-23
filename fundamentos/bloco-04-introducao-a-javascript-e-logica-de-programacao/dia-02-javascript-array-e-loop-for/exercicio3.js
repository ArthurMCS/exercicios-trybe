
/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let result = 0
for(let index = 0; index < numbers.length; index++){
    result += numbers[index]
}
let media = result/numbers.length
console.log(media)