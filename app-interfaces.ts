(() => {

    // Crear interfaces

    // Cree una interfaz para validar el auto (el valor enviado por parametro)
    interface Auto {
        encender: boolean;
        velocidadMaxima: number;
        acelerar(): void;
    }

    const conducirBatimovil = (auto: Auto): void => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    }

    const batimovil: Auto = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    }

    // Cree una interfaz con que permita utilzar el siguiente objeto
    // utilizando propiedades opcionales

    interface Villian {
        reir?: boolean;
        comer?: boolean;
        llorar?: boolean;
    }

    const guason: Villian = {
        reir: true,
        comer: true,
        llorar: false
    }

    const reir = (guason: Villian): void => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    }


    // Cree una interfaz para la siguiente funcion
    interface GoticaCity {
        (ciudadanos: string[]): number;
    }

    const ciudadGotica: GoticaCity = (ciudadanos: string[]): number => {
        return ciudadanos.length;
    }

    // Cree una interfaz que obligue crear una clase
    // con las siguientes propiedades y metodos
    interface Person {
        nomber: string;
        edad: number;
        sexo: string;
        estadoCivil: String;

        imprimirBio(): void;
    }

    /*
      propiedades:
        - nombre
        - edad
        - sexo
        - estadoCivil
        - imprimirBio(): void // en consola una breve descripcion.
    */
    class Persona implements Person {
        constructor(
            public nomber: string,
            public edad: number,
            public sexo: string,
            public estadoCivil: String,
        ) { }

        imprimirBio(): void {
            console.log(`Nombre: ${this.nomber}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`);
        }
    }
})()