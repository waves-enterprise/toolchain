import axios, {AxiosRequestConfig, AxiosResponse} from "axios";


export class Core {
    headers: Record<string, string> = {
        accept: 'application/json'
    };

    addHeader(key: string, value: string) {
        this.headers = {
            ...this.headers,
            [key]: value
        }
    }

    constructor(public nodeUrl: string) {

    }

    setApiKey(apiKey: string) {
        this.addHeader('x-api-key', apiKey);
    }

    request(url: string, method: string, config?: AxiosRequestConfig): any;
    request(url: string, method: string, config?: AxiosRequestConfig): any;


    request<Resp>(url: string, method: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Resp>> {
        let requestConfig: AxiosRequestConfig = {
            method,
            url,
            baseURL: this.nodeUrl,
            headers: this.headers,
            ...config
        };

        return axios.request(requestConfig);
    }

    async get<Resp>(uri: string, config?: AxiosRequestConfig): Promise<Resp> {
        const res = await this.request(uri, 'GET', config);

        return res.data;
    }

    async post<T extends any>(uri: string, body: T, config?: AxiosRequestConfig) {
        try {
            const {data} = await this.request(uri, 'POST', {...config, data: body});
            return data
        } catch (e) {
            throw (e as any)?.response?.data || e.message
        }
    }
}