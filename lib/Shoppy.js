"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shoppy = void 0;
const got_1 = __importDefault(require("got"));
const crypto = __importStar(require("crypto"));
class Shoppy {
    // Constructor
    constructor(apiKey) {
        Shoppy.apiKey = apiKey;
        Shoppy.HttpClient = got_1.default.extend({
            prefixUrl: 'https://shoppy.gg/api/v1',
            headers: {
                'Authorization': `${Shoppy.apiKey}`,
                'User-Agent': `shoppy-ts`
            }
        });
        Shoppy.HttpClient2 = got_1.default.extend({
            prefixUrl: 'https://shoppy.gg/api/v2',
            headers: {
                'Authorization': `${Shoppy.apiKey}`,
                'User-Agent': `shoppy-ts`
            }
        });
    }
    ;
    // Verify if a webhook is valid
    hashEquals(answer, guess) {
        // Vars
        const rb = crypto.pseudoRandomBytes(32);
        const ahmac = crypto.createHmac('sha256', rb).update(answer).digest('hex');
        const ghmac = crypto.createHmac('sha256', rb).update(guess).digest('hex');
        const len = ahmac.length;
        // Loop
        let result = 0;
        for (let i = 0; i < len; ++i) {
            result |= (ahmac.charCodeAt(i) ^ ghmac.charCodeAt(i));
        }
        ;
        // Return
        return result === 0;
    }
    ;
    verifyWebhook(xShoppySignature, webhookSecret, requestBody) {
        // Generate Hmac
        const generatedHmac = crypto.createHmac('sha512', webhookSecret)
            .update(JSON.stringify(requestBody))
            .digest('base64');
        // Return
        return this.hashEquals(generatedHmac, xShoppySignature);
    }
    ;
    // Get the API Key
    getApiKey() {
        return Shoppy.apiKey;
    }
    ;
    // Setting the API Key
    setApiKey(apiKey) {
        Shoppy.apiKey = apiKey;
    }
    ;
}
exports.Shoppy = Shoppy;
Shoppy.apiBase = "https://shoppy.gg/api";
;
//# sourceMappingURL=Shoppy.js.map