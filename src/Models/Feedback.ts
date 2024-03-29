// Dependencies
import { Shoppy } from '../index.js'
import { IFeedback } from '../Interfaces/IFeedback.js'

// Feedback Class
export interface Feedback extends IFeedback { }
export class Feedback {
    // Construtor
    constructor(Data: IFeedback) {
        // Make sure API key has been given
        if (Shoppy.apiKey == undefined) {
            throw (new Error("Please set the API key first by doing: const shoppy = new Shoppy(\"keyhere\")"))
        }

        //
        Object.assign(this, Data)
    }

    // Get all feedback
    static async all(page?: number) {
        // Get Response
        let response

        // Page
        if (page) {
            response = await Shoppy.HttpClient.get("feedbacks", {
                form: { page: page }
            })
        } else {
            response = await Shoppy.HttpClient.get("feedbacks")
        }

        // Return Parsed Response
        return <IFeedback[]>JSON.parse(response.body)
    }

    // Get specific feedback
    static async retrieve(id: string) {
        // Get Response
        const response = await Shoppy.HttpClient.post(`feedback/${id}`)

        // Return Parsed Response
        return <IFeedback>JSON.parse(response.body)
    }
}