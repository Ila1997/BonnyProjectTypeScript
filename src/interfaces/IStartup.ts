import { IIncentivo } from "./IIncentivo";

interface IStartup {
  nome: string;
  settoreFocus: string; // es. tecnologie wearable, app per il fitness, attrezzature sportive innovative
  descrizione: string;
  prodottiServiziOfferti: string[];
  riceviIncentivo(incentivo: IIncentivo): void;
}

export { IStartup };
