import axios, { AxiosRequestConfig } from 'axios';
import { IHttpClientRequestParameters } from './types';

const API_URL = 'https://docs.thecatapi.com/api-reference';
__DEV__ && console.log('API: ', API_URL);

const optionsNoAuth = (): AxiosRequestConfig => {
	return {
		baseURL: API_URL,
		timeout: 30000,
		headers: {
			'Content-Type': 'application/json',
		},
	};
};
/**
 * @author Vanderson de Moura Vauruk
 *
 */
export default class HttpClient {
	static post<T, U>(parameters: IHttpClientRequestParameters<T>): Promise<U> {
		return new Promise<U>((resolve, reject) => {
			const { path, payload } = parameters;
			const options: AxiosRequestConfig = optionsNoAuth();

			axios
				.post(path, payload, options)
				.then((response: any) => {
					resolve(response.data);
				})
				.catch((error: any) => reject(error));
		});
	}
	static get<T, U>(parameters: IHttpClientRequestParameters<T>): Promise<U> {
		return new Promise<U>((resolve, reject) => {
			const { path } = parameters;
			const options: AxiosRequestConfig = optionsNoAuth();
			axios
				.get(path, options)
				.then((response: any) => {
					resolve(response.data);
				})
				.catch((error: any) => reject(error));
		});
	}
}
