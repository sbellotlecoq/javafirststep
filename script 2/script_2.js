let n = prompt('Donnes moi un chiffre je vais te calculer la factorielle :');

function factorielle(n) {
    if(n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorielle(n - 1);
    }
  }

const resultat = factorielle(n)
console.log(resultat);

let statement = `la factotielle de ${n} est ${resultat}`;
console.log(statement);