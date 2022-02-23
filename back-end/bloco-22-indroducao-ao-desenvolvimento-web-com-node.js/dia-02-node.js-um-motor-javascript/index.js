const func  = (a, b, c) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
            reject('Informe apenas números');
        }

        const res = (a + b) *c

        if(res < 50){
            return reject('Valor muito baixo')
        }

        resolve(res); 

    });
};

const callFunc = async () => {
    const a = Math.floor(Math.random() * 100 + 1);
    const b = Math.floor(Math.random() * 100 + 1);
    const c = Math.floor(Math.random() * 100 + 1); 

    try {
        const res = await func(a, b, c,);
        console.log(res);
    } catch (e) {
        console.log(e);
    }


};

callFunc();