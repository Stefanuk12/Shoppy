//
export interface IFeedbackProduct {
    id: string
    title: string
}

export interface IFeedback {
    id: string
    order_id: string
    comment: string
    stars: number
    rating: number
    response: null
    created_at: string
    updated_at: string
    product: IFeedbackProduct
}