import {Core} from "../core";

export class AssetsApi {
    static prefix = '/assets';

    constructor(private core: Core) {
    }

    assetBalance(address: string, assetId: string) {
        return this.core.get(`${AssetsApi.prefix}/${address}/${assetId}`)
    }

    assetsBalance(addresses: string[]) {
        return this.core.post(`${AssetsApi.prefix}/balance`, {addresses})
    }

    assetDetails(assetId: string) {
        return this.core.get(`${AssetsApi.prefix}/details/${assetId}`)
    }

    addressAssets(address: string) {
        return this.core.get(`${AssetsApi.prefix}/assets/balance/${address}`)
    }
}