import {Core} from "./core";
import {BlocksApi} from "./apis/blocks";
import {TransactionsApi} from "./apis/transactions";
import {SignedTx, Signer} from "@wavesenterprise/signer";
import {ContractsApi} from "./apis/contracts";
import {NodeApi} from "./apis/node";

export class We extends Core {
    blocks: BlocksApi;
    transactions: TransactionsApi;
    contracts: ContractsApi;
    node: NodeApi;

    signer: Signer

    constructor(nodeUrl: string) {
        super(nodeUrl);

        this.signer = new Signer();

        this.blocks = new BlocksApi(this);
        this.transactions = new TransactionsApi(this);
        this.contracts = new ContractsApi(this);
        this.node = new NodeApi(this);
    }

    setSigner(signer: Signer) {
        this.signer = signer;
    }

    addBlocksApi(blocksApi: BlocksApi) {
        this.blocks = blocksApi;
    }

    addTransactionApi(transactionsApi: TransactionsApi) {
        this.transactions = transactionsApi;
    }

    addContractsApi(contractsApi: ContractsApi) {
        this.contracts = contractsApi;
    }

    addNodeApi(nodeApi: NodeApi) {
        this.node = nodeApi;
    }

    async broadcast(tx: SignedTx<any>) {
        return await this.transactions.broadcast(tx.getRawBody());
    }
}