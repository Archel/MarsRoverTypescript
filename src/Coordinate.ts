export default class Coordinate {
    public x;
    public y;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public toString(): string {
        return this.x + " " + this.y;
    }
}
