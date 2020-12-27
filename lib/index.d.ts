import { Got } from "got";
export declare class Shoppy {
    static apiKey: string;
    static apiBase: string;
    static HttpClient: Got;
    static HttpClient2: Got;
    constructor(apiKey: string);
    private hashEquals;
    verifyWebhook(xShoppySignature: string, webhookSecret: string, requestBody: Object): boolean;
    getApiKey(): string;
    setApiKey(apiKey: string): void;
}
//# sourceMappingURL=index.d.ts.map