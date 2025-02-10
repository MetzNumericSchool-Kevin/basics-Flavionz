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

// Bourse de l'aventurier

let bourseAventurier = 100;
if (bourseAventurier >= prixTotal && quantitePotion <= stockPotionSoin) {
  bourseAventurier -= prixTotal;
  stockPotionSoin -= quantitePotion;
  console.log(
    `Achat réussi ! Il vous reste ${bourseAventurier} ${monnaie} et ${stockPotionSoin} potions en stock.`
  );
} else {
  console.log(
    "Achat impossible : soit vous n'avez pas assez d'argent, soit le stock est insuffisant."
  );
}

// Liste des potions

let potions = ["Potion de soin", "Potion d'endurance", "Potion de mana"];
console.log(potions);

// Affichage des potions

console.log(`Première potion : ${potions[0]}`);
console.log(`Dernière potion : ${potions[potions.length - 1]}`);
for (let potion of potions) {
  console.log(`Nous avons de la ${potion} !`);
}

// Ajout et suppression d'une potion

potions.push("Potion de force");
console.log(potions);
potions.pop();
console.log(potions);

// Objet Potion de soin

let potionSoin = {
  nom: "Potion de soin",
  prix: prixPotionSoin,
  stock: stockPotionSoin,
};
console.log(potionSoin);
console.log(potionSoin.nom);
console.log(potionSoin["prix"]);

// Inventaire complet des potions

let inventaire = [
  { nom: "Potion de soin", prix: 40, stock: 1 },
  { nom: "Potion d'endurance", prix: 20, stock: 1 },
  { nom: "Potion de mana", prix: 20, stock: 2 },
];

for (let potion of inventaire) {
  console.log(
    `Nom: ${potion.nom}, Prix: ${potion.prix} ${monnaie}, Stock: ${potion.stock}`
  );
}

// Affichage dynamique des propriétés

for (let potion of inventaire) {
  for (let [key, value] of Object.entries(potion)) {
    console.log(`${key}: ${value}`);
  }
}

// Programme de commerce

let bourseSorcier = 0;
let inventaireAventurier = [];
do {
  let action = prompt("Que veux-tu faire ? (acheter/vendre)");
  if (action === "acheter") {
    let choixPotion = prompt("Quelle potion veux-tu acheter ?");
    let quantite = parseInt(prompt("Combien en veux-tu ?"));
    let potion = inventaire.find((p) => p.nom === choixPotion);
    if (
      potion &&
      potion.stock >= quantite &&
      bourseAventurier >= potion.prix * quantite
    ) {
      potion.stock -= quantite;
      bourseAventurier -= potion.prix * quantite;
      bourseSorcier += potion.prix * quantite;
      inventaireAventurier.push({ nom: potion.nom, quantite: quantite });
      console.log(
        `Achat réussi ! Il vous reste ${bourseAventurier} ${monnaie}.`
      );
    } else {
      console.log("Achat impossible.");
    }
  } else if (action === "vendre") {
    if (inventaireAventurier.length > 0) {
      let chiffre = Math.floor(Math.random() * 5) + 1;
      let devine = parseInt(
        prompt("Devine un chiffre entre 1 et 5 pour vendre ta potion")
      );
      if (devine === chiffre) {
        let potionVendue = inventaireAventurier.pop();
        let potionStock = inventaire.find((p) => p.nom === potionVendue.nom);
        bourseAventurier += potionStock.prix * potionVendue.quantite;
        bourseSorcier -= potionStock.prix * potionVendue.quantite;
        potionStock.stock += potionVendue.quantite;
        console.log("Vente réussie !");
      } else {
        console.log("Raté ! Retente ta chance.");
      }
    } else {
      console.log("Tu n'as rien à vendre.");
    }
  }
} while (bourseAventurier > 0);

console.log(`Le sorcier a maintenant ${bourseSorcier} ${monnaie}.`);
