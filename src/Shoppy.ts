import got, { Got } from "got";

export class Shoppy {
    // Vars
    static apiKey: string;
    static apiBase: string = "https://shoppy.gg/api";
    static HttpClient: Got;
    static HttpClient2: Got;

    // Constructor
    constructor(apiKey: string){
        Shoppy.apiKey = apiKey;
        Shoppy.HttpClient = got.extend({
            prefixUrl: 'https://shoppy.gg/api/v1',
            headers: {
                'Authorization': `${Shoppy.apiKey}`,
                'User-Agent': `shoppy-ts`
            }
        });
        Shoppy.HttpClient2 = got.extend({
            prefixUrl: 'https://shoppy.gg/api/v2',
            headers: {
                'Authorization': `${Shoppy.apiKey}`,
                'User-Agent': `shoppy-ts`
            }
        })
    };

    getApiKey(){
        return Shoppy.apiKey;
    };

    setApiKey(apiKey: string){
        Shoppy.apiKey = apiKey;
    };
};