
import cards from "./riderwaite.js"; 
import Tarotdeck from "./Tarotdeck.js"; 

//const deck = new Tarotdeck("Rider-Waite", cards); // passes in the name of the deck and the cards array which is strings


const deck = new Tarotdeck("Rider-Waite",cards);

const content = `
<h1> TAROT WEB APPLICATION</h1>
<h2> Click the spread button below to have your fortune read by the online tarot reader! </h2>
<table style= "width:100%">
<tr>
<th><img a id = "card" src="https://cinnamonbrad.github.io/App-Tarot/Images/backofcards.jpg" alt="back"> </th>
<th><img a id = "card1" src="https://cinnamonbrad.github.io/App-Tarot/Images/backofcards.jpg" alt="back7"></th>
<th><img a id = "card2" src="https://cinnamonbrad.github.io/App-Tarot/Images/backofcards.jpg" alt="back8"> </th>
</tr>
</table>
<div style= "display: grid; place-items: center;" class = "buttons"> 
<button  id = "btn2"  class="btn">3-Card Spread</button>
</div>
`;
/* reset button code in case i need to add it back. <button id="reset"><img class = "reset_btn" src = "https://cinnamonbrad.github.io/App-Tarot/Images/reset button.png" alt = "reset"></button>*/
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
const dealThree = () => {
    deck.shuffleCards();
    card.src = deck.imagesofcards[0]; 
    card1.src = deck.imagesofcards[1]; 
    card2.src = deck.imagesofcards[2]; 
    btn2.removeEventListener("click", dealThree); 
};
btn2.addEventListener("click", dealThree); 

/*btn3.addEventListener("click", function(dealOne){
    deck.shuffleCards();
    card.src = deck.imagesofcards[0]; 
}); */
/*reset.addEventListener("click",function(reset){
    card.src = "https://cinnamonbrad.github.io/App-Tarot/Images/backofcards.jpg"; 
    card1.src ="https://cinnamonbrad.github.io/App-Tarot/Images/backofcards.jpg"; 
    card2.src = "https://cinnamonbrad.github.io/App-Tarot/Images/backofcards.jpg"; 
}); */
