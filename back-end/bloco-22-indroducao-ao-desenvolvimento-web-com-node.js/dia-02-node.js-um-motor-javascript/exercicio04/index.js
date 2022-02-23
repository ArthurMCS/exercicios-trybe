const fs = require('fs').promises;

const requestSimpson = async (id) => {
    const allSimpsons = await fs
    .readFile('./exercicio04/simpson.json', 'utf-8')
    .then(res => JSON.parse(res))

    const character = allSimpsons.find(simpson => simpson.id == id);

    if (!character){
        throw new Error('id não encontrato')
    } 

    return character
    


}

requestSimpson(10);