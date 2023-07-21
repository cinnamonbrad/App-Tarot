
import cards from "./riderwaite.js"; 
import Tarotdeck from "./Tarotdeck.js"; 

const deck = new Tarotdeck("Rider-Waite", cards)
const content = `
<h1> TAROT WEB APPLICATION</h1>
<h2> Welcome to your very own tarot reader online!</h2>
<h3> Press the button below to get started with using the online tarot reader</h3>
<div class ="card_box">
<img src="/Images/backofcards.jpg" alt="back">
</div>
<button class="btn">Start</button>`; 

document.body.innerHTML = content; 
