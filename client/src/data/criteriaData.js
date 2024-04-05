
export const scholarshipTypes = [
    { id: 'social', label: 'Stypendium socjalne' },
    { id: 'rector', label: 'Stypendium rektorskie' },
    { id: 'disabled', label: 'Stypendium dla niepełnosprawnych' },
];

export const criteria = [
    {
        id: 1,
        typeId: ['social','disabled'],

    title: "Instrukcja Nr 1",
        description: "Szczegółowy wykaz dokumentacji dotyczącej przyznania stypendium socjalnego i stypendium dla osób niepełnosprawnych.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/06/Instrukcja-Nr-1-szczegolowy-wykaz-dokumentacji-dotyczacej-przyznania-stypendium-socjalnego-i-stypendium-dla-osob-niepelnosprawnych.pdf"
    },
    {
        id: 2,
        typeId: ['social'],
        title: "Instrukcja Nr 2",
        description: "Kompletowanie wniosku o przyznanie stypendium socjalnego.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/06/Instrukcja-nr-2-kompletowanie-wniosku-o-przyznanie-stypendium-socjalnego.pdf"
    },
    {
        id: 3,
        typeId: ['social'],
        title: "Załącznik Nr 1",
        description: "Wniosek o przyznanie stypendium socjalnego.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/ZALACZNIK-NR-1-%E2%80%93-Wniosek-o-przyznanie-stypendium-socjalnego-%E2%80%93-NALEZY-WYPELNIC-ELEKTRONICZNIE-DRUKOWAC-DWUSTRONNIE.pdf"
    },
    {
        id: 4,
        typeId: ['disabled'],
        title: "Załącznik Nr 2",
        description: "Wniosek o przyznanie stypendium dla osób niepełnosprawnych ",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/ZALACZNIK-NR-2-Wniosek-o-przyznanie-stypendium-dla-osob-niepelnosprawnych-NALEZY-WYPELNIC-ELEKTRONICZNIE-DRUKOWAC-DWUSTRONNIE.pdf"
    },
    {
        id: 5,
        typeId: ['rector'],
        title: "Załącznik Nr 3",
        description: "Wniosek o przyznanie stypendium Rektora ",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/ZALACZNIK-NR-2-Wniosek-o-przyznanie-stypendium-dla-osob-niepelnosprawnych-NALEZY-WYPELNIC-ELEKTRONICZNIE-DRUKOWAC-DWUSTRONNIE.pdf"
    },
    {
        id: 6,
        typeId: ['social'],
        title: "Załącznik Nr 5",
        description: "Wniosek o ponowne przeliczenie dochodu.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/12/Zalacznik-Nr-5-Wniosek-o-ponowne-przeliczenie-dochodu.pdf"
    },
    {
        id: 7,
        typeId: ['social'],
        title: "Wzór Nr 1",
        description: "Zaświadczenie z Urzędu Skarbowego o wysokości dochodów podlegających opodatkowaniu podatkiem dochodowym.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-1-zaswiadczenie-z-Urzedu-Skarbowego-o-wysokosci-dochodow-podlegajacych-opodatkowaniu-podatkiem-dochodowym.pdf"
    },
    {
        id: 8,
        typeId: ['social'],
        title: "Wzór Nr 2",
        description: "Oświadczenie o dochodzie niepodlegającym opodatkowaniu – drukować dwustronnie.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/09/WZOR-NR-2-%E2%80%93-oswiadczenie-o-dochodzie-niepodlegajacym-opodatkowaniu-drukowac-dwustronnie.pdf"
    },
    {
        id: 9,
        typeId: ['social'],
        title: "Wzór Nr 3",
        description: "Oświadczenie o dochodzie z działalności gospodarczej w formie ryczałtu lub karty podatkowej.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-3-%E2%80%93-oswiadczenie-o-dochodzie-z-dzialalnosci-gospodarczej-w-formie-ryczaltu-lub-karty-podatkowej.pdf"
    },
    {
        id: 10,
        typeId: ['social','disabled', 'rector'],
        title: "Wzór Nr 4",
        description: "Numer rachunku bankowego – wypełnić elektronicznie.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-4-%E2%80%93-numer-rachunku-bankowego-%E2%80%93-WYPELNIC-ELEKTRONICZNIE.pdf"
    },
    {
        id: 11,
        typeId: ['social','disabled','rector'],
        title: "Wzór Nr 5",
        description: "Oświadczenia studenta I, II, III – drukować dwustronnie.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/10/WZOR-NR-5-%E2%80%93-oswiadczenia-studenta-I-II-III-%E2%80%93-drukowac-dwustronnie.pdf"
    },
    {
        id: 12,
        typeId: ['social'],
        title: "Wzór Nr 6",
        description: "Oświadczenie o wysokości składek na ubezpieczenie zdrowotne.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-6-%E2%80%93-oswiadczenie-o-wysokosci-skladek-na-ubezpieczenie-zdrowotne.pdf"
    },
    {
        id: 13,
        typeId: ['rector'],
        title: "Wzór Nr 7",
        description: "Zaświadczenie potwierdzające działalność w organizacji naukowej/projekcie naukowym",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/06/WZOR-Nr-7-Zaswiadczenie_dzialalnosc_do_zal_nr_3_wzor_nr_7_druk-elektroniczny.pdf"
    },
    {
        id: 14,
        typeId: ['social'],
        title: "Wzór Nr 8",
        description: "Oświadczenie o samodzielności finansowej.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-8-%E2%80%93-oswiadczenie-o-samodzielnosci-finansowej.pdf"
    },
    {
        id: 15,
        typeId: ['social'],
        title: "Wzór Nr 9",
        description: "Oświadczenie o liczbie przepracowanych miesięcy, w których uzyskiwany był dochód.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-9-%E2%80%93-oswiadczenie-o-liczbie-przepracowanych-miesiecy-w-ktorych-uzyskiwany-byl-dochod.pdf"
    },
    {
        id: 16,
        typeId: ['social'],
        title: "Wzór Nr 10",
        description: "Oświadczenie studenta ubiegającego się o kwotę zwiększenia stypendium socjalnego z tytułu zakwaterowania.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-Nr-10-%E2%80%93-oswiadczenie-studenta-ubiegajacego-sie-o-kwote-zwiekszenia-stypendium-socjalnego-z-tytulu-zakwaterowania-1.pdf"
    },
    {
        id: 17,
        typeId: ['rector'],
        title: "Wzór Nr 11",
        description: "Opis osiągnięć uzyskanych w poprzednim roku akademickim ",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/06/WZOR-Nr-11-oswiadczenie-dot.-osiagniec-do_zal_nr_3_wzor_nr_11_druk-elektroniczny-1.pdf"
    },
    {
        id: 18,
        typeId: ['social'],
        title: "Wzór Nr 12",
        description: "Oświadczenie dotyczące umowy najmu.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-12-%E2%80%93-oswiadczenie-dotyczace-umowy-najmu.pdf"
    },
    {
        id: 19,
        typeId: ['social'],
        title: "Wzór Nr 13",
        description: "Oświadczenie dotyczące osób ubezpieczonych w KRUS.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-13-%E2%80%93-oswiadczenie-dotyczace-osob-ubezpieczonych-w-KRUS.pdf"
    },
    {
        id: 20,
        typeId: ['social'],
        title: "Wzór Nr 14",
        description: "Oświadczenie dotyczące obowiązku szkolnego dzieci.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-14-%E2%80%93-oswiadczenie-dotyczace-obowiazku-szkolnego-dzieci.pdf"
    },
    {
        id: 21,
        typeId: ['social','disabled'],
        title: "Wzór Nr 15",
        description: "Oświadczenie RODO – podpisują wszyscy pełnoletni członkowie rodziny studenta wykazani we wniosku.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-15-%E2%80%93-oswiadczenie-RODO-%E2%80%93-podpisuja-wszyscy-pelnoletni-czlonkowie-rodziny-wykazanie-we-wniosku.pdf"
    },
    {
        id: 22,
        typeId: ['social'],
        title: "Wzór Nr 16",
        description: "Oświadczenie do celów stypendialnych.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-16-%E2%80%93-oswiadczenie-do-celow-stypendialnych.pdf"
    },
    {
        id: 23,
        typeId: ['social'],
        title: "Wzór Nr 17",
        description: "Oświadczenie o braku zatrudnienia.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-17-%E2%80%93-oswiadczenie-o-braku-zatrudnienia.pdf"
    },
    {
        id: 24,
        typeId: ['social'],
        title: "Wzór Nr 18",
        description: "Oświadczenie dotyczące kontynuowania nauki przez rodzeństwo dzieci studenta.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-18-%E2%80%93-oswiadczenie-dotyczace-kontynuowania-nauki-przez-rodzenstwo-dzieci-studenta.pdf"
    },
    {
        id: 25,
        typeId: ['social'],
        title: "Wzór Nr 19",
        description: "Oświadczenie ogólne dotyczące ustalania prawa do świadczeń stypendialnych.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-18-%E2%80%93-oswiadczenie-dotyczace-kontynuowania-nauki-przez-rodzenstwo-dzieci-studenta.pdf"
    },
    {
        id: 26,
        typeId: ['social'],
        title: "Wzór Nr 20",
        description: "Oświadczenie dotyczące źródeł utrzymania rodziny.",
        pdfLink: "https://anstar.edu.pl/wp-content/uploads/2023/05/WZOR-NR-20-%E2%80%93-oswiadczenie-dotyczace-zrodel-utrzymania-rodziny.pdf"
    },
];
