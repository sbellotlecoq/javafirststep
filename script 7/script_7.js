function translateARNtoProtein(ARN) {
  // Définition du tableau des codons et des acides aminés correspondants
  const codons = {
    UCU: 'Sérine', UCC: 'Sérine', UCA: 'Sérine', UCG: 'Sérine',
    AGU: 'Sérine', AGC: 'Sérine', CCC: 'Proline', CCU: 'Proline',
    CCA: 'Proline', CCG: 'Proline', UUA: 'Leucine', UUG: 'Leucine',
    UUU: 'Phénylalanine', UUC: 'Phénylalanine', CGU: 'Arginine',
    CGC: 'Arginine', CGA: 'Arginine', CGG: 'Arginine',
    AGA: 'Arginine', AGG: 'Arginine', UAU: 'Tyrosine',
    UAC: 'Tyrosine'
  };
  
  let protein = '';
  
  // Séparation de la séquence d'ARN en codons de trois lettres
  for (let i = 0; i < ARN.length; i += 3) {
    const codon = ARN.slice(i, i + 3);
    // Vérification que le codon existe dans le tableau des codons
    if (codons.hasOwnProperty(codon)) {
      // Ajout de l'acide aminé correspondant à la séquence de protéine
      protein += codons[codon] + ' ';
    } 
  }
  
  return protein.trim();
}

// Et hop dans le terminal avec un
const ARN = prompt("Rentre ton ARN à traduire");
const protein = translateARNtoProtein(ARN);
console.log(protein); 








