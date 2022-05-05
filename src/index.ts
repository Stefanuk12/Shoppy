// Dependencies
import got, { Got } from "got"
import * as crypto from 'crypto'
import { NextFunction, Request, response, Response } from "express"

// Exporting models
export { Feedback } from './Models/Feedback.js'
export { Order } from './Models/Order.js'
export { PayV1 } from './Models/PayV1.js'
export { PayV2 } from './Models/PayV2.js'
export { Product } from './Models/Product.js'
export { Query } from './Models/Query.js'

// Shoppy Class
export class Shoppy {
    // Vars
    static apiKey: string
    static webhookSecret: string
    static apiBase: string = "https://shoppy.gg/api"
    static HttpClient: Got
    static HttpClient2: Got

    // Constructor
    constructor(apiKey: string, webhookSecret: string){
        // Set
        Shoppy.apiKey = apiKey
        Shoppy.webhookSecret = webhookSecret

        // HTTP Clients
        Shoppy.HttpClient = got.extend({
            prefixUrl: 'https://shoppy.gg/api/v1',
            headers: {
                'Authorization': `${Shoppy.apiKey}`,
                'User-Agent': `shoppy-ts`
            }
        })
        Shoppy.HttpClient2 = got.extend({
            prefixUrl: 'https://shoppy.gg/api/v2',
            headers: {
                'Authorization': `${Shoppy.apiKey}`,
                'User-Agent': `shoppy-ts`
            }
        })
    }

    // Verify is a webhook is legit
    static verifyWebhook(GivenSignature: string, Payload: Object){
        // Generate Hmac
        const PayloadString = JSON.stringify(Payload)
        const Signature = crypto.createHmac('sha512', Shoppy.webhookSecret).update(PayloadString).digest('hex')

        // Convert to buffers
        const GivenSignatureBuffer = Buffer.from(GivenSignature)
        const SignatureBuffer = Buffer.from(Signature)

        // Return
        return crypto.timingSafeEqual(GivenSignatureBuffer, SignatureBuffer)
    }

    // An express middleware to check if a webhook is legit
    static verifyWebhookExpress(Request: Request, Response: Response, Next: NextFunction){
        // Get the signature
        let GivenSignature = Request.headers["x-shoppy-signature"]
        if (!GivenSignature){
            return response.sendStatus(401)
        }
    
        // Make sure it matches
        if (!Shoppy.verifyWebhook(GivenSignature.toString(), Request.body)){
            return response.sendStatus(401)
        }
    
        //
        Next()
    }
}