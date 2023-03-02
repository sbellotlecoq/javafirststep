const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Ce code utilise la méthode filter() pour créer un nouveau tableau entrepreneurs70s qui contient uniquement les objets du tableau d'origine dont
// l'année de naissance est comprise entre 1970 et 1979. La méthode filter() prend une fonction de rappel en argument qui retourne true si l'élément 
// doit être inclus dans le nouveau tableau, ou false sinon.

// Le résultat sera un tableau contenant les objets pour les entrepreneurs nés dans les années 70, qui seront affichés dans la console.

const entrepreneurs70s = entrepreneurs.filter(entrepreneur => {
  return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
});
console.log(entrepreneurs70s);

// Ce code utilise la méthode map() pour créer un nouveau tableau entrepreneurNames en combinant le prénom et le nom de chaque entrepreneur dans une seule chaîne de caractère
//  à l'aide d'un template literal. 
// Le résultat est un tableau contenant les noms complets de chaque entrepreneur, qui seront affichés dans la console.

const entrepreneurNames = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
console.log(entrepreneurNames);

// Ce code utilise la méthode map() pour créer un nouveau tableau entrepreneurAges en calculant l'âge de chaque entrepreneur en 2023. 
// La méthode map() prend une fonction de rappel en argument qui retourne un nouvel objet pour chaque élément du tableau d'origine. Chaque objet nouvellement créé contient le nom complet de l'entrepreneur et son âge calculé. 
// La variable currentYear est utilisée pour obtenir l'année actuelle, que nous soustrayons de l'année de naissance de l'entrepreneur pour obtenir son âge. Nous ajoutons ensuite 1 à l'âge pour tenir compte du fait que l'âge est calculé en 2023. Le résultat est un tableau d'objets contenant le nom et l'âge de chaque entrepreneur en 2023, qui seront affichés dans la console.

const currentYear = 2023; // d'abord l'année actuelle
const entrepreneurAges = entrepreneurs.map(entrepreneur => ({
  name: `${entrepreneur.first} ${entrepreneur.last}`,
  age: currentYear - entrepreneur.year
}));
console.log(entrepreneurAges);


// Ce code utilise la méthode sort() pour trier le tableau entrepreneurs. La méthode sort() prend une fonction de comparaison en argument qui définit l'ordre de tri. 
// Dans cet exemple, la fonction de comparaison compare les noms de famille des entrepreneurs en utilisant l'opérateur < et > et retourne -1, 1 ou 0 en fonction de l'ordre alphabétique. 
// Le résultat est un nouveau tableau trié par ordre alphabétique des noms de famille des entrepreneurs, qui seront affichés dans la console.

const sortedEntrepreneurs = entrepreneurs.sort((a, b) => {
  if (a.last < b.last) {
    return -1;
  }
  if (a.last > b.last) {
    return 1;
  }
  return 0;
});

console.log(sortedEntrepreneurs);






