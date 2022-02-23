

const encode = (phrase) => {

    const encodeCharacters = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    }

    const stringCharacter = phrase.split('');
    const result = stringCharacter.map((c) => {
        if (encodeCharacters[c]) {
            return encodeCharacters[c]
        }
        return c
    })
    return result.join('');
}

const decode = (phrase) => {

    const codeCharacters = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
    }

    const stringCharacter = phrase.split('');
    const result = stringCharacter.map((c) => {
        if (codeCharacters[c]) {
            return codeCharacters[c];
        }
        return c
    })
    return result.join('');
}

module.exports = { encode, decode };
