class Tarotdeck {
    constructor(name, imagesofcards)
    {
        this.name = name, 
        this.imagesofcards = imagesofcards 
    }
    numberOfcards = 78; 
    majorarcana = 22; 
    minorarcana = 56; 
    shuffleCards (imagesofcards) //method that randomizes the cards and it passes in the array that are the cards
    {  
        cardreturn = "/Images/backofcards.jpg";
        imagesofcards.sort(()=> MATH.random() - 0.5); 
        cardreturn = imagesofcards[0]; 
        console.log(imagesofcards[0])
        return cardreturn; 
    }
    
    dealcards(imagesofcards) //passes in an array of strings that are the cards
    {
    
    }
}; 
    export default Tarotdeck; 
    