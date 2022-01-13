let budsImage = document.getElementById("buds-image");

// Hover Elements
let budsBlack = document.getElementById("blackbuds");
let budsWhite = document.getElementById("whitebuds");
let budsBronze = document.getElementById("bronzebuds");

//Images
let budsImgBlack = document.getElementById("black-buds");
let budsImgWhite = document.getElementById("white-buds");
let budsImgBronze = document.getElementById("bronze-buds");

budsBlack.addEventListener("mouseenter", function(event) {
  budsImage.style.display = "none";
  budsImgBlack.style.display = "block";
});

budsWhite.addEventListener("mouseenter", function(event) {
  budsImage.style.display = "none";
  budsImgWhite.style.display = "block";
});

budsBronze.addEventListener("mouseenter", function(event) {
  budsImage.style.display = "none";
  budsImgBronze.style.display = "block";
});

budsBlack.addEventListener("mouseleave", function(event) {
  budsImgBlack.style.display = "none";
  budsImage.style.display = "inline";
});

budsWhite.addEventListener("mouseleave", function(event) {
  budsImgWhite.style.display = "none";
  budsImage.style.display = "inline";
});

budsBronze.addEventListener("mouseleave", function(event) {
  budsImgBronze.style.display = "none";
  budsImage.style.display = "inline";
});
