
class Tarotdeck {
    constructor(name, imagesofcards)
    {
        this.name = name, 
        this.imagesofcards = imagesofcards 
    }
    numberOfcards = 78; 
    majorarcana = 22; 
    minorarcana = 56; 
    backofcards = "/Images/backofcards.jpg";
    shuffleCards (imagesofcards) //method that randomizes the cards and it passes in the array that are the cards
    {  
         
        imagesofcards.sort(()=> MATH.random() - 0.5); 
        this.backofcards = imagesofcards[0]; 
        return this.backofcards; 
    }
    
    dealcards(imagesofcards) //passes in an array of strings that are the cards
    {
    
    }
}; 
    export default Tarotdeck; 
    