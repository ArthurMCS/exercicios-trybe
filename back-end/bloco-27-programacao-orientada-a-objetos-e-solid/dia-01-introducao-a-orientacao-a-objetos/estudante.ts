class Estudante {
    private _matricula: string;
    private _name: string;
    private _notasProvas: number[];
    private _notasTrabalhos: number[];

    constructor(matricula: string, name: string, notasProvas: number, notasTrabalhos: number){
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

    get notasTrabalhos():number[] {
        return this._notasTrabalhos;
    }

    get name():string {
        return this._name;
    }
}