const height = prompt("Entrez la hauteur de la pyramide: "); // Demande à l'utilisateur la hauteur de la pyramide
const pyramidHeight = parseInt(height); // Convertit la réponse en un nombre entier

for(let i = 1; i <= pyramidHeight; i++) {
  let row = '';

  for(let j = 1; j <= (2 * pyramidHeight - 1); j++) {
    if(j >= pyramidHeight + 1 - i && j <= pyramidHeight - 1 + i) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}

