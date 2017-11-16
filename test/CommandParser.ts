import CommandParser from "../src/CommandParser";
import EmptyInputException from "../src/Errors/EmptyInputException";
import InvalidInputException from "../src/Errors/InvalidInputException";

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
});
