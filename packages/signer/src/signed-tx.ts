import {BaseTx, TxProcessor} from "@wavesenterprise/transactions-factory";
import {getTransactionId} from "@wavesenterprise/crypto-utils";

export class SignedTx<T extends TxProcessor> {
    proofs = new Set<string>()
    id?: string;

    constructor(private baseTx: BaseTx<T>) {
    }

    setId(id: string) {
        this.id = id;
    }

    async getId() {
        const bytes = await this.baseTx.getBytes();

        return getTransactionId(bytes);
    }

    getRawBody(): object {
        const proofs: string[] = [];

        for (let proof of this.proofs.values()) {
            proofs.push(proof)
        }

        let body: any = {
            ...this.baseTx.getBody(),
            proofs,
        };

        if (this.id) {
            body.id = this.id
        }

        return body;
    }
}