import get from "./src/getElement.js";
import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

// Generate random character for search query
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(`${URL}${randomCharacter}`);
});
