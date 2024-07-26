import { Startup } from './models/Startup';
import { Incentivo } from './models/Incentivo';
import { Cittadino } from './models/Cittadino';

// Istanziare alcune startup
const startup1 = new Startup("FitTech", "app per il fitness", "Una app che monitora le tue performance", ["App mobile", "Wearable"]);
const startup2 = new Startup("SportGear", "attrezzature sportive innovative", "Attrezzature per il potenziamento muscolare", ["Manubri", "Panche"]);

// Istanziare alcuni incentivi
const incentivo1 = new Incentivo("INC001", "Bonus per app di fitness", 5000, "app per il fitness");
const incentivo2 = new Incentivo("INC002", "Bonus per attrezzature sportive", 10000, "attrezzature sportive innovative");

// Istanziare un cittadino
const cittadino1 = new Cittadino("Mario", "Rossi", 28, ["Corsa", "Crossfit"]);
const cittadino2 = new Cittadino("Giuseppe", "Bianchi", 26, ["Pallavolo", "Nuoto"]);

// Assegnare incentivi alle startup
incentivo1.assegnaAStartup(startup1); // Startup eleggibile
incentivo2.assegnaAStartup(startup2); // Startup eleggibile

// Cittadino partecipa alle attività delle startup
cittadino1.partecipaAttività(startup1);
cittadino1.partecipaAttività(startup2);

cittadino2.partecipaAttività(startup1);
cittadino2.partecipaAttività(startup2);