// Dependencies
import { IAgent } from "./IAgent.js"

//
export interface IQuery {
    id: string
    status: number
    subject: string
    email: string
    message: string
    created_at: string
    updated_at: string
    replies: string[]
    agent: IAgent
}