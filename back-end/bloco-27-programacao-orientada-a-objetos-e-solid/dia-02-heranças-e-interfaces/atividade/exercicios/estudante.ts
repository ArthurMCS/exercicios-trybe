import Person from './pessoa';
export default class Student extends Person {
    private _matricula: string = ''
    private _notasProvas: number[] = [];
    private _notasTrabalhos: number[] = [];

    constructor(name: string, birthDate: Date){
        super(name, birthDate);
        this._matricula = this.generateMatricula();
    }

    get matricula():string {
        return this._matricula;
    }

    set matricula(value:string) {
        if(value.length < 16) throw new Error('matricula must be 16 characters')
        this._matricula = value;
    }

    get notasProvas():number[] {
        return this._notasProvas;
    }
    set notasProvas(value:number[]) {
        if(value.length > 4){
            throw new Error("Só deve haver até 4 notas")
        }
        this._notasProvas = value;
    }

    get notasTrabalhos():number[] {
        return this._notasTrabalhos;
    }

    set notasTrabalhos(value:number[]) {
        if(value.length > 2){
           throw new Error("Só deve haver até 2 notas")
        }
        this._notasTrabalhos = value;
    }

    //função do gabarito da trybe
    generateMatricula(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `STU${randomStr}`;
    }

}
