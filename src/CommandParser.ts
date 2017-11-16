import EmptyInputException from "./Errors/EmptyInputException";
import InvalidInputException from "./Errors/InvalidInputException";

const VALID_COMMAND_REGEX = /^[0-9]+ [0-9]+\\n[0-9]+ [0-9]+ [N|W|S|E]\\n[L|M|R]+/;

export default class CommandParser {
    public parse(input: string): void {
        if (input === "") {
            throw new EmptyInputException();
        }
        
        if (!this.isValid(input)) {
            throw new InvalidInputException();
        }
        
    }

    private isValid(input: string): boolean {
        return VALID_COMMAND_REGEX.test(input);
    }
}
