arn = prompt("Ecris l'ARN à traduire en protéines");

arn = arn.split(/(?=(?:...)*$)/);

for (let i = 0; i <= arn.length - 1; i++) {
  if (
    arn[i] == "UCU" ||
    arn[i] == "UCC" ||
    arn[i] == "UCA" ||
    arn[i] == "UCG" ||
    arn[i] == "AGU" ||
    arn[i] == "AGC"
  ) {
    arn[i] = "Sérine";
  } else if (
    arn[i] == "CCU" ||
    arn[i] == "CCC" ||
    arn[i] == "CCA" ||
    arn[i] == "CCG"
  ) {
    arn[i] = "Proline";
  } else if (arn[i] == "UUA" || arn[i] == "UUG") {
    arn[i] = "Leucine";
  } else if (arn[i] == "UUU" || arn[i] == "UUC") {
    arn[i] = "Phénylalaline";
  } else if (
    arn[i] == "CGU" ||
    arn[i] == "CGC" ||
    arn[i] == "CGA" ||
    arn[i] == "CGG" ||
    arn[i] == "AGA" ||
    arn[i] == "AGG"
  ) {
    arn[i] = "Arginine";
  } else if (arn[i] == "UAU" || arn[i] == "UAC") {
    arn[i] = "Tyrosine";
  }
}

arn = arn.join("-");

console.log("Voici la traduction de ton ARN en protéines :");

console.log(arn);
