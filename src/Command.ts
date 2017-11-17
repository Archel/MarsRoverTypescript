import Coordinate from "./Coordinate";
import { Instruction } from "./Instruction";
import Position from "./Position";

export default class Command {
    public static fromStatments(statments: string[]): Command {
        const command = new Command();
        const plateauBoundaries = statments[0];
        command.plateauBoundaries = new Coordinate(
            parseInt(plateauBoundaries[0], 10),
            parseInt(plateauBoundaries[1], 10),
        );
        
        command.initialPostion = Position.fromStatment(statments[1]);
        command.instructions = command.parseInstructions(statments[2]);

        return command;
    }

    private plateauBoundaries: Coordinate;
    private initialPostion: Position;
    private instructions: Instruction[];

    private constructor() {}

    public getInstructions(): Instruction[] {
        return this.instructions;
    }

    public getInitialPosition(): Position {
        return this.initialPostion;
    }

    public getPlateauBoundaries(): Coordinate {
        return this.plateauBoundaries;
    }

    private parseInstructions(statment: string): Instruction[] {
        const instructions = [];
        for (const instruction of statment) {
            instructions.push(Instruction[instruction]);
        }

        return instructions;
    }
}
