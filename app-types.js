"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let PowerHero;
    (function (PowerHero) {
        PowerHero[PowerHero["acuaman"] = 0] = "acuaman";
        PowerHero[PowerHero["batman"] = 1] = "batman";
        PowerHero[PowerHero["flash"] = 5] = "flash";
        PowerHero[PowerHero["superman"] = 100] = "superman";
    })(PowerHero || (PowerHero = {}));
    const fuerzaFlash = PowerHero.acuaman;
    const fuerzaSuperman = PowerHero.superman;
    const fuerzaBatman = PowerHero.batman;
    const fuerzaAcuaman = PowerHero.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log('cual' + enumeracion.d);
})();
