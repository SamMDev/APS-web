

export class Passage {

    passageId: Number;
    time: Date;
    gatewayCode: string;
    gatewayName: string;
    personName: string;

    constructor(passageId: Number, time: Date, gatewayCode: string, gatewayName: string, personName: string) {
        this.passageId = passageId;
        this.time = time;
        this.gatewayCode = gatewayCode;
        this.gatewayName = gatewayName;
        this.personName = personName;
    }
}
