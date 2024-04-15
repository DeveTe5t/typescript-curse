(() => {

    abstract class Mutant {
        constructor(public name: string, public realName: string) { }
    }

    class Xmen extends Mutant {
        savingWorld() {
            return 'World saved!';
        }
    }
    class Villian extends Mutant {
        conqueringWorld() {
            return 'World conquered!';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    // console.log(wolverine.savingWorld());
    // console.log(magneto.conqueringWorld());

    const printName = (character: Mutant) => {
        console.log(character.realName);
    }

    printName(wolverine);
    printName(magneto);
})()