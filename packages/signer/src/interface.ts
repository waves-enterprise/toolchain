import {BaseTx} from "@wavesenterprise/transactions-factory";

export interface ISigner {
    sign(tx: BaseTx<any> | string, seed?: string): string;
}