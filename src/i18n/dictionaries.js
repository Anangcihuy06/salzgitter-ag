export const DEFAULT_LANG = 'de'
export const LANGS = ['de', 'en']

const CDN = '/assets'

export const IMG = {
  logo: `${CDN}/salcos.jpg`,
  hero: `${CDN}/hero-geschichte.jpg`,
  heroDefence: `${CDN}/hero-defence.jpg`,
  salcos: `${CDN}/salcos.jpg`,
  salcosProdukt: `${CDN}/salcos-produkt.jpg`,
  nachhaltigkeit: `${CDN}/nachhaltigkeit.jpg`,
  construction: `${CDN}/construction.jpg`,
  defence: `${CDN}/defence.jpg`,
  automotive: `${CDN}/automotive.jpg`,
  h1: `${CDN}/h1-2026.jpg`,
  hochofen: `${CDN}/hochofen.jpg`,
  zelestra: `${CDN}/zelestra.jpg`,
  stil: `${CDN}/stil.jpg`,
  presse: `${CDN}/jahrespressekonferenz.jpg`,
  board: {
    groebler: `${CDN}/groebler.jpg`,
    dietze: `${CDN}/dietze.jpg`,
    potrafki: `${CDN}/potrafki.jpg`,
  },
}

const de = {
  nav: {
    group: 'Konzern',
    business: 'Geschäfte',
    sustainability: 'Nachhaltigkeit',
    strategy: 'Strategie',
    investors: 'Investoren',
    press: 'Newsroom',
    contact: 'Kontakt',
    career: 'Karriere',
    menu: 'Menü',
    close: 'Schließen',
    submenus: {
      group: [
        { to: '/group', label: 'Konzern im Überblick', desc: 'Profil, Vorstand und Kennzahlen der Salzgitter AG' },
        { to: '/group#vorstand', label: 'Vorstand', desc: 'Die Führungsspitze des Salzgitter-Konzerns' },
        { to: '/group#zahlen', label: 'Konzernzahlen', desc: 'Kennzahlen zum 1. Halbjahr 2026' },
        { to: '/contact', label: 'Kontakt', desc: 'So erreichen Sie uns' },
      ],
      business: [
        { to: '/business#erzeugung', label: 'Stahlerzeugung', desc: 'Flach- und Grobblech aus Salzgitter, Peine und Ilsenburg' },
        { to: '/business#verarbeitung', label: 'Stahlverarbeitung', desc: 'Röhren und Rohre von Mannesmann' },
        { to: '/business#handel', label: 'Handel', desc: 'Salzgitter Mannesmann Handel – weltweit präsent' },
        { to: '/business#technologie', label: 'Technologie', desc: 'KHS – Maschinenbau für die Getränkeindustrie' },
      ],
      sustainability: [
        { to: '/sustainability', label: 'SALCOS®', desc: 'Unser Weg zu CO₂-armem Stahl' },
        { to: '/sustainability#klima', label: 'Umwelt, Klima & Energie', desc: 'Grünstrom, Circularität, Dekarbonisierung' },
        { to: '/sustainability#ratings', label: 'ESG & Ratings', desc: 'EcoVadis Silber, SDGs, Code of Conduct' },
      ],
      strategy: [
        { to: '/strategy', label: 'Strategie 2030', desc: 'Circularity als Leitprinzip des Konzerns' },
        { to: '/strategy#initiativen', label: 'Initiativen', desc: 'Construction, Defence und Automotive' },
        { to: '/strategy#produkte', label: 'Grünstahlprodukte', desc: 'SALCOS®-Produktfamilie' },
      ],
      investors: [
        { to: '/investors', label: 'Aktie', desc: 'MDAX, ISIN DE0006202005, Dividende' },
        { to: '/investors#ergebnisse', label: 'Ergebnisse H1 2026', desc: 'Außenumsatz, EBITDA, Rohstahl' },
        { to: '/investors#governance', label: 'Corporate Governance', desc: 'Vorstand, Aufsichtsrat, Erklärungen' },
      ],
      press: [
        { to: '/press', label: 'Pressemeldungen', desc: 'Aktuelle Meldungen des Konzerns' },
        { to: '/press#kontakt', label: 'Ansprechpartner', desc: 'Presse- und Medienkontakt' },
        { to: '/press#stil', label: 'STIL Magazin', desc: 'Das Onlinemagazin des Konzerns' },
      ],
    },
  },
  meta: {
    home: { title: 'Salzgitter AG – Stahl für eine Welt im Wandel', desc: 'Die Salzgitter AG ist einer der führenden europäischen Stahl- und Technologiekonzerne. Mit SALCOS® gestalten wir die Dekarbonisierung der Stahlindustrie.' },
    group: { title: 'Konzern – Salzgitter AG', desc: 'Konzern im Überblick: Vorstand, Konzernzahlen, Leitbild YOUNITED und die Geschichte der Salzgitter AG.' },
    business: { title: 'Geschäfte – Salzgitter AG', desc: 'Die Geschäftsstellen des Salzgitter-Konzerns: Stahlerzeugung, Stahlverarbeitung, Handel und Technologie.' },
    sustainability: { title: 'Nachhaltigkeit – Salzgitter AG', desc: 'SALCOS®, Grünstrom, Circularität und ESG: Der Weg der Salzgitter AG zu CO₂-armem Stahl.' },
    strategy: { title: 'Strategie 2030 – Salzgitter AG', desc: 'Die Strategie „Salzgitter AG 2030": Circularity, CO₂-arme Kreisläufe und die Initiativen Construction, Defence und Automotive.' },
    investors: { title: 'Investor Relations – Salzgitter AG', desc: 'Aktie, Ergebnisse H1 2026, Finanzkalender, Corporate Governance und Hauptversammlung.' },
    press: { title: 'Newsroom – Salzgitter AG', desc: 'Pressemeldungen, Termine, Ansprechpartner und das STIL Onlinemagazin der Salzgitter AG.' },
    contact: { title: 'Kontakt – Salzgitter AG', desc: 'Eisenhüttenstraße 99, 38239 Salzgitter. Telefon +49 5341 21-01.' },
    legal: { title: 'Impressum & Datenschutz – Salzgitter AG', desc: 'Impressum und rechtliche Hinweise der Salzgitter AG.' },
    notfound: { title: 'Seite nicht gefunden – Salzgitter AG', desc: 'Diese Seite existiert nicht.' },
  },
  common: { more: 'Mehr erfahren', back: 'Zurück zur Startseite', notfound: 'Die gewünschte Seite wurde nicht gefunden.' },
  footer: {
    claim: 'Stahl für eine Welt im Wandel. Der Salzgitter-Konzern verbindet Stahlproduktion, Verarbeitung, Handel und Technologie – und baut mit SALCOS® die CO₂-arme Stahlindustrie der Zukunft.',
    cols: {
      konzern: 'Konzern',
      service: 'Service',
      rechtliches: 'Rechtliches',
    },
    links: {
      vorstand: 'Vorstand',
      zahlen: 'Konzernzahlen',
      strategie: 'Strategie 2030',
      presse: 'Pressemeldungen',
      karriere: 'Karriere',
      investor: 'Investor Relations',
      termin: 'Terminkalender',
      medien: 'Medienservice',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      green: 'Diese Website wird mit grüner Energie betrieben',
    },
  },
  home: {
    heroTag: 'Salzgitter AG – Konzern',
    heroTitle: 'STAHL FÜR EINE WELT IM WANDEL',
    heroTitleAccent: 'GRÜN GESCHMIEDET.',
    heroSub: 'Die Salzgitter AG gehört zu den führenden europäischen Stahl- und Technologiekonzernen. Mit SALCOS® bauen wir die CO₂-arme Stahlproduktion der Zukunft – kreislauffähig, wettbewerbsfähig, europäisch.',
    stats: [
      { value: 25000, suffix: '', label: 'Mitarbeitende weltweit' },
      { value: 4.6, suffix: ' Mrd. €', label: 'Außenumsatz H1 2026', decimal: true },
      { value: 3, suffix: ' Mio. t', label: 'Rohstahl im 1. Halbjahr 2026' },
      { value: 2030, suffix: '', label: 'Strategie Salzgitter AG 2030', plain: true },
    ],
    strategy: {
      tag: 'Strategie Salzgitter AG 2030',
      title: 'Circularity als Leitprinzip',
      quote: 'Der Fokus der Strategie „Salzgitter AG 2030“ liegt auf Circularity, dem Prinzip der CO₂-armen, ressourcenschonenden geschlossenen Energie- und Materialkreisläufe.',
      author: 'Gunnar Groebler, Vorstandsvorsitzender',
      body: 'Die Strategie „Salzgitter AG 2030“ löst die bisherige Wachstumsstrategie „Salzgitter AG 2021“ ab. Die Innovationen und Effizienzprogramme der vergangenen Jahre entfalten ihr volles Potenzial: industrielle Wertschöpfung in geschlossenen Kreisläufen, elektrifizierte Prozesse und Grüntahl-Produkte für unsere Kunden.',
      link: 'Zur Strategie 2030',
    },
    salcos: {
      tag: 'Unser Programm',
      title: 'SALCOS® – Salzgitter Low CO2 Steelmaking',
      body: 'Mit SALCOS® stellen wir die Stahlproduktion schrittweise auf den direkten Reduktionsweg um: Wasserstoff statt Kohle, Elektrostahl statt Hochofen. Bereits heute versorgen uns Partnerschaften wie der größte hybride Solar-Plus-Speicher-Vertrag Deutschlands mit grünem Strom.',
      points: ['Wasserstoffbasierte Direktreduktion', 'Grünstrom aus Langzeitverträgen', 'Schrittweise Umstellung der Werke', 'Grünstahlprodukte für Industrie und Automotive'],
      link: 'Mehr zu SALCOS®',
    },
    divisions: {
      tag: 'Geschäftsstellen',
      title: 'Vier Stärken, ein Konzern',
      items: [
        { title: 'Stahlerzeugung', desc: 'Flach- und Grobblech sowie Profile – produziert in Salzgitter, Peine und Ilsenburg.', img: IMG.hero },
        { title: 'Stahlverarbeitung', desc: 'Präzisionsröhren und Großrohre der Marken Mannesmann – seit über 130 Jahren.', img: IMG.construction },
        { title: 'Handel', desc: 'Salzgitter Mannesmann Handel: über 200 Standorte weltweit, das größte Stahlhandelsnetz Europas.', img: IMG.salcos },
        { title: 'Technologie', desc: 'KHS GmbH: führende Fill-und-Pack-Maschinenbau für die globale Getränkeindustrie.', img: IMG.defence },
      ],
      link: 'Alle Geschäftsstellen',
    },
    news: {
      tag: 'Newsroom',
      title: 'Aktuelle Pressemeldungen',
      items: [
        { date: '27.08.26', tag: 'Salzgitter Flachstahl GmbH', title: 'TektoSal®r450: Neuer verschleißfester Sonderstahl als Bandblech verfügbar' },
        { date: '18.08.26', tag: 'Salzgitter AG', title: 'Geschäftsführung der HKM wird konsequent auf Transformation und Integration ausgerichtet' },
        { date: '11.08.26', tag: 'Investor Relations', title: 'Salzgitter-Konzern mit erfreulichem ersten Halbjahr 2026' },
        { date: '06.08.26', tag: 'Nachhaltigkeit', title: 'Silbermedaille für Salzgitter AG im EcoVadis-Nachhaltigkeitsrating' },
      ],
      link: 'Alle Pressemeldungen',
    },
    stabilitaet: {
      tag: 'Verlässlicher Partner',
      title: 'Ein Stück deutsche Industriegeschichte – und ihre Zukunft',
      body: 'Seit Jahrzehnten liefert der Salzgitter-Konzern Stahl für Automotive, Energie, Bauwesen und Industrie. Mit der Übernahme der HKM und dem letzten Abstich von Hochofen A in Duisburg beginnt ein neues Kapitel: die Transformation zur CO₂-armen Stahlproduktion – mit rund 25.000 Mitarbeitenden an unseren Standorten.',
      points: ['MDAX-notiert, ISIN DE0006202005', 'Vier Geschäftsstellen, ein integrierter Verbund', 'Bilanzsumme 10,9 Mrd. € (H1 2026)', 'Eigenkapitalquote über 40 Prozent'],
      link: 'Konzern im Überblick',
    },
  },
  group: {
    hero: {
      tag: 'Konzern',
      title: 'Salzgitter AG im Überblick',
      sub: 'Der Salzgitter-Konzern verbindet Stahlerzeugung, Stahlverarbeitung, Handel und Technologie in einem einzigartigen Verbund – getragen von rund 25.000 Mitarbeitenden und der Strategie „Salzgitter AG 2030“.',
    },
    vorstand: {
      tag: 'Vorstand',
      title: 'Die Führungsspitze',
      members: [
        { name: 'Gunnar Groebler', role: 'Vorstandsvorsitzender', bio: 'Geboren 1972, studierte Maschinenbau an der RWTH Aachen. Seit Mai 2021 Mitglied des Vorstandes, dessen Vorsitzender er seit Juli 2021 innehat. Zuvor führte er u. a. die STEAG GmbH.', img: IMG.board.groebler },
        { name: 'Birgit Dietze', role: 'Labor-direktorin (Personal)', bio: 'Geboren 1973, begann ihre Laufbahn als Industriekauffrau. Verantwortet den Konzernbereich Personal und ist Arbeitsdirektorin der Salzgitter AG.', img: IMG.board.dietze },
        { name: 'Birgit Potrafki', role: 'Finanzen', bio: 'Geboren 1971, studierte Wirtschaftswissenschaften an der Leibniz Universität Hannover. Verantwortet den Konzernbereich Finanzen.', img: IMG.board.potrafki },
      ],
      aufsichtsrat: 'Der Aufsichtsrat der Salzgitter AG begleitet und kontrolliert die Geschäftsführung. Den Vorsitz hat Herr Dr. Hans-Ulrich Engel.',
    },
    zahlen: {
      tag: 'Konzernzahlen',
      title: '1. Halbjahr 2026',
      rows: [
        { label: 'Außenumsatz', value: '4.588 Mio. €' },
        { label: 'EBITDA', value: '278 Mio. €' },
        { label: 'Rohstahlerzeugung', value: '3.034 kt' },
        { label: 'Bilanzsumme', value: '10.855 Mio. €' },
        { label: 'Eigenkapital', value: '4.542 Mio. €' },
        { label: 'Investitionen', value: '88 Mio. €' },
      ],
      note: 'Alle Werte für das 1. Halbjahr 2026, gerundet. Quelle: Zwischenbericht der Salzgitter AG.',
      link: 'Zum Investor Relations',
    },
    leitbild: {
      tag: 'Leitbild',
      title: 'YOUNITED – Gemeinsam. Wertschätzend. Zuverlässig.',
      body: 'Unser Leitbild YOUNITED beschreibt, wofür der Salzgitter-Konzern steht: Fairness im Miteinander, gelebte Vielfalt und Verlässlichkeit gegenüber Kunden, Partnern und Gesellschaft. Comprehensives Compliance-Management und der Code of Conduct sind dafür die Grundlage.',
    },
  },
  business: {
    hero: {
      tag: 'Geschäfte',
      title: 'Vier Geschäftsstellen, ein Verbund',
      sub: 'Vom Roheisen bis zur Verpackungsmaschine: Die Geschäftsstellen des Salzgitter-Konzerns decken die gesamte Wertschöpfungskette ab.',
    },
    areas: {
      erzeugung: {
        tag: 'Geschäftsbereich 1',
        title: 'Stahlerzeugung',
        body: 'Das Herzstück des Konzerns: Salzgitter Flachstahl produziert warmgewalzte und kaltgewalzte Flacherzeugnisse, verzinkte Bänder und Elektrobandstahl. Peiner Träger liefert Trägerprofile, Ilsenburger Grobblech schwere Grobbleche – und die HKM in Duisburg erweitert den Verbund auf der Roheisenseite.',
        facts: ['Rohstahl H1 2026: 3,0 Mio. t', 'Standorte: Salzgitter, Peine, Ilsenburg, Duisburg', 'Produkte: Band, Grobblech, Profile'],
      },
      verarbeitung: {
        tag: 'Geschäftsbereich 2',
        title: 'Stahlverarbeitung',
        body: 'Mannesmann ist seit über 130 Jahren Synonym für nahtlose Röhren: Mannesmann Precision Tubes liefert Präzisionsrohre für Automotive und Maschinenbau, Mannesmann Grossrohr Großrohre für die Energieinfrastruktur – vom Wasserstofftransport bis zur Offshore-Anwendung.',
        facts: ['Marken: Mannesmann Precision Tubes, Mannesmann Grossrohr', 'Anwendungen: Automotive, Energie, Maschinenbau', 'Standorte: u. a. Mülheim an der Ruhr, Düsseldorf'],
      },
      handel: {
        tag: 'Geschäftsbereich 3',
        title: 'Handel',
        body: 'Die Salzgitter Mannesmann Handel Gruppe ist eines der größten Stahlhandelsnetzwerke Europas: über 200 Standorte weltweit verbinden Produktion und Verarbeitung – mit Materialmanagement, Beratung und Logistik für Industriebetriebe jeder Größe.',
        facts: ['Über 200 Standorte weltweit', 'Außenumsatz H1 2026: 1,27 Mrd. €', 'Vom Lagergeschäft bis zur Projektbetreuung'],
      },
      technologie: {
        tag: 'Geschäftsbereich 4',
        title: 'Technologie',
        body: 'Die KHS GmbH aus Dortmund zählt weltweit zu den führenden Anbietern von Fill-und-Pack-Maschinen für die Getränke- und Food-Industrie: Abfüllanlagen, Etikettierer, PET-Recyclingtechnik – Innovationsführer in Nachhaltigkeit und Digitalisierung.',
        facts: ['KHS GmbH, Dortmund', 'Außenumsatz H1 2026: 876 Mio. €', 'Kunden: globale Getränke- und Foodkonzerne'],
      },
    },
  },
  sustainability: {
    hero: {
      tag: 'Nachhaltigkeit',
      title: 'Der Weg zu CO₂-armem Stahl',
      sub: 'Nachhaltigkeit ist bei Salzgitter keine Zusatzfunktion, sondern Kern der Unternehmensstrategie: SALCOS®, Kreislaufwirtschaft, Grünstrom und gelebte Verantwortung für Mitarbeitende und Gesellschaft.',
    },
    salcos: {
      title: 'SALCOS® – Salzgitter Low CO2 Steelmaking',
      body: 'SALCOS® ist der integrierte Transformationspfad der Salzgitter AG: schrittweise Umstellung von der Hochofenroute zur wasserstoffbasierten Direktreduktion mit Elektrostahl. Ziel ist eine nahezu CO₂-arme Stahlproduktion in Salzgitter – realistisch, machbar und mit klaren Zwischenschritten.',
    },
    klima: {
      tag: 'Umwelt, Klima & Energie',
      title: 'Grünstrom in Rekordgröße',
      body: 'Mit Zelestra vereinbarte die Salzgitter AG den größten hybriden Solar-Plus-Speicher-Vertrag Deutschlands – ein Meilenstein für die Versorgung der SALCOS®-Anlagen mit grünem Strom. Der letzte Abstich von Hochofen A bei der HKM in Duisburg nach 53 Produktionsjahren macht sichtbar: Die Transformation läuft.',
      facts: ['Größter hybrider Solar-Plus-Speicher-Vertrag Deutschlands', 'Letzter Abstich Hochofen A, HKM Duisburg (2026)', 'Zertifizierte Umweltmanagementsysteme an allen Hauptstandorten'],
    },
    ratings: {
      tag: 'ESG & Ratings',
      title: 'Unabhängig bestätigt',
      eco: 'EcoVadis-Nachhaltigkeitsrating: Silbermedaille – erneut im Bewertungsjahr 2026, wie bereits im Vorjahr.',
      items: [
        'EcoVadis Silbermedaille (2025 und 2026)',
        'Beitrag zu den Sustainable Development Goals (SDGs) der UN',
        'Code of Conduct, Lieferantenkodex und Bericht zum Lieferkettensorgfaltspflichtengesetz (LkSG)',
        'Diese Website wird mit grüner Energie betrieben – verifiziert durch die Green Web Foundation',
      ],
    },
  },
  strategy: {
    hero: {
      tag: 'Strategie Salzgitter AG 2030',
      title: 'Circularity. Dekarbonisierung. Wertschöpfung.',
      sub: 'Die Strategie „Salzgitter AG 2030“ löst die bisherige Wachstumsstrategie „Salzgitter AG 2021“ ab – und richtet den Konzern konsequent auf CO₂-arme, ressourcenschonende Kreislaufwirtschaft aus.',
    },
    pillars: {
      tag: 'Leitprinzip',
      title: 'Drei Säulen der Strategie 2030',
      items: [
        { title: 'Circularity', desc: 'Geschlossene Energie- und Materialkreisläufe reduzieren Ressourcenverbrauch und Emissionen – vom Schrottrecycling bis zur Abwärmnutzung.' },
        { title: 'Dekarbonisierung', desc: 'SALCOS® als industrieller Transformationspfad: Wasserstoff-Direktreduktion, Elektrostahl und Grünstrom in industrieller Größenordnung.' },
        { title: 'Wertschöpfung', desc: 'Aktives Portfolio-Management und Innovationen der vergangenen Jahre entfalten ihr volles Ertragspotenzial im Verbund.' },
      ],
    },
    initiativen: {
      tag: 'Initiativen',
      title: 'Märkte mit Blick nach vorn',
      items: [
        { title: 'Initiative Construction', desc: 'Stahllösungen für nachhaltiges Bauen: Baustähle mit reduziertem CO₂-Fußabdruck für Architektur und Infrastruktur.', img: IMG.construction },
        { title: 'Initiative Defence', desc: 'Sichere Lieferketten für die Verteidigungsindustrie: Panzerstahl und Spezialwerkstoffe aus europäischer Produktion.', img: IMG.defence },
        { title: 'Initiative Automotive', desc: 'Leichte, hochfeste Stähle für die Mobilitätswende – von der Karosserie bis zur E-Mobilität.', img: IMG.automotive },
      ],
    },
    produkte: {
      tag: 'Grünstahlprodukte',
      title: 'Die SALCOS®-Produktfamilie',
      body: 'Unter der Marke SALCOS® bietet die Salzgitter Flachstahl GmbH CO₂-arme Stahlprodukte an – mit transparenter Deklaration des CO₂-Fußabdrucks je Tonne. Damit können Kunden ihre Lieferketten industriell dekarbonisieren.',
      link: 'Nachhaltigkeit im Konzern',
    },
  },
  investors: {
    hero: {
      tag: 'Investor Relations',
      title: 'Kapitalmarkt-Informationen',
      sub: 'Aktie, Ergebnisse, Termine und Governance: Alle Informationen für Aktionärinnen, Aktionäre und Analysten der Salzgitter AG.',
    },
    aktie: {
      tag: 'Die Aktie',
      title: 'MDAX – ISIN DE0006202005',
      body: 'Die Aktie der Salzgitter AG ist im MDAX der Deutschen Börse notiert. Zusätzlich werden American Depositary Receipts (ADRs) in den USA gehandelt.',
      facts: [
        { k: 'Börsensegment', v: 'MDAX' },
        { k: 'ISIN', v: 'DE0006202005' },
        { k: 'WKN', v: '620200' },
        { k: 'Börsenkürzel', v: 'SZG' },
        { k: 'ADR', v: 'SZGPY / 792204206' },
      ],
    },
    ergebnisse: {
      tag: 'Ergebnisse H1 2026',
      title: 'Erfreuliches erstes Halbjahr 2026',
      body: 'Der Salzgitter-Konzern meldet ein erfreuliches erstes Halbjahr 2026: Außenumsatz von 4,6 Mrd. €, ein EBITDA von 278 Mio. € und eine solide Eigenkapitalbasis – trotz herausfordernder Marktbedingungen im europäischen Stahlmarkt.',
      rows: [
        { label: 'Außenumsatz', value: '4.588 Mio. €' },
        { label: 'EBITDA', value: '278 Mio. €' },
        { label: 'EBIT', value: '459 Mio. €' },
        { label: 'Rohstahlerzeugung', value: '3.034 kt' },
        { label: 'Investitionen', value: '88 Mio. €' },
        { label: 'Finanzmittel', value: '1.203 Mio. €' },
      ],
      downloads: 'Berichte und Präsentationen: Geschäftsbericht 2025, Zwischenbericht H1 2026 sowie Analystenkonferenz-Aufzeichnungen stehen im Downloadbereich bereit.',
    },
    governance: {
      tag: 'Corporate Governance',
      title: 'Verlässliche Unternehmensführung',
      body: 'Die Salzgitter AG steht für transparente, gesetzestreue Unternehmensführung: Vorstand und Aufsichtsrat arbeiten eng zusammen, Entsprechenserklärung, Satzung und Berichte des Aufsichtsrates sind vollständig veröffentlicht.',
      items: ['Vorstand und Aufsichtsrat', 'Entsprechenserklärung nach § 161 AktG', 'Satzung der Salzgitter AG', 'Stimmrechtsmitteilungen und meldepflichtige Finanzgeschäfte', 'Umtauschanleihe 2025'],
    },
    kalender: {
      tag: 'Finanzkalender',
      title: 'Termine',
      items: [
        { date: '11.08.2026', label: 'Analystenkonferenz H1 2026 (Aufzeichnung verfügbar)' },
        { date: '23.03.2026', label: 'Analystenkonferenz Geschäftsbericht 2025' },
        { date: 'laufend', label: 'Hauptversammlung – Unterlagen und Abstimmungsergebnisse im Downloadbereich' },
      ],
    },
  },
  press: {
    hero: {
      tag: 'Newsroom',
      title: 'Presse & Medien',
      sub: 'Aktuelle Pressemeldungen, Termine und Kontaktmöglichkeiten für Journalistinnen und Journalisten.',
    },
    meldungen: {
      tag: 'Pressemeldungen',
      title: 'Aktuelle Meldungen',
      items: [
        { date: '27.08.26', cat: 'Salzgitter Flachstahl GmbH', title: 'TektoSal®r450: Für die Kunden der Salzgitter Flachstahl steht ein neuer Werkstoff als Bandblech zur Verfügung', img: IMG.hochofen },
        { date: '18.08.26', cat: 'Salzgitter AG', title: 'Geschäftsführung der HKM wird konsequent auf Transformation und Integration in den Salzgitter-Konzern ausgerichtet', img: IMG.heroDefence },
        { date: '11.08.26', cat: 'Investor Relations', title: 'Salzgitter-Konzern mit erfreulichem ersten Halbjahr 2026', img: IMG.h1 },
        { date: '07.08.26', cat: 'Mannesmann', title: 'Constanze Lang ist neue kaufmännische Geschäftsführerin bei Mannesmann Line Pipe und Mannesmann Grossrohr', img: IMG.automotive },
        { date: '06.08.26', cat: 'Nachhaltigkeit', title: 'Silbermedaille für Salzgitter AG im EcoVadis-Nachhaltigkeitsrating', img: IMG.nachhaltigkeit },
        { date: '03.08.26', cat: 'Kapitalmarkt', title: 'Salzgitter AG verkauft Klöckner DESMA Elastomertechnik GmbH an NAME & MAWI Partners', img: IMG.stil },
        { date: '31.07.26', cat: 'SALCOS®', title: 'Bundeswirtschaftsministerin Reiche zu Gast bei der Salzgitter AG', img: IMG.salcos },
      ],
    },
    kontakt: {
      tag: 'Ansprechpartner',
      title: 'Pressekontakt',
      body: 'Für Medienanfragen erreichen Sie uns per E-Mail an impressum@salzgitter-ag.com oder telefonisch unter +49 5341 21-01. Der Medienservice stellt Bildmaterial, Downloads und den Terminkalender bereit.',
      email: 'impressum@salzgitter-ag.com',
      phone: '+49 5341 21-01',
    },
    stil: {
      tag: 'STIL',
      title: 'Das Konzernmagazin',
      body: 'STIL – das Onlinemagazin des Salzgitter-Konzerns: Geschichten über Menschen, Projekte und Perspektiven aus Salzgitter und den Standorten weltweit.',
      link: 'STIL entdecken',
    },
  },
  contact: {
    hero: {
      tag: 'Kontakt',
      title: 'So erreichen Sie uns',
      sub: 'Die Salzgitter AG ist headquartered in Salzgitter, Niedersachsen – rund 25 Kilometer südlich von Braunschweig.',
    },
    info: {
      address: 'Salzgitter AG\nEisenhüttenstraße 99\n38239 Salzgitter\nGermany',
      phone: '+49 5341 21-01',
      email: 'impressum@salzgitter-ag.com',
      departments: 'Fachabteilungen: Für produkt- und bereichsspezifische Anfragen vermittelt Ihnen unsere Zentrale den richtigen Ansprechpartner. Produktanfragen zu Flachstahl, Röhren und Handel nehmen unsere Vertriebsgesellschaften direkt entgegen.',
      visit: 'Anfahrt: Der Standort Salzgitter ist über die A39 erreichbar, die nächstgelegenen Bahnhöfe sind Salzgitter-Ringelheim und Salzgitter-Bad.',
    },
  },
  legal: {
    hero: { tag: 'Rechtliches', title: 'Impressum & Datenschutz', sub: 'Rechtliche Hinweise zur Website der Salzgitter AG.' },
    impressum: {
      title: 'Impressum',
      body: 'Salzgitter AG\nEisenhüttenstraße 99\n38239 Salzgitter\nGermany\n\nTelefon: +49 5341 21-01\nTelefax: +49 5341 21-2727\nE-Mail: impressum@salzgitter-ag.com\n\nVertreten durch den Vorstand: Gunnar Groebler (Vorsitzender), Birgit Dietze, Birgit Potrafki.\n\nUmsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: DE 116876139.\n\nKonzept und Realisierung dieser Demo: unabhängiges Redesign-Konzept, nicht Teil der offiziellen Salzgitter-Präsenz.',
    },
    datenschutz: {
      title: 'Datenschutz',
      body: 'Diese Website erhebt keine personenbezogenen Daten, setzt keine Cookies und bindet keine externen Tracking-Dienste ein. Technisch notwendig ist allein die Speicherung der gewählten Sprache im lokalen Speicher Ihres Browsers.\n\nDiese Seite ist ein nicht-offizieller Demonstrationsprototyp. Für die Datenschutzinformation der offiziellen Website siehe salzgitter-ag.com.',
    },
    agb: null,
  },
  notfound: { title: '404', body: 'Die gewünschte Seite wurde nicht gefunden.' },
}

const en = {
  nav: {
    group: 'Group',
    business: 'Business Units',
    sustainability: 'Sustainability',
    strategy: 'Strategy',
    investors: 'Investors',
    press: 'Newsroom',
    contact: 'Contact',
    career: 'Careers',
    menu: 'Menu',
    close: 'Close',
    submenus: {
      group: [
        { to: '/group', label: 'Group Overview', desc: 'Profile, board and key figures of Salzgitter AG' },
        { to: '/group#vorstand', label: 'Executive Board', desc: 'The leadership of the Salzgitter Group' },
        { to: '/group#zahlen', label: 'Key Figures', desc: 'Half-year results H1 2026' },
        { to: '/contact', label: 'Contact', desc: 'How to reach us' },
      ],
      business: [
        { to: '/business#erzeugung', label: 'Steel Production', desc: 'Flat and heavy plate from Salzgitter, Peine and Ilsenburg' },
        { to: '/business#verarbeitung', label: 'Steel Processing', desc: 'Mannesmann tubes and pipes' },
        { to: '/business#handel', label: 'Trading', desc: 'Salzgitter Mannesmann Handel – present worldwide' },
        { to: '/business#technologie', label: 'Technology', desc: 'KHS – machinery for the beverage industry' },
      ],
      sustainability: [
        { to: '/sustainability', label: 'SALCOS®', desc: 'Our path to low-CO2 steel' },
        { to: '/sustainability#klima', label: 'Environment & Energy', desc: 'Green power, circularity, decarbonization' },
        { to: '/sustainability#ratings', label: 'ESG & Ratings', desc: 'EcoVadis Silver, SDGs, Code of Conduct' },
      ],
      strategy: [
        { to: '/strategy', label: 'Strategy 2030', desc: 'Circularity as the group guiding principle' },
        { to: '/strategy#initiativen', label: 'Initiatives', desc: 'Construction, Defence and Automotive' },
        { to: '/strategy#produkte', label: 'Green Steel Products', desc: 'The SALCOS® product family' },
      ],
      investors: [
        { to: '/investors', label: 'Share', desc: 'MDAX, ISIN DE0006202005, dividend' },
        { to: '/investors#ergebnisse', label: 'H1 2026 Results', desc: 'External revenue, EBITDA, crude steel' },
        { to: '/investors#governance', label: 'Corporate Governance', desc: 'Board, Supervisory Board, declarations' },
      ],
      press: [
        { to: '/press', label: 'Press Releases', desc: 'The group’s latest news' },
        { to: '/press#kontakt', label: 'Contacts', desc: 'Press and media contact' },
        { to: '/press#stil', label: 'STIL Magazine', desc: 'The group’s online magazine' },
      ],
    },
  },
  meta: {
    home: { title: 'Salzgitter AG – Steel for a World in Transition', desc: 'Salzgitter AG is one of Europe’s leading steel and technology groups. With SALCOS® we are shaping the decarbonization of the steel industry.' },
    group: { title: 'Group – Salzgitter AG', desc: 'Group overview: Executive Board, key figures, the YOUNITED corporate principles and the history of Salzgitter AG.' },
    business: { title: 'Business Units – Salzgitter AG', desc: 'The business units of the Salzgitter Group: steel production, processing, trading and technology.' },
    sustainability: { title: 'Sustainability – Salzgitter AG', desc: 'SALCOS®, green power, circularity and ESG: Salzgitter AG’s path to low-CO2 steel.' },
    strategy: { title: 'Strategy 2030 – Salzgitter AG', desc: 'The “Salzgitter AG 2030” strategy: circularity, low-CO2 cycles and the Construction, Defence and Automotive initiatives.' },
    investors: { title: 'Investor Relations – Salzgitter AG', desc: 'Share, H1 2026 results, financial calendar, corporate governance and general meeting.' },
    press: { title: 'Newsroom – Salzgitter AG', desc: 'Press releases, dates, contacts and the STIL online magazine of Salzgitter AG.' },
    contact: { title: 'Contact – Salzgitter AG', desc: 'Eisenhüttenstraße 99, 38239 Salzgitter, Germany. Phone +49 5341 21-01.' },
    legal: { title: 'Legal Notice & Privacy – Salzgitter AG', desc: 'Legal notice and legal information for the Salzgitter AG website.' },
    notfound: { title: 'Page not found – Salzgitter AG', desc: 'This page does not exist.' },
  },
  common: { more: 'Learn more', back: 'Back to homepage', notfound: 'The page you requested was not found.' },
  footer: {
    claim: 'Steel for a world in transition. The Salzgitter Group combines steel production, processing, trading and technology – and is building the low-CO2 steel industry of the future with SALCOS®.',
    cols: { konzern: 'Group', service: 'Service', rechtliches: 'Legal' },
    links: {
      vorstand: 'Executive Board',
      zahlen: 'Key Figures',
      strategie: 'Strategy 2030',
      presse: 'Press Releases',
      karriere: 'Careers',
      investor: 'Investor Relations',
      termin: 'Financial Calendar',
      medien: 'Media Service',
      impressum: 'Legal Notice',
      datenschutz: 'Privacy',
      green: 'This website is powered by green energy',
    },
  },
  home: {
    heroTag: 'Salzgitter AG – Group',
    heroTitle: 'STEEL FOR A WORLD IN TRANSITION',
    heroTitleAccent: 'FORGED GREEN.',
    heroSub: 'Salzgitter AG is one of Europe’s leading steel and technology groups. With SALCOS® we are building the low-CO2 steel production of the future – circular, competitive and European.',
    stats: [
      { value: 25000, suffix: '', label: 'Employees worldwide' },
      { value: 4.6, suffix: ' bn €', label: 'External revenue H1 2026', decimal: true },
      { value: 3, suffix: ' m t', label: 'Crude steel in H1 2026' },
      { value: 2030, suffix: '', label: 'Strategy Salzgitter AG 2030', plain: true },
    ],
    strategy: {
      tag: 'Strategy Salzgitter AG 2030',
      title: 'Circularity as the guiding principle',
      quote: 'The focus of the “Salzgitter AG 2030” strategy lies on circularity – the principle of low-CO2, resource-efficient closed energy and material cycles.',
      author: 'Gunnar Groebler, Chief Executive Officer',
      body: 'The “Salzgitter AG 2030” strategy succeeds the previous growth strategy “Salzgitter AG 2021”. The innovations and efficiency programs of recent years unfold their full potential: industrial value creation in closed cycles, electrified processes and green steel products for our customers.',
      link: 'To Strategy 2030',
    },
    salcos: {
      tag: 'Our Program',
      title: 'SALCOS® – Salzgitter Low CO2 Steelmaking',
      body: 'With SALCOS® we are converting steel production step by step to the direct reduction route: hydrogen instead of coal, electric steel instead of blast furnace. Partnerships such as Germany’s largest hybrid solar-plus-storage contract already supply us with green power.',
      points: ['Hydrogen-based direct reduction', 'Green power from long-term contracts', 'Step-by-step conversion of our plants', 'Green steel products for industry and automotive'],
      link: 'More about SALCOS®',
    },
    divisions: {
      tag: 'Business Units',
      title: 'Four strengths, one group',
      items: [
        { title: 'Steel Production', desc: 'Flat and heavy plate as well as sections – produced in Salzgitter, Peine and Ilsenburg.', img: IMG.hero },
        { title: 'Steel Processing', desc: 'Precision tubes and large-diameter pipes of the Mannesmann brands – for over 130 years.', img: IMG.construction },
        { title: 'Trading', desc: 'Salzgitter Mannesmann Handel: more than 200 locations worldwide, Europe’s largest steel trading network.', img: IMG.salcos },
        { title: 'Technology', desc: 'KHS GmbH: leading fill-and-pack machinery for the global beverage industry.', img: IMG.defence },
      ],
      link: 'All business units',
    },
    news: {
      tag: 'Newsroom',
      title: 'Latest press releases',
      items: [
        { date: '27 Aug 26', tag: 'Salzgitter Flachstahl GmbH', title: 'TektoSal®r450: new wear-resistant special steel available as strip steel' },
        { date: '18 Aug 26', tag: 'Salzgitter AG', title: 'HKM management consistently aligned with transformation and integration' },
        { date: '11 Aug 26', tag: 'Investor Relations', title: 'Salzgitter Group reports a pleasing first half of 2026' },
        { date: '06 Aug 26', tag: 'Sustainability', title: 'Silver medal for Salzgitter AG in the EcoVadis sustainability rating' },
      ],
      link: 'All press releases',
    },
    stabilitaet: {
      tag: 'Reliable Partner',
      title: 'A piece of German industrial history – and its future',
      body: 'For decades the Salzgitter Group has supplied steel to automotive, energy, construction and industry. With the acquisition of HKM and the final tapping of blast furnace A in Duisburg, a new chapter begins: the transformation to low-CO2 steel production – with around 25,000 employees at our locations.',
      points: ['Listed in the MDAX, ISIN DE0006202005', 'Four business units, one integrated network', 'Balance sheet total €10.9 bn (H1 2026)', 'Equity ratio above 40 percent'],
      link: 'Group overview',
    },
  },
  group: {
    hero: {
      tag: 'Group',
      title: 'Salzgitter AG at a glance',
      sub: 'The Salzgitter Group combines steel production, steel processing, trading and technology in a unique network – carried by around 25,000 employees and the “Salzgitter AG 2030” strategy.',
    },
    vorstand: {
      tag: 'Executive Board',
      title: 'The leadership team',
      members: [
        { name: 'Gunnar Groebler', role: 'Chief Executive Officer', bio: 'Born 1972, studied mechanical engineering at RWTH Aachen. Member of the Executive Board since May 2021 and its Chairman since July 2021. Previously CEO of STEAG GmbH, among others.', img: IMG.board.groebler },
        { name: 'Birgit Dietze', role: 'Labor Director (HR)', bio: 'Born 1973, began her career as an industrial clerk. Responsible for the Group Human Resources division and Labor Director of Salzgitter AG.', img: IMG.board.dietze },
        { name: 'Birgit Potrafki', role: 'Chief Financial Officer', bio: 'Born 1971, studied economics at Leibniz Universität Hannover. Responsible for the Group Finance division.', img: IMG.board.potrafki },
      ],
      aufsichtsrat: 'The Supervisory Board of Salzgitter AG advises and monitors the Executive Board. Its Chairman is Dr. Hans-Ulrich Engel.',
    },
    zahlen: {
      tag: 'Key Figures',
      title: 'First half of 2026',
      rows: [
        { label: 'External revenue', value: '€4,588 m' },
        { label: 'EBITDA', value: '€278 m' },
        { label: 'Crude steel production', value: '3,034 kt' },
        { label: 'Balance sheet total', value: '€10,855 m' },
        { label: 'Equity', value: '€4,542 m' },
        { label: 'Capital expenditure', value: '€88 m' },
      ],
      note: 'All figures for the first half of 2026, rounded. Source: interim report of Salzgitter AG.',
      link: 'To Investor Relations',
    },
    leitbild: {
      tag: 'Corporate Principles',
      title: 'YOUNITED – Together. Appreciative. Reliable.',
      body: 'Our YOUNITED corporate principles describe what the Salzgitter Group stands for: fairness in cooperation, lived diversity and reliability towards customers, partners and society. Comprehensive compliance management and the Code of Conduct form the foundation.',
    },
  },
  business: {
    hero: {
      tag: 'Business Units',
      title: 'Four business units, one network',
      sub: 'From hot metal to packaging machinery: the business units of the Salzgitter Group cover the entire value chain.',
    },
    areas: {
      erzeugung: {
        tag: 'Business Unit 1',
        title: 'Steel Production',
        body: 'The heart of the group: Salzgitter Flachstahl produces hot-rolled and cold-rolled flat products, galvanized strip and electrical steel. Peiner Träger supplies sections, Ilsenburger Grobblech heavy plate – and HKM in Duisburg extends the network on the hot-metal side.',
        facts: ['Crude steel H1 2026: 3.0 m t', 'Locations: Salzgitter, Peine, Ilsenburg, Duisburg', 'Products: strip, heavy plate, sections'],
      },
      verarbeitung: {
        tag: 'Business Unit 2',
        title: 'Steel Processing',
        body: 'Mannesmann has been synonymous with seamless tubes for over 130 years: Mannesmann Precision Tubes supplies precision tubes for automotive and mechanical engineering, Mannesmann Grossrohr large-diameter pipes for energy infrastructure – from hydrogen transport to offshore applications.',
        facts: ['Brands: Mannesmann Precision Tubes, Mannesmann Grossrohr', 'Applications: automotive, energy, engineering', 'Locations: incl. Mülheim an der Ruhr, Düsseldorf'],
      },
      handel: {
        tag: 'Business Unit 3',
        title: 'Trading',
        body: 'The Salzgitter Mannesmann Handel Group is one of Europe’s largest steel trading networks: more than 200 locations worldwide connect production and processing – with material management, consulting and logistics for industrial companies of every size.',
        facts: ['More than 200 locations worldwide', 'External revenue H1 2026: €1.27 bn', 'From warehousing to project support'],
      },
      technologie: {
        tag: 'Business Unit 4',
        title: 'Technology',
        body: 'KHS GmbH of Dortmund is one of the world’s leading suppliers of fill-and-pack machinery for the beverage and food industry: filling systems, labelers, PET recycling technology – an innovation leader in sustainability and digitalization.',
        facts: ['KHS GmbH, Dortmund', 'External revenue H1 2026: €876 m', 'Customers: global beverage and food groups'],
      },
    },
  },
  sustainability: {
    hero: {
      tag: 'Sustainability',
      title: 'The path to low-CO2 steel',
      sub: 'Sustainability is not an add-on at Salzgitter, it is the core of corporate strategy: SALCOS®, circular economy, green power and lived responsibility for employees and society.',
    },
    salcos: {
      title: 'SALCOS® – Salzgitter Low CO2 Steelmaking',
      body: 'SALCOS® is the integrated transformation path of Salzgitter AG: step-by-step conversion from the blast furnace route to hydrogen-based direct reduction with electric steel. The goal is an almost CO2-neutral steel production in Salzgitter – realistic, feasible and with clear milestones.',
    },
    klima: {
      tag: 'Environment, Climate & Energy',
      title: 'Green power on a record scale',
      body: 'With Zelestra, Salzgitter AG concluded Germany’s largest hybrid solar-plus-storage contract – a milestone for supplying the SALCOS® plants with green power. The final tapping of blast furnace A at HKM in Duisburg after 53 years of production makes it visible: the transformation is underway.',
      facts: ['Germany’s largest hybrid solar-plus-storage contract', 'Final tapping of blast furnace A, HKM Duisburg (2026)', 'Certified environmental management systems at all main sites'],
    },
    ratings: {
      tag: 'ESG & Ratings',
      title: 'Independently confirmed',
      eco: 'EcoVadis sustainability rating: silver medal – again in the 2026 assessment year, as in the previous year.',
      items: [
        'EcoVadis silver medal (2025 and 2026)',
        'Contribution to the UN Sustainable Development Goals (SDGs)',
        'Code of Conduct, supplier code and report under the German Supply Chain Act (LkSG)',
        'This website is powered by green energy – verified by the Green Web Foundation',
      ],
    },
  },
  strategy: {
    hero: {
      tag: 'Strategy Salzgitter AG 2030',
      title: 'Circularity. Decarbonization. Value creation.',
      sub: 'The “Salzgitter AG 2030” strategy succeeds the previous growth strategy “Salzgitter AG 2021” – and consistently aligns the group with low-CO2, resource-efficient circular economy.',
    },
    pillars: {
      tag: 'Guiding principle',
      title: 'Three pillars of Strategy 2030',
      items: [
        { title: 'Circularity', desc: 'Closed energy and material cycles reduce resource consumption and emissions – from scrap recycling to waste heat recovery.' },
        { title: 'Decarbonization', desc: 'SALCOS® as the industrial transformation path: hydrogen direct reduction, electric steel and green power on an industrial scale.' },
        { title: 'Value Creation', desc: 'Active portfolio management and the innovations of recent years unfold their full earnings potential within the network.' },
      ],
    },
    initiativen: {
      tag: 'Initiatives',
      title: 'Markets with a view ahead',
      items: [
        { title: 'Construction Initiative', desc: 'Steel solutions for sustainable building: construction steels with a reduced CO2 footprint for architecture and infrastructure.', img: IMG.construction },
        { title: 'Defence Initiative', desc: 'Secure supply chains for the defence industry: armour steel and special materials from European production.', img: IMG.defence },
        { title: 'Automotive Initiative', desc: 'Lightweight, high-strength steels for the mobility transition – from body-in-white to e-mobility.', img: IMG.automotive },
      ],
    },
    produkte: {
      tag: 'Green Steel Products',
      title: 'The SALCOS® product family',
      body: 'Under the SALCOS® brand, Salzgitter Flachstahl GmbH offers low-CO2 steel products – with transparent declaration of the CO2 footprint per tonne. This enables customers to decarbonize their supply chains on an industrial scale.',
      link: 'Sustainability in the Group',
    },
  },
  investors: {
    hero: {
      tag: 'Investor Relations',
      title: 'Capital market information',
      sub: 'Share, results, dates and governance: all information for shareholders and analysts of Salzgitter AG.',
    },
    aktie: {
      tag: 'The Share',
      title: 'MDAX – ISIN DE0006202005',
      body: 'Salzgitter AG shares are listed in the MDAX of Deutsche Börse. In addition, American Depositary Receipts (ADRs) are traded in the USA.',
      facts: [
        { k: 'Listing', v: 'MDAX' },
        { k: 'ISIN', v: 'DE0006202005' },
        { k: 'Securities code', v: '620200' },
        { k: 'Ticker', v: 'SZG' },
        { k: 'ADR', v: 'SZGPY / 792204206' },
      ],
    },
    ergebnisse: {
      tag: 'H1 2026 Results',
      title: 'A pleasing first half of 2026',
      body: 'The Salzgitter Group reports a pleasing first half of 2026: external revenue of €4.6 bn, EBITDA of €278 m and a solid equity base – despite challenging conditions in the European steel market.',
      rows: [
        { label: 'External revenue', value: '€4,588 m' },
        { label: 'EBITDA', value: '€278 m' },
        { label: 'EBIT', value: '€459 m' },
        { label: 'Crude steel production', value: '3,034 kt' },
        { label: 'Capital expenditure', value: '€88 m' },
        { label: 'Cash funds', value: '€1,203 m' },
      ],
      downloads: 'Reports and presentations: Annual Report 2025, Half-Year Report H1 2026 as well as analyst conference recordings are available in the download area.',
    },
    governance: {
      tag: 'Corporate Governance',
      title: 'Reliable corporate management',
      body: 'Salzgitter AG stands for transparent, law-abiding corporate management: Executive Board and Supervisory Board work closely together; the declaration of compliance, articles of association and Supervisory Board reports are published in full.',
      items: ['Executive Board and Supervisory Board', 'Declaration of compliance under § 161 AktG', 'Articles of association of Salzgitter AG', 'Voting rights notifications and reportable financial instruments', 'Exchangeable bond 2025'],
    },
    kalender: {
      tag: 'Financial Calendar',
      title: 'Dates',
      items: [
        { date: '11 Aug 2026', label: 'Analyst conference H1 2026 (recording available)' },
        { date: '23 Mar 2026', label: 'Analyst conference Annual Report 2025' },
        { date: 'ongoing', label: 'General meeting – documents and voting results in the download area' },
      ],
    },
  },
  press: {
    hero: {
      tag: 'Newsroom',
      title: 'Press & Media',
      sub: 'Current press releases, dates and contact options for journalists.',
    },
    meldungen: {
      tag: 'Press Releases',
      title: 'Latest releases',
      items: [
        { date: '27 Aug 26', cat: 'Salzgitter Flachstahl GmbH', title: 'TektoSal®r450: a new wear-resistant special steel is now available as strip steel', img: IMG.hochofen },
        { date: '18 Aug 26', cat: 'Salzgitter AG', title: 'HKM management consistently aligned with transformation and integration into the Salzgitter Group', img: IMG.heroDefence },
        { date: '11 Aug 26', cat: 'Investor Relations', title: 'Salzgitter Group reports a pleasing first half of 2026', img: IMG.h1 },
        { date: '07 Aug 26', cat: 'Mannesmann', title: 'Constanze Lang becomes commercial Managing Director of Mannesmann Line Pipe and Mannesmann Grossrohr', img: IMG.automotive },
        { date: '06 Aug 26', cat: 'Sustainability', title: 'Silver medal for Salzgitter AG in the EcoVadis sustainability rating', img: IMG.nachhaltigkeit },
        { date: '03 Aug 26', cat: 'Capital Market', title: 'Salzgitter AG sells Klöckner DESMA Elastomertechnik GmbH to NAME & MAWI Partners', img: IMG.stil },
        { date: '31 Jul 26', cat: 'SALCOS®', title: 'Federal Minister for Economic Affairs Reiche visits Salzgitter AG', img: IMG.salcos },
      ],
    },
    kontakt: {
      tag: 'Contacts',
      title: 'Press contact',
      body: 'For media inquiries, please email impressum@salzgitter-ag.com or call +49 5341 21-01. Our media service provides images, downloads and the event calendar.',
      email: 'impressum@salzgitter-ag.com',
      phone: '+49 5341 21-01',
    },
    stil: {
      tag: 'STIL',
      title: 'The group magazine',
      body: 'STIL – the online magazine of the Salzgitter Group: stories about people, projects and perspectives from Salzgitter and locations worldwide.',
      link: 'Discover STIL',
    },
  },
  contact: {
    hero: {
      tag: 'Contact',
      title: 'How to reach us',
      sub: 'Salzgitter AG is headquartered in Salzgitter, Lower Saxony – about 25 kilometres south of Braunschweig.',
    },
    info: {
      address: 'Salzgitter AG\nEisenhüttenstraße 99\n38239 Salzgitter\nGermany',
      phone: '+49 5341 21-01',
      email: 'impressum@salzgitter-ag.com',
      departments: 'Departments: For product- and division-specific inquiries, our switchboard will connect you with the right contact. Product inquiries regarding flat steel, tubes and trading are handled directly by our sales companies.',
      visit: 'Directions: The Salzgitter site is accessible via the A39; the nearest railway stations are Salzgitter-Ringelheim and Salzgitter-Bad.',
    },
  },
  legal: {
    hero: { tag: 'Legal', title: 'Legal Notice & Privacy', sub: 'Legal information for the Salzgitter AG website.' },
    impressum: {
      title: 'Legal Notice',
      body: 'Salzgitter AG\nEisenhüttenstraße 99\n38239 Salzgitter\nGermany\n\nPhone: +49 5341 21-01\nFax: +49 5341 21-2727\nEmail: impressum@salzgitter-ag.com\n\nRepresented by the Executive Board: Gunnar Groebler (Chairman), Birgit Dietze, Birgit Potrafki.\n\nVAT identification number pursuant to § 27 a UStG: DE 116876139.\n\nConcept and implementation of this demo: independent redesign concept, not part of the official Salzgitter presence.',
    },
    datenschutz: {
      title: 'Privacy',
      body: 'This website does not collect personal data, does not use cookies and does not include external tracking services. Technically necessary is only the storage of the selected language in your browser’s local storage.\n\nThis page is an unofficial demonstration prototype. For the privacy information of the official website, see salzgitter-ag.com.',
    },
    agb: null,
  },
  notfound: { title: '404', body: 'The page you requested was not found.' },
}

const DICTS = { de, en }

export function getDict(lang) {
  return DICTS[lang] || DICTS[DEFAULT_LANG]
}

export function t(lang, path) {
  let cur = getDict(lang)
  for (const k of path.split('.')) {
    if (cur == null) break
    cur = cur[k]
  }
  return cur ?? path
}
