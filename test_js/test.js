// console.log("coucou depuis la console");

// //commentaire sur une ligne
// console.log("Ceci n'est pas un commentaire")
// /* commentaire écrit sur 
// plusieurs lignes*/

// let data1 = "variable en let définie dans le bloc principal";

// { //début du sous-bloc

//   data1 = "variable en let modifiée dans le sous-bloc";
//   var data2 = "variable en var définie dans le sous-bloc";
//   let data3 = "variable en let définie dans le sous-bloc";

// } //fin du sous-bloc

// let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];

// let THPSessionNum2 = {
//     numOfMouss: 80,
//     cities: ["Paris", "Lyon", "Montpellier"],
//     successRate: 0.80,
//     sessionMoto: "keep pushing to the top"
//     };

// weekNum = 9; //teste avec plusieurs valeurs
// switch (weekNum) {
// case 1:
// console.log("Semaine 1 - Introduction au Code");
// break;
// case 2:
// console.log("Semaine 2 - Découverte de Ruby");
// break;
// case 3:
// console.log("Semaine 3 - Programmation Orientée Objet");
// break;
// case 4:
// console.log("Semaine 4 - Initiation à Rails");
// break;
// case 5:
// console.log("Semaine 5 - Rails intermédiaire");
// break;
// case 6:
// console.log("Semaine 6 - Rails avancé");
// break;
// case 7:
// console.log("Semaine 7 - HTML / CSS et intro au JS");
// break;
// case 8:
// console.log("Semaine 8 - JavaScript de front");
// break;
// default:
// console.log("Cette entrée n'est pas reconnue");
// break;
// }

// let number = 1; //fais aussi le test avec un chiffre non nul
// if (number) {
//   console.log("ce message ne s'affiche que si number est non nul ");
// }

// let string = "papa"; //fais aussi le test avec un mot non vide
// if (string) {
//   console.log("ce message ne s'affiche que si string est non vide");
// }

// let myVariable = "variaaaable" // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
// if (myVariable) {
//   console.log("ce message ne s'affiche que si myVariable contient une valeur ");
// }

// for(let count = 0; count <=5; count++){
//     console.log(`on va compter jusqu'à 5 : ${count}`);
//   }

// let answer = "";
// while(answer !== "oui") {
//   console.log("alors ?")
//   answer = prompt("Tu kiffes THP ?");
// } 
// console.log("haaa, tu nous fais plaisir !")

// let word = "";
// let letter;

// while (true) {
//     letter = prompt('Tape UNE lettre stp :');

//     if (letter) {
//         word += letter; //on rajoute la lettre saisie à la suite du mot
//         console.log(word);
//     } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
//         break; // On quitte la boucle
//     }
// }
// console.log(`voilà ce que tu as tapé : ${word}`);

// //On déclare d'abord un array
// let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

// //On déclare ensuite un objet
// let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

// console.log("**********Parcourons le array :")
// for(let index in weeksOfTHPArray) {
//   console.log(index); // index va aller de 0 à 3
//   console.log(weeksOfTHPArray[index]);
// }

// console.log("**********Parcourons l'objet :")
// for(let weekAttribut in weeksOfTHPObject) {
//   console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
//   console.log(weeksOfTHPObject[weekAttribut]);
// }

// console.log("**********Parcourons le array en forEach :")
// weeksOfTHPArray.forEach(weekContent => {
//   console.log(weekContent)
// });

// function sayHello() {
//     console.log("Bonjour toi !");
//   }

// function multiply(inputNumber1, inputNumber2) {
//     let outputNumber = inputNumber1 * inputNumber2;
//     return outputNumber;
//   }

//   const multiply = function(inputNumber1, inputNumber2) {
//     let outputNumber = inputNumber1 * inputNumber2;
//     return outputNumber;
//   }

const multiply = (inputNumber1, inputNumber2) => {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }