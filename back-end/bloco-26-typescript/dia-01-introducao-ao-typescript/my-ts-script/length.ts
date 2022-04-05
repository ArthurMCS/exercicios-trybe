const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export const error = (unidade: string): any => {
    console.error(`A ${unidade} não é uma unidade!`)
    return;
};

const convert = (valor: number, unidadeBase: string, unidadeConversao: string): number => {

    if(!unidades.includes(unidadeBase)) return error(unidadeBase);
    if(!unidades.includes(unidadeConversao)) return error(unidadeConversao);

    const unidadeBIndex = unidades.indexOf(unidadeBase);
    const unidadeCIndex = unidades.indexOf(unidadeConversao);

    const expoente = (unidadeCIndex - unidadeBIndex);

    console.log(valor * Math.pow(10, expoente))
    return valor * Math.pow(10, expoente);
    
};

convert(1, 'km', 'cm');