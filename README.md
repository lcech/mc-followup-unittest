# Activate MeasureCamp Followup
## Domácí úkol #1

Vyzkoušejte si Unit Test v JavaScriptu.

### Instalace

* Nemáte-li, nainstalujte si Node.js: [[https://nodejs.org/en/](https://nodejs.org/en/)]
* Do adresáře ve kterém vyvíjíte, si naklonujte tento repozitář a nainstalujte závislosti (mocha, chai)

```bash
git clone git@github.com:lcech/mc-followup-unittest.git
cd mc-followup-unittest
npm install
```

* Zkuste si pustit hotové příklady testů

```bash
npm test
```

### Zadání

* Napiště test pro funkci `/src/generateSessionId.js`, která by měla vygenerovat Session ID s následujícími vlastnostmi
  * skládá se z aktuálního timestamp (13 číslic), tečky a náhodného řetězce o 8mi znacích
  * příklad: '1578577153481.t0dajkz8'
* Pošlete výsledný soubor `/test/generateSessionId.spec.js`

### Tipy

* V [Etnetera Activate](https://www.activate.cz/) používáme při práci **VSCode**: [https://code.visualstudio.com/](https://code.visualstudio.com/)