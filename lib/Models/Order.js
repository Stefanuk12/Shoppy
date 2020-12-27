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
exports.Order = void 0;
// Dependencies
const Shoppy_1 = require("../Shoppy");
// Order Class
class Order extends Shoppy_1.Shoppy {
    // Get all orders
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield Shoppy_1.Shoppy.HttpClient.post("orders");
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
    // Get a specific order
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield Shoppy_1.Shoppy.HttpClient.post(`orders/${id}`);
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
exports.Order = Order;
;
//# sourceMappingURL=Order.js.map