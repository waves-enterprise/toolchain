import {Core} from "./core";
import {BlocksApi} from "./apis/blocks";
import {TransactionsApi} from "./apis/transactions";
import {SignedTx, Signer} from "@wavesenterprise/signer";
import {ContractsApi} from "./apis/contracts";
import {NodeApi} from "./apis/node";
import {AssetsApi} from "./apis/assets";
import {AddressesApi} from "./apis/addresses";

export class We extends Core {
    blocks: BlocksApi;
    transactions: TransactionsApi;
    contracts: ContractsApi;
    node: NodeApi;
    assets: AssetsApi;
    addresses: AddressesApi;

    signer: Signer

    constructor(nodeUrl: string) {
        super(nodeUrl);

        this.signer = new Signer();

        this.blocks = new BlocksApi(this);
        this.transactions = new TransactionsApi(this);
        this.contracts = new ContractsApi(this);
        this.node = new NodeApi(this);
        this.assets = new AssetsApi(this)
        this.addresses = new AddressesApi(this);
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

    addAssetsApi(assetsApi: AssetsApi) {
        this.assets = assetsApi;
    }

    broadcast(tx: SignedTx<any>) {
        return this.transactions.broadcast(tx.getRawBody());
    }

    broadcastRaw(tx: object) {
        return this.transactions.broadcast(tx);
    }
}