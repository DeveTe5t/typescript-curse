(() => {

    // let flash: { name: string, age: number, powers: string[], getName?(): string } = {
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super speed', 'travel trought time']
    }

    // flash = {
    //     name: 'Clark Kent',
    //     age: 60,
    //     powers: ['super force'],
    //     getName() {
    //         return this.name;
    //     }
    // }

    // console.log(flash);

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super speed']
    }

})();