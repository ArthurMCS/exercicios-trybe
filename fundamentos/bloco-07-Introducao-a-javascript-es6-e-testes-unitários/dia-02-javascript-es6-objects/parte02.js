const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

/* Crie uma função para adicionar o turno da noite na lesson2.Essa função deve possuir três parâmetros, sendo eles: */
/* o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const novoTurno = (obj, key, value) => {
    obj[key] = value;
    console.log(lesson2)
}
novoTurno(lesson2, 'turno', 'noite');

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

const list = (obj) => Object.keys(obj)

console.log(list(lesson1))

/* Crie uma função para mostrar o tamanho de um objeto. */

const sizeOfObject = (obj) => Object.keys(obj).length;

console.log(sizeOfObject(lesson3))

/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */

const valuesOfObject = (obj) => Object.values(obj);

console.log(valuesOfObject(lesson2))

/* Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.Cada chave desse novo objeto será uma aula,
sendo essas chaves: lesson1, lesson2 e lesson3.Ao executar o comando console.log(allLessons) */

const lessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(lessons)

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

const students = (obj) => {
    let numberStudens = 0

    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i += 1){
        numberStudens += obj[keys[i]].numeroEstudantes
    }

    console.log(numberStudens)
}

students(lessons)

/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.  */

const valuesInPosition = (obj, n) => Object.values(obj)[n]

console.log(valuesInPosition(lesson3, 2))

