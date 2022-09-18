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
}