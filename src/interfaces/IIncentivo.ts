import { IStartup } from "./IStartup";

interface IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valore: number;
  criteriEleggibilita: string;
  assegnaAStartup(startup: IStartup): void;
}

export { IIncentivo };
