(() => {

    class Avenger {

        // Basic way 
        // private name: string;
        // private team: string;
        // public realName?: string;
        // static avgAge: number = 35;

        // constructor(name: string, team: string, realName?: string) {
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }

        // Short way
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name;
        }

        constructor(
            private name: string,
            private team: string,
            public realName: string,
            // avgAge: number = 55,
        ) {
            // Avenger.avgAge = avgAge;
        }

        public bio() {
            return `${this.name} (${this.team})!!!`;
        }
    }

    // const antman = new Avenger('Antman', 'Captain', 'Scott Lang', 37);
    const antman = new Avenger('Antman', 'Captain', 'Scott Lang');
    // console.log(antman, Avenger.avgAge);
    console.log(antman);
    console.log(Avenger.getAvgAge());
})()