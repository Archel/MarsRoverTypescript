import Command from "../src/Command";
import CommandParser from "../src/CommandParser";
import Coordinate from "../src/Coordinate";
import EmptyInputException from "../src/Errors/EmptyInputException";
import InvalidInputException from "../src/Errors/InvalidInputException";
import { Instruction } from "../src/Instruction";
import Position from "../src/Position";

describe("Command parser should", () => {
    it("throw an exception if the input is empty", () => {
        expect(() => {
            const commandParser = new CommandParser();
            commandParser.parse("");
        }).toThrow(EmptyInputException);
    });

    it("throw an exception if the input is invalid", () => {
        expect(() => {
            const commandParser = new CommandParser();
            commandParser.parse("asdfasdfasdfasdf");
        }).toThrow(InvalidInputException);
    });

    it("give us a command if the input was ok", () => {
        const commandParser = new CommandParser();
        const command = commandParser.parse("0 0\n0 0 N\nL");
        expect(command).toBeInstanceOf(Command);
        expect(command.getPlateauBoundaries()).toBeInstanceOf(Coordinate);
        expect(command.getInitialPosition()).toBeInstanceOf(Position);
        expect(command.getInstructions()).toEqual([Instruction.L]);
    });
});
