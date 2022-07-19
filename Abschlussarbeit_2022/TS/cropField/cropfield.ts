namespace Endabgabe_SS22 {

    export class Field {
        private position: Vector;
        private fieldID: number;
        private fieldLength: number = 125;
        private fieldPlant: Plant;
        private fieldOccupied: boolean = false;

        constructor(_position: Vector, _fieldID: number) {
            this.position = _position;
            this.fieldID = _fieldID;
            this.draw();
        }   
        
        public get getFieldLength(): number {
            return this.fieldLength;
        }

        public get fieldPosition(): Vector {
            return this.position;
        }

        public get fieldInfo(): boolean {
            return this.fieldOccupied;
        }

        public get fieldId(): number {
            return this.fieldID;
        }

        public get plantOnField(): Plant {
            return this.fieldPlant;
        }

        public setFieldOccupied(_occupation: boolean): void {
            this.fieldOccupied = _occupation;
        }

        public draw(): void {
            crc2.drawImage(imgBackground, this.position.x, this.position.y, this.fieldLength, this.fieldLength);
        }

        public planting(_plantType: string): void {

            switch (_plantType) {
                case "tomatoe":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Tomatoe(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    updateCapital();
                    break;
                case "aubergine":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Aubergine(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    updateCapital();
                    break;
                case "potato":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Potato(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    updateCapital();
                    break;
                case "carrot":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Carrot(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    updateCapital();
                    break;

                case "zucchini":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Zucchini(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    updateCapital();   
                    break;
            }
        }
    }
}
