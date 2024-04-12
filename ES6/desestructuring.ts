(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettaby',
        active: true,
        power: 1500.123123
    }

    // const { power, vision } = avengers;
    // console.log(power.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ ironman, ...theRest }: Avengers) => {
        console.log(ironman, theRest);
    }

    printAvenger(avengers);

})()