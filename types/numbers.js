"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('We are in problems');
    }
    else {
        console.log('We are saved');
    }
    // Not a number is number considered
    avengers = Number('77A');
    console.log({ avengers });
})();
