// Dependencies
import { ICustomField } from "./ICustomField"

//
export interface IProductEmail {
    enabled: boolean
    value: string | null
}
export interface IProductQuantity {
    min: number | null
    max: number | null
}
export interface IProductAccount {
    account: string
}

//
export interface IProduct {
    id: string
    attachment_id: string | null
    title: string
    description: string | null
    unlisted: boolean | null
    type: "service" | "file" | "account" | "dynamic"
    price: number
    currency: string
    email: IProductEmail | null
    stock_warning: number | null
    quantity: IProductQuantity | null
    confirmations: number | null
    custom_fields: ICustomField[] | null
    gateways: string | null
    webhook_urls: string[] | null
    position: null
    created_at: string
    updated_at: string
    seller: string
    stock: number
    accounts: IProductAccount[] | null
}