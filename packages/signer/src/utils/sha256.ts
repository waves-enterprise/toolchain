import { createHash } from 'crypto'

export const sha256 = (data: Uint8Array) => {
    return createHash('sha256').update(data).digest()
}
