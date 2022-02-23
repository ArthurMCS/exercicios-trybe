const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['B', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificador = (Ranswers, Sanswers) => {
    if (Ranswers === Sanswers){
        return 1
    }
    else if (Sanswers === 'N.A') {
        return 0
    }
        return -0.5;
}

const notas = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
    let nota = 0
    for (let i = 0; i < RIGHT_ANSWERS.length; i += 1){
        const returnVerficador = callback(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i])
        nota += returnVerficador
    }
    return `A sua nota é ${nota}`
}

console.log(notas(RIGHT_ANSWERS, STUDENT_ANSWERS, verificador));
