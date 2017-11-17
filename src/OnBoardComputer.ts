import Command from "./Command";
import CommandParser from "./CommandParser";
import RoverEngine from "./RoverEngine";

export default class OnBoardComputer {
    private commandParser: CommandParser;
    private roverEngine: RoverEngine;

    constructor(commandFactory: CommandParser) {
        this.commandParser = commandFactory;
    }

    public execute(input: string): void {
        const command = this.commandParser.parse(input);
    }

    private initializeRoverEngine(command: Command): void {
        this.roverEngine = RoverEngine.fromCommand(command);
    }
}
