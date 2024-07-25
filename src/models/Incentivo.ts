import { IIncentivo } from '../interfaces/IIncentivo';
import { IStartup } from '../interfaces/IStartup';

class Incentivo implements IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valore: number;
    criteriEleggibilita: string;

    constructor(codiceIdentificativo: string, descrizione: string, valore: number, criteriEleggibilita: string) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.valore = valore;
        this.criteriEleggibilita = criteriEleggibilita;
    }

    assegnaAStartup(startup: IStartup): void {
        if (startup.settoreFocus.includes(this.criteriEleggibilita)) {
            startup.riceviIncentivo(this);
        } else {
            console.log(`La startup ${startup.nome} non è eleggibile per l'incentivo ${this.descrizione}`);
        }
    }
}

export { Incentivo };
