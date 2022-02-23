const { getUserName } = require('./exercicio02');

describe('Testes - promise', () => {
    describe('Teste se o usuário existe', () => {
        test('Nome do usuário', async () => {
            const user = await getUserName(1);
            return expect(user).toEqual('Mark');
        });
    });
    describe('Teste se o usuário não existe', () => {
        test('Error', async () => {
            expect.assertions(1);
            try {
                await getUserName(3);
            } catch (error) {
              expect(error.message).toEqual('User with 3 not found.')
            }
        });
    });
});

