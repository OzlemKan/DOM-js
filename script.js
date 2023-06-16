console.log(document.title);

document.title = "Modifying the DOM";

const Main = document.body.children[1];
console.log(Main);

for (let Children of Main.children) {
  console.log(Children);
}

document.body.style.backgroundColor = randomColor();

// générer couleur aléatoire sous forme #FFFFFF

function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}
