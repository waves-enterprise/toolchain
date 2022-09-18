import {Core} from "../core";

export class BlocksApi {
    constructor(private core: Core) {
    }

    get(signature: string) {
        return this.core.get(`/blocks/signature/${signature}`)
    }

    at(height: number) {
        return this.core.get(`/blocks/at/${height}`)
    }

    first() {
        return this.core.get('/blocks/first')
    }

    last() {
        return this.core.get('/blocks/last')
    }

    height() {
        return this.core.get('/blocks/height')
    }
}
