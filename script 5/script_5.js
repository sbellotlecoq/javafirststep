const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


let allBooksRented = true;

for (let i = 0; i < books.length; i++) {
  if (books[i].rented === 0) {
    allBooksRented = false;
    break;
  }
}

if (allBooksRented) {
  console.log("Tous les livres ont été empruntés au moins une fois.");
}

const leastRentedBook = books.sort((a, b) => a.rented - b.rented)[0];
console.log(leastRentedBook.title);

const moreRentedBook = books.sort((a, b) => a.rented - b.rented)[11];
console.log(moreRentedBook.title);

const bookWithId873495 = books.find(book => book.id === 873495);
console.log(bookWithId873495);


const idToDelete = 133712;
const newBooks = books.filter(book => book.id !== idToDelete);
console.log(newBooks);

newBooks.sort(function(a, b) {
  var titleA = a.title.toUpperCase(); // ignore la casse
  var titleB = b.title.toUpperCase(); // ignore la casse
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  // Les titres sont égaux
  return 0;
});

console.log(newBooks);