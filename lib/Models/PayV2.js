"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayV2 = void 0;
const Shoppy_1 = require("../Shoppy");
// PayV2 Class
class PayV2 extends Shoppy_1.Shoppy {
    // Create a payment
    create(data, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield Shoppy_1.Shoppy.HttpClient2.post("pay", {
                    form: fields,
                    json: data
                });
                // Return Parsed Response
                return JSON.parse(response.body);
            }
            catch (error) {
                // Return Error
                return error;
            }
            ;
        });
    }
    ;
}
exports.PayV2 = PayV2;
;
//# sourceMappingURL=PayV2.js.map