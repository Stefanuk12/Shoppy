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
exports.Product = void 0;
const __1 = require("..");
// Product Class
class Product {
    // Construtor
    constructor() {
        if (__1.Shoppy.apiKey == undefined) {
            throw (new Error("Please set the API key first by doing: const shoppy = new Shoppy(\"keyhere\");"));
        }
    }
    // Get all products
    all(page = -1) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                var response;
                // Page
                if (page > 0) {
                    response = yield __1.Shoppy.HttpClient.post("products", {
                        form: { page: page }
                    });
                }
                else {
                    response = yield __1.Shoppy.HttpClient.post("products");
                }
                ;
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
    // Get a specific product
    retrieve(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield __1.Shoppy.HttpClient.post(`products/${id}`);
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
    // Create a product
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield __1.Shoppy.HttpClient.put("products", {
                    form: data
                });
                // Return Parsed Response
                return response.statusCode;
            }
            catch (error) {
                // Return Error
                return error;
            }
            ;
        });
    }
    ;
    // Update a product
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield __1.Shoppy.HttpClient.post(`products/${id}`, {
                    form: data
                });
                // Return Parsed Response
                return response.statusCode;
            }
            catch (error) {
                // Return Error
                return error;
            }
            ;
        });
    }
    ;
    // Delete a product
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield __1.Shoppy.HttpClient.delete(`products/${id}`);
                // Return Response
                return response.statusCode;
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
exports.Product = Product;
//# sourceMappingURL=Product.js.map