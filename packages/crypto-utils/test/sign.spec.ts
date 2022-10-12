import {createAddress, createKeys, toBase58} from "../src";

const SEED = 'copper venture beauty snake wear million champion enact humor visa prepare garment party rapid annual'

const res = {
    phrase: 'copper venture beauty snake wear million champion enact humor visa prepare garment party rapid annual',
    address: '3NhCzjv9RVbvVKWXYU6JxcjUVJCKLPRb9si',
    keyPair: {
        publicKey: 'FfwfXaYY6o9Gtp7YbkSPuJPZT7bgNLkNiQtY62Tm2RvQ',
        privateKey: '6RpGVxmH528HsqfQkNw9X5XdsZgtgYM3oMPK1CJoK4pp'
    }
}

describe('Utils', () => {
    it('should make public and private keys', async function () {
        const keys = await createKeys(SEED)

        expect(toBase58(keys.publicKey)).toBe(res.keyPair.publicKey)
        expect(toBase58(keys.privateKey)).toBe(res.keyPair.privateKey)
    });

    it('should make address', async function () {
        const keys = await createKeys(SEED)

        expect(toBase58(createAddress(keys.publicKey, 'V'.charCodeAt(0)))).toBe(res.address)
    });
})