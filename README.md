# TypeScript Project - Bonny :computer:

Questo progetto TypeScript modella la struttura operativa di una startup ipotetica di nome Bonny.</br>Essa mira a facilitare l'accesso ai bonus statali per i cittadini, concentrandosi sulle interazioni tra startup, incentivi statali e cittadini partecipanti.

## Visionare il progetto

Puoi visionare il mio progetto anche su CodePen cliccando [qui](https://codepen.io/Ila1997/pen/ZEdpMNq).

## Requisiti

- [Node.js](https://nodejs.org/) (versione 14 o superiore)
- [npm](https://www.npmjs.com/) (versione 6 o superiore)

## Struttura del progetto

- `src/interfaces/`: Contiene le definizioni delle interfacce.
  - `IStartup.ts`
  - `IIncentivo.ts`
  - `ICittadino.ts`

- `src/models/`: Contiene le implementazioni delle classi che rispettano le interfacce definite.
  - `Startup.ts`
  - `Incentivo.ts`
  - `Cittadino.ts`

- `src/main.ts`: Contiene la logica principale per istanziare e testare le classi.

## Installazione

**Clonare il repository**

   Clona il repository GitHub sul tuo computer locale:

   `git clone https://github.com/Ila1997/BonnyProjectTypeScript.git` </br>
   `cd BonnyProjectTypeScript`
   
## Come eseguire il progetto

   - `npm install`
   - `npm run build`
   - `npm start`
   
## Configurare il progetto

Assicurarsi che il codice tsconfig.json sia configurato correttamente:
```bash
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
