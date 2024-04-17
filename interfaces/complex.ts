(() => {

    interface Client {
        name: string;
        age?: number;
        address: Addres;
        getFullAddress(id: string): string;
    }

    interface Addres {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fulano',
        age: 25,
        address: {
            id: 178,
            zip: 'DRG-2485',
            city: 'Sri Lanka'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Mengana',
        age: 30,
        address: {
            id: 573,
            zip: 'WQK-j#8',
            city: 'Mali',
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

})()