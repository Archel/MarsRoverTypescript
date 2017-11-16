import CommandParser from "../src/CommandParser";
import EmptyInputException from "../src/Errors/EmptyInputException";

describe("Command parser should", () => {
    it("throw an exception if the input is empty", () => {
        expect(() => {
            const commandParser = new CommandParser();
            commandParser.parse("");
        }).toThrow(EmptyInputException);
    });
});
