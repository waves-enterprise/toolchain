import {Core} from "../core";


export class NodeApi {
    constructor(private core: Core) {}

    config() {
        return this.core.get('/node/config')
    }
}


