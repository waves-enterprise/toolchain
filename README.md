## @wavesenterprise/sdk

SDK for transactions signing and broadcasting in the Waves Enterprise network and interact with Node REST API.

### Install

```shell
npm i @wavesenterprise/sdk @wavesenterprise/transactions-factory @wavesenterprise/signer
```

### Transfer Example

```typescript
import {We} from "@wavesenterprise/sdk";
import {TRANSACTIONS, TRANSACTION_TYPES} from "@wavesenterprise/transactions-factory";
import {Keypair} from '@wavesenterprise/signer';

const SEED = 'copper venture ...'
const NODE_URL = 'https://client.wavesenterprise.com/node-0';

const sdk = new We(NODE_URL);
const keypair = await Keypair.fromExistingSeedPhrase(SEED)

const tx = TRANSACTIONS.Transfer.V3({
    attachment: "",
    senderPublicKey: await keypair.publicKey(),
    amount: 100000000,
    fee,
})

const signedTx = sdk.signer.getSignedTx(tx, SEED);
const res = await tx.broadcast(signedTx);

const txInfo = await sdk.transactions.info(res.id)
```
