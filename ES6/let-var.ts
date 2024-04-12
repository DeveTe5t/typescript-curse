(() => {

    const name: string = 'Fulano';

    // const getName = function () { }

    // getName = () => {};

    // Should not be working
    // function getName() {
    const getName = (): void => {
        console.log('Old getName');
    }

    // getName = () => { console.log('New getName'); };

    // getName();

})()