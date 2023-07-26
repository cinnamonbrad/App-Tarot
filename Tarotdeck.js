
class Tarotdeck {
    constructor(name, imagesofcards)
    {
        this.name = name, 
        this.imagesofcards = imagesofcards 
        this.numberOfcards = 78; 
        this.majorarcana = 22; 
        this.minorarcana = 56; 
        this.backofcards = "/Images/backofcards.jpg";
    }
    shuffleCards () //method that randomizes the cards
    {  
        let x, y, z; 
        x = this.imagesofcards; 
        for (let i = x.length -1; i >0; i--) {
            y = Math.floor(Math.random() * (i + 1)); 
            z = x[i]; 
            x[i] = x[y]; 
            x[y] = z; 
            this.imagesofcards[i] = z; 
        }

        return this.imagesofcards; // returns the shuffled up array of cards 

    }
    
    dealcards(imagesofcards, type) //passes in an array of strings that are the cards
    {
    if (type == "celtic" )
    {

    }; 

    if (type == "three card")
    {

    }; 
    if (type == "one card")
    {

    };
    }
}; 
    export default Tarotdeck; 
    