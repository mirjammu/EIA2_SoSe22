"use strict";
var Endabgabe_SS22;
(function (Endabgabe_SS22) {
    class Vector {
        x;
        y;
        constructor(_x = 0, _y = 0) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        static getdistance(_v0, _v1) {
            let distanceX = _v0.x - _v1.x;
            let distanceY = _v0.y - _v1.y;
            return Math.hypot(distanceX, distanceY);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    Endabgabe_SS22.Vector = Vector;
})(Endabgabe_SS22 || (Endabgabe_SS22 = {}));
//# sourceMappingURL=vector.js.map