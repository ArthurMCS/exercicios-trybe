/* Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
 */

let a = 100
let b = 1000
let c = 10000

if(a > b && a > c){
    console.log("O maior numero é A:", a)
}else if(b > a && b > c){
    console.log("O maior numero é B:", b)
}else{
    console.log("O maior numero é C:", c)
}