// Dependencies
import { Shoppy } from '../index.js'
import { IOrder } from '../Interfaces/IOrder.js'

// Order Class
export interface Order extends IOrder { }
export class Order {
    // Construtor
    constructor(Data: IOrder) {
        // Make sure API key has been given
        if (Shoppy.apiKey == undefined) {
            throw (new Error("Please set the API key first by doing: const shoppy = new Shoppy(\"keyhere\")"))
        }

        //
        Object.assign(this, Data)
    }

    // Get all orders
    async all() {
        // Get Response
        const response = await Shoppy.HttpClient.post("orders")

        // Return Parsed Response
        return <IOrder[]>JSON.parse(response.body)
    }

    // Get a specific order
    static async retrieve(id: string) {
        // Get Response
        const response = await Shoppy.HttpClient.post(`orders/${id}`)

        // Return Parsed Response
        return <IOrder>JSON.parse(response.body)
    }
}