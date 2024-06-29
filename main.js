
import cards from "./riderwaite.js"; 
import Tarotdeck from "./Tarotdeck.js"; 

//const deck = new Tarotdeck("Rider-Waite", cards); // passes in the name of the deck and the cards array which is strings


const deck = new Tarotdeck("Rider-Waite",cards);

const content = `
<h1> TAROT WEB APPLICATION</h1>
<h2> Choose a spread button below to get started with the online tarot reader!</h2>
<div class ="card_box"> 
<div id = "card1" class = "card_2"> </div>
<div id = "card2" class = "card_3"> </div>
<img id = "card" src="${deck.backofcards}" alt="back"> </div>
<div class = "buttons">
<button id = "btn1" class="btn">Celtic Card Spread</button>
<button  id = "btn2"  class="btn">3-Card Spread</button>
<button  id = "btn3" class="btn">1-Card Spread</button>
`;
document.body.innerHTML = content;   
let card = document.getElementById("card"); 
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
const btn1 = document.getElementById("btn1"); // celtic spread
const btn2 = document.getElementById("btn2"); // three-card spread
const btn3 = document.getElementById("btn3"); // one-card spread
//when the buttons are clicked the cards will be dealt. three buttons, one for each card spread
//btn1.addEventListener("click", function(dealCeltic){ 

//});
btn2.addEventListener("click", function(dealThree){
    deck.shuffleCards();
    card.src = deck.imagesofcards[0]; 
    let card1 = deck.imagesofcards[1]; 
    let card2 = deck.imagesofcards[2]; 

});
btn3.addEventListener("click", function(dealOne){
    deck.shuffleCards();
    card.src = deck.imagesofcards[0]; 
});
console.log(card); 

; 
