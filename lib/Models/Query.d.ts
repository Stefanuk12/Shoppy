import { Shoppy } from '..';
export declare class Query extends Shoppy {
    all(page?: number): Promise<any>;
    get(id: string): Promise<any>;
    update(id: string, status?: string): Promise<any>;
    reply(id: string, message: string): Promise<any>;
}
//# sourceMappingURL=Query.d.ts.map