(() => {

    class Avenger {
        // Work whiout declaration
        // name;
        // power;

        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power;

            // I can add properties without restrictions
            this.otherProperty = 'I am other property';
        }
    }

    class FlyingAvenger extends Avenger {
        // Work whiout declaration
        // flying;

        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger('Hulk', 9001);
    const falcon = new FlyingAvenger('Falcon', 50);

    console.log(hulk);
    console.log(falcon);
})()