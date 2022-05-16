import HttpClient from '../../ApiVK';
import { ICat, ICatResponse } from './types';

class CatService {
    static listData(page: number, limit: number): Promise<ICatResponse> {
        return HttpClient.get<ICat, ICatResponse>({
            path: '/data.json',
            token: undefined,
        });
    }
    // static getProducts(text: string): Promise<ProductResponse> {
    // 	return HttpClient.get<Product, ProductResponse>({
    // 		path: `/search?q=${text ? text : 'a'}&sort=lowestPrice`,
    // 		token: undefined,
    // 	});
    // }
}
export default CatService;
