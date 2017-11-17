import Command from "./Command";
import EmptyInputException from "./Errors/EmptyInputException";
import InvalidInputException from "./Errors/InvalidInputException";

export default class CommandParser {
    private readonly VALID_COMMAND_REGEX = /^[0-9]+ [0-9]+[\n][0-9]+ [0-9]+ [N|W|S|E][\n][L|M|R]+/;
    private readonly STATMENTS_SEPARATOR = "\n";

    public parse(input: string): Command {
        if (input === "") {
            throw new EmptyInputException();
        }
        
        if (!this.isValid(input)) {
            throw new InvalidInputException();
        }
        
        return this.createCommand(input);
    }

    private isValid(input: string): boolean {
        return this.VALID_COMMAND_REGEX.test(input);
    }

    private createCommand(input: string): Command {
        const statments = input.split(this.STATMENTS_SEPARATOR);
        return Command.fromStatments(statments);
    }
}
