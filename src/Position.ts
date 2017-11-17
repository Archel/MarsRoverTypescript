import Coordinate from "./Coordinate";
import { Direction } from "./Direction";

export default class Position {
    public static fromStatment(statment: string): Position {
        const position = statment.split(" ");
        return new Position(new Coordinate(
                parseInt(position[0], 10),
                parseInt(position[1], 10),
            ),
            Direction[position[2]],
        );
    }

    private coordinate: Coordinate;
    private direction: Direction;

    private constructor(coordinate: Coordinate, direction: Direction) {
        this.coordinate = coordinate;
        this.direction = direction;
    }
}
