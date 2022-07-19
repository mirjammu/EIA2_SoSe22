"use strict";
var Endabgabe_SS22;
(function (Endabgabe_SS22) {
    class Carrot extends Endabgabe_SS22.Plant {
        // abstract??
        waterLevel = 1800;
        waterPercentage;
        waterConstant = 1800;
        waterRate = 0.12;
        fertilizerLevel = 2300;
        fertilizerRate = 0.2;
        fertilizerPercentage;
        fertilizerConstant = 2400;
        plantHealth = 100;
        growthRate = 0.025;
        constructor(_fieldPosition, _fielID) {
            super(_fieldPosition, _fielID);
            this.plantProgress = 0;
        }
        setSellValue() {
            this.sellValue = (Endabgabe_SS22.moneyGlobal[8]);
        }
        setSeedValue() {
            this.seedValue = (Endabgabe_SS22.moneyGlobal[3]);
        }
        draw() {
            if (this.waterPercentage > 1 || this.waterPercentage < 0 || this.fertilizerPercentage > 1 || this.fertilizerPercentage < 0 || this.plantHealth < 0) {
                Endabgabe_SS22.fields[this.fieldID].setFieldOccupied(false);
            }
            else {
                Endabgabe_SS22.crc2.save();
                Endabgabe_SS22.crc2.translate(this.position.x, this.position.y);
                //Leben
                Endabgabe_SS22.crc2.beginPath();
                Endabgabe_SS22.crc2.rect(0, 105, this.plantHealth, 5);
                Endabgabe_SS22.crc2.fillStyle = "Green";
                Endabgabe_SS22.crc2.fill();
                Endabgabe_SS22.crc2.closePath();
                //Growth
                Endabgabe_SS22.crc2.beginPath();
                Endabgabe_SS22.crc2.rect(0, 110, this.plantProgress, 5);
                Endabgabe_SS22.crc2.fillStyle = "yellow";
                Endabgabe_SS22.crc2.fill();
                Endabgabe_SS22.crc2.closePath();
                //Fertilizer
                Endabgabe_SS22.crc2.beginPath();
                Endabgabe_SS22.crc2.rect(0, 115, 100 * this.fertilizerPercentage, 5);
                Endabgabe_SS22.crc2.fillStyle = "brown";
                Endabgabe_SS22.crc2.fill();
                Endabgabe_SS22.crc2.closePath();
                //Water
                Endabgabe_SS22.crc2.beginPath();
                Endabgabe_SS22.crc2.rect(0, 120, 100 * this.waterPercentage, 5);
                Endabgabe_SS22.crc2.fillStyle = "blue";
                Endabgabe_SS22.crc2.fill();
                Endabgabe_SS22.crc2.closePath();
                Endabgabe_SS22.crc2.restore();
                if (this.plantProgress < 40) {
                    Endabgabe_SS22.crc2.drawImage(Endabgabe_SS22.imgCarrotSeed, this.position.x, this.position.y);
                    this.plantProgress += this.growthRate;
                }
                else if (this.plantProgress < 80) {
                    Endabgabe_SS22.crc2.drawImage(Endabgabe_SS22.imgCarrotStage1, this.position.x, this.position.y);
                    this.plantProgress += this.growthRate;
                }
                else if (this.plantProgress < 100) {
                    Endabgabe_SS22.crc2.drawImage(Endabgabe_SS22.imgCarrotStage2, this.position.x, this.position.y);
                    this.plantProgress += this.growthRate;
                }
                else {
                    Endabgabe_SS22.crc2.drawImage(Endabgabe_SS22.imgCarrotStage2, this.position.x, this.position.y);
                }
            }
        }
        update() {
            this.waterLevel -= this.waterRate;
            this.waterPercentage = this.waterLevel / this.waterConstant;
            this.fertilizerLevel -= this.fertilizerRate;
            this.fertilizerPercentage = this.fertilizerLevel / this.fertilizerConstant;
            if (this.infested == true) {
                this.plantHealth -= 0.025 * this.pestsQuantity;
            }
            this.draw();
        }
        watering(_water) {
            this.waterLevel += _water;
        }
        fertilize(_fertilize) {
            this.fertilizerLevel += _fertilize;
        }
    }
    Endabgabe_SS22.Carrot = Carrot;
})(Endabgabe_SS22 || (Endabgabe_SS22 = {}));
//# sourceMappingURL=carrot.js.map