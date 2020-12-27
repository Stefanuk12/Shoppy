import { IProduct } from '../Interfaces/Product';
export declare class Product {
    constructor();
    all(page?: number): Promise<any>;
    retrieve(id: string): Promise<any>;
    create(data: Object): Promise<any>;
    update(id: string, data: IProduct): Promise<any>;
    delete(id: string): Promise<any>;
}
//# sourceMappingURL=Product.d.ts.map