import CommandParser from "../src/CommandParser";
import OnBoardComputer from "../src/OnBoardComputer";

describe("On Board Computer should", () => {
    it("move the rover across the plateau", () => {
        const onBoardComputer = new OnBoardComputer();
        onBoardComputer.execute("5 5\n1 2 N\nLMLMLMLMM");

        expect(onBoardComputer.currentLocation()).toBe("1 3 N");
    });

    it("should call parse method of command factory", () => {
        const parse = jest.fn();
        const CommandParserMock = jest.fn<CommandParser>(() => ({
            parse,
        }));
        const commandParserMock = new CommandParserMock();
        
        const onBoardComputer = new OnBoardComputer(commandParserMock);
        onBoardComputer.execute("");
        expect(commandParserMock.parse).toHaveBeenCalled();
    });
});
