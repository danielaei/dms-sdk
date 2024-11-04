class CustomFetch {
  baseURL: string;
  headers: HeadersInit;

  constructor(config: { xApiToken: string }) {
    this.baseURL = 'https://api.mailsentry.io/api/v1';
    this.headers = {
      'Content-Type': 'application/json',
      'x-api-key': config.xApiToken,
    };
  }

  private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const finalOptions: RequestInit = {
      headers: new Headers(this.headers),
      ...options,
    };

    try {
      const response = await fetch(url, finalOptions);
      if (!response.ok) {
        const errorBody = await response.json();
        throw new ErrorResponse(response.status, response.statusText, errorBody);
      }
      return (await response.json()) as T;
    } catch (error) {
      if (error instanceof ErrorResponse) {
        throw error;
      } else {
        throw new ErrorResponse(500, 'Network or other error', error);
      }
    }
  }

  public get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  public post<T>(endpoint: string, body: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  public put<T>(endpoint: string, body: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  public delete<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

// The ErrorResponse class used for error handling
class ErrorResponse extends Error {
  statusCode: number;
  error: any;

  constructor(statusCode: number, message: string, error: any = null) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
    this.name = 'ErrorResponse';
  }
}

export default CustomFetch;
