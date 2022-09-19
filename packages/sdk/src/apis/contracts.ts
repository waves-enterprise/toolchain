import {Core} from "../core";

export type StateParams = {
    offset: number;
    matches: string;
    limit: number;
}

export class ContractsApi {
    static prefix: '/contract'

    constructor(private core: Core) {}

    list() {
        return this.core.get('/contracts')
    }

    contractsState(contracts: string[]) {
        return this.core.post(`${ContractsApi.prefix}`, {contracts})
    }

    info(contractId: string) {
        return this.core.get(`/contracts/info/${contractId}`)
    }

    status(contractId: string) {
        return this.core.get(`/contracts/status/${contractId}`)
    }

    getKey(contractId: string, key: string) {
        return this.core.get(`/contracts/${contractId}/${key}`)
    }

    getKeys(contractId: string, keys: string[]) {
        return this.core.post(`/contracts/${contractId}`, {keys})
    }

    executedTxFor(txId: string) {
        return this.core.get(`/contracts/executed-tx-for/${txId}`)
    }

    contractState(contractId: string, params?: Partial<StateParams>) {
        return this.core.get(`/contracts/${contractId}`, {params})
    }

    systemBalance(contractId: string,) {
        return this.core.get(`/contracts/balance/${contractId}`)
    }

    assetBalance(contractId: string, assetId: string) {
        return this.core.get(`/contracts/asset-balance/${contractId}/${assetId}`)
    }

    assetBalances(contractId: string, assetIds: string[]) {
        return this.core.post(`/contracts/asset-balances`, {
            contractId,
            assetIds
        })
    }
}