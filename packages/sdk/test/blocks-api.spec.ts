import {We} from "../src";
import {Keypair} from "@wavesenterprise/signer";

const SEED = 'when cluster camera mistake movie certain category garlic regret believe visit evidence cute legal expire'
const CARTER = 'https://carter.welocal.dev/nodeAddress';
const networkByte = 'V'.charCodeAt(0)

describe('Blocks api', () => {
    let weSdk: We;
    let keyPair: Keypair;

    beforeAll(async () => {
        weSdk = new We(CARTER);


        keyPair = await Keypair.fromExistingSeedPhrase(SEED)
        keyPair.setNetworkByte(networkByte)
    })

    it('should get last block', async function () {
        const res = await weSdk.blocks.height()

        expect(res.height).toBeDefined()
    })
})