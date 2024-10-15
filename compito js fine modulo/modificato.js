  function GuidoResearch() {
    // Richiamo i valori dall'id html
    const jobTitle = document.getElementById('jobTitle').value;
    const jobLocation = document.getElementById('jobLocation').value;

    // Esegue la funzione searchJobs con i valori raccolti dal file modificato.js
    const searchResults = searchJobs(jobTitle, jobLocation);

    // Selezione dell'elenco al quale far visualizzare i valori in html, richiamato dall'id.
    const resultsList = document.getElementById('resultsList');

    // Pulisce i valori passati.
    resultsList.innerHTML = '';

    // Previsione in caso non ci siano risultati sulla ricerca effettuata, in quanto altrimenti rimarrebbe blank. Controlla il numero dei risultati oottenuti dalla query, qualora sia uguale (confronto) a 0, restituisce il messaggio.
    if (searchResults.count === 0) { 
      resultsList.innerHTML = '<li>Nessun risultato trovato</li>';
    } else {
    // Ciclo for per printare i risultati man mano e incrementarne il valoore i.
      for (let i = 0; i < searchResults.result.length; i++) {
        const job = searchResults.result[i];
        const listItem = document.createElement('li'); // Per non perdere il tag html 'li' tra un valoroe e l'altro.
        listItem.textContent = `${job.title} - ${job.location}`; // Organizzazione per separare e visualizzare i risultati printati correttamente. Es : Operaio Edile - Brindisi.
        resultsList.appendChild(listItem); // Print effettivo
      }
    }
  }
//Algoritmo principale
function searchJobs(jobTitle, jobLocation) {
  // Converte le stringhe in minuscolo per poter effettuare una ricerca che non distingua maiuscole o minuscole ed evitare eventuali bug.
  jobTitle = jobTitle.toLowerCase();
  jobLocation = jobLocation.toLowerCase();

  // Normale array per printare i risultati
  let result = [];

  // Loop con ciclo for nell'array jobs
  for (let i = 0; i < jobs.length; i++) {
    // Riconversione in minuscolo per ricerca case-insensitive.
    let title = jobs[i].title.toLowerCase();
    let location = jobs[i].location.toLowerCase();

    // Verifica se il titolo del lavoro contiene il jobTitle e la location contiene jobLocation
    if (title.includes(jobTitle) && location.includes(jobLocation)) {
      result.push(jobs[i]); // Aggiunge il job tramite push all'array dei risultati 'result'
    }
  }

  // Restituisce i risultati trovati e il numero totale di corrispondenze (result.length)
  return {
    result: result,
    count: result.length,
  };
}

const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
    {
      title: "Operaio Edile",
      location: "IT, RM, Roma",
    },
  ]
  