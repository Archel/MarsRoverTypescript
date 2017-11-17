import Coordinate from "../src/Coordinate";
import { Direction } from "../src/Direction";
import { Instruction } from "../src/Instruction";
import Position from "../src/Position";
import RoverEngine from "../src/RoverEngine";

function buildRoverEngine(coordinate: Coordinate, direction: Direction): RoverEngine {
    const boundaries = new Coordinate(1, 1);
    const position = new Position(coordinate, direction);

    return new RoverEngine(boundaries, position);
}

describe("Rover Engine should", () => {
    it("should move north", () => {
        const coordinate = new Coordinate(0, 1);
        const roverEngine = buildRoverEngine(coordinate, Direction.N);
        roverEngine.exec(Instruction.M);
        expect(roverEngine.printPosition()).toBe("0 0 N");
    });

    it("should move east", () => {
        const coordinate = new Coordinate(0, 0);
        const roverEngine = buildRoverEngine(coordinate, Direction.E);
        roverEngine.exec(Instruction.M);
        expect(roverEngine.printPosition()).toBe("1 0 E");
    });
    
    it("should move west", () => {
        const coordinate = new Coordinate(1, 0);
        const roverEngine = buildRoverEngine(coordinate, Direction.W);
        roverEngine.exec(Instruction.M);
        expect(roverEngine.printPosition()).toBe("0 0 W");
    });
    
    it("should move south", () => {
        const coordinate = new Coordinate(0, 0);
        const roverEngine = buildRoverEngine(coordinate, Direction.S);
        roverEngine.exec(Instruction.M);
        expect(roverEngine.printPosition()).toBe("0 1 S");
    });

    it("should rotate left", () => {
        const coordinate = new Coordinate(0, 0);
        const roverEngine = buildRoverEngine(coordinate, Direction.N);

        roverEngine.exec(Instruction.L);
        expect(roverEngine.printPosition()).toBe("0 0 W");

        roverEngine.exec(Instruction.L);
        expect(roverEngine.printPosition()).toBe("0 0 S");

        roverEngine.exec(Instruction.L);
        expect(roverEngine.printPosition()).toBe("0 0 E");

        roverEngine.exec(Instruction.L);
        expect(roverEngine.printPosition()).toBe("0 0 N");
    });

    it("should rotate right", () => {
        const coordinate = new Coordinate(0, 0);
        const roverEngine = buildRoverEngine(coordinate, Direction.N);

        roverEngine.exec(Instruction.R);
        expect(roverEngine.printPosition()).toBe("0 0 E");

        roverEngine.exec(Instruction.R);
        expect(roverEngine.printPosition()).toBe("0 0 S");

        roverEngine.exec(Instruction.R);
        expect(roverEngine.printPosition()).toBe("0 0 W");

        roverEngine.exec(Instruction.R);
        expect(roverEngine.printPosition()).toBe("0 0 N");
    });
});
