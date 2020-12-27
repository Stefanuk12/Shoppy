import { Got } from "got";
export { Feedback } from './Models/Feedback';
export { Order } from './Models/Order';
export { PayV1 } from './Models/PayV1';
export { PayV2 } from './Models/PayV2';
export { Product } from './Models/Product';
export { Query } from './Models/Query';
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