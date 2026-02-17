import { BusinessInfo, MenuCategory } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "ΤΥΛΙΞΕ ΤΟ",
  address: "Πλ. Βικτωρίας 6, Αθήνα 104 34",
  phone: "21 0881 9888",
  rating: 4.7,
  reviewCount: 1163,
  hours: "Δευτέρα - Κυριακή: 12:00 μ.μ. – 12:00 π.μ.",
  mapsLink: "https://goo.gl/maps/placeholder" 
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'starters',
    title: 'ΟΡΕΚΤΙΚΑ',
    items: [
      { name: 'Πατάτες τηγανητές', price: '3,70€', image: '/patates.png', description: 'Παράγγειλε τηγανητές πατάτες και προσπάθησε να βρεις έναν λόγο, που οι τηγανητές πατάτες είναι συνοδευτικό και όχι κυρίως.' },
      { name: 'Πατάτες τηγανητές με σως & τυρί', price: '4,50€', image: '/patates-sos-tyri.png' },
      { name: 'Πατάτες τηγανητές με σως, τυρί & μπέικον', price: '4,80€', image: '/patates-special.png' },
      { name: 'Φέτα', price: '4,50€', image: '/feta.png', description: 'Με ντομάτα, λάδι & ρίγανη' },
      { name: 'Φέτα ψητή', price: '4,00€', image: '/feta-psiti.png', description: 'Με πιπεριά, ντομάτα, λάδι & ρίγανη' },
      { name: 'Φέτα με μέλι & σουσάμι', price: '5,30€', image: '/feta-meli.png', description: 'Σε φύλλο κρούστας' },
      { name: 'Χαλούμι στα κάρβουνα', price: '5,00€', image: '/haloumi.png', description: 'Μερίδα' },
      { name: 'Πίτα παραδοσιακή', price: '1,00€', image: '/pita-apli.png', description: 'Παραδοσιακή πίτα για κάθε γεύμα' },
      { name: 'Πίτα καλαμποκιού', price: '1,00€', image: '/pita-kalampoki.png' },
      { name: 'Πιτάκι', price: '0,50€', image: '/pitaki.png' },
    ]
  },
  {
    id: 'sauces',
    title: 'ΑΛΟΙΦΕΣ',
    items: [
      { name: 'Σως Τύλιξέ το', price: '0,80€', image: '/sos-tylixeto.png' },
      { name: 'Σως φέτας', price: '0,80€', image: '/sos-fetas.png' },
      { name: 'Σως γιαουρτιού', price: '0,80€', image: '/sos-giaourti.png' },
      { name: 'Σως cocktail', price: '0,80€', image: '/sos-cocktail.png' },
      { name: 'Σως μουστάρδας', price: '0,80€', image: '/sos-moustardas.png' },
      { name: 'Τζατζίκι', price: '0,80€', image: '/tzatziki.png' },
      { name: 'Τυροκαυτερή', price: '0,80€', image: '/tyrokayteri.png' },
    ]
  },
  {
    id: 'salads',
    title: 'ΣΑΛΑΤΕΣ',
    items: [
      { name: 'Τύλιξέ το', price: '7,50€', image: '/salata-tylixeto.png' },
      { name: 'Ρόκα & παρμεζάνα', price: '7,50€', image: '/salata-roka.png' },
      { name: 'Χωριάτικη', price: '7,50€', image: '/salata-horiatiki.png' },
      { name: 'Ντάκος', price: '7,50€', image: '/salata-ntakos.png' },
      { name: 'Caesar`s', price: '7,50€', image: '/salata-caesars.png' },
      { name: 'Αγγουροντομάτα', price: '5,00€', image: '/salata-aggourontomata.png' },
      { name: 'Λάχανο & καρότο', price: '5,00€', image: '/salata-laxano.png' },
      { name: 'Μαρούλι', price: '5,00€', image: '/salata-marouli.png' },
    ]
  },
  {
    id: 'skewers',
    title: 'ΤΕΜΑΧΙΑ',
    items: [
      { name: 'Καλαμάκι χοιρινό', price: '2,30€', image: '/temaxio-kalamaki-xoirino.png' },
      { name: 'Καλαμάκι κοτόπουλο στήθος', price: '2,30€', image: '/temaxio-kalamaki-kotopoulo.png' },
      { name: 'Καλαμάκι προβατίνας', price: '3,50€', image: '/temaxio-provatina.png' },
      { name: 'Κεμπάπ πολίτικο', price: '2,30€', image: '/temaxio-kebap.png' },
      { name: 'Κοτομπέικον', price: '2,50€', image: '/temaxio-kotopeikon.png' },
      { name: 'Λουκάνικο χωριάτικο', price: '2,30€', image: '/temaxio-loukaniko.png' },
      { name: 'Φρυγαδέλι', price: '3,50€', image: '/temaxio-frygadeli.png' },
      { name: 'Χαλούμι', price: '2,70€', image: '/temaxio-haloumi.png' },
    ]
  },
  {
    id: 'wraps',
    title: 'ΤΥΛΙΧΤΑ',
    items: [
      { name: 'Γύρος χοιρινός σε πίτα', price: '4,00€', image: '/pita-gyros-xoirino.png', isPopular: true },
      { name: 'Γύρος κοτόπουλο σε πίτα', price: '4,00€', image: '/pita-gyros-kotopoulo.png', isPopular: true },
      { name: 'Γύρος ανάμεικτος σε πίτα', price: '4,00€', image: '/pita-gyros-anameiktos.png' },
      { name: 'Καλαμάκι χοιρινό σε πίτα', price: '4,00€', image: '/pita-kalamaki-xoirino.png' },
      { name: 'Καλαμάκι κοτόπουλο στήθος σε πίτα', price: '4,00€', image: '/pita-kalamaki-kotopoulo.png' },
      { name: 'Κεμπάπ πολίτικο σε πίτα', price: '4,00€', image: '/pita-kebap.png' },
      { name: 'Κεμπάπ πολίτικο γιαουρτλού σε πίτα', price: '4,00€', image: '/pita-kebap-giaourtlou.png' },
      { name: 'Μπριζολάκι χοιρινό σε πίτα', price: '4,70€', image: '/pita-mprizolaki.png' },
      { name: 'Μπιφτέκι μοσχαρίσιο σε πίτα', price: '4,20€', image: '/pita-mpifteki.png' },
      { name: 'Κοντοσούβλι χοιρινό σε πίτα', price: '4,70€', image: '/pita-kontosouvli.png' },
      { name: 'Χαλούμι σε πίτα', price: '4,00€', image: '/pita-haloumi.png' },
      { name: 'Φαλάφελ σε πίτα', price: '4,00€', image: '/pita-falafel.png' },
      { name: 'Οικολογικό σε πίτα', price: '3,00€', image: '/pita-oikologiko.png' },
    ]
  },
  {
    id: 'sandwiches',
    title: 'ΣΑΝΤΟΥΙΤΣ & ΤΟΡΤΙΓΙΕΣ',
    items: [
      { name: 'Γύρος χοιρινός σε σάντουιτς', price: '6,40€', image: '/sandwich-gyros-xoirino.png' },
      { name: 'Γύρος κοτόπουλο σε σάντουιτς', price: '6,40€', image: '/sandwich-gyros-kotopoulo.png' },
      { name: 'Γύρος ανάμεικτος σε σάντουιτς', price: '6,40€', image: '/sandwich-anameiktos.png', description: 'Σάντουιτς γύρος χοιρινός & γύρος κοτόπουλο' },
      { name: 'Καλαμάκι χοιρινό σε σάντουιτς', price: '6,40€', image: '/sandwich-kalamaki-xoirino.png' },
      { name: 'Καλαμάκι κοτόπουλο στήθος σε σάντουιτς', price: '6,40€', image: '/sandwich-kalamaki-kotopoulo.png' },
      { name: 'Λουκάνικο χωριάτικο σε σάντουιτς', price: '6,40€', image: '/sandwich-loukaniko.png' },
      { name: 'Μπιφτέκι μοσχαρίσιο σε σάντουιτς', price: '6,40€', image: '/sandwich-mpifteki.png' },
      { name: 'Τορτίγια με γύρο χοιρινό', price: '6,00€', image: '/tortilla-gyros-xoirino.png' },
      { name: 'Τορτίγια με γύρο κοτόπουλο', price: '6,00€', image: '/tortilla-gyros-kotopoulo.png' },
      { name: 'Τορτίγια με ανάμεικτο γύρο', price: '6,00€', image: '/tortilla-gyros-anameiktos.png' },
      { name: 'Τορτίγια με καλαμάκι χοιρινό', price: '6,00€', image: '/tortilla-kalamaki-xoirino.png' },
      { name: 'Τορτίγια με καλαμάκι κοτόπουλο', price: '6,00€', image: '/tortilla-kalamaki-kotopoulo.png' },
    ]
  },
  {
    id: 'skeptastes',
    title: 'ΣΚΕΠΑΣΤΕΣ',
    items: [
      { name: 'Σκεπαστή γύρος χοιρινός', price: '9,00€', image: '/skepasti-xoirino.png', description: 'Συνοδεύεται από πατάτες τηγανητές' },
      { name: 'Σκεπαστή γύρος κοτόπουλο', price: '9,00€', image: '/skepasti-kotopoulo.png', description: 'Συνοδεύεται από πατάτες τηγανητές' },
      { name: 'Σκεπαστή γύρος ανάμεικτος', price: '9,00€', image: '/skepasti-anameiktos.png', description: 'Συνοδεύεται από πατάτες τηγανητές' },
    ]
  },
  {
    id: 'portions',
    title: 'ΜΕΡΙΔΕΣ',
    items: [
      { name: 'Γύρος χοιρινός μερίδα', price: '10,00€', image: '/merida-gyros-xoirino.png', description: 'Συνοδεύεται από πατάτες τηγανητές, ντομάτα, κρεμμύδι, τζατζίκι & 2 πίτακια' },
      { name: 'Γύρος κοτόπουλο μερίδα', price: '10,00€', image: '/merida-gyros-kotopoulo.png', description: 'Συνοδεύεται από πατάτες τηγανητές, ντομάτα, σως, μαρούλι & 2 πιτάκια' },
      { name: 'Γύρος ανάμεικτος μερίδα', price: '10,00€', image: '/merida-gyros-anameiktos.png', description: 'Συνοδεύεται από πατάτες τηγανητές, ντομάτα, κρεμμύδι, τζατζίκι & 2 πίτακια' },
      { name: 'Καλαμάκι χοιρινό μερίδα', price: '10,00€', image: '/merida-kalamaki-xoirino.png', description: '3 Τεμάχια των 100gr. Συνοδεύεται από πατάτες, ντομάτα, κρεμμύδι, τζατζίκι & 2 πίτακια' },
      { name: 'Καλαμάκι κοτόπουλο στήθος μερίδα', price: '10,00€', image: '/merida-kalamaki-kotopoulo.png', description: '3 Τεμάχια των 100gr. Συνοδεύεται από πατάτες τηγανητές, ντομάτα, σως, μαρούλι & 2 πιτάκια' },
      { name: 'Κεμπάπ  γιαουρτλού μερίδα', price: '11,00€', image: '/merida-kebap-giaourtlou.png', description: '3 Τεμάχια. Συνοδεύεται από γιαούρτι, κόκκινη σάλτσα, κρεμμύδι, mix μπαχαρικών & 1 πίτα' },
      { name: 'Κοτομπέικον μερίδα', price: '10,00€', image: '/merida-kotopeikon.png', description: '3 Τεμάχια. Συνοδεύεται από πατάτες τηγανητές, ντομάτα, σως Τύλιξέ το, μαρούλι & 2 πιτάκια' },
      { name: 'Μπιφτέκι μοσχαρίσιο μερίδα', price: '10,00€', image: '/merida-mpifteki.png', description: '2 Τεμάχια. Συνοδεύεται από πατάτες τηγανητές, ντομάτα, κρεμμύδι, τζατζίκι & 2 πίτακια' },
      { name: 'Μπριζολάκια χοιρινά μερίδα', price: '10,00€', image: '/merida-mprizolakia.png', description: '2 Τεμάχια. Συνοδεύεται από πατάτες τηγανητές, ντομάτα, κρεμμύδι, τζατζίκι & 2 πίτακια' },
      { name: 'Κοντοσούβλι χοιρινό μερίδα', price: '10,00€', image: '/merida-kontosouvli.png', description: 'Συνοδεύεται από πατάτες, ντομάτα, κρεμμύδι, τζατζίκι & 2 πίτακια', isPopular: true },
      { name: 'Ρεβυθοκεφτέδες μερίδα', price: '9,50€', image: '/merida-revithokeftedes.png', description: '8 Τεμάχια. Συνοδεύεται από πατάτες, ντομάτα, μαρούλι, κόκκινη σάλτσα & 2 πιτάκια' },
      { name: 'Kεμπάπ πολίτικο μερίδα', price: '9,50€', image: '/merida-kebap-politiko.png', description: '3 Τεμάχια. Από μοσχαρίσιο & αρνίσιο κιμά. Συνοδεύεται από πατάτες τηγανητές, ντομάτα, τζατζίκι, κρεμμύδι & 2 πιτάκια' },
    ]
  },
  {
    id: 'combos',
    title: 'ΠΟΙΚΙΛΙΕΣ',
    items: [
      { name: 'Mix grill 2 ατόμων', price: '25,00€', image: '/mix-grill-2.png', description: 'Ποικιλία κρεατικών με πατάτες, τζατζίκι, σως & 2 πίτες' },
      { name: 'Mix grill 4 ατόμων', price: '40,00€', image: '/mix-grill-4.png', description: 'Ποικιλία κρεατικών με πατάτες, τζατζίκι, σως & 4 πίτες' },
    ]
  },
  {
    id: 'drinks',
    title: 'ΠΟΤΑ',
    items: [
      { name: 'Coca-Cola 330ml', price: '2,00€', image: '/cola-330.png' },
      { name: 'Amstel 330ml', price: '2,50€', image: '/amstel-330.png' },
      { name: 'Κρασί λευκό 500ml', price: '4,50€', image: '/krasi-500.png' },
      { name: 'Ούζο Μίνι 200ml', price: '7,50€', image: '/ouzo-200.png' },
      { name: 'Νερό 500ml', price: '0,50€', image: '/nero-500.png' },
    ]
  },
];