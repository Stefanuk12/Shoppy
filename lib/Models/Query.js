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
exports.Query = void 0;
// Dependencies
const __1 = require("..");
// Query Class
class Query extends __1.Shoppy {
    // Get all queries
    all(page = -1) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                var response;
                // Page
                if (page > 0) {
                    response = yield __1.Shoppy.HttpClient.post("queries", {
                        form: { page: page }
                    });
                }
                else {
                    response = yield __1.Shoppy.HttpClient.post("queries");
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
    // Get a specific query
    retrieve(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield __1.Shoppy.HttpClient.post(`queries/${id}`);
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
    // Update a query
    update(id, status = "close") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield __1.Shoppy.HttpClient.post(`queries/${id}/${status}`, {
                    form: { action: status }
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
    // Reply to a query
    reply(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield __1.Shoppy.HttpClient.post(`queries/${id}/reply`, {
                    form: { message: message }
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
}
exports.Query = Query;
;
//# sourceMappingURL=Query.js.map