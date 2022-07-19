"use strict";
var Endabgabe_SS22;
(function (Endabgabe_SS22) {
    class Plant {
        fieldID;
        harvestable;
        position;
        plantProgress;
        seedValue;
        sellValue;
        infested;
        pestsQuantity = 0;
        constructor(_fieldPosition, _fielID) {
            this.position = _fieldPosition;
            this.fieldID = _fielID;
            this.infested = false;
            this.draw();
        }
        get plantPosition() {
            return this.position;
        }
        get progress() {
            if (this.plantProgress >= 100) {
                return true;
            }
            else {
                return false;
            }
        }
        get infestedStatus() {
            return this.infested;
        }
        setInfested(_infested) {
            this.infested = _infested;
            if (this.infested == true) {
                this.pestsQuantity++;
            }
            else {
                this.pestsQuantity = 0;
            }
        }
        setSellValue() {
            //polymorphie
        }
        setSeedValue() {
            //polymorphie
        }
        sell() {
            Endabgabe_SS22.playerCapital += this.sellValue;
        }
        buy() {
            Endabgabe_SS22.playerCapital -= this.seedValue;
        }
        draw() {
            //polymorphie
        }
        update() {
            //polymorphie
        }
        watering(_water) {
            //polymorphie
        }
        fertilize(_fertilize) {
            //polymorphie
        }
        harvest(_fertilize) {
            //polymorphie
        }
    }
    Endabgabe_SS22.Plant = Plant;
})(Endabgabe_SS22 || (Endabgabe_SS22 = {}));
//# sourceMappingURL=plant.js.map