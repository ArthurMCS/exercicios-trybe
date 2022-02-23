let custo = 1000
let venda = 5000
let lucro = 0

if(custo >= 0 && venda >= 0){
    lucro = venda - (custo * 1.2)
    console.log("O lucro é de:", lucro)
    console.log("Lucro ao vender mil produtos:", lucro * 1000)
}else{
    ("erro: valor inserido menor que zero")
}