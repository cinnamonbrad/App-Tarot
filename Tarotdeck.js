
class Tarotdeck {
    constructor(name, imagesofcards)
    {
        this.name = name
        this.imagesofcards = imagesofcards //array of cards
        this.numberOfcards = 78
        this.majorarcana = 22
        this.minorarcana = 56
        this.backofcards = "/Images/backofcards.jpg";
    }
    shuffleCards () //method that randomizes the cards
    {  
        let y, x, i, z;
        for (i = (this.imagesofcards.length -1); i > 0; i--) {
            y = Math.floor(Math.random() * (i + 1)); 
            z = this.imagesofcards[i]; 
            this.imagesofcards[i] = this.imagesofcards[y]; 
            this.imagesofcards[y] = z;

        }

    // this is a void function that shuffles the array of cards

    }
    // dead function
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
       return b; //is the array of the cards
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

}; 
    export default Tarotdeck;