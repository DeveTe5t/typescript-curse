"use strict";
(() => {
    const fullName = (firsName, lastName) => {
        return `${firsName} ${lastName || 'No lastname'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map