import got, { Got } from "got";
import * as crypto from 'crypto';

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
        });
    };


    // Verify if a webhook is valid
    private hashEquals(answer: string, guess: string){
        // Vars
        const rb = crypto.pseudoRandomBytes(32);
        const ahmac = crypto.createHmac('sha256', rb).update(answer).digest('hex');
        const ghmac = crypto.createHmac('sha256', rb).update(guess).digest('hex');
        const len = ahmac.length;

        // Loop
        let result = 0;
        for (let i = 0; i < len; ++i) {
            result |= (ahmac.charCodeAt(i) ^ ghmac.charCodeAt(i));
        };

        // Return
        return result === 0;
    };
    verifyWebhook(xShoppySignature: string, webhookSecret: string, requestBody: Object){
        // Generate Hmac
        const generatedHmac = crypto.createHmac('sha512', webhookSecret)
        .update(JSON.stringify(requestBody))
        .digest('base64');

        // Return
        return this.hashEquals(generatedHmac, xShoppySignature);
    };

    // Get the API Key
    getApiKey(){
        return Shoppy.apiKey;
    };

    // Setting the API Key
    setApiKey(apiKey: string){
        Shoppy.apiKey = apiKey;
    };
};