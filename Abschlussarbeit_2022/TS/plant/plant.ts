namespace Endabgabe_SS22 {

    export abstract class Plant {
        protected fieldID: number;
        protected harvestable: boolean;
        protected position: Vector;
        protected plantProgress: number;
        protected seedValue: number;
        protected sellValue: number;
        protected infested: boolean;
        protected pestsQuantity: number = 0;

        constructor(_fieldPosition: Vector, _fielID: number) {
            this.position = _fieldPosition;
            this.fieldID = _fielID;
            this.infested = false;
            this.draw();
        }   
        
        

        public get plantPosition(): Vector {
            return this.position;
        }

        public get progress(): boolean {
            if (this.plantProgress >= 100) {
                return true;
            }   
            else {
                return false;
            }
        }

        public get infestedStatus(): boolean {
            return this.infested;
        }

        public setInfested(_infested: boolean): void {
            this.infested = _infested;
            if (this.infested == true) {
                this.pestsQuantity ++;
            }
            else {
                this.pestsQuantity = 0;
            }
        }

        public setSellValue(): void {
            //polymorphie
        }

        public setSeedValue(): void {
            //polymorphie
        }

        public sell(): void {
            playerCapital += this.sellValue;
        }

        public buy(): void {
            playerCapital -= this.seedValue;
        }

        public draw(): void {
            //polymorphie
        }

        public update(): void {
            //polymorphie
        }

        public watering(_water: number): void {
            //polymorphie
        }

        public fertilize(_fertilize: number): void {
            //polymorphie
        }

        public harvest(_fertilize: number): void {
            //polymorphie
        }
    }
}