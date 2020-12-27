import { IProduct } from '../Interfaces/Product';
import { Shoppy } from '../Shoppy';
export declare class Product extends Shoppy {
    all(page?: number): Promise<any>;
    get(id: string): Promise<any>;
    create(data: Object): Promise<any>;
    update(id: string, data: IProduct): Promise<any>;
    delete(id: string): Promise<any>;
}
//# sourceMappingURL=Product.d.ts.map