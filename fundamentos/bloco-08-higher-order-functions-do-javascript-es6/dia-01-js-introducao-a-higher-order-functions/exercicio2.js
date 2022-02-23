const verifica = (numeroJogador, numero) => numero === numeroJogador;

const sorteio = (numeroJogador, callback) => {
    const number = Math.floor((Math.random() * (6 - 1)) + 1)

    return callback(numeroJogador, number) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(sorteio(3, verifica));