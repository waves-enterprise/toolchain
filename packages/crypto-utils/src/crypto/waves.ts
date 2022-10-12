import { blake2b } from "./blake2b";
import { fromBase58, toBase58 } from "../utils/base58";
import { randomUint8Array } from "../utils/random";
import { sign, verify } from "./axlsign";

const PUBLIC_KEY_LENGTH = 32;

export const createTransactionSignature = (
  bytes: Uint8Array,
  privateKey: string
) => {
  const privateKeyBytes = fromBase58(privateKey);
  const signature = sign(privateKeyBytes, bytes, randomUint8Array(64));
  return toBase58(signature);
};

export const isValidSignature = (
  publicKey: string,
  signature: string,
  dataBytes: Uint8Array
): boolean => {
  if (!dataBytes || !(dataBytes instanceof Uint8Array)) {
    throw new Error("Missing or invalid data");
  }

  if (!signature || typeof signature !== "string") {
    throw new Error("Missing or invalid signature");
  }

  if (!publicKey || typeof publicKey !== "string") {
    throw new Error("Missing or invalid public key");
  }

  const signatureBytes = fromBase58(signature);
  const publicKeyBytes = fromBase58(publicKey);

  if (publicKeyBytes.length !== PUBLIC_KEY_LENGTH) {
    throw new Error("Invalid public key");
  }

  return verify(publicKeyBytes, dataBytes, signatureBytes);
};

export const getTransactionId = (bytes: Uint8Array) => {
  const hash = blake2b(bytes, 32);
  return toBase58(hash);
};
