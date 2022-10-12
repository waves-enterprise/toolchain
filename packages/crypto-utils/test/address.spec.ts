import {fromBase58, generateKeyPair, toBase58} from "../src";


const SEED = 'copper venture beauty snake wear million champion enact humor visa prepare garment party rapid annual'

const res = {
    phrase: 'copper venture beauty snake wear million champion enact humor visa prepare garment party rapid annual',
    address: '3NhCzjv9RVbvVKWXYU6JxcjUVJCKLPRb9si',
    keyPair: {
        publicKey: 'FfwfXaYY6o9Gtp7YbkSPuJPZT7bgNLkNiQtY62Tm2RvQ',
        privateKey: '6RpGVxmH528HsqfQkNw9X5XdsZgtgYM3oMPK1CJoK4pp'
    }
}


describe('Address', () => {
    it('should make public key from private key', async function () {
        const keypair = generateKeyPair(fromBase58(res.keyPair.privateKey))

        expect(toBase58(keypair.publicKey)).toEqual(res.keyPair.publicKey)
    });
})