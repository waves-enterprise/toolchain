import { sha256 as sha256Hash } from "js-sha256";

export const sha256 = (data: Uint8Array) => {
  return new Uint8Array(sha256Hash.array(data));
};
