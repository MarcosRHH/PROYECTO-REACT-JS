import { STATE } from "./state.enum";
export class Contact {
    name = '';
    last_name = '';
    email = '';
    conected = STATE.false;
    
    constructor(name, last_name, email, conected){
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.conected = conected
    }
}