
import cards from "./riderwaite.js"; 
import Tarotdeck from "./Tarotdeck.js"; 

//const deck = new Tarotdeck("Rider-Waite", cards); // passes in the name of the deck and the cards array which is strings


const deck = new Tarotdeck("Rider-Waite",cards);

const content = `
<h1> TAROT WEB APPLICATION</h1>
<h2> Choose a spread button below to get started with the online tarot reader</h2>
<div class ="card_box">
<img src="${deck.backofcards}" alt="back">
<button id = "btn1" class="btn">Celtic</button>
<button  id = "btn2"  class="btn">3</button>
<button  id = "btn3" class="btn">1</button>
`;
const btn1 = document.getElementById("btn1"); // celtic spread
const btn2 = document.getElementById("btn2"); // three-card spread
const btn3 = document.getElementById("btn3"); // one-card spread
//when the buttons are clicked the cards will be dealt. three buttons, one for each card spread
btn1.addEventListener("click", function(dealCeltic){ 

});
btn2.addEventListener("click", function(dealThree){

});
btn3.addEventListener("click", function(dealOne){

});
    // for () {

    //     if ()
    //     {    
    //     `
    //     <img src="${deck.backofcards}" alt="back">
    //     </div>
    //     <button class="btn">Start</button>`; 
    //    }
    //      }
document.body.innerHTML = content;   
deck.shuffleCards();
console.log(deck.imagesofcards); 

const x  = deck.dealcards("celtic"); 
//console.log(x); 
/*const content1 = `<h1> TAROT WEB APPLICATION</h1>
<h2> Welcome to your very own tarot reader online!</h2>
<h3> Press the button below to get started with using the online tarot reader</h3>
<div class ="card_box">
<img src="${y}" alt="back">
</div>
<button class="btn">Start</button>`
document.body.innerHTML = content1; */
