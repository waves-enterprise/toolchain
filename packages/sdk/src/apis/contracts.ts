import {Core} from "../core";

export type StateParams = {
    offset: number;
    matches: string;
    limit: number;
}

export class ContractsApi {
    constructor(private core: Core) {
    }

    list() {
        return this.core.get('/contracts')
    }

    status(contractId: string) {
        return this.core.get(`/contracts/status/${contractId}`)
    }

    info(contractId: string) {
        return this.core.get(`/contracts/info/${contractId}`)
    }

    getKey(contractId: string, key: string) {
        return this.core.get(`/contracts/${contractId}/${key}`)
    }

    executedTxFor(txId: string) {
        return this.core.get(`/contracts/executed-tx-for/${txId}`)
    }

    state(contractId: string, params?: Partial<StateParams>) {
        return this.core.get(`/contracts/${contractId}`, {params})
    }

    getKeys(contractId: string, keys: string[]) {
        return this.core.post(`/contracts/${contractId}`, { keys })
    }
}