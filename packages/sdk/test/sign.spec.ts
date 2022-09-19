import {TRANSACTIONS} from "@wavesenterprise/transactions-factory";
import {We} from "../src";
import {Keypair} from "@wavesenterprise/signer";

const SEED = 'when cluster camera mistake movie certain category garlic regret believe visit evidence cute legal expire'
const CARTER = 'https://carter.welocal.dev/nodeAddress';
const networkByte = 'V'.charCodeAt(0)

describe('Test asset Operations', () => {
    let weSdk: We;
    let keyPair: Keypair;

    beforeAll(async () => {
        weSdk = new We(CARTER);

        keyPair = await Keypair.fromExistingSeedPhrase(SEED)
        keyPair.setNetworkByte(networkByte)
    })

    describe('CallContract', async function () {
        it('should sign and broadcast call contract v5', async function () {
            const tx = TRANSACTIONS.CallContract.V5({
                contractId: '9TvMKZuebH6NS33it9TeEH8CxmhxKqfunTYaJJc1AMyW',
                contractVersion: 1,
                senderPublicKey: await keyPair.publicKey(),
                payments: [
                    {
                        amount: 10000000
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

            const signedTx = await weSdk.signer.getSignedTx(tx, SEED);
            const res = await weSdk.broadcast(signedTx);

            console.log(res)

            expect(res).toBeDefined()
        });
    })

    describe('Transfer', () => {
        it('should sign and broadcast transfer v3 transact', async function () {
            const tx = TRANSACTIONS.Transfer.V3({
                senderPublicKey: "AhQHhsmx9EWrJy6juLovM5DZdYCt7cTeoyX2yaTqDdNP",
                amount: 1000000000,
                fee: 100000000,
                recipient: '3NhYbtnmo71sgxji92YkcWtZC9VzKyqSkFV',
                attachment: ""
            })

            const signedTx = await weSdk.signer.getSignedTx(tx, SEED);
            const res = await weSdk.broadcast(signedTx);

            expect(res).toBeDefined()
        });

        it('should sign and broadcast transfer v2 transact', async function () {
            const tx = TRANSACTIONS.Transfer.V2({
                senderPublicKey: "AhQHhsmx9EWrJy6juLovM5DZdYCt7cTeoyX2yaTqDdNP",
                amount: 1000000000,
                fee: 100000000,
                recipient: '3NhYbtnmo71sgxji92YkcWtZC9VzKyqSkFV',
                attachment: ""
            })

            const signedTx = await weSdk.signer.getSignedTx(tx, SEED);
            const res = await weSdk.broadcast(signedTx);

            expect(res).toBeDefined()
        });
    })
})