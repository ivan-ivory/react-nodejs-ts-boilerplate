import axios from 'axios'

class ApiClient {
  private axiosDefault = axios.create()

  async get(url: string): Promise<any> {
    let result = await this.axiosDefault.get(url)
    return result.data
  }

  async post<T= any>(url: string, body: any): Promise<any> {
    let result = await this.axiosDefault.post(url, body)
    return result.data
  }

  async put<T= any>(url: string, body: Partial<T>): Promise<T> {
    let result = await this.axiosDefault.put(url, body)
    return result.data
  }

  async delete(url: string): Promise<any> {
    let result = await this.axiosDefault.delete(url)
    return result.data
  }
}

export const apiClient = new ApiClient()