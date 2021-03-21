import apiProvider from "./provider";

import { API_BASE_URL } from "config";

export class ApiCore {

  constructor(options) {

    // base url override for third party apis
    let baseUrl = options.baseUrl !== undefined && options.baseUrl !== '' ?
      options.baseUrl
    : API_BASE_URL ;

    if (options.getAll) {
      this.getAll = () => {
        return apiProvider.getAll(baseUrl, options.url, options.useToken);
      };
    }

    if (options.getSingle) {
      this.getSingle = id => {
        return apiProvider.getSingle(baseUrl, options.url, id, options.useToken);
      };
    }

    if (options.get) {
      this.get = ({ data, url }) => {
        return apiProvider.get(baseUrl, (url !== undefined ? url : options.url), data, options.useToken);
      };
    }

    if (options.post) {
      this.post = ({ data, url,  }) => {       
        return apiProvider.post(baseUrl, (url !== undefined ? url : options.url), data, options.useToken);
      };
    }

    if (options.put) {
      this.put = model => {
        return apiProvider.put(baseUrl,  options.url, model, options.useToken);
      };
    }

    if (options.patch) {
      this.patch = model => {
        return apiProvider.patch(baseUrl, options.url, model, options.useToken);
      };
    }

    if (options.remove) {
      this.remove = id => {
        return apiProvider.remove(baseUrl,  options.url, id, options.useToken);
      };
    }
  }
}
