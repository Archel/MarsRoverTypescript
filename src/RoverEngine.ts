import Coordinate from "./Coordinate";
import { Direction } from "./Direction";
import OutOfBoundsException from "./Errors/OutOfBoundsException";
import { Instruction } from "./Instruction";
import Position from "./Position";

const ORIGIN = new Coordinate(0, 0);

export default class RoverEngine {
    private boundaries: Coordinate;
    private position: Position;

    constructor(boundaries: Coordinate, position: Position) {
        this.boundaries = boundaries;
        this.position = position;
    }

    public exec(instruction: Instruction): void {
        if (instruction === Instruction.M) {
            this.move();
        }

        if (instruction === Instruction.L) {
            this.turnLeft();
        }

        if (instruction === Instruction.R) {
            this.turnRight();
        }
    }

    public printPosition(): string {
        return this.position.toString();
    }

    private move(): void {
        const newPosition = this.position.forward();

        if (this.isOutOfBounds(newPosition)) {
            throw new OutOfBoundsException();
        }

        this.position = newPosition;
    }

    private turnLeft(): void {
        this.position = this.position.rotateLeft();
    }

    private turnRight(): void {
        this.position = this.position.rotateRight();
    }

    private isOutOfBounds(position: Position): boolean {
        return !position.isBetween(ORIGIN, this.boundaries);
    }
}
