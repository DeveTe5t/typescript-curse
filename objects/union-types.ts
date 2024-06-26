(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    // let myCustomVariable: string | number | Hero = 'Fulano de tal';
    let myCustomVariable: (string | number | Hero) = 'Fulano de tal';
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})()