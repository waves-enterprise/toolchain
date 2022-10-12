import {
    createAddress,
    createKeys,
    createSeedPhrase,
    createTransactionSignature,
    KeyPairBytes,
    strToBytes,
    toBase58
} from '@wavesenterprise/crypto-utils';
import {fromBase58, generateKeyPair} from "@wavesenterprise/crypto-utils";


export class Keypair {
    constructor(
        private keyPairBytes: KeyPairBytes,
        private _phrase?: string,
        private networkByte: number = 'V'.charCodeAt(0)) {
    }

    setNetworkByte(byte: number) {
        this.networkByte = byte;
    }

    phrase(): string {
        if (!this._phrase) {
            throw new Error('Keypair created from private key')
        }

        return this._phrase
    }

    async publicKey(): Promise<string> {
        return toBase58(this.keyPairBytes.publicKey)
    }

    async privateKey(): Promise<string> {
        return toBase58(this.keyPairBytes.privateKey)
    }

    async address(networkByte?: number): Promise<string> {
        return toBase58(createAddress(this.keyPairBytes.publicKey, networkByte || this.networkByte))
    }

    static async generate(words = 15) {
        const seed = await createSeedPhrase(words)

        return this.fromExistingSeedPhrase(seed.join(' '))
    }

    static async fromString(privateKey: string) {
        const keyPair = generateKeyPair(fromBase58(privateKey))

        return new Keypair(keyPair)
    }

    static async fromExistingSeedPhrase(phrase: string) {
        const keys = await createKeys(phrase);

        return new Keypair(keys, phrase)
    }

    async sign(msg: string | Uint8Array) {
        const signature = createTransactionSignature(
            typeof msg === 'string' ? strToBytes(msg) : msg,
            await this.privateKey()
        )

        return signature;
    }
}