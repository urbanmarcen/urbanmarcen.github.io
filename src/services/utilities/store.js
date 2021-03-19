import { JWT_KEY } from 'config';

export class ApiStore {
  constructor(options) {
    if (options) {
      this.options = options;
    }
  }

  static getToken() {
    return localStorage.getItem(JWT_KEY);
  }

  static storeToken(token) {
    return localStorage.setItem(JWT_KEY, token);
  }

  static clearToken() {
    return localStorage.removeItem(JWT_KEY);
  }
}
