import {TRANSACTIONS} from "@wavesenterprise/transactions-factory";
import {We} from "../src";

const SEED = 'when cluster camera mistake movie certain category garlic regret believe visit evidence cute legal expire'
const CARTER = 'https://carter.welocal.dev/nodeAddress';
const networkByte = 'V'.charCodeAt(0)

async function main() {
    const weSdk = new We(CARTER);

    const tx = TRANSACTIONS.CallContract.V5({
        contractId: '9TvMKZuebH6NS33it9TeEH8CxmhxKqfunTYaJJc1AMyW',
        contractVersion: 1,
        senderPublicKey: 'AhQHhsmx9EWrJy6juLovM5DZdYCt7cTeoyX2yaTqDdNP',
        payments: [
            // {
            //     assetId: 'WEST',
            //     amount: 10000000
            // }
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

    await weSdk.broadcast(signedTx);
}


main()
    .then(() => console.log('Contract call executed successfully'))
    .catch(console.error)