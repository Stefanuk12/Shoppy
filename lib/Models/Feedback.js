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
exports.Feedback = void 0;
// Dependencies
const __1 = require("..");
// Feedback Class
class Feedback {
    // Construtor
    constructor() {
        if (__1.Shoppy.apiKey == undefined) {
            throw (new Error("Please set the API key first by doing: const shoppy = new Shoppy(\"keyhere\");"));
        }
    }
    // Get all feedback
    all(page) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                var response;
                // Page
                if (page) {
                    response = yield __1.Shoppy.HttpClient.post("feedbacks", {
                        form: { page: page }
                    });
                }
                else {
                    response = yield __1.Shoppy.HttpClient.post("feedbacks");
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
    // Get specific feedback
    retrieve(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get Response
                const response = yield __1.Shoppy.HttpClient.post(`feedback/${id}`);
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
exports.Feedback = Feedback;
//# sourceMappingURL=Feedback.js.map