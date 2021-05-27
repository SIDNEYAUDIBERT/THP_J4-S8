const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

/*


*/

// CELEBRITES NEES DANS LES ANNEES 1970
console.log("Quelles célébritées sont nées dans les années 70 ?");
for (let i = 0; i <= entrepreneurs.length - 1; i++) {
  if (entrepreneurs[i].year <= 1980 && entrepreneurs[i].year >= 1970) {
    console.log(entrepreneurs[i]);
  }
}

// LES NOMS ET PRENOM DES CELEBRITES
console.log("Quels sont les noms et prénoms des célébrités ?");
var names = [];

for (let i = 0; i <= entrepreneurs.length - 1; i++) {
  names.push(entrepreneurs[i].first);
  names.push(entrepreneurs[i].last);
}

console.log(names);

// LES AGES AUJOURD'HUI DES CELEBRITES
console.log("Quelles sont les âges des célébrités aujourd'hui ?");
const date = new Date().getFullYear();
for (let i = 0; i <= entrepreneurs.length - 1; i++) {
  let y1 = date - entrepreneurs[i].year;
  console.log(
    `${entrepreneurs[i].first} ${entrepreneurs[i].last}  aurait ${y1} ans aujourd'hui!`
  );
}

// TRI DES CELEBRITES PAR ORDRE ALPHABÉTIQUE

console.log("Voici le tri des célébrités par ordre alphabétique :");
entrepreneurs.sort(function (a, b) {
  if (a.last < b.last) {
    return -1;
  }
  if (a.last > b.last) {
    return 1;
  }
  return 0;
});
console.log(entrepreneurs);
