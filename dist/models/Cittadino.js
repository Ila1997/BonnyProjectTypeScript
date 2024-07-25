"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cittadino = void 0;
class Cittadino {
    constructor(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    partecipaAttività(startup) {
        console.log(`${this.nome} ${this.cognome} partecipa alle attività della startup ${startup.nome}`);
    }
}
exports.Cittadino = Cittadino;
