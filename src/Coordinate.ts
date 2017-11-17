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

    public applyTransformation({x, y}): Coordinate {
        const newX = this.x + x;
        const newY = this.y + y;
        return new Coordinate(newX, newY);
    }

    public isBetween(origin, maxCoordinate): boolean {
        return origin.x <= this.x
                && origin.y <= this.y
                && maxCoordinate.x >= this.x
                && maxCoordinate.y >= this.y;
    }
}
