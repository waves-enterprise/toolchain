import {Core} from "../core";

export class TransactionsApi {
    constructor(private core: Core) {
    }

    info(txId: string) {
        return this.core.get(`/transactions/info/${txId}`)
    }

    sign(tx: object) {
        return this.core.post(`/transactions/sign`, tx)
    }

    utxSize() {
        return this.core.get('/transactions/unconfirmed/size')
    }

    utx() {
        return this.core.get('/transactions/unconfirmed')
    }

    utxInfo(txId: string) {
        return this.core.get(`/transactions/unconfirmed/info/${txId}`)
    }

    calculateFee(tx: any) {
        return this.core.post('/transactions/calculateFee', tx);
    }

    broadcast(tx: any) {
        return this.core.post('/transactions/broadcast', tx);
    }

    signAndBroadcast(tx: any) {
        return this.core.post('/transactions/signAndBroadcast', tx);
    }

    addressTxs(address: string, limit: number) {
        return this.core.get(`/transactions/address/${address}/limit/${limit}`)
    }
}