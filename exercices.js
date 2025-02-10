// Définition de variables

const nomBoutique = "La Boutique de Durotarn";
let stockPotionSoin = 10;
let prixPotionSoin = 30;
let boutiqueOuverte = true;
const monnaie = "🪙";

//Affichage conditionnel

if (boutiqueOuverte) {
  console.log(`Bienvenue dans ${nomBoutique}, Aventurier ! 🎉`);
} else {
  console.log(`${nomBoutique} est fermée, revenez plus tard Aventurier ! 😴`);
}

// Affichage conditionnel avec switch

console.log(
  "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔"
);
console.log(
  "1. Le nom de la boutique\n2. Le nom du Sorcier\n3. Le prix d'une potion de soin\n4. La quantité d'une potion de soin"
);

let choix = parseInt(prompt("Fais ton choix (1-4) :"));
switch (choix) {
  case 1:
    console.log(`Le nom de la boutique est ${nomBoutique}`);
    break;
  case 2:
    console.log("Le sorcier se nomme Durotarn 🧙‍♂️");
    break;
  case 3:
    console.log(
      `Le prix d'une potion de soin est de ${prixPotionSoin} ${monnaie}`
    );
    break;
  case 4:
    console.log(`Il reste ${stockPotionSoin} potions de soin en stock.`);
    break;
  default:
    console.log(
      "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕"
    );
}

// Calcul du prix total d'une commande

let quantitePotion = parseInt(
  prompt("Combien de potions de soin veux-tu acheter ?")
);
let prixTotal = quantitePotion * prixPotionSoin;
console.log(
  `Prix de ${quantitePotion} potions de soins : ${prixTotal} ${monnaie} mon cher Aventurier. 💸`
);
