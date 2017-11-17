import Coordinate from "../src/Coordinate";
import { Direction } from "../src/Direction";
import { Instruction } from "../src/Instruction";
import Position from "../src/Position";
import RoverEngine from "../src/RoverEngine";

describe("Rover Engine should", () => {
    it("should move forward", () => {
        const boundaries = new Coordinate(1, 1);
        const coordinate = new Coordinate(1, 0);
        const position = new Position(coordinate, Direction.N);

        const roverEngine = new RoverEngine(boundaries, position);
        roverEngine.exec(Instruction.M);
        expect(roverEngine.printPosition()).toBe("0 0 N");
    });

    it("should rotate left", () => {
        const boundaries = new Coordinate(1, 1);
        const coordinate = new Coordinate(0, 0);
        const position = new Position(coordinate, Direction.N);

        const roverEngine = new RoverEngine(boundaries, position);
        roverEngine.exec(Instruction.L);
        expect(roverEngine.printPosition()).toBe("0 0 W");

        roverEngine.exec(Instruction.L);
        expect(roverEngine.printPosition()).toBe("0 0 S");

        roverEngine.exec(Instruction.L);
        expect(roverEngine.printPosition()).toBe("0 0 E");

        roverEngine.exec(Instruction.L);
        expect(roverEngine.printPosition()).toBe("0 0 N");
    });
});
