"use strict";
(() => {
    // never finished the execution
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Help!');
})();
