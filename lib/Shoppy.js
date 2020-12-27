"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shoppy = void 0;
const got_1 = __importDefault(require("got"));
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