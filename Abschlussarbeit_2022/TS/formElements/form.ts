namespace Endabgabe_SS22 {

    export let moneyGlobal: number [] = [];
    let valuesGlobal: number[] = [];
 

    export function handleChange(): void {
        let formData: FormData = new FormData(document.forms[0]);
        valuesGlobal = [];
        for (let entry of formData) {
            console.log(valuesGlobal);
            valuesGlobal.push(Number(entry[1]));
        }
        playerCapital = valuesGlobal[6];
        updateCapital();
    }

    export function priceChange(): void {
        moneyGlobal = [];

        // Preise für Samen
        for (let index: number = 0; index < 5; index++) {
            moneyGlobal.push(Number((Math.random() * (valuesGlobal[0] - valuesGlobal[1]) + valuesGlobal[1]).toFixed(2)));
        }
        // Preise für Pflanzen
        for (let index: number = 0; index < 5; index++) {
            moneyGlobal.push(Number((Math.random() * (valuesGlobal[2] - valuesGlobal[3]) + valuesGlobal[3]).toFixed(2)));
        }
        // Preise für Equipment
        for (let index: number = 0; index < 2; index++) {
            moneyGlobal.push(Number((Math.random() * (valuesGlobal[4] - valuesGlobal[5]) + valuesGlobal[5]).toFixed(2)));
        }
        
        formIntoHTML();
        console.log(moneyGlobal, valuesGlobal);
    }

    export function updateCapital(): void {

        pCapital.innerHTML = (playerCapital).toFixed(2) + "$";
    }


    export function formIntoHTML(): void {

        pBuyValueTomatoe.innerHTML = moneyGlobal[0] + "$";
        pBuyValueAubergine.innerHTML = moneyGlobal[1] + "$";
        pBuyValuePotato.innerHTML = moneyGlobal[2] + "$";
        pBuyValueCarrot.innerHTML = moneyGlobal[3] + "$";
        pBuyValueZuchini.innerHTML = moneyGlobal[4] + "$";

        pSellValueTomatoe.innerHTML = moneyGlobal[5] + "$";
        pSellValueAubergine.innerHTML = moneyGlobal[6] + "$";
        pSellValuePotato.innerHTML = moneyGlobal[7] + "$";
        pSellValueCarrot.innerHTML = moneyGlobal[8] + "$";
        pSellValueZuchini.innerHTML = moneyGlobal[9] + "$";
        
        pBuyValueFertilize.innerHTML = moneyGlobal[10] + "$";
        pBuyValuePesticide.innerHTML = moneyGlobal[11] + "$";
    }
}