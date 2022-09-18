import {strToBytes} from "../utils/converters/strToBytes";
import {numberToBytes} from "../utils/converters/numberToBytes";
import {ADDRESS_VERSION, NONCE} from "../consts";
import {ShaFunction} from "../types";
import dictionary from "../utils/dictionary";
import {randomUint32Array} from "../utils/random";
import {blake2b} from "./blake2b";
import createKeccakHash from 'keccak'
import {generateKeyPair} from "./axlsign";
import {concatBytes} from "../utils/concatBytes";

const hashChain = (bytes: Uint8Array) => {
    return createKeccakHash('keccak256').update(Buffer.from(blake2b(bytes, 32))).digest()
}

export const createSeedPhrase = async (sha256: ShaFunction, words: number) => {
    const rand = await randomUint32Array(sha256, words)
    const wordsCount = dictionary.length
    const phrase = []
    for (let i = 0; i < words; i++) {
        const wordIndex = rand[i] % wordsCount
        phrase.push(dictionary[wordIndex])
    }
    return phrase
}

export const createKeys = async (sha256: ShaFunction, seed: string) => {
    const seedBytes = strToBytes(seed)
    const nonceBytes = numberToBytes(NONCE, 4)
    const seedBytesWithNonce = new Uint8Array(concatBytes(nonceBytes, seedBytes))
    const seedHash = hashChain(seedBytesWithNonce)
    const hash = await sha256(seedHash)
    return generateKeyPair(hash)
}

export const createAddress = (publicKeyBytes: Uint8Array, networkByte: number) => {
    const prefix = new Uint8Array([ADDRESS_VERSION, networkByte])
    const publicKeyHashPart = new Uint8Array(hashChain(publicKeyBytes).slice(0, 20))
    const rawAddress = new Uint8Array(concatBytes(prefix, publicKeyHashPart))
    const addressHash = new Uint8Array(hashChain(rawAddress).slice(0, 4))

    return new Uint8Array(concatBytes(rawAddress, addressHash))
}