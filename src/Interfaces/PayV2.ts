// Dependencies
import { ICustomField } from "./ICustomField.js"

//
export interface IPayV2CreateFields {
    webhook_urls?: string[]
    custom_fields?: string[]
    quantity?: number
}

export interface IPayV2CreateData {
    title: string
    value: number
    white_label?: boolean
    email?: string
    gateway?: string
    webhook_urls?: string[]
    quantity?: number
    custom_fields: ICustomField[]
}