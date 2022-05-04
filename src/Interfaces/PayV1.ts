//
export interface IPayV1Create {
    title: string
    price: number
    webhook_urls: string[]
    gateways: string[]
    confirmations: number
}