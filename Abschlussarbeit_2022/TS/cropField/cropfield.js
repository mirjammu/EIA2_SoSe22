"use strict";
var Endabgabe_SS22;
(function (Endabgabe_SS22) {
    class Field {
        position;
        fieldID;
        fieldLength = 125;
        fieldPlant;
        fieldOccupied = false;
        constructor(_position, _fieldID) {
            this.position = _position;
            this.fieldID = _fieldID;
            this.draw();
        }
        get getFieldLength() {
            return this.fieldLength;
        }
        get fieldPosition() {
            return this.position;
        }
        get fieldInfo() {
            return this.fieldOccupied;
        }
        get fieldId() {
            return this.fieldID;
        }
        get plantOnField() {
            return this.fieldPlant;
        }
        setFieldOccupied(_occupation) {
            this.fieldOccupied = _occupation;
        }
        draw() {
            Endabgabe_SS22.crc2.drawImage(Endabgabe_SS22.imgBackground, this.position.x, this.position.y, this.fieldLength, this.fieldLength);
        }
        planting(_plantType) {
            switch (_plantType) {
                case "tomatoe":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Endabgabe_SS22.Tomatoe(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    Endabgabe_SS22.updateCapital();
                    break;
                case "aubergine":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Endabgabe_SS22.Aubergine(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    Endabgabe_SS22.updateCapital();
                    break;
                case "potato":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Endabgabe_SS22.Potato(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    Endabgabe_SS22.updateCapital();
                    break;
                case "carrot":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Endabgabe_SS22.Carrot(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    Endabgabe_SS22.updateCapital();
                    break;
                case "zucchini":
                    this.fieldOccupied = true;
                    this.fieldPlant = new Endabgabe_SS22.Zucchini(this.position, this.fieldID);
                    this.fieldPlant.setSeedValue();
                    this.fieldPlant.buy();
                    Endabgabe_SS22.updateCapital();
                    break;
            }
        }
    }
    Endabgabe_SS22.Field = Field;
})(Endabgabe_SS22 || (Endabgabe_SS22 = {}));
//# sourceMappingURL=cropfield.js.map