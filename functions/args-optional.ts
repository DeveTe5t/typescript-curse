(() => {

    const fullName = (firsName: string, lastName?: string): string => {
        return `${firsName} ${lastName || 'No lastname'}`;
    }

    const name = fullName('Tony');
    // let noName: any;
    // const name = fullName(noName, 'Stark');

    console.log({ name });
})();