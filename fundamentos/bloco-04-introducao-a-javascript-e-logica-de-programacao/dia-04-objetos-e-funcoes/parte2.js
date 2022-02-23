/* Parte II - Funções */

/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

function checkPalindrome(string) {
    let right = [] 
    for (let i = 0; i < string.length; i += 1){
        right += string[i]
    }
    let left = []
    for (let j = string.length-1; j >= 0; j -= 1){
        left += string[j]
    }
    if (right === left) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}
checkPalindrome('arara');
checkPalindrome('desenvolvimento');

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */

function maiorIndice(array) {   
    let maiorIndice = 0
    for (let index in array) {
        if (array[maiorIndice] < array[index]) {
            maiorIndice = index
        }
    }
    return console.log(maiorIndice)
} 
maiorIndice([2, 3, 6, 7, 10, 1])

/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. */
function menorIndice(array) {
    let menorIndice = 0
    for (let index in array) {
        if (array[menorIndice] > array[index]) {
            menorIndice = index
        }
    }
    return console.log(menorIndice)
}
menorIndice([2, 4, 6, 7, 10, 0, -3])
 
/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */

function maiorNome(array) {
    let name = array[0]
    for (let index in array) {
        if (name.length < array[index].length) {
            name = array[index]
        }
    }
    return console.log(name)
}
maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
