import Coordinate from "./Coordinate";
import { Direction } from "./Direction";
import { Instruction } from "./Instruction";
import Position from "./Position";

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
        this.position = new Position(new Coordinate(0, 0), Direction.N);
    }

    private turnLeft(): void {
        this.position = this.position.rotateLeft();
    }

    private turnRight(): void {
        this.position = this.position.rotateRight();
    }
}
