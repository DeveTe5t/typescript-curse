(() => {

    const fullName = (firsName: string, lastName: string): string => {
        return `${firsName} ${lastName}`;
    }

    const name = fullName('Tony', 'Stark');
    // let noName: any;
    // const name = fullName(noName, 'Stark');

    console.log({ name });
})();