import Coordinate from "./Coordinate";
import { Direction } from "./Direction";

const NORTH = Direction.N;
const SOUTH = Direction.S;
const EAST = Direction.E;
const WEST = Direction.W;

const ROTATE_LEFT_TRANSFORMATION = {};
ROTATE_LEFT_TRANSFORMATION[EAST] = NORTH;
ROTATE_LEFT_TRANSFORMATION[NORTH] = WEST;
ROTATE_LEFT_TRANSFORMATION[SOUTH] = EAST;
ROTATE_LEFT_TRANSFORMATION[WEST] = SOUTH;

const ROTATE_RIGHT_TRANSFORMATION = {};
ROTATE_RIGHT_TRANSFORMATION[EAST] = SOUTH;
ROTATE_RIGHT_TRANSFORMATION[NORTH] = EAST;
ROTATE_RIGHT_TRANSFORMATION[SOUTH] = WEST;
ROTATE_RIGHT_TRANSFORMATION[WEST] = NORTH;

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

    constructor(coordinate: Coordinate, direction: Direction) {
        this.coordinate = coordinate;
        this.direction = direction;
    }

    public toString(): string {
        return this.coordinate.toString() + " " + this.direction;
    }

    public rotateLeft(): Position {
        return new Position(this.coordinate, ROTATE_LEFT_TRANSFORMATION[this.direction]);
    }

    public rotateRight(): Position {
        return new Position(this.coordinate, ROTATE_RIGHT_TRANSFORMATION[this.direction]);
    }
}
