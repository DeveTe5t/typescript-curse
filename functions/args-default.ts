(() => {

    const fullName = (firsName: string, lastName?: string, upper: boolean = false): string => {
        if (upper) {
            return `${firsName} ${lastName || 'No lastname'}`.toUpperCase();
        }
        else {
            return `${firsName} ${lastName || 'No lastname'}`;
        }
    }

    const name = fullName('Tony', 'Stark', true);
    // let noName: any;
    // const name = fullName(noName, 'Stark');

    console.log({ name });
})();