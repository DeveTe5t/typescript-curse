(() => {

    class Apocalypse {

        static instance: Apocalypse;
        private constructor(public name: string) { }
        static callApocalypse(): Apocalypse {
            if (!Apocalypse.instance) {
                Apocalypse.instance = new Apocalypse('I am Apocalypse1... the only one');
            }

            return Apocalypse.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apocalypse1 = Apocalypse.callApocalypse();
    const apocalypse2 = Apocalypse.callApocalypse();
    const apocalypse3 = Apocalypse.callApocalypse();

    apocalypse1.changeName('Xavier');
    // const apocalypse1 = new Apocalypse('I am Apocalypse1... the only one');
    // const apocalypse2 = new Apocalypse('I am Apocalypse2... the only one');
    // const apocalypse3 = new Apocalypse('I am Apocalypse3... the only one');

    console.log(apocalypse1, apocalypse2, apocalypse3);
})()