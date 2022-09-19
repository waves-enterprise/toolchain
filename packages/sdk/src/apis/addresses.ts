import {Core} from "../core";

type DataParams = {
    offset: number;
    limit: number;
}

export class AddressesApi {
    constructor(private core: Core) {
    }

    info(address: string) {
        return this.core.get(`/addresses/info/${address}`)
    }

    seq(from: number, to: number) {
        return this.core.get(`/addresses/seq/${from}/${to}`)
    }

    addressByPublicKey(publicKey: string): Promise<string> {
        return this.core.get<string>(`/addresses/publicKey/${publicKey}`);
    }

    balance(address: string) {
        return this.core.get(`/addresses/balance/${address}`);
    }

    validate(addressOrAlias: string) {
        return this.core.get(`/addresses/validate/${addressOrAlias}`)
    }


    data(address: string, params: DataParams) {
        return this.core.get(`/addresses/data/${address}/${params}`)
    }

    scriptInfo(address: string) {
        return this.core.get(`/addresses/sriptInfo/${address}`)
    }

    balanceDetails(address: string) {
        return this.core.get(`/addresses/balance/details/${address}`)
    }

    balancesDetails(addresses: string[]) {
        return this.core.post(`/addresses/balance/details`, {addresses})
    }

    effectiveBalance(address: string, confirmations?: number) {
        let uri = `/addresses/effectiveBalance/${address}`

        if (confirmations !== undefined) {
            uri += `/${confirmations}`
        }

        return this.core.get(uri)
    }

    generatingBalance(address: string, height: string) {
        return this.core.get(`/addresses/generatingBalance/${address}/at/${height}`)
    }

    sign(address: string, params: { message: string, password: string }) {
        return this.core.post(`/addresses/sign/${address}`, params)
    }

    verify(address: string, params: { message: string, signature: string, publicKey: string }) {
        return this.core.post(`/addresses/verify/${address}`, params)
    }

    signText(address: string, params: { message: string, password: string }) {
        return this.core.post(`/addresses/signText/${address}`, params)
    }

    verifyText(address: string, params: { message: string, signature: string, publicKey: string }) {
        return this.core.post(`/addresses/verifyText/${address}`, params)
    }
}