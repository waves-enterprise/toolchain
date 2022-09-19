import {Core} from "../core";

export class BlocksApi {
    constructor(private core: Core) {
    }

    /**
     * @description Get current block height
     *
     */
    height() {
        return this.core.get<{height: number}>('/blocks/height')
    }

    /**
     *
     * @param from
     * @param to
     */
    seq(from: number, to: number) {
        return this.core.get(`/blocks/seq/${from}/${to}`)
    }

    /**
     *
     * @param from
     * @param to
     */
    seqext(from: number, to: number) {
        return this.core.get(`/blocks/seqext/${from}/${to}`)
    }

    /**
     * @description Get child block
     * @param signature
     */
    child(signature: string) {
        return this.core.get(`/blocks/child/${signature}`)
    }

    /**
     * @description Get block by signature
     * @param signature block signature
     */
    get(signature: string) {
        return this.core.get(`/blocks/signature/${signature}`)
    }

    /**
     * @description Get block by height
     * @param height block height
     */
    at(height: number) {
        return this.core.get(`/blocks/at/${height}`)
    }

    /**
     * @description Get block headers by height
     * @param height block height
     */
    headersAt(height: number) {
        return this.core.get(`/blocks/headers/at/${height}`)
    }

    /**
     *
     * @param from
     * @param to
     */
    headersSeq(from: number, to: number) {
        return this.core.get(`/blocks/headers/seq/${from}/${to}`)
    }

    /**
     * @description  Get first block in chain
     */
    first() {
        return this.core.get('/blocks/first')
    }

    /**
     * @description Get last block in chain
     */
    last() {
        return this.core.get('/blocks/last')
    }

    /**
     *
     * @param address
     * @param from
     * @param to
     */
    blocksByAddress(address: string, from: number, to: number) {
        return this.get(`/blocks/address/${address}/${from}/${to}`)
    }
}
