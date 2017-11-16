import CommandFactory from "./CommandFactory";

export default class OnBoardComputer {
    private commandFactory: CommandFactory;
    
    constructor(commandFactory: CommandFactory) {
        this.commandFactory = commandFactory;
    }

    public execute(input: string): void {
        const command = this.commandFactory.parse(input);
    }
}
