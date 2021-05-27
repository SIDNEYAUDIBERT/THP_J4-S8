function isUpperCase(str) {
  return str === str.toUpperCase();
}

phrase = prompt("Ya quoi ?");

splt = phrase.split(" ").includes("on");

if (phrase.slice(-1) == "?") {
  console.log("Ouais Ouais...");
} else if (phrase == "") {
  console.log("t'es en PLS ?");
} else if (isUpperCase(phrase) == true) {
  console.log("Pwa, calme-toi...");
} else if (phrase.includes("Fortnite") == true) {
  console.log("on s' fait une partie soum-soum ?");
} else {
  console.log("balek");
}
