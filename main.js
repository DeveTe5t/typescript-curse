"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettaby',
        active: true,
        power: 1500.123123
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, theRest = __rest(_a, ["ironman"]);
        console.log(ironman, theRest);
    };
    const avengersArray = ['Captain America', true, 1234];
    const [captain, ironman,] = avengersArray;
    console.log({ ironman, captain });
})();
(() => {
    const name = 'Fulano';
    const getName = () => {
        console.log('Old getName');
    };
})();
//# sourceMappingURL=main.js.map