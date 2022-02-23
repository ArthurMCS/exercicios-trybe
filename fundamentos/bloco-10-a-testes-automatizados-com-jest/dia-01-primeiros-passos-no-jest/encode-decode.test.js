const { test, expect } = require('@jest/globals')
const { encode, decode } = require('./encode-decode')

/* Para as funções encode e decode crie os seguintes testes:
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. */

describe('Testes', () => {
    test('encode é função', () => {
        expect(typeof encode).toEqual('function')
    });
    test('decode é função', () => {
        expect(typeof encode).toEqual('function')
    });
    test('se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente',
        () => {
            expect(encode('aeiou')).toEqual('12345')
        });
    test('teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente',
        () => {
            expect(decode('12345')).toEqual('aeiou')
        });
    test('se a string retornada tem o mesmo tamanho que o parâmetro', () => {
        expect((decode('Francisco').length)).toEqual(9)
    });
    test('se a string retornada tem o mesmo tamanho que o parâmetro', () => {
        expect((encode('Francisco').length)).toEqual(9)
    });
});