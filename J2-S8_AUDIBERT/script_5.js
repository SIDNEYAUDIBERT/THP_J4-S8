const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

/*


*/

// LES LIVRES EMPRUNTES AU MOINS UNE FOIS
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

for (let i = 0; i <= books.length - 1; i++) {
  if (books[i].rented > 1) {
    console.log(
      `Le livre "${books[i].title}"  a été emprunté au moins une fois : exactement ${books[i].rented} fois`
    );
  }
}

// LE LIVRE LE PLUS EMPRUNTE
console.log("Quel est le livre le plus emprunté ?");

var b = Math.max.apply(
  Math,
  books.map(function (o) {
    return o.rented;
  })
);

for (let i = 0; i <= books.length - 1; i++) {
  if (books[i].rented == b) {
    console.log(`Le livre "${books[i].title}" est le livre le plus emprunté`);
  }
}

// LE LIVRE LE MOINS EMPRUNTE
console.log("Quel est le livre le moins emprunté ?");

var c = Math.min.apply(
  Math,
  books.map(function (o) {
    return o.rented;
  })
);

for (let i = 0; i <= books.length - 1; i++) {
  if (books[i].rented == c) {
    console.log(`Le livre "${books[i].title}" est le livre le moins emprunté`);
  }
}

// LE LIVRE AVEC L'ID 873495
console.log("Quel est le livre avec l'id 873495 ?");
for (let i = 0; i <= books.length - 1; i++) {
  if (books[i].id == 873495) {
    console.log(`Le livre "${books[i].title}"  porte l'id 873495`);
  }
}

// SUPPRIMER LE LIVRE AVEC L'ID 133712
console.log("Voici la liste des livres sans celui avec l'id 133712 :");
for (let i = 0; i <= books.length - 1; i++) {
  if (books[i].id == 133712) {
    books.splice(i, 1);
  }
}
console.log(books);

// TRI DES LIVRES PAR ORDRE ALPHABETIQUE
console.log("Voici le tri des livres par ordre alphabétique :");

for (let i = 0; i <= books.length - 1; i++) {
  if (books[i].id == 133712) {
    books.splice(i, 1);
  }
}

console.log(books.sort((a, b) => a.title.localeCompare(b.title)));
