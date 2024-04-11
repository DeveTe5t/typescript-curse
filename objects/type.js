"use strict";
(() => {
    // let flash: { name: string, age: number, powers: string[], getName?(): string } = {
    // let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        // powers: ['super speed', 'travel trought time']
        powers: [1, 2]
    };
    // flash = {
    //     name: 'Clark Kent',
    //     age: 60,
    //     powers: ['super force'],
    //     getName() {
    //         return this.name;
    //     }
    // }
    // console.log(flash);
    // let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
    let superman = {
        name: 'Clark Kent',
        age: 60,
        // powers: ['super speed'],
        powers: [1],
        getName() {
            return this.name;
        }
    };
    console.log(superman);
})();
