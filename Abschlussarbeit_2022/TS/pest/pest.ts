namespace Endabgabe_SS22 {

    export class Pest {
        private position: Vector;
        private alive: boolean =  false;
        private busy: boolean = false;
        private fieldID: number;
        private velocity: number = 0.5;
        private randomPosition: number = Math.floor((Math.random() * (80 - 40) + 40));

        public get busyState(): boolean {
            return this.busy;
        }

        public get assignedFieldID(): number {
            return this.fieldID;
        }

        public get pestAlive(): boolean {
            return this.alive;
        }
        
        public setAlive(_alive: boolean): void {
            this.alive = _alive;
        }

        public setSetup(_position: Vector, _fieldID: number): void {
                this.position = _position;
                this.fieldID = _fieldID;
                this.setAlive(true);
        }

        public setBusy(_busy: boolean): void {
            this.busy = _busy;
        }

        public update(): void {
            
            if (this.alive == true) {
            let choosenField: Field = fields[this.fieldID];
            let plantDistance: number = Vector.getdistance(choosenField.plantOnField.plantPosition, this.position);
            let plantDiffernce: Vector = Vector.getDifference(choosenField.plantOnField.plantPosition, this.position);
            let ratio: number  = this.velocity / plantDistance;
            plantDiffernce.scale(ratio);  
            this.position.add(plantDiffernce);
            
            if (plantDistance < 1) {
                if (this.busy == false) {
                choosenField.plantOnField.setInfested(true);
                this.setBusy(true);
                this.draw();
                }
            }

            if (choosenField.fieldInfo == false) {
                this.setAlive(false);
                this.setBusy(false);
            }

            this.draw();
        }
        
        }

        private draw(): void {
            crc2.save();
            crc2.translate((this.position.x) + this.randomPosition, (this.position.y) + this.randomPosition);

            crc2.scale(0.8, 0.8);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "black";
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(0, 0, 8 , 0, Math.PI * 2, false);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(0, 0, 8 , 0, Math.PI * 2, false);
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(-5, -11, 5 , 0, Math.PI * 2, false);
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(5, -11, 5 , 0, Math.PI * 2, false);
            crc2.fill();
            crc2.stroke();

            crc2.restore();
        }
    }
}