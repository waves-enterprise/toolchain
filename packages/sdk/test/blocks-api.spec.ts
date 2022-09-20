import {We} from "../src";
import {Keypair} from "@wavesenterprise/signer";

const SEED = 'when cluster camera mistake movie certain category garlic regret believe visit evidence cute legal expire'
const CARTER = 'https://carter.welocal.dev/nodeAddress';
const networkByte = 'V'.charCodeAt(0)
const TOKEN = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJ1c2VyIiwiYXV0aF91c2VyIl0sImlhdCI6MTY2MzU4ODc2MCwiZXhwIjoxNjYzNTk0NzYwLCJqdGkiOiIzMmQ4MTFiMi1jMTlkLTQwNjctOTRmZi1kNzQ5OTRiMjgzMGQifQ.KY0C4WKmKfC5BU0qndTFPUiG1DwA_bsYuiqe2zKdTANKUBJVk_VyNJ7mKTcLBJciOKN0_tjRBvIam9Tv7BXLN4w6Ey_rfpUE-wQTijBt_IiIv7-rYTFoY9p8fEpelZzXCkejtaLNRGFNTVJg5yvaKtQp9-X_yqrfi2REv1cx8AQBSmV5AnTRUtWFBGD_CaG3i3tXBSJKkNh314MOjoURlXmmQW_IxHc0DyB8sCg3p8CUTze2d0-pjfChGWVBvK5nLdPgBOKo41aoJUrWLOe6qwAkWDyHBJevlnBmzU7-1i6laimno7Dm5FnHuoB4DU3_ClzzDvo5E1W3WxymuhXDTXJ6AZRAmO_NFiWOfzix22bx0taFGuUIF_GaWG6_xJt5qkc5nGeIkcZkYPga3qvV1v-_TgcOo3DUk9Zhgxoqtczqt-Pzf71zAa1HXaY4Fiyv8e2PTSIJnbOtHEGHwV5s6bMVmbJAOzgktjzcrP-Nk6FZIbA5YB4qLEDQFV7HKAxP5S9ApBQESGJO-snnQ5zf2MHSFj9XWYrp8pnk95YGlrjFBoAtW_oUsO7dAYpfqS8if_Akk8D9wXRAc5QDOX3SJvvwkNfQj25P2q9ziV8uDRhQTR3ZBdL0UzN7MducxAAe-pLFiSCr8TWmAE31SzKZOzxCY5KymXPWpnf_W3KyCok","refresh_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJ1c2VyIiwiYXV0aF91c2VyIl0sImlhdCI6MTY2MzU4ODc2MCwiZXhwIjoxNjYzNjE4NzYwLCJqdGkiOiIzMmQ4MTFiMi1jMTlkLTQwNjctOTRmZi1kNzQ5OTRiMjgzMGQifQ.2mVquJZNd8maxlO28FwTwS6GdeD_5e1KrInEKr29BybIdJ93--9QbX3zZfcleREj_jV2JCOvGXLszSKltPKwc_DuoA-s8dQjo40U2Ftt2SS9wpjQJ27LTbfPYCld8VSvO1RNZQ5279ILiI-hMaNUDwoBl2GUpgoWYyfo-9ilaLCYt6D-xFIS5l6ECvO-XgjRW0bekDvMO_4ScJR061iKjpKj417JgPgOD2-4D1PiD3a6sdJU5zHM_rS1ZmGdu3rQUbsgtSveEH-cC3n49rbMoj_U7E3wcCP25ImuvZFzJrLVbJE5DDy7YUzS6wmHPofsKiw6Q6uqKLNqKp1BCgLwFnLLbquB8jmcdtNL4Dx50_9y1RhFwmoF29DPKgyvt32MExvTU5T1ZFI37tqFhFq5Qq-VQMeH9BMspkIuAlTWofx7wdbnO5yTpBwCN6byOBqHAz1ZuV3S9ZEUNLDgV9ruLdFq4ZdagEkz9I0TAKkqcGqA7bLAEa5lW6caRtltV3pgz5uk2NwH1XLkqay0owVDgV8prVhKeBxup_GxSdOUEN8mEYSSTFsBctqhbEu0q8rMdTH-FHEY4yOgwHuCZLrQKcYtm2tAajqYXT6a5bzT2SWhWpy6O-Ypm09oQaKPJ1QYpuogToSgRSfNZpVVbel8DlJ8RGrt8apajtT5o7XMiVM`


describe('Blocks api', () => {
    let weSdk: We;
    let keyPair: Keypair;

    beforeAll(async () => {
        weSdk = new We(CARTER);

        weSdk.addHeader('authorization', "Bearer " + TOKEN)

        keyPair = await Keypair.fromExistingSeedPhrase(SEED)
        keyPair.setNetworkByte(networkByte)
    })

    it('should get block height', async function () {
        const res = await weSdk.blocks.height()

        expect(res.height).toBeDefined()
    })


    it('should get last block', async function () {
        const res = await weSdk.blocks.last()

        expect(res).toBeDefined()
    })
})