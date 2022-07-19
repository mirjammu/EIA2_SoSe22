namespace Endabgabe_SS22 {

    export class Aubergine extends Plant {
        private waterLevel: number = 2220;
        private waterPercentage: number;
        private waterConstant: number = 2220;
        private waterRate: number = 0.12;

        private fertilizerLevel: number = 2300;
        private fertilizerRate: number = 0.2;
        private fertilizerPercentage: number;
        private fertilizerConstant: number = 2300;

        private plantHealth: number = 100;
        private growthRate: number = 0.02;

        constructor(_fieldPosition: Vector, _fielID: number) {
            super(_fieldPosition, _fielID);
            this.plantProgress = 0;
        }

        public setSellValue(): void {
            this.sellValue = (moneyGlobal[6]);
        }

        public setSeedValue(): void {
            this.seedValue = (moneyGlobal[1]);
        }

        public draw(): void {
            if (this.waterPercentage > 1 || this.waterPercentage < 0 || this.fertilizerPercentage > 1 || this.fertilizerPercentage < 0 || this.plantHealth < 0) {
                fields[this.fieldID].setFieldOccupied(false);
            }
            else {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);

                //Leben
                crc2.beginPath();
                crc2.rect(0, 105, this.plantHealth, 5);
                crc2.fillStyle = "Green";
                crc2.fill();
                crc2.closePath();

                //Growth
                crc2.beginPath();
                crc2.rect(0, 110, this.plantProgress, 5);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.closePath();

                //Fertilizer
                crc2.beginPath();
                crc2.rect(0, 115, 100 * this.fertilizerPercentage, 5);
                crc2.fillStyle = "brown";
                crc2.fill();
                crc2.closePath();

                //Water
                crc2.beginPath();
                crc2.rect(0, 120, 100 * this.waterPercentage, 5);
                crc2.fillStyle = "blue";
                crc2.fill();
                crc2.closePath();

                crc2.restore();

                if (this.plantProgress < 40) {
                    crc2.drawImage(imgAubergineSeed, this.position.x, this.position.y);
                    this.plantProgress += this.growthRate;
                }
                else if (this.plantProgress < 80) {
                    crc2.drawImage(imgAubergineStage1, this.position.x, this.position.y);
                    this.plantProgress += this.growthRate;
                }
                else if (this.plantProgress < 100) {
                    crc2.drawImage(imgAubergineStage2, this.position.x, this.position.y);
                    this.plantProgress += this.growthRate;
                }
                else {
                    crc2.drawImage(imgAubergineStage2, this.position.x, this.position.y);
                }
            }
        }

        public update(): void {
            this.waterLevel -= this.waterRate;
            this.waterPercentage = this.waterLevel / this.waterConstant;
            this.fertilizerLevel -= this.fertilizerRate;
            this.fertilizerPercentage = this.fertilizerLevel / this.fertilizerConstant;
            if (this.infested == true) {
                this.plantHealth -= 0.025 * this.pestsQuantity;
            }
            this.draw();
        }

        public watering(_water: number): void {
            this.waterLevel += _water;
        }

        public fertilize(_fertilize: number): void {
            this.fertilizerLevel += _fertilize;
        }
    }
}