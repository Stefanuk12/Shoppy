// Dependencies
import { Shoppy } from '../index.js'
import { IQuery } from '../Interfaces/IQuery.js'

// Query Class
export interface Query extends IQuery { }
export class Query {
    // Construtor
    constructor(Data: IQuery) {
        // Make sure API key has been given
        if (Shoppy.apiKey == undefined) {
            throw (new Error("Please set the API key first by doing: const shoppy = new Shoppy(\"keyhere\")"))
        }

        //
        Object.assign(this, Data)
    }

    // Get all queries
    static async all(page: number = -1) {
        // Get Response
        let response

        // Page
        if (page > 0) {
            response = await Shoppy.HttpClient.post("queries", {
                form: { page: page }
            })
        } else {
            response = await Shoppy.HttpClient.post("queries")
        }

        // Return Parsed Response
        return <IQuery[]>JSON.parse(response.body)
    }

    // Get a specific query
    static async retrieve(id: string) {
        // Get Response
        const response = await Shoppy.HttpClient.post(`queries/${id}`)

        // Return Parsed Response
        return <IQuery>JSON.parse(response.body)
    }

    // Update a query
    static async update(id: string, status: string = "close") {
        // Get Response
        const response = await Shoppy.HttpClient.post(`queries/${id}/${status}`, {
            form: { action: status }
        })

        // Return Parsed Response
        return response.statusCode
    }
    async update(status: string = "close") {
        return await Query.update(this.id, status)
    }

    // Reply to a query
    static async reply(id: string, message: string) {
        // Get Response
        const response = await Shoppy.HttpClient.post(`queries/${id}/reply`, {
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            form: { message: message }
        })

        // Return Parsed Response
        return response.statusCode
    }
    async reply(message: string) {
        return await Query.reply(this.id, message)
    }
}