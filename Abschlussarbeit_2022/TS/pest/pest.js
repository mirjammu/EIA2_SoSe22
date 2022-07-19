"use strict";
var Endabgabe_SS22;
(function (Endabgabe_SS22) {
    class Pest {
        position;
        alive = false;
        busy = false;
        fieldID;
        velocity = 0.5;
        randomPosition = Math.floor((Math.random() * (80 - 40) + 40));
        get busyState() {
            return this.busy;
        }
        get assignedFieldID() {
            return this.fieldID;
        }
        get pestAlive() {
            return this.alive;
        }
        setAlive(_alive) {
            this.alive = _alive;
        }
        setSetup(_position, _fieldID) {
            this.position = _position;
            this.fieldID = _fieldID;
            this.setAlive(true);
        }
        setBusy(_busy) {
            this.busy = _busy;
        }
        update() {
            if (this.alive == true) {
                let choosenField = Endabgabe_SS22.fields[this.fieldID];
                let plantDistance = Endabgabe_SS22.Vector.getdistance(choosenField.plantOnField.plantPosition, this.position);
                let plantDiffernce = Endabgabe_SS22.Vector.getDifference(choosenField.plantOnField.plantPosition, this.position);
                let ratio = this.velocity / plantDistance;
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
        draw() {
            Endabgabe_SS22.crc2.save();
            Endabgabe_SS22.crc2.translate((this.position.x) + this.randomPosition, (this.position.y) + this.randomPosition);
            Endabgabe_SS22.crc2.scale(0.8, 0.8);
            Endabgabe_SS22.crc2.lineWidth = 2;
            Endabgabe_SS22.crc2.strokeStyle = "black";
            Endabgabe_SS22.crc2.fillStyle = "black";
            Endabgabe_SS22.crc2.beginPath();
            Endabgabe_SS22.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Endabgabe_SS22.crc2.fill();
            Endabgabe_SS22.crc2.beginPath();
            Endabgabe_SS22.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Endabgabe_SS22.crc2.stroke();
            Endabgabe_SS22.crc2.beginPath();
            Endabgabe_SS22.crc2.fillStyle = "white";
            Endabgabe_SS22.crc2.arc(-5, -11, 5, 0, Math.PI * 2, false);
            Endabgabe_SS22.crc2.fill();
            Endabgabe_SS22.crc2.stroke();
            Endabgabe_SS22.crc2.beginPath();
            Endabgabe_SS22.crc2.fillStyle = "white";
            Endabgabe_SS22.crc2.arc(5, -11, 5, 0, Math.PI * 2, false);
            Endabgabe_SS22.crc2.fill();
            Endabgabe_SS22.crc2.stroke();
            Endabgabe_SS22.crc2.restore();
        }
    }
    Endabgabe_SS22.Pest = Pest;
})(Endabgabe_SS22 || (Endabgabe_SS22 = {}));
//# sourceMappingURL=pest.js.map