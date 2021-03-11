class Cat {
    constructor(tiredness, hunger, lonliness, happiness){
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = happiness;        
        }
    }
    
    feed(){
        this.tiredness *=0.5;  
        this.hunger *= 0;
        this.lonliness /= .25; 
        this.happiness /= .25;
    }
    
    play(){

    }
    sleep(){

    }
    nightMode(){

    }

    hourCounter{
        setInterval(1000); 
        for (let i = 0; i < 24; i++)
    }

    let newDay = new Cat(0, 100, 100, 50)
    
}