/* Parte I

Agora você vai fazer alguns exercícios de fixação.
Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .
Copie o código abaixo. */

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);


/* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortArray = (array) => {
    array.sort((a, b) => a - b);
   return console.log(`Os números ${array} e encontram ordenados de forma crescente!`)
}

sortArray(oddsAndEvens)

/* Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N, com a notação N!,
é o produto de todos os inteiros menores ou iguais a N.
Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus(opcional): tente fazer o mesmo exercício de forma recursiva.
Spoiler: É possível resolver com uma linha usando ternary operator. */

const fatorial = number => {
     for (let i = number - 1; i >= 1; i -= 1) {
        number *= i
    };
    console.log(number)
}
fatorial(5);
/* 
Crie uma função que receba uma frase e retorne qual a maior palavra.
 */

const  longestWord = phrase => {
    const words = phrase.split(' ');
    let bigWord = '';

    for (let word of words) {
        if (word.length > bigWord.length) {
            bigWord = word;
        }
    }
    return console.log(bigWord)
}
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
