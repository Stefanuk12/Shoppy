// Dependencies
import { ICustomField } from "./ICustomField"

//
export interface IOrder {
    id: string
    pay_id: string | null
    product_id: string
    coupon_id: string | null
    price: number
    currency: string
    exchange_rate: string | null
    email: string
    delivered: number
    confirmations: number
    required_confirmations: number
    transaction_id: string
    crypto_address: string
    crypto_amount: string
    shipping_address: string | null
    quantity: number
    gateway: string
    custom_fields: ICustomField[]
    refund_id: string | null
    is_replacement: boolean
    replacement_id: string | null
    paid_at: string
    disputed_at: string | null
    created_at: string | null
    is_partial: boolean | null
    crypto_recieved: boolean | null
    webhooks: string[]
    accounts: string[]
    coupon: string[]
}