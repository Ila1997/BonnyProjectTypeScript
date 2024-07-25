import { IStartup } from "./IStartup";

interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];
  partecipaAttività(startup: IStartup): void;
}

export { ICittadino };
