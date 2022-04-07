export default class Person {
    private _name: string;
    private _birthDate: Date;

    constructor(name: string, birthDate: Date) {
        if(name.length < 3) {
            throw new Error("Deve conter no mínimo 3 letras")
        }
        this.validateBDate(birthDate)
        this._name = name;
        this._birthDate = birthDate;
    }

    get name(): string { return this._name; }

    set name(value: string) {
        this._name = value;
    }

    get birthDate() { return this._birthDate; }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    //função do gabarito da Trybe
    static getAge(value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    }

    private validateBDate(birthDate: Date){
        if(birthDate.getTime() > new Date().getTime()) throw new Error("Não pode ser uma data no futuro")
        if(Person.getAge(birthDate) > 120) throw new Error('A idade mácima é de 120 anos')
    }

}