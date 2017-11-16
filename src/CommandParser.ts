import EmptyInputException from "./Errors/EmptyInputException";

export default class CommandParser {
    public parse(input: string): void {
        throw new EmptyInputException();
    }
}
