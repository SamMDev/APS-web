import {Person} from "./Person";
import {ChipCardDetailForPerson} from "../chip-card/ChipCardDetailForPerson";

export class PersonDetail extends Person {
    chipCards !: ChipCardDetailForPerson[];
}
