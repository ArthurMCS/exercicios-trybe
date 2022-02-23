const { test, expect } = require('@jest/globals');
const sum = require('./sum')

/* A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */

describe('Requisito 1', () => {
    test('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(9).toEqual(sum(4, 5));
    });
    test('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(0).toEqual(sum(0, 0));
    });
    test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow();
    });
    test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() => {
            sum(4, "5")
        }).toThrow("parameters must be numbers");
    })
});
