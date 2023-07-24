
import cards from "./riderwaite.js"; 
import Tarotdeck from "./Tarotdeck.js"; 

//const deck = new Tarotdeck("Rider-Waite", cards); // passes in the name of the deck and the cards array which is strings


const deck = new Tarotdeck("Rider-Waite",cards);
const x = deck.imagesofcards[0];   

const content = `
<h1> TAROT WEB APPLICATION</h1>
<h2> Welcome to your very own tarot reader online!</h2>
<h3> Press the button below to get started with using the online tarot reader</h3>
<div class ="card_box">
<img src="${x}" alt="back">
</div>
<button class="btn">Start</button>`; 
document.body.innerHTML = content; 

x = deck.shuffleCards();

console.log(x); 

y = deck.shuffleCards(); 
console.log(y); 

deck.dealcards(); 

/*const content1 = `<h1> TAROT WEB APPLICATION</h1>
<h2> Welcome to your very own tarot reader online!</h2>
<h3> Press the button below to get started with using the online tarot reader</h3>
<div class ="card_box">
<img src="${y}" alt="back">
</div>
<button class="btn">Start</button>`
document.body.innerHTML = content1; */
