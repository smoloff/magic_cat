class Cat {
    constructor(tiredness, hunger, lonliness, happiness) {
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = happiness;
    }



    checkWellness() {
        setInterval(() => {
            if (this.tiredness >= 90 && this.lonliness >= 90) {
                this.sleep();
            } else if (this.hunger >= 100 && this.lonliness >= 90) {
                this.feed();
            } else if (this.lonliness >= 90 && this.happiness <= 0) {
                this.play();
            } else if (this.happiness <= 0 && this.tiredness >= 90) {
                this.sleep();
            }
            else {
                this.chil();
            }
        }, 200)
    }

    sleep() {
        this.tiredness -= 0.25;
        this.hunger += 0.25;
        this.happiness += 0.05;
        console.log(`SLEEPING: Tiredness: ${this.tiredness} Hunger ${this.hunger} Lonliness ${this.lonliness} Happiness ${this.happiness}`);
    }

    feed() {

        this.tiredness -= 0.005;
        this.hunger -= 1.25;
        this.lonliness -= 1.05;
        this.happiness += 1.05;
        console.log(`FEEDING: Tiredness: ${this.tiredness} Hunger ${this.hunger} Lonliness ${this.lonliness} Happiness ${this.happiness}`);


    }

    play() {
        this.tiredness -= 0.25;
        this.hunger += 0.25;
        this.lonliness -= 0.05;
        this.happiness += 0.25;
        console.log(`PLAYING: Tiredness: ${this.tiredness} Hunger ${this.hunger} Lonliness ${this.lonliness} Happiness ${this.happiness}`);

    }

    chil() {

        this.tiredness -= 0.05;
        this.hunger += 0.005;        
        this.happiness += 0.15;

        console.log(`CHILING: Tiredness: ${this.tiredness} Hunger ${this.hunger} Lonliness ${this.lonliness} Happiness ${this.happiness}`);
    }
}


let newDay = new Cat(100, 50, 100, 0);
newDay.checkWellness();

