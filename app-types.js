"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
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
//# sourceMappingURL=app-types.js.map