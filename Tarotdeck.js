
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
        let y, x, i, z;
        x = this.imagesofcards;  
        for (i = (x.length -1); i > 0; i--) {
            y = Math.floor(Math.random() * (i + 1)); 
            z = x[i]; 
            x[i] = x[y]; 
            x[y] = z;

        }

        return this.imagesofcards; // returns the shuffled up array of cards 

    }
    
    dealcards(type) //passes in an array of strings that are the cards
    {
        let b = []; 
    if (type == "celtic" )
    {
        for (let i = 0; i <10; i++)
        {
            let n = this.imagesofcards[i]; 
            b[i] = n; 
            if ((n == this.backofcards))
            {
                b.pop();
                b[i]=this.imagesofcards[i+50]; 
            }
        }
        b; //is the array of the cards
    }; 

    if (type == "3")
    {
        for (let i = 0; i <3; i++)
        {
            let n = this.imagesofcards[i]; 
            b[i]= n; 
            if ((n == this.backofcards))
            {
                b.pop();
                b[i]= this.imagesofcards[i+50]; 
            }
        }
        return b; 
    }; 
    if (type == "1")
    {
        for (let i = 0; i <1; i++)
        {
            let n = this.imagesofcards[i]; 
            b[i] = n; 
            if ((n == this.backofcards))
            {
                b.pop();
                b[i] = this.imagesofcards[i+50]; 
            }
        }
        return b; 
    };
    }

  printCards()
  {
    
  }
}; 
    export default Tarotdeck;