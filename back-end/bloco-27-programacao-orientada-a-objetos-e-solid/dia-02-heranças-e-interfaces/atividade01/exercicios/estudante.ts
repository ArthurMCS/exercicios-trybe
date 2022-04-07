class Estudante {
    private _matricula: string;
    private _name: string;
    private _notasProvas: number[];
    private _notasTrabalhos: number[];

    constructor(matricula: string, name: string, notasProvas?: number[], notasTrabalhos?: number[]){
        this._matricula = matricula;
        this._name = name;
        this._notasProvas = [];
        this._notasTrabalhos = [];
    }

    get matricula():string {
        return this._matricula;
    }

    set matricula(value:string) {
        this._matricula = value;
    }

    get notasProvas():number[] {
        return this._notasProvas;
    }
    set notasProvas(value:number[]) {
        if(value.length > 4){
            throw new Error("Só deve haver 4 notas")
        }
        this._notasProvas = value;
    }

    get notasTrabalhos():number[] {
        return this._notasTrabalhos;
    }

    set notasTrabalhos(value:number[]) {
        if(value.length > 2){
           throw new Error("Só deve haver 2 notas")
        }
        this._notasTrabalhos = value;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) { this._name = value; }
}

const NewEstudante = new Estudante('123456789', 'Jhon Doe');

console.log(NewEstudante)