import { IPayV1Create } from "../Interfaces/PayV1";
import { Shoppy } from "..";
export declare class PayV1 extends Shoppy {
    create(data: IPayV1Create): Promise<any>;
    delete(id: string): Promise<any>;
}
//# sourceMappingURL=PayV1.d.ts.map