import {
    createAddress,
    createKeys,
    createTransactionSignature,
    KeyPairBytes,
    strToBytes,
    toBase58
} from '@wavesenterprise/crypto-utils';
import {sha256} from "../utils/sha256";


export class Keypair {
    constructor(
        private keyPairBytes: KeyPairBytes,
        private networkByte: number = 'V'.charCodeAt(0)) {
    }

    setNetworkByte(byte: number) {
        this.networkByte = byte;
    }

    async publicKey(): Promise<string> {
        return toBase58(this.keyPairBytes.publicKey)
    }

    async privateKey(): Promise<string> {
        return toBase58(this.keyPairBytes.privateKey)
    }

    async address(): Promise<string> {
        return toBase58(createAddress(this.keyPairBytes.publicKey, this.networkByte))
    }

    static async fromExistingSeedPhrase(phrase: string) {
        const keys = await createKeys(sha256, phrase);

        return new Keypair(keys)
    }

    async sign(msg: string | Uint8Array) {
        const signature = createTransactionSignature(
            typeof msg === 'string' ? strToBytes(msg) : msg,
            await this.privateKey()
        )

        return signature;
    }
}