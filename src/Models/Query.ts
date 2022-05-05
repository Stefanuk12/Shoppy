// Dependencies
import { Shoppy } from '..'
import { IQuery } from '../Interfaces/IQuery.js'

// Query Class
export interface Query extends IQuery {}
export class Query {
    // Construtor
    constructor(Data: IQuery){
        // Make sure API key has been given
        if (Shoppy.apiKey == undefined){
            throw(new Error("Please set the API key first by doing: const shoppy = new Shoppy(\"keyhere\")"))
        }

        //
        Object.assign(this, Data)
    }
    
    // Get all queries
    static async all(page: number = -1){
        try {
            // Get Response
            let response

            // Page
            if (page > 0){
                response = await Shoppy.HttpClient.post("queries", {
                    form: {page: page}
                })
            } else {
                response = await Shoppy.HttpClient.post("queries")
            }    
            
            // Return Parsed Response
            return <IQuery[]>JSON.parse(response.body)
        } catch(error){
            // Return Error
            return error
        } 
    }

    // Get a specific query
    static async retrieve(id: string){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`queries/${id}`)
            
            // Return Parsed Response
            return <IQuery>JSON.parse(response.body)
        } catch(error){
            // Return Error
            return error
        } 
    }

    // Update a query
    static async update(id: string, status: string = "close"){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`queries/${id}/${status}`, {
                form: {action: status}
            })
            
            // Return Parsed Response
            return response.statusCode
        } catch(error){
            // Return Error
            return error
        }
    }
    async update(status: string = "close"){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`queries/${this.id}/${status}`, {
                form: {action: status}
            })
            
            // Return Parsed Response
            return response.statusCode
        } catch(error){
            // Return Error
            return error
        }
    }

    // Reply to a query
    static async reply(id: string, message: string){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`queries/${id}/reply`, {
                form: {message: message}
            })
            
            // Return Parsed Response
            return response.statusCode
        } catch(error){
            // Return Error
            return error
        }
    }
    async reply(message: string){
        try {
            // Get Response
            const response = await Shoppy.HttpClient.post(`queries/${this.id}/reply`, {
                form: {message: message}
            })
            
            // Return Parsed Response
            return response.statusCode
        } catch(error){
            // Return Error
            return error
        }
    }
}