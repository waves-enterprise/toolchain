## @wavesenterprise/signer

Library for signing transactions for Waves Enterpise blockchain

### Sign transaction

```javascript
import {Signer} from "@wavesenterprise/signer";
import {TRANSACTIONS} from "@wavesenterprise/transactions-factory";

const SEED = "cancel resemble actor ..."
const signer = new Signer()

const tx = TRANSACTIONS.Transfer.V3({
    senderPublicKey: "AhQHhsmx9EWrJy6juLovM5DZdYCt7cTeoyX2yaTqDdNP",
    amount: 1000000000,
    fee: 100000000,
    recipient: '3NhYbtnmo71sgxji92YkcWtZC9VzKyqSkFV',
    attachment: ""
})

const signedTx = signer.getSignedTx(tx, SEED)

signedTx.getRawData() // tx data with proofs prepared to broadcast
```