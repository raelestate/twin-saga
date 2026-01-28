import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

if (!API_BASE_URL) {
  throw new Error('VITE_API_BASE_URL is not defined in environment variables');
}

export interface ApiClientOptions {
  method?: AxiosRequestConfig['method'];
  url?: string;
  data?: any;
  headers?: AxiosRequestConfig['headers'];
  params?: AxiosRequestConfig['params'];
  authToken?: string;
  [key: string]: any;
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private getHeaders(authToken?: string) {
    return {
      'Content-Type': 'application/json',
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    };
  }

  async request<T = any>(config: ApiClientOptions): Promise<AxiosResponse<T>> {
    try {
      const response = await axios({
        ...config,
        baseURL: this.baseUrl,
        headers: {
          ...this.getHeaders(config.authToken),
          ...config.headers,
        },
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  // Example REST methods
  get<T = any>(url: string, config?: ApiClientOptions) {
    return this.request<T>({ ...config, method: 'GET', url });
  }

  post<T = any>(url: string, data?: any, config?: ApiClientOptions) {
    return this.request<T>({ ...config, method: 'POST', url, data });
  }

  put<T = any>(url: string, data?: any, config?: ApiClientOptions) {
    return this.request<T>({ ...config, method: 'PUT', url, data });
  }

  delete<T = any>(url: string, config?: ApiClientOptions) {
    return this.request<T>({ ...config, method: 'DELETE', url });
  }
}

export const apiClient = new ApiClient();
