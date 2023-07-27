
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
    
    dealcards(type) //passes in an array of strings that are the cards
    {
       // a = this.shuffleCards()
        let b = [];
        // let first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth;
        // b.add(first);
        // b.add(second); 
        // b.add(third); 
        // b.add(fourth); 
        // b.add(fifth); 
        // b.add(sixth);
        // b.add(seventh); 
        // b.add(eighth); 
        // b.add(ninth); 
        // b.add(tenth); 
    if (type == "celtic" )
    {
        for (let i = 0; i <10; i++)
        {
            let n = this.imagesofcards[i]; 
            b.push(n); 
            if ((n == this.backofcards))
            {
                b.pop(this.imagesofcards[i]);
                b.push(this.imagesofcards[i+50]); 
            }
        }
        return b; 
    }; 

    if (type == "3")
    {
        for (let i = 0; i <3; i++)
        {
            let n = this.imagesofcards[i]; 
            b.push(n); 
            if ((n == this.backofcards))
            {
                b.pop(this.imagesofcards[i]);
                b.push(this.imagesofcards[i+50]); 
            }
        }
        return b; 
    }; 
    if (type == "1")
    {
        for (let i = 0; i <1; i++)
        {
            let n = this.imagesofcards[i]; 
            b.push(n); 
            if ((n == this.backofcards))
            {
                b.pop(this.imagesofcards[i]);
                b.push(this.imagesofcards[i+50]); 
            }
        }
        return b; 
    };
    }
}; 
    export default Tarotdeck;