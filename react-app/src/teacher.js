import { Person } from './person';
export function promote() { };
//default -> import ... from path;
//named -> import {...} from path;
export default class Teacher extends Person {
    constructor(name, degree) {
        super(name); //transfer variables first
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
};
