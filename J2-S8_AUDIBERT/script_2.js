nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
i = nombre;

while (i !== 1) {
  i -= 1;
  nombre = nombre * i;
}

console.log(`Le résultat est : ${nombre}`);
