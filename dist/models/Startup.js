"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Startup = void 0;
class Startup {
    constructor(nome, settoreFocus, descrizione, prodottiServiziOfferti) {
        this.nome = nome;
        this.settoreFocus = settoreFocus;
        this.descrizione = descrizione;
        this.prodottiServiziOfferti = prodottiServiziOfferti;
    }
    riceviIncentivo(incentivo) {
        console.log(`Incentivo ricevuto: ${incentivo.descrizione} del valore di €${incentivo.valore}`);
    }
}
exports.Startup = Startup;
