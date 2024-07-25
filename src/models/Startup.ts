import { IStartup } from '../interfaces/IStartup';
import { IIncentivo } from '../interfaces/IIncentivo';

class Startup implements IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiServiziOfferti: string[];

    constructor(nome: string, settoreFocus: string, descrizione: string, prodottiServiziOfferti: string[]) {
        this.nome = nome;
        this.settoreFocus = settoreFocus;
        this.descrizione = descrizione;
        this.prodottiServiziOfferti = prodottiServiziOfferti;
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        console.log(`Incentivo ricevuto: ${incentivo.descrizione} del valore di €${incentivo.valore}`);
    }
}

export { Startup };
