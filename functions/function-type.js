"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved`;
    // let myFunction: Function;
    // let myFunction: (n1: number, n2: number) => number;
    // let myFunction: (p1: string) => string;
    let myFunction;
    //* myFunction = 10;
    //* console.log({ myFunction });
    // myFunction = addNumbers;
    // console.log(myFunction(2, 5));
    // myFunction = greet;
    // console.log(myFunction('Fulano'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
