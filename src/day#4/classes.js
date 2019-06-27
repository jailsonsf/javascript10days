class Polygon {
    constructor(sidesValues) {
        this.sides = sidesValues;
    }

    perimeter() {
        this.perimeterValue = 0;

        for (let i = 0; i < this.sides.length; i++) {
            this.perimeterValue += this.sides[i];
        }
        return this.perimeterValue;
    }
}
