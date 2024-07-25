import { ICittadino } from '../interfaces/ICittadino';
import { IStartup } from '../interfaces/IStartup';

class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];

    constructor(nome: string, cognome: string, eta: number, interessiSportivi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }

    partecipaAttività(startup: IStartup): void {
        console.log(`${this.nome} ${this.cognome} partecipa alle attività della startup ${startup.nome}`);
    }
}

export { Cittadino };
