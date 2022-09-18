import {BaseTx} from '@wavesenterprise/transactions-factory'
import {Keypair} from "./common/keypair";
import {SignedTx} from "./signed-tx";
import {getTransactionId} from "@wavesenterprise/crypto-utils";

export * from './common/keypair';
export * from './interface';
export * from './signed-tx';

export class Signer {
    async getSignedTx(tx: BaseTx<any>, seed: string): Promise<SignedTx<any>> {
        const keypair = await Keypair.fromExistingSeedPhrase(seed)
        const txBytes = await tx.getBytes();

        const signedTx = new SignedTx(tx);

        const signature = await keypair.sign(txBytes)
        const txId = getTransactionId(txBytes)

        signedTx.setId(txId);
        signedTx.proofs.add(signature)

        return signedTx;
    }
}