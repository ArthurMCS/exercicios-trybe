const uppercase = require('./exercicio01');

test('requisito 1', (done) => {
    uppercase('flamengo', (str) => {
        try {
            expect(str).toBe('FLAMENGO');
            done();
        } catch (error) {
            done(error);
        }
    });
});