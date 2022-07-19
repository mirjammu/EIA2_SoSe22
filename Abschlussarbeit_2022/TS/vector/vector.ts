namespace Endabgabe_SS22 {

  export class Vector {
    public x: number;
    public y: number;

    public constructor(_x: number = 0, _y: number = 0) {
      this.set(_x, _y);
    }

    public static getDifference(_v0: Vector, _v1: Vector): Vector {
      return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
    }

    public static getdistance(_v0: Vector, _v1: Vector): number {
      let distanceX: number = _v0.x - _v1.x;
      let distanceY: number = _v0.y - _v1.y;
      return Math.hypot(distanceX, distanceY);
    }

    public set(_x: number, _y: number): void {
      this.x = _x;
      this.y = _y;
    }

    public scale(_factor: number): void {
      this.x *= _factor;
      this.y *= _factor;
    }

    public add(_addend: Vector): void {
      this.x += _addend.x;
      this.y += _addend.y;
    }

    public copy(): Vector {
      
      return new Vector(this.x, this.y);
    }
  }
}