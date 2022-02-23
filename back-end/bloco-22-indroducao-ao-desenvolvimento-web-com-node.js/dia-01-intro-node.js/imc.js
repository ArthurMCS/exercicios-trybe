const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso em kg?');
const altura = readline.questionInt('Qual sua altura em cm?');

function imc () {

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imcResultado = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imcResultado}`);

     if(imcResultado < 18.5){
       console.log('Abaixo do peso (magreza)');
     }
      else if(imcResultado >= 18.5 && imcResultado <= 24.9){
       console.log('Peso normal');
     }
      else if(imcResultado >= 25 && imcResultado <= 29.9){
      console.log('Acima do peso (sobrepeso)');
     }
     else if(imcResultado >= 30 && imcResultado <= 34.9){
       console.log('Obesidade grau I');
     }
     else if(imcResultado >= 35 && imcResultado <= 39.9){
       console.log('Obesidade grau II ');  
     } else {
       console.log('Obesidade graus III e IV');
     }

}

imc();