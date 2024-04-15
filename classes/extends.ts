(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            console.log('Constructor Avenger called!');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ) {
            super(name, realName);
            console.log('Constructor Xmen called!');
        }

        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log(wolverine);
    console.log(wolverine.getFullNameFromXmen());
})()