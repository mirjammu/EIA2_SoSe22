"use strict";
var Endabgabe_SS22;
(function (Endabgabe_SS22) {
    Endabgabe_SS22.moneyGlobal = [];
    let valuesGlobal = [];
    function handleChange() {
        let formData = new FormData(document.forms[0]);
        valuesGlobal = [];
        for (let entry of formData) {
            console.log(valuesGlobal);
            valuesGlobal.push(Number(entry[1]));
        }
        Endabgabe_SS22.playerCapital = valuesGlobal[6];
        updateCapital();
    }
    Endabgabe_SS22.handleChange = handleChange;
    function priceChange() {
        Endabgabe_SS22.moneyGlobal = [];
        // Preise für Samen
        for (let index = 0; index < 5; index++) {
            Endabgabe_SS22.moneyGlobal.push(Number((Math.random() * (valuesGlobal[0] - valuesGlobal[1]) + valuesGlobal[1]).toFixed(2)));
        }
        // Preise für Pflanzen
        for (let index = 0; index < 5; index++) {
            Endabgabe_SS22.moneyGlobal.push(Number((Math.random() * (valuesGlobal[2] - valuesGlobal[3]) + valuesGlobal[3]).toFixed(2)));
        }
        // Preise für Equipment
        for (let index = 0; index < 2; index++) {
            Endabgabe_SS22.moneyGlobal.push(Number((Math.random() * (valuesGlobal[4] - valuesGlobal[5]) + valuesGlobal[5]).toFixed(2)));
        }
        formIntoHTML();
        console.log(Endabgabe_SS22.moneyGlobal, valuesGlobal);
    }
    Endabgabe_SS22.priceChange = priceChange;
    function updateCapital() {
        Endabgabe_SS22.pCapital.innerHTML = (Endabgabe_SS22.playerCapital).toFixed(2) + "$";
    }
    Endabgabe_SS22.updateCapital = updateCapital;
    function formIntoHTML() {
        Endabgabe_SS22.pBuyValueTomatoe.innerHTML = Endabgabe_SS22.moneyGlobal[0] + "$";
        Endabgabe_SS22.pBuyValueAubergine.innerHTML = Endabgabe_SS22.moneyGlobal[1] + "$";
        Endabgabe_SS22.pBuyValuePotato.innerHTML = Endabgabe_SS22.moneyGlobal[2] + "$";
        Endabgabe_SS22.pBuyValueCarrot.innerHTML = Endabgabe_SS22.moneyGlobal[3] + "$";
        Endabgabe_SS22.pBuyValueZuchini.innerHTML = Endabgabe_SS22.moneyGlobal[4] + "$";
        Endabgabe_SS22.pSellValueTomatoe.innerHTML = Endabgabe_SS22.moneyGlobal[5] + "$";
        Endabgabe_SS22.pSellValueAubergine.innerHTML = Endabgabe_SS22.moneyGlobal[6] + "$";
        Endabgabe_SS22.pSellValuePotato.innerHTML = Endabgabe_SS22.moneyGlobal[7] + "$";
        Endabgabe_SS22.pSellValueCarrot.innerHTML = Endabgabe_SS22.moneyGlobal[8] + "$";
        Endabgabe_SS22.pSellValueZuchini.innerHTML = Endabgabe_SS22.moneyGlobal[9] + "$";
        Endabgabe_SS22.pBuyValueFertilize.innerHTML = Endabgabe_SS22.moneyGlobal[10] + "$";
        Endabgabe_SS22.pBuyValuePesticide.innerHTML = Endabgabe_SS22.moneyGlobal[11] + "$";
    }
    Endabgabe_SS22.formIntoHTML = formIntoHTML;
})(Endabgabe_SS22 || (Endabgabe_SS22 = {}));
//# sourceMappingURL=form.js.map