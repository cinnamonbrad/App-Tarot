
import cards from "./riderwaite.js"; 
import Tarotdeck from "./Tarotdeck.js"; 

//const deck = new Tarotdeck("Rider-Waite", cards); // passes in the name of the deck and the cards array which is strings


const deck = new Tarotdeck("Rider-Waite",cards);

const content = `
<h1> TAROT WEB APPLICATION</h1>
<h2> Choose a spread button below to get started with the online tarot reader!</h2>
<div class ="card_box">
<img id = "card" src="${deck.backofcards}" alt="back"> </div>
<div class = "buttons">
<button id = "btn1" class="btn">Celtic Card Spread</button>
<button  id = "btn2"  class="btn">3-Card Spread</button>
<button  id = "btn3" class="btn">1-Card Spread</button>
`;
document.body.innerHTML = content;   
let card = document.getElementById("card"); 
const btn1 = document.getElementById("btn1"); // celtic spread
const btn2 = document.getElementById("btn2"); // three-card spread
const btn3 = document.getElementById("btn3"); // one-card spread
//when the buttons are clicked the cards will be dealt. three buttons, one for each card spread
//btn1.addEventListener("click", function(dealCeltic){ 

//});
//btn2.addEventListener("click", function(dealThree){

//});
btn3.addEventListener("click", function(dealOne){
    deck.shuffleCards();
    card.src = deck.imagesofcards[0]; 
});
console.log(card); 

; 
