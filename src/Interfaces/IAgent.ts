//
export interface IAgentGeo {
    ip: string
    iso_code: string
    country: string
    city: string
    state: string
    state_name: string
    postal_code: string
}

export interface IAgent {
    geo: IAgentGeo
}