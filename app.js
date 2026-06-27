// =============================================
// DATABASE RICETTE LOCALE ARRICCHITO (Kcal, Macros, Budget)
// =============================================

const RICETTE = {
  onnivoro: {
    15: [
      { title: "Wrap di pollo e avocado", minutes: 10, ingredients_text: "petto di pollo cotto, avocado, lattuga, pomodorini, tortilla di grano, yogurt greco, limone", steps_text: "1. Taglia il pollo a strisce. 2. Schiaccia l'avocado con succo di limone e sale. 3. Stendi sulla tortilla l'avocado, il pollo, la lattuga e i pomodorini. 4. Arrotola, taglia a metà e servi.", kcal: 460, macros: { carb: 35, prot: 28, fat: 20 }, budget: "€€" },
      { title: "Insalata di tonno e cannellini", minutes: 10, ingredients_text: "tonno sott'olio, fagioli cannellini, cipolla rossa, prezzemolo, olio EVO, limone, sale", steps_text: "1. Scola il tonno e sciacqua i fagioli. 2. Taglia la cipolla sottile. 3. Mescola tutto in una ciotola con olio, succo di limone e prezzemolo fresco. 4. Regola di sale e pepe.", kcal: 380, macros: { carb: 22, prot: 25, fat: 18 }, budget: "€" },
      { title: "Panino Gourmet Prosciutto e Brie", minutes: 5, ingredients_text: "pane ciabatta, prosciutto crudo, formaggio brie, rucola freschissima, pomodoro, olio EVO", steps_text: "1. Taglia il pane a metà. 2. Distribuisci le fette di brie e scaldalo leggermente. 3. Aggiungi il prosciutto crudo, la rucola e fette sottili di pomodoro. 4. Condisci con un filo d'olio.", kcal: 510, macros: { carb: 50, prot: 24, fat: 22 }, budget: "€€" },
      { title: "Uova strapazzate al salmone", minutes: 10, ingredients_text: "uova, salmone affumicato, erba cipollina, burro, sale, pepe, pane tostato", steps_text: "1. Sbatti le uova con un pizzico di sale e pepe. 2. Sciogli il burro in padella a fuoco dolce. 3. Cuoci le uova mescolando delicatamente. 4. Aggiungi il salmone a listarelle alla fine e l'erba cipollina. Servi su pane tostato.", kcal: 420, macros: { carb: 15, prot: 26, fat: 28 }, budget: "€€€" },
      { title: "Bowl di riso veloce con pollo e zucchine", minutes: 15, ingredients_text: "riso precotto, petto di pollo, zucchine, salsa di soia, olio di semi, sesamo", steps_text: "1. Salta in padella il pollo a cubetti con un filo d'olio. 2. Aggiungi le zucchine grattugiate a fori larghi e cuoci per 5 minuti. 3. Scalda il riso. 4. Assembla la ciotola, condisci con salsa di soia e semi di sesamo.", kcal: 490, macros: { carb: 55, prot: 32, fat: 12 }, budget: "€" },
      { title: "Couscous con salmone e pomodorini", minutes: 12, ingredients_text: "couscous, salmone affumicato, pomodorini, cetriolo, menta fresca, olio EVO, limone", steps_text: "1. Prepara il couscous versando acqua bollente salata e coprendo per 5 minuti. 2. Taglia a pezzetti il salmone, i pomodorini e il cetriolo. 3. Sgranate il couscous con una forchetta. 4. Unite tutti gli ingredienti, condite con olio, limone e menta.", kcal: 440, macros: { carb: 48, prot: 22, fat: 16 }, budget: "€€" },
      { title: "Quesadilla veloce prosciutto e formaggio", minutes: 10, ingredients_text: "tortilla di grano, prosciutto cotto, formaggio edamer, salsa barbecue, burro", steps_text: "1. Metti il formaggio e il prosciutto su una metà della tortilla. 2. Aggiungi un filo di salsa barbecue. 3. Piega a metà e cuoci in padella con una noce di burro per 3 minuti per lato finché non è dorata e il formaggio fuso.", kcal: 480, macros: { carb: 38, prot: 21, fat: 25 }, budget: "€" }
    ],
    30: [
      { title: "Pasta al tonno e pomodorini", minutes: 20, ingredients_text: "pasta penne, tonno sott'olio, pomodorini, aglio, olio EVO, capperi, prezzemolo", steps_text: "1. Metti a bollire l'acqua e cuoci la pasta. 2. In una padella soffriggi l'aglio schiacciato in olio. 3. Aggiungi i pomodorini a metà e i capperi. Cuoci per 8 minuti. 4. Unisci il tonno sgocciolato. 5. Scola la pasta e saltala in padella con il prezzemolo.", kcal: 580, macros: { carb: 75, prot: 28, fat: 15 }, budget: "€" },
      { title: "Frittata rustica zucchine e cotto", minutes: 20, ingredients_text: "uova, zucchine, prosciutto cotto a cubetti, parmigiano reggiano, olio EVO, sale, pepe", steps_text: "1. Taglia le zucchine a rondelle sottili e cuocile in padella con olio per 5 minuti. 2. Sbatti le uova in una ciotola con parmigiano, sale e pepe. 3. Aggiungi il prosciutto cotto e le zucchine. 4. Versa tutto nella padella calda e cuoci coperto 6 min per lato.", kcal: 390, macros: { carb: 5, prot: 28, fat: 29 }, budget: "€" },
      { title: "Insalata di pollo saporita con noci", minutes: 15, ingredients_text: "petto di pollo, mela verde, gherigli di noci, sedano, maionese light, limone, lattuga", steps_text: "1. Griglia il petto di pollo e taglialo a dadini. 2. Taglia la mela e il sedano a pezzetti. 3. Mescola in una ciotola il pollo, la mela, il sedano e le noci. 4. Condisci con la maionese diluita con succo di limone. Servi su un letto di lattuga.", kcal: 430, macros: { carb: 18, prot: 30, fat: 24 }, budget: "€€" },
      { title: "Couscous speziato con pollo e verdure", minutes: 25, ingredients_text: "couscous, petto di pollo, peperoni, zucchine, cipolla, mix di spezie, olio EVO", steps_text: "1. Taglia a cubetti il pollo e le verdure. 2. Soffriggi la cipolla e cuoci il pollo con le spezie. 3. Aggiungi peperoni e zucchine e salta a fuoco vivo per 10 minuti. 4. Prepara il couscous e servilo unendo il pollo e le verdure.", kcal: 520, macros: { carb: 58, prot: 34, fat: 14 }, budget: "€€" }
    ],
    45: [
      { title: "Pollo al forno dorato con patate", minutes: 45, ingredients_text: "cosce di pollo, patate, rosmarino, aglio, olio EVO, sale, pepe nero", steps_text: "1. Taglia le patate a cubetti. 2. Disponi il pollo e le patate in una teglia da forno. 3. Condisci generosamente con olio, sale, pepe, spicchi d'aglio e rosmarino fresco. 4. Inforna a 200°C per 35-40 minuti girando a metà cottura.", kcal: 620, macros: { carb: 45, prot: 38, fat: 28 }, budget: "€€" },
      { title: "Lasagnetta espressa al ragù", minutes: 45, ingredients_text: "sfoglie di lasagna fresche, ragù pronto di carne, besciamella, parmigiano reggiano", steps_text: "1. In una pirofila stendi un velo di besciamella. 2. Alterna strati di sfoglia, ragù pronto riscaldato, besciamella e una spolverata di parmigiano. 3. Ripeti per 4 strati. 4. Cuoci in forno preriscaldato a 180°C per 25-30 minuti.", kcal: 680, macros: { carb: 62, prot: 34, fat: 30 }, budget: "€€" }
    ],
    60: [
      { title: "Arrosto saporito di vitello", minutes: 60, ingredients_text: "carne di vitello per arrosto, rosmarino, salvia, aglio, olio EVO, vino bianco, sale", steps_text: "1. Massaggia la carne con il sale. 2. Rosola l'arrosto in una casseruola con olio, aglio, salvia e rosmarino su tutti i lati. 3. Sfuma con vino bianco. 4. Trasferisci in forno a 180°C e cuoci bagnando di tanto in tanto col fondo per 45 minuti.", kcal: 550, macros: { carb: 2, prot: 45, fat: 38 }, budget: "€€€" }
    ]
  },

  vegetariano: {
    15: [
      { title: "Insalata Caprese classica all'origano", minutes: 10, ingredients_text: "mozzarella vaccina, pomodori ramati, basilico fresco, olio EVO, origano secco, sale", steps_text: "1. Taglia a fette regolari la mozzarella e i pomodori. 2. Alterna le fette su un piatto da portata. 3. Condisci con sale e un filo abbondante di olio EVO. 4. Guarnisci con foglie di basilico e origano.", kcal: 320, macros: { carb: 6, prot: 18, fat: 26 }, budget: "€" },
      { title: "Toast con avocado e uovo in camicia", minutes: 12, ingredients_text: "pane integrale, avocado, uova fresche, limone, peperoncino in scaglie, sale, aceto di vino", steps_text: "1. Tosta le fette di pane. 2. Schiaccia la polpa dell'avocado con succo di limone, sale e un pizzico di peperoncino. 3. Cuoci le uova in acqua bollente leggermente acidulata con aceto per 3 minuti per fare le uova in camicia. 4. Componi spalmando l'avocado e adagiando l'uovo.", kcal: 410, macros: { carb: 28, prot: 16, fat: 25 }, budget: "€€" },
      { title: "Bruschette cremose ricotta e pomodorini", minutes: 10, ingredients_text: "pane rustico, ricotta vaccina, pomodorini ciliegino, basilico, aglio, olio EVO, sale", steps_text: "1. Tosta le fette di pane e strofina delicatamente con l'aglio. 2. Condisci la ricotta con un pizzico di sale e pepe. 3. Taglia i pomodorini e condiscili con olio e sale. 4. Spalma la ricotta sul pane e aggiungi i pomodorini con foglie di basilico.", kcal: 350, macros: { carb: 42, prot: 12, fat: 14 }, budget: "€" },
      { title: "Yogurt Bowl con frutta secca e miele", minutes: 5, ingredients_text: "yogurt greco al naturale, miele biologico, noci, mandorle, granola, mirtilli freschi", steps_text: "1. Versa lo yogurt greco in una ciotola. 2. Disponi sopra i mirtilli freschi, la granola e la frutta secca sgusciata. 3. Condisci a filo con il miele prima di consumare.", kcal: 390, macros: { carb: 38, prot: 20, fat: 16 }, budget: "€" },
      { title: "Piadina light con stracchino e rucola", minutes: 10, ingredients_text: "piadina romagnola all'olio, formaggio stracchino, rucola, zucchine grigliate, olio EVO", steps_text: "1. Scalda la piadina in padella da entrambi i lati. 2. Spalma lo stracchino sulla metà. 3. Aggiungi la rucola, le zucchine grigliate e un filo d'olio. 4. Piega a metà e servi calda.", kcal: 450, macros: { carb: 48, prot: 14, fat: 22 }, budget: "€" },
      { title: "Insalata greca veloce", minutes: 10, ingredients_text: "formaggio feta, pomodori, cetriolo, olive nere, cipolla rossa, origano, olio EVO", steps_text: "1. Taglia i pomodori e il cetriolo a cubetti. 2. Taglia la cipolla a fettine sottilissime. 3. Unisci le verdure in una ciotola, aggiungi le olive e la feta sbriciolata. 4. Condisci con olio, sale e origano.", kcal: 370, macros: { carb: 12, prot: 14, fat: 28 }, budget: "€€" },
      { title: "Couscous con ceci e feta", minutes: 12, ingredients_text: "couscous, ceci precotti, formaggio feta, zucchina, menta, olio EVO, limone", steps_text: "1. Cuoci il couscous coprendolo d'acqua calda salata. 2. Taglia la feta a cubetti e la zucchina cruda a filetti sottili. 3. Sgrana il couscous, unisci i ceci, la zucchina, la feta e la menta. 4. Condisci con olio e limone.", kcal: 460, macros: { carb: 52, prot: 18, fat: 18 }, budget: "€€" }
    ],
    30: [
      { title: "Pasta al pomodoro fresco e basilico", minutes: 20, ingredients_text: "pasta spaghetti, pomodori pelati o freschi, basilico fresco, aglio, olio EVO, parmigiano reggiano", steps_text: "1. Lessa gli spaghetti. 2. Soffriggi l'aglio in padella con olio. 3. Aggiungi i pomodori schiacciati e cuoci per 12-15 minuti salando a fine cottura. 4. Scola la pasta al dente e saltala in padella col sugo e tantissimo basilico. Spolvera di parmigiano.", kcal: 520, macros: { carb: 80, prot: 16, fat: 14 }, budget: "€" },
      { title: "Crema vellutata di lenticchie rosse", minutes: 25, ingredients_text: "lenticchie rosse decorticate, carota, cipolla, sedano, curcuma in polvere, crostini di pane, olio EVO", steps_text: "1. Soffriggi trito di carota, sedano e cipolla con olio. 2. Unisci le lenticchie rosse ben sciacquate. 3. Copri con acqua o brodo caldo, aggiungi la curcuma e cuoci per 20 minuti. 4. Frulla per ottenere una vellutata e servi con crostini.", kcal: 410, macros: { carb: 58, prot: 22, fat: 9 }, budget: "€" },
      { title: "Frittata saporita al forno con peperoni", minutes: 25, ingredients_text: "uova, peperoni dolci rossi, cipolla dorata, parmigiano reggiano, olio EVO, sale, pepe", steps_text: "1. Affetta cipolla e peperoni e falli appassire in padella con un filo d'olio per 8 minuti. 2. Sbatti le uova con parmigiano, sale e pepe. 3. Unisci le verdure. 4. Versa in una teglia con carta forno e cuoci a 180°C per 15-20 minuti.", kcal: 340, macros: { carb: 8, prot: 22, fat: 24 }, budget: "€" }
    ],
    45: [
      { title: "Parmigiana di melanzane leggera", minutes: 45, ingredients_text: "melanzane, passata di pomodoro, mozzarella fresca, parmigiano reggiano, basilico, olio EVO, sale", steps_text: "1. Taglia le melanzane a fette e grigliale (invece di friggerle). 2. In una pirofila fai degli strati con passata di pomodoro salata, melanzane grigliate, mozzarella a fette e parmigiano. 3. Inforna a 180°C per 30 minuti fino a doratura.", kcal: 430, macros: { carb: 18, prot: 24, fat: 28 }, budget: "€€" },
      { title: "Torta salata spinaci e ricotta", minutes: 45, ingredients_text: "rotolo di pasta sfoglia, spinaci cotti, ricotta vaccina, uova, parmigiano reggiano, noce moscata", steps_text: "1. Stendi la pasta sfoglia in una tortiera. 2. In una ciotola unisci la ricotta, gli spinaci ben strizzati e tritati, un uovo, il parmigiano e una grattata di noce moscata. 3. Riempi la sfoglia. 4. Inforna a 190°C per 30-35 minuti.", kcal: 540, macros: { carb: 36, prot: 18, fat: 36 }, budget: "€€" }
    ],
    60: [
      { title: "Minestrone di verdure e fagioli", minutes: 60, ingredients_text: "carote, zucchine, patate, fagioli borlotti cotti, piselli novelli, sedano, cipolla, pasta corta, parmigiano", steps_text: "1. Taglia tutte le verdure a cubetti piccoli. 2. Soffriggi cipolla e sedano in una pentola capiente. 3. Aggiungi tutte le altre verdure e copri d'acqua. Cuoci per 40 minuti. 4. Unisci i fagioli e la pasta corta. Cuoci altri 10 minuti. Servi con parmigiano.", kcal: 460, macros: { carb: 68, prot: 18, fat: 10 }, budget: "€" }
    ]
  },

  vegano: {
    15: [
      { title: "Hummus Bowl saporito con verdure", minutes: 10, ingredients_text: "hummus di ceci pronto, carote fresche, cetriolo, peperone giallo, olive nere camosciate, crackers integrali", steps_text: "1. Disponi l'hummus al centro di una ciotola larga. 2. Taglia le carote, il cetriolo e il peperone a bastoncini. 3. Sistema le verdure e le olive attorno all'hummus. 4. Accompagna con i crackers integrali.", kcal: 380, macros: { carb: 42, prot: 14, fat: 18 }, budget: "€" },
      { title: "Insalata proteica di ceci e spinacino", minutes: 10, ingredients_text: "ceci in scatola, spinacino novello, pomodorini ciliegino, cipolla rossa, limone, olio EVO, cumino", steps_text: "1. Scola e risciacqua bene i ceci. 2. In un'insalatiera mescola lo spinacino, i pomodorini a metà e la cipolla rossa affettata sottile. 3. Aggiungi i ceci. 4. Condisci con olio EVO, succo di limone freschissimo e un pizzico di cumino.", kcal: 340, macros: { carb: 38, prot: 16, fat: 12 }, budget: "€" },
      { title: "Avocado Toast con semi di chia", minutes: 8, ingredients_text: "pane di segale o integrale, avocado maturo, semi di chia, succo di limone, sale marino, peperoncino, pomodorini", steps_text: "1. Tosta le fette di pane. 2. Estrai la polpa dell'avocado e schiacciala bene con una forchetta unendo limone e sale. 3. Spalma la crema sul pane caldo. 4. Decora con fette di pomodorino e una pioggia di semi di chia.", kcal: 360, macros: { carb: 32, prot: 8, fat: 22 }, budget: "€€" },
      { title: "Wrap vegano ai falafel e tahina", minutes: 12, ingredients_text: "falafel già pronti, tortilla di grano o piadina vegana, lattuga, pomodoro, cetriolo, salsa tahina, limone", steps_text: "1. Scalda i falafel in padella per 5 minuti. 2. Scalda leggermente la tortilla. 3. Diluisci la salsa tahina con qualche goccia di acqua e succo di limone. 4. Riempi il wrap con verdure, falafel schiacciati e salsa tahina.", kcal: 490, macros: { carb: 58, prot: 18, fat: 20 }, budget: "€€" },
      { title: "Smoothie Bowl proteica ai frutti rossi", minutes: 8, ingredients_text: "banana, frutti di bosco surgelati, latte di mandorla senza zucchero, burro di arachidi, semi di zucca, granola", steps_text: "1. Frulla la banana con i frutti di bosco surgelati e poco latte di mandorla per ottenere una consistenza cremosa e densa. 2. Versa in una ciotola. 3. Guarnisci con un cucchiaio di burro di arachidi, semi di zucca e granola.", kcal: 420, macros: { carb: 54, prot: 12, fat: 18 }, budget: "€€" },
      { title: "Insalata ricca di quinoa, mais e fagioli neri", minutes: 10, ingredients_text: "quinoa precotta, fagioli neri cotti, mais dolce, pomodorini ciliegino, coriandolo fresco, avocado, lime, olio EVO", steps_text: "1. Mescola la quinoa con i fagioli neri scolati e il mais. 2. Aggiungi pomodorini a cubetti e dadini di avocado. 3. Condisci con succo di lime fresco, olio EVO, sale e coriandolo o prezzemolo fresco.", kcal: 410, macros: { carb: 48, prot: 15, fat: 17 }, budget: "€€" },
      { title: "Insalata veloce ed esotica couscous e fagioli", minutes: 12, ingredients_text: "couscous, fagioli cannellini precotti, carota, menta, succo di limone, olio EVO, sale", steps_text: "1. Prepara il couscous con acqua bollente. 2. Grattugia la carota. 3. Mescola cannellini, carota grattugiata e menta al couscous sgranato. 4. Condisci con olio e limone.", kcal: 390, macros: { carb: 55, prot: 15, fat: 11 }, budget: "€" }
    ],
    30: [
      { title: "Pasta e fagioli tradizionale vegana", minutes: 25, ingredients_text: "pasta ditalini, fagioli borlotti cotti, passata di pomodoro, aglio, rosmarino, olio EVO, sedano, carota", steps_text: "1. Prepara un trito di sedano, carota e aglio e fallo soffriggere in olio. 2. Aggiungi i fagioli borlotti, un cucchiaio di passata e un rametto di rosmarino. Copri d'acqua e cuoci per 10 minuti. 3. Frulla una parte dei fagioli per renderla cremosa. 4. Versa la pasta e cuocila direttamente nel brodo aggiungendo sale.", kcal: 480, macros: { carb: 78, prot: 20, fat: 8 }, budget: "€" },
      { title: "Curry profumato di ceci e spinaci", minutes: 25, ingredients_text: "ceci cotti, spinaci novelli freschi, latte di cocco in lattina, cipolla, aglio, polvere di curry, zenzero fresco, olio EVO", steps_text: "1. Soffriggi cipolla, aglio e zenzero grattugiato con olio. 2. Aggiungi il curry e tostalo per un minuto. 3. Unisci i ceci e il latte di cocco. Fai sobbollire per 10 minuti. 4. Aggiungi gli spinaci e cuocili finché non appassiscono. Accompagna con riso se gradito.", kcal: 490, macros: { carb: 44, prot: 16, fat: 28 }, budget: "€€" },
      { title: "Vellutata dorata pomodoro e basilico", minutes: 20, ingredients_text: "pomodori pelati di alta qualità, cipolla rossa, patata piccola, basilico fresco, brodo vegetale, crostini, olio EVO", steps_text: "1. Soffriggi la cipolla affettata e la patata a cubetti sottili. 2. Unisci i pelati e il brodo vegetale. Cuoci per 15 minuti. 3. Aggiungi abbondante basilico e frulla col frullatore a immersione per ottenere una vellutata liscia. Servi con crostini e olio.", kcal: 310, macros: { carb: 46, prot: 8, fat: 10 }, budget: "€" }
    ],
    45: [
      { title: "Burger fatti in casa di lenticchie", minutes: 40, ingredients_text: "lenticchie marroni cotte, cipolla, aglio, cumino, pan grattato, farina di ceci, panini per burger, pomodoro, lattuga", steps_text: "1. Frulla le lenticchie con cipolla cotta, aglio e cumino. 2. Regola di sale e aggiungi pan grattato e un po' di farina di ceci per compattare il composto. 3. Forma i burger con le mani. 4. Cuocili in padella antiaderente con olio per 5 min per lato. Assembla i panini con insalata e pomodoro.", kcal: 530, macros: { carb: 72, prot: 24, fat: 12 }, budget: "€€" },
      { title: "Polpettine rustiche melanzane e sugo", minutes: 45, ingredients_text: "melanzane, pan grattato, aglio, prezzemolo fresco, farina di ceci, passata di pomodoro, basilico, olio EVO", steps_text: "1. Cuoci la melanzana a dadini in forno o microonde fino a renderla morbidissima. 2. Schiacciala e unisci aglio tritato, prezzemolo, sale, pan grattato e farina di ceci. 3. Forma le polpettine. 4. Scaldale nella passata di pomodoro insaporita per 15 minuti.", kcal: 380, macros: { carb: 50, prot: 14, fat: 12 }, budget: "€€" }
    ],
    60: [
      { title: "Lasagne vegane di verdure al forno", minutes: 60, ingredients_text: "sfoglie di lasagna vegana senza uova, besciamella vegana, zucchine, melanzane, spinaci novelli, passata di pomodoro, lievito alimentare in scaglie", steps_text: "1. Prepara la besciamella vegana (farina, olio EVO e latte di soia non dolcificato con noce moscata). 2. Salta in padella le verdure tagliate a dadini. 3. Componi la teglia alternando sfoglia, passata, verdure cotte, besciamella e una spolverata di lievito alimentare. 4. Inforna a 180°C per 35 minuti.", kcal: 520, macros: { carb: 68, prot: 16, fat: 18 }, budget: "€€" }
    ]
  }
};

// =============================================
// LOGICA APPLICAZIONE E STATO
// =============================================

let currentPlan = [];

// Caricamento all'avvio
document.addEventListener('DOMContentLoaded', () => {
  const savedPlan = localStorage.getItem('schiscetta_saved_plan');
  if (savedPlan) {
    try {
      currentPlan = JSON.parse(savedPlan);
      if (currentPlan && currentPlan.length > 0) {
        renderPlan(currentPlan);
        generateShoppingList(currentPlan);
      }
    } catch (e) {
      console.error("Errore nel caricamento del piano salvato:", e);
    }
  }
});

function getRandomPlan(dieta, tempo) {
  const tempoInt = parseInt(tempo);
  let pool = [];

  const tempiDisponibili = [15, 30, 45, 60].filter(t => t <= tempoInt);
  
  tempiDisponibili.forEach(t => {
    const ricette = RICETTE[dieta]?.[t] || [];
    pool = [...pool, ...ricette];
  });

  if (pool.length === 0) {
    pool = Object.values(RICETTE[dieta] || {}).flat();
  }

  // Mischia e prendi 5 ricette
  const shuffled = pool.sort(() => Math.random() - 0.5);
  const giorni = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];
  
  return giorni.map((day, i) => ({
    ...shuffled[i % shuffled.length],
    day
  }));
}

// =============================================
// ELEMENTI DOM
// =============================================
const form = document.getElementById('plan-form');
const generateBtn = document.getElementById('generate-btn');
const spinner = document.getElementById('loading-spinner');
const emptyState = document.getElementById('empty-state');
const resultsContainer = document.getElementById('plan-results');

const planActionsContainer = document.getElementById('plan-actions-container');
const saveCurrentPlanBtn = document.getElementById('save-current-plan-btn');
const viewSavedPlansBtn = document.getElementById('view-saved-plans-btn');
const savedPlansModal = document.getElementById('saved-plans-modal');
const closeSavedPlansBtn = document.getElementById('close-saved-plans-btn');
const savedPlansList = document.getElementById('saved-plans-list');

const shoppingListContainer = document.getElementById('shopping-list-container');
const shoppingListItems = document.getElementById('shopping-list-items');
const copyListBtn = document.getElementById('copy-list-btn');

const modal = document.getElementById('recipe-modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalTime = document.getElementById('modal-time');
const modalBudget = document.getElementById('modal-budget');
const modalMacros = document.getElementById('modal-macros');
const modalIngredients = document.getElementById('modal-ingredients');
const modalSteps = document.getElementById('modal-steps');

// GESTIONE SUBMIT
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const dieta = document.getElementById('dieta').value;
  const tempo = document.getElementById('tempo').value;

  generateBtn.disabled = true;
  spinner.classList.remove('hidden');
  emptyState.classList.add('hidden');
  resultsContainer.classList.add('hidden');
  shoppingListContainer.classList.add('hidden');
  planActionsContainer.classList.add('hidden');

  setTimeout(() => {
    currentPlan = getRandomPlan(dieta, tempo);
    localStorage.setItem('schiscetta_saved_plan', JSON.stringify(currentPlan));
    
    renderPlan(currentPlan);
    generateShoppingList(currentPlan);

    generateBtn.disabled = false;
    spinner.classList.add('hidden');
  }, 1000);
});

// STAMPA PIANO NELLA DASHBOARD
function renderPlan(plan) {
  resultsContainer.innerHTML = '';

  plan.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-info">
        <h3>${recipe.day}</h3>
        <p>${recipe.title}</p>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
          <span style="margin-right: 0.5rem;">⏱ ${recipe.minutes} min</span>
          <span style="margin-right: 0.5rem;">🔥 ${recipe.kcal} Kcal</span>
          <span>💰 ${recipe.budget}</span>
        </div>
      </div>
      <button class="view-recipe-btn">Vedi ricetta</button>
    `;
    card.querySelector('.view-recipe-btn').addEventListener('click', () => openModal(recipe));
    resultsContainer.appendChild(card);
  });

  resultsContainer.classList.remove('hidden');
  planActionsContainer.classList.remove('hidden');
}

// GENERATORE DELLA LISTA DELLA SPESA
function generateShoppingList(plan) {
  shoppingListItems.innerHTML = '';
  
  // Raccogli tutti gli ingredienti
  let ingredients = [];
  plan.forEach(recipe => {
    if (recipe.ingredients_text) {
      const list = recipe.ingredients_text.split(',');
      list.forEach(item => {
        let cleaned = item.trim().toLowerCase();
        if (cleaned) {
          ingredients.push(cleaned);
        }
      });
    }
  });

  // Deduplica gli ingredienti
  const uniqueIngredients = [...new Set(ingredients)].sort();

  // Genera checkboxes
  uniqueIngredients.forEach((ingredient, index) => {
    const label = document.createElement('label');
    label.className = 'ingredient-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = ingredient;
    
    // Controlla se era già stato spuntato
    const checkedState = localStorage.getItem(`shopping_check_${ingredient}`);
    if (checkedState === 'true') {
      checkbox.checked = true;
      label.classList.add('checked');
    }

    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        label.classList.add('checked');
        localStorage.setItem(`shopping_check_${ingredient}`, 'true');
      } else {
        label.classList.remove('checked');
        localStorage.setItem(`shopping_check_${ingredient}`, 'false');
      }
    });

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(capitalize(ingredient)));
    shoppingListItems.appendChild(label);
  });

  shoppingListContainer.classList.remove('hidden');
}

// COPIA DELLA LISTA NEGLI APPUNTI
copyListBtn.addEventListener('click', () => {
  const items = Array.from(shoppingListItems.querySelectorAll('.ingredient-item'));
  // Filtra quelli già a casa (spuntati)
  const uncheckedItems = items
    .filter(item => !item.querySelector('input').checked)
    .map(item => `- ${item.innerText.trim()}`);

  if (uncheckedItems.length === 0) {
    alert("Tutti gli ingredienti sono già spuntati!");
    return;
  }

  const textToCopy = "🛒 LISTA DELLA SPESA SETTIMANALE (SchiscettaSmart):\n\n" + uncheckedItems.join('\n');
  navigator.clipboard.writeText(textToCopy).then(() => {
    const oldText = copyListBtn.textContent;
    copyListBtn.textContent = "Copiata! ✓";
    copyListBtn.style.backgroundColor = "var(--primary-green)";
    copyListBtn.style.color = "white";
    setTimeout(() => {
      copyListBtn.textContent = oldText;
      copyListBtn.style.backgroundColor = "";
      copyListBtn.style.color = "";
    }, 2000);
  }).catch(err => {
    console.error("Impossibile copiare la lista: ", err);
  });
});

// APERTURA MODALE CON MACROS
function openModal(recipe) {
  modalTitle.textContent = recipe.title;
  modalTime.textContent = recipe.minutes;
  modalBudget.textContent = "Budget: " + recipe.budget;

  // Renderizza i macronutrienti
  modalMacros.innerHTML = `
    <div class="macro-pill"><span>${recipe.kcal}</span>kcal</div>
    <div class="macro-pill"><span>${recipe.macros.prot}g</span>proteine</div>
    <div class="macro-pill"><span>${recipe.macros.carb}g</span>carboidrati</div>
    <div class="macro-pill"><span>${recipe.macros.fat}g</span>grassi</div>
  `;

  const ingredientsHtml = recipe.ingredients_text
    .split(',')
    .map(i => `• ${capitalize(i.trim())}`)
    .join('<br>');
  modalIngredients.innerHTML = ingredientsHtml;
  modalSteps.innerHTML = recipe.steps_text.replace(/(\d+\.)/g, '<br>$1').trim();

  modal.classList.remove('hidden');
}

// CHIUSURA MODALE
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
  if (e.target === savedPlansModal) {
    savedPlansModal.classList.add('hidden');
  }
});

// GESTIONE SALVATAGGIO E VISUALIZZAZIONE PIANI (Supabase)

saveCurrentPlanBtn.addEventListener('click', async () => {
  if (!currentPlan || currentPlan.length === 0) return;

  const defaultName = `Piano del ${new Date().toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' })}`;
  const planName = prompt("Dai un nome a questo piano:", defaultName);
  if (!planName) return;

  saveCurrentPlanBtn.disabled = true;
  saveCurrentPlanBtn.textContent = 'Salvataggio...';

  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    alert("Devi essere loggato per salvare i piani.");
    saveCurrentPlanBtn.disabled = false;
    saveCurrentPlanBtn.textContent = '💾 Salva questo piano';
    return;
  }

  const { error } = await supabaseClient
    .from('piani_salvati')
    .insert({
      user_id: session.user.id,
      nome: planName,
      piano_json: currentPlan
    });

  if (error) {
    alert("Errore nel salvataggio: " + error.message);
  } else {
    saveCurrentPlanBtn.textContent = 'Salvato! ✓';
    saveCurrentPlanBtn.style.backgroundColor = 'var(--primary-green)';
    setTimeout(() => {
      saveCurrentPlanBtn.textContent = '💾 Salva questo piano';
      saveCurrentPlanBtn.style.backgroundColor = '';
      saveCurrentPlanBtn.disabled = false;
    }, 2000);
  }
});

viewSavedPlansBtn.addEventListener('click', async () => {
  savedPlansList.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 1rem;">Caricamento...</p>';
  savedPlansModal.classList.remove('hidden');
  await renderSavedPlansList();
});

closeSavedPlansBtn.addEventListener('click', () => {
  savedPlansModal.classList.add('hidden');
});

async function renderSavedPlansList() {
  savedPlansList.innerHTML = '';

  const { data: piani, error } = await supabaseClient
    .from('piani_salvati')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    savedPlansList.innerHTML = `<p style="color: #dc2626; text-align: center; padding: 1rem;">Errore nel caricamento: ${error.message}</p>`;
    return;
  }

  if (!piani || piani.length === 0) {
    savedPlansList.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 1rem;">Nessun piano salvato al momento.<br><small>Genera un piano e clicca "Salva"!</small></p>';
    return;
  }

  piani.forEach(item => {
    const data = new Date(item.created_at).toLocaleString('it-IT', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    const div = document.createElement('div');
    div.className = 'saved-plan-item';
    div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; border-bottom: 1px solid rgba(0,0,0,0.06);';
    div.innerHTML = `
      <div>
        <h4 style="color: var(--primary-green); margin: 0; font-size: 1rem;">${item.nome}</h4>
        <small style="color: var(--text-muted); font-size: 0.75rem;">📅 ${data}</small>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button class="primary-btn compact-btn load-btn" style="padding: 0.4rem 0.8rem !important; font-size: 0.8rem !important; margin: 0 !important; width: auto !important;">Carica</button>
        <button class="secondary-btn compact-btn delete-btn" style="padding: 0.4rem 0.8rem !important; font-size: 0.8rem !important; margin: 0 !important; border-color: #dc2626 !important; color: #dc2626 !important; width: auto !important;">Elimina</button>
      </div>
    `;

    div.querySelector('.load-btn').addEventListener('click', () => {
      currentPlan = item.piano_json;
      localStorage.setItem('schiscetta_saved_plan', JSON.stringify(currentPlan));
      renderPlan(currentPlan);
      generateShoppingList(currentPlan);
      savedPlansModal.classList.add('hidden');
    });

    div.querySelector('.delete-btn').addEventListener('click', async () => {
      if (!confirm(`Eliminare "${item.nome}"?`)) return;

      const { error } = await supabaseClient
        .from('piani_salvati')
        .delete()
        .eq('id', item.id);

      if (error) {
        alert("Errore nell'eliminazione: " + error.message);
      } else {
        await renderSavedPlansList();
      }
    });

    savedPlansList.appendChild(div);
  });
}

// UTILS
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
