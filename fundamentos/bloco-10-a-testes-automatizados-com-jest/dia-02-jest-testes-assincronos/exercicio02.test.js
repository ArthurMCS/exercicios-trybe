const { getUserName } = require('./exercicio02');

describe('Testes - promise', () => {
    describe('Teste se o usuário existe', () => {
        test('Nome do usuário', () => {
            expect.assertions(1);
            return getUserName(1).then((user) => expect(user).toEqual('Mark'))
        });
    });
    describe('Teste se o usuário não existe', () => {
        test('Error', () => {
            expect.assertions(1);
            return getUserName(3).catch(error => expect(error)
                .toEqual(new Error(`User with ${3} not found.`)));
        });
    });
});

