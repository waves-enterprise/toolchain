import {Keypair, Signer} from "../src";
import {TRANSACTIONS} from "@wavesenterprise/transactions-factory";

const SEED = 'copper venture beauty snake wear million champion enact humor visa prepare garment party rapid annual'

const res = {
    phrase: 'copper venture beauty snake wear million champion enact humor visa prepare garment party rapid annual',
    address: '3NhCzjv9RVbvVKWXYU6JxcjUVJCKLPRb9si',
    keyPair: {
        publicKey: 'FfwfXaYY6o9Gtp7YbkSPuJPZT7bgNLkNiQtY62Tm2RvQ',
        privateKey: '6RpGVxmH528HsqfQkNw9X5XdsZgtgYM3oMPK1CJoK4pp'
    }
}

const TESTNET_BYTE = 'V'.charCodeAt(0);

describe('Signer', () => {
    it('should make address for testnet network', async function () {
        const keypair = await Keypair.fromExistingSeedPhrase(SEED)
        keypair.setNetworkByte(TESTNET_BYTE)

        expect(await keypair.address()).toEqual(res.address)
    });

    it('should sign transaction', async function () {
        const signer = new Signer();

        const tx = TRANSACTIONS.CallContract.V5({
            contractId: '9TvMKZuebH6NS33it9TeEH8CxmhxKqfunTYaJJc1AMyW',
            contractVersion: 1,
            senderPublicKey: 'FfwfXaYY6o9Gtp7YbkSPuJPZT7bgNLkNiQtY62Tm2RvQ',
            payments: [
                {
                    amount: 10
                }
            ],
            fee: 100000000,
            params: [
                {
                    type: 'string',
                    key: 'action',
                    value: 'transfer',
                },
                {
                    type: "string",
                    key: 'asset',
                    value: "Cb1xsvZYjHgjZAZsdMMtbTwKhJY1kYLfpq1K65uJXJVM"
                },
                {
                    type: "string",
                    key: 'recipient',
                    value: "3NukhxdTpDxXPYky45EPTg1tinzZDUWcbcB"
                },
                {
                    type: "integer",
                    key: 'qty',
                    value: 150
                }
            ]
        });

        const signedTx = await signer.getSignedTx(tx, SEED);

        expect(signedTx.getRawBody()).toBeDefined()
    });
})