"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incentivo = void 0;
class Incentivo {
    constructor(codiceIdentificativo, descrizione, valore, criteriEleggibilita) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.valore = valore;
        this.criteriEleggibilita = criteriEleggibilita;
    }
    assegnaAStartup(startup) {
        if (startup.settoreFocus.includes(this.criteriEleggibilita)) {
            startup.riceviIncentivo(this);
        }
        else {
            console.log(`La startup ${startup.nome} non è eleggibile per l'incentivo ${this.descrizione}`);
        }
    }
}
exports.Incentivo = Incentivo;
