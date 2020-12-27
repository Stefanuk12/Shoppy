export declare class Query {
    constructor();
    all(page?: number): Promise<any>;
    retrieve(id: string): Promise<any>;
    update(id: string, status?: string): Promise<any>;
    reply(id: string, message: string): Promise<any>;
}
//# sourceMappingURL=Query.d.ts.map