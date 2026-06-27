// =============================================
// DATABASE RICETTE LOCALE - Nessuna AI richiesta
// =============================================

const RICETTE = {
  onnivoro: {
    15: [
      { title: "Wrap di pollo e avocado", minutes: 10, ingredients_text: "petto di pollo cotto, avocado, lattuga, pomodorini, tortilla, yogurt greco, limone", steps_text: "1. Taglia il pollo a strisce. 2. Schiaccia l'avocado con succo di limone e sale. 3. Stendi sulla tortilla avocado, pollo, lattuga e pomodorini. 4. Arrotola e servi.", video_url: "https://www.youtube.com/embed/4aZr5hZXP_s" },
      { title: "Insalata di tonno e cannellini", minutes: 10, ingredients_text: "tonno in scatola, fagioli cannellini, cipolla rossa, prezzemolo, olio, limone, sale", steps_text: "1. Scola il tonno e i fagioli. 2. Taglia la cipolla sottile. 3. Mescola tutto con olio, limone e prezzemolo. 4. Aggiusta di sale.", video_url: "https://www.youtube.com/embed/6BoiARSXkds" },
      { title: "Panino con prosciutto e brie", minutes: 5, ingredients_text: "pane ciabatta, prosciutto crudo, brie, rucola, pomodoro, olio EVO", steps_text: "1. Taglia il pane. 2. Aggiungi fette di brie. 3. Aggiungi prosciutto e rucola. 4. Condisci con olio e servi.", video_url: "" },
      { title: "Uova strapazzate con salmone", minutes: 10, ingredients_text: "3 uova, salmone affumicato, erba cipollina, burro, sale, pepe", steps_text: "1. Sbatti le uova con sale e pepe. 2. Sciogli il burro in padella. 3. Versa le uova e mescola lentamente. 4. Aggiungi il salmone a fine cottura e l'erba cipollina.", video_url: "" },
      { title: "Bowl di riso con pollo e verdure", minutes: 15, ingredients_text: "riso precotto, petto di pollo, zucchine, carote, salsa di soia, olio di sesamo", steps_text: "1. Cuoci il pollo in padella con olio. 2. Taglia le verdure e saltale. 3. Scalda il riso. 4. Assembla la bowl con salsa di soia.", video_url: "" },
      { title: "Quesadilla con pollo e mozzarella", minutes: 12, ingredients_text: "tortilla, pollo cotto, mozzarella, peperoni, salsa, origano", steps_text: "1. Distribuisci il ripieno su metà tortilla. 2. Chiudi a mezzaluna. 3. Cuoci in padella 3 min per lato. 4. Taglia e servi.", video_url: "" },
    ],
    30: [
      { title: "Pasta al tonno veloce", minutes: 20, ingredients_text: "pasta, tonno, pomodorini, aglio, olio, capperi, prezzemolo", steps_text: "1. Cuoci la pasta. 2. Soffriggi aglio in olio. 3. Aggiungi pomodorini e tonno. 4. Scola la pasta e manteca con il sugo.", video_url: "https://www.youtube.com/embed/3AAdKl9UYSo" },
      { title: "Frittata di zucchine e prosciutto", minutes: 20, ingredients_text: "4 uova, zucchine, prosciutto cotto, parmigiano, olio, sale", steps_text: "1. Soffriggi le zucchine. 2. Sbatti le uova con parmigiano. 3. Aggiungi il prosciutto. 4. Versa in padella e cuoci coperto.", video_url: "" },
      { title: "Insalata di pollo con noci e mele", minutes: 15, ingredients_text: "petto di pollo, mela, noci, sedano, maionese light, limone, lattuga", steps_text: "1. Cuoci il pollo e taglialo a cubetti. 2. Taglia mela e sedano. 3. Mescola con maionese e limone. 4. Servi sulla lattuga.", video_url: "" },
      { title: "Risotto allo zafferano con speck", minutes: 30, ingredients_text: "riso Carnaroli, speck, zafferano, cipolla, brodo, burro, parmigiano", steps_text: "1. Soffriggi cipolla e speck. 2. Tosta il riso. 3. Aggiungi brodo e zafferano. 4. Manteca con burro e parmigiano.", video_url: "" },
      { title: "Scaloppine al limone", minutes: 20, ingredients_text: "fettine di vitello, limone, farina, burro, vino bianco, prezzemolo, sale", steps_text: "1. Infarina le fettine. 2. Cuoci in burro. 3. Sfuma con vino bianco. 4. Aggiungi succo di limone e prezzemolo.", video_url: "" },
    ],
    45: [
      { title: "Pollo al forno con patate", minutes: 45, ingredients_text: "cosce di pollo, patate, rosmarino, aglio, olio, sale, pepe", steps_text: "1. Taglia le patate. 2. Condisci pollo e patate con olio, aglio e rosmarino. 3. Inforna a 200°C per 40 minuti.", video_url: "" },
      { title: "Lasagne veloci", minutes: 45, ingredients_text: "sfoglie di lasagna, ragù pronto, besciamella, parmigiano", steps_text: "1. Alterna strati di sfoglia, ragù e besciamella. 2. Termina con besciamella e parmigiano. 3. Cuoci in forno a 180°C per 30 min.", video_url: "" },
      { title: "Spezzatino di manzo con verdure", minutes: 45, ingredients_text: "manzo a cubetti, carote, patate, cipolla, brodo, pomodori, rosmarino", steps_text: "1. Rosola la carne. 2. Aggiungi le verdure. 3. Copri con brodo. 4. Cuoci a fuoco lento per 35 minuti.", video_url: "" },
    ],
    60: [
      { title: "Arrosto di vitello", minutes: 60, ingredients_text: "vitello, rosmarino, salvia, aglio, olio, vino bianco, sale", steps_text: "1. Lega e insaporisci la carne. 2. Rosola in padella. 3. Sfuma con vino. 4. Cuoci in forno a 180°C per 45 minuti.", video_url: "" },
      { title: "Ribollita toscana", minutes: 60, ingredients_text: "cavolo nero, fagioli borlotti, pane raffermo, carote, sedano, cipolla, pomodori", steps_text: "1. Soffriggi le verdure. 2. Aggiungi fagioli e cavolo. 3. Copri con acqua e cuoci 40 min. 4. Aggiungi il pane e fai riposare.", video_url: "" },
    ]
  },

  vegetariano: {
    15: [
      { title: "Insalata caprese con origano", minutes: 10, ingredients_text: "mozzarella fresca, pomodori, basilico, olio EVO, sale, origano", steps_text: "1. Taglia mozzarella e pomodori a fette. 2. Alterna sul piatto. 3. Condisci con olio, sale e basilico. 4. Aggiungi origano.", video_url: "" },
      { title: "Toast con avocado e uovo in camicia", minutes: 12, ingredients_text: "pane integrale, avocado, 2 uova, limone, peperoncino, sale", steps_text: "1. Tosta il pane. 2. Schiaccia l'avocado con limone. 3. Cuoci l'uovo in acqua con aceto. 4. Assembla e aggiungi peperoncino.", video_url: "" },
      { title: "Bruschetta con ricotta e pomodorini", minutes: 10, ingredients_text: "pane, ricotta, pomodorini, basilico, olio, aglio, sale", steps_text: "1. Tosta il pane e strofina con aglio. 2. Spalma la ricotta. 3. Aggiungi pomodorini a metà e basilico. 4. Condisci con olio.", video_url: "" },
      { title: "Frutta secca e yogurt greco con miele", minutes: 5, ingredients_text: "yogurt greco, miele, noci, mandorle, granola, frutti di bosco", steps_text: "1. Metti lo yogurt in una ciotola. 2. Aggiungi la frutta secca. 3. Versa miele. 4. Completa con granola e frutti di bosco.", video_url: "" },
      { title: "Piadina con formaggio e verdure grigliate", minutes: 12, ingredients_text: "piadina, stracchino, zucchine grigliate, peperoni, rucola, olio", steps_text: "1. Scalda la piadina. 2. Spalma lo stracchino. 3. Aggiungi le verdure grigliate e la rucola. 4. Piega e servi.", video_url: "" },
    ],
    30: [
      { title: "Pasta al pomodoro fresco e basilico", minutes: 20, ingredients_text: "pasta, pomodori freschi, basilico, aglio, olio EVO, sale, parmigiano", steps_text: "1. Cuoci la pasta. 2. Soffriggi aglio in olio. 3. Aggiungi pomodori tagliati a cubetti. 4. Manteca con la pasta e basilico.", video_url: "https://www.youtube.com/embed/ViGMjGjBFdE" },
      { title: "Zuppa di lenticchie", minutes: 25, ingredients_text: "lenticchie rosse, carote, cipolla, sedano, curcuma, cumino, pomodori, brodo", steps_text: "1. Soffriggi le verdure. 2. Aggiungi le lenticchie e le spezie. 3. Copri con brodo. 4. Cuoci 20 minuti e frulla parzialmente.", video_url: "" },
      { title: "Frittata al forno con peperoni", minutes: 25, ingredients_text: "5 uova, peperoni, cipolla, parmigiano, olio, sale, pepe", steps_text: "1. Rosola cipolla e peperoni. 2. Sbatti le uova con parmigiano. 3. Unisci tutto. 4. Cuoci in forno a 180°C per 15 min.", video_url: "" },
      { title: "Risotto ai funghi porcini", minutes: 30, ingredients_text: "riso, funghi porcini secchi, cipolla, brodo vegetale, burro, parmigiano, prezzemolo", steps_text: "1. Ammolla i funghi. 2. Soffriggi cipolla e funghi. 3. Tosta il riso e aggiungi brodo. 4. Manteca con burro e parmigiano.", video_url: "" },
    ],
    45: [
      { title: "Parmigiana di melanzane", minutes: 45, ingredients_text: "melanzane, passata, mozzarella, parmigiano, basilico, olio", steps_text: "1. Taglia e friggi le melanzane. 2. Alterna strati con passata, mozzarella e parmigiano. 3. Cuoci in forno 25 minuti.", video_url: "" },
      { title: "Torta salata spinaci e ricotta", minutes: 45, ingredients_text: "pasta brisée, spinaci, ricotta, 2 uova, parmigiano, noce moscata", steps_text: "1. Stendi la pasta. 2. Mescola spinaci cotti, ricotta, uova e parmigiano. 3. Riempi il guscio. 4. Cuoci a 180°C per 30 min.", video_url: "" },
    ],
    60: [
      { title: "Minestrone di verdure di stagione", minutes: 60, ingredients_text: "zucchine, carote, patate, fagioli, piselli, pomodori, sedano, cipolla, pasta, parmigiano", steps_text: "1. Soffriggi le verdure dure. 2. Aggiungi tutte le altre verdure e i legumi. 3. Copri con acqua. 4. Cuoci 40 min, aggiungi pasta e servi con parmigiano.", video_url: "" },
    ]
  },

  vegano: {
    15: [
      { title: "Bowl di hummus e verdure crude", minutes: 10, ingredients_text: "hummus, carote, sedano, cetriolo, peperoni, olive, crackers integrali", steps_text: "1. Metti l'hummus in una ciotola. 2. Taglia le verdure a bastoncini. 3. Disponi intorno all'hummus. 4. Aggiungi olive e crackers.", video_url: "" },
      { title: "Insalata di ceci e spinacino", minutes: 10, ingredients_text: "ceci in scatola, spinacino, pomodorini, cipolla rossa, limone, olio, cumino", steps_text: "1. Scola i ceci. 2. Mescola con spinacino e pomodorini. 3. Condisci con olio, limone e cumino. 4. Aggiungi la cipolla.", video_url: "" },
      { title: "Pane con avocado e semi di chia", minutes: 8, ingredients_text: "pane integrale, avocado, semi di chia, limone, sale, peperoncino, pomodorini", steps_text: "1. Tosta il pane. 2. Schiaccia l'avocado con limone e sale. 3. Spalma sul pane. 4. Aggiungi semi di chia e peperoncino.", video_url: "" },
      { title: "Wrap di falafel con tahini", minutes: 12, ingredients_text: "falafel pronti, tortilla, lattuga, pomodoro, cetriolo, tahini, limone", steps_text: "1. Scalda i falafel. 2. Scalda la tortilla. 3. Prepara la salsa tahini con limone. 4. Assembla il wrap con tutte le verdure.", video_url: "" },
      { title: "Smoothie bowl proteico", minutes: 8, ingredients_text: "banana, frutti di bosco, latte di mandorla, burro di arachidi, granola, semi di lino", steps_text: "1. Frulla banana e frutti di bosco con latte di mandorla. 2. Versa in una ciotola. 3. Aggiungi burro di arachidi. 4. Completa con granola e semi.", video_url: "" },
    ],
    30: [
      { title: "Pasta e fagioli vegan", minutes: 25, ingredients_text: "pasta, fagioli borlotti, pomodori, aglio, rosmarino, olio, sedano, carota", steps_text: "1. Soffriggi aglio, sedano e carota. 2. Aggiungi pomodori e fagioli. 3. Cuoci 10 min. 4. Aggiungi pasta e cuoci nel sugo.", video_url: "" },
      { title: "Curry di ceci e spinaci", minutes: 25, ingredients_text: "ceci, spinaci, latte di cocco, pomodori, cipolla, aglio, curry, curcuma, zenzero", steps_text: "1. Soffriggi cipolla, aglio e zenzero. 2. Aggiungi spezie, pomodori e ceci. 3. Versa il latte di cocco. 4. Aggiungi gli spinaci e cuoci 5 min.", video_url: "https://www.youtube.com/embed/c6eqj8mR86Q" },
      { title: "Bowl di quinoa con verdure arrosto", minutes: 30, ingredients_text: "quinoa, zucchine, peperoni, cipolla rossa, ceci, tahini, limone, prezzemolo", steps_text: "1. Cuoci la quinoa. 2. Arrostisci le verdure in forno. 3. Prepara salsa tahini. 4. Assembla la bowl.", video_url: "" },
      { title: "Zuppa di pomodoro e basilico", minutes: 20, ingredients_text: "pomodori pelati, cipolla, aglio, basilico, brodo vegetale, olio, sale, pepe", steps_text: "1. Soffriggi cipolla e aglio. 2. Aggiungi pomodori e brodo. 3. Cuoci 15 min. 4. Frulla e aggiungi basilico.", video_url: "" },
    ],
    45: [
      { title: "Burger di lenticchie", minutes: 40, ingredients_text: "lenticchie rosse, cipolla, aglio, cumin, pan grattato, farina, panini, lattuga, pomodoro", steps_text: "1. Cuoci le lenticchie. 2. Frulla con cipolla e spezie. 3. Forma i burger e impana. 4. Cuoci in padella 4 min per lato.", video_url: "" },
      { title: "Polpette di melanzane al sugo", minutes: 45, ingredients_text: "melanzane, pan grattato, aglio, prezzemolo, farina, passata, olio, sale", steps_text: "1. Cuoci e svuota le melanzane. 2. Mescola con pan grattato e aglio. 3. Forma le polpette. 4. Cuoci nel sugo di pomodoro.", video_url: "" },
    ],
    60: [
      { title: "Lasagne di verdure vegan", minutes: 60, ingredients_text: "sfoglie di lasagna, besciamella vegan, zucchine, melanzane, spinaci, passata, parmigiano vegan", steps_text: "1. Prepara la besciamella con latte vegetale. 2. Salta le verdure. 3. Alterna strati. 4. Cuoci in forno a 180°C per 35 min.", video_url: "" },
    ]
  }
};

// =============================================
// LOGICA APP
// =============================================

function getRandomPlan(dieta, tempo) {
  const tempoInt = parseInt(tempo);
  let pool = [];

  // Aggiungi ricette del tempo selezionato e tempi più brevi
  const tempiDisponibili = [15, 30, 45, 60].filter(t => t <= tempoInt);
  
  tempiDisponibili.forEach(t => {
    const ricette = RICETTE[dieta]?.[t] || [];
    pool = [...pool, ...ricette];
  });

  // Se non ci sono abbastanza ricette, usa tutte quelle disponibili
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
// UI
// =============================================

const form = document.getElementById('plan-form');
const generateBtn = document.getElementById('generate-btn');
const spinner = document.getElementById('loading-spinner');
const emptyState = document.getElementById('empty-state');
const resultsContainer = document.getElementById('plan-results');

const modal = document.getElementById('recipe-modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalTime = document.getElementById('modal-time');
const modalIngredients = document.getElementById('modal-ingredients');
const modalSteps = document.getElementById('modal-steps');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const dieta = document.getElementById('dieta').value;
  const tempo = document.getElementById('tempo').value;

  generateBtn.disabled = true;
  spinner.classList.remove('hidden');
  emptyState.classList.add('hidden');
  resultsContainer.classList.add('hidden');

  // Simula un piccolo delay per l'effetto "sta elaborando"
  setTimeout(() => {
    const plan = getRandomPlan(dieta, tempo);
    renderPlan(plan);
    generateBtn.disabled = false;
    spinner.classList.add('hidden');
  }, 1200);
});

function renderPlan(plan) {
  resultsContainer.innerHTML = '';

  plan.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-info">
        <h3>${recipe.day}</h3>
        <p>${recipe.title}</p>
      </div>
      <button class="view-recipe-btn">Vedi ricetta</button>
    `;
    card.querySelector('.view-recipe-btn').addEventListener('click', () => openModal(recipe));
    resultsContainer.appendChild(card);
  });

  resultsContainer.classList.remove('hidden');
}

function openModal(recipe) {
  modalTitle.textContent = recipe.title;
  modalTime.textContent = recipe.minutes;

  const ingredientsHtml = recipe.ingredients_text
    .split(',')
    .map(i => `• ${i.trim()}`)
    .join('<br>');
  modalIngredients.innerHTML = ingredientsHtml;
  modalSteps.innerHTML = recipe.steps_text.replace(/(\d+\.)/g, '<br>$1').trim();

  modal.classList.remove('hidden');
}

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
