import apiProvider from "./provider";

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = () => {
        return apiProvider.getAll(options.url);
      };
    }

    if (options.getSingle) {
      this.getSingle = id => {
        return apiProvider.getSingle(options.url, id);
      };
    }

    if (options.get) {
      this.get = ({ data, url }) => {
        return apiProvider.get(url !== undefined ? url : options.url, data);
      };
    }

    if (options.post) {
      this.post = ({ data, url }) => {       
        return apiProvider.post(url !== undefined ? url : options.url, data);
      };
    }

    if (options.put) {
      this.put = model => {
        return apiProvider.put(options.url, model);
      };
    }

    if (options.patch) {
      this.patch = model => {
        return apiProvider.patch(options.url, model);
      };
    }

    if (options.remove) {
      this.remove = id => {
        return apiProvider.remove(options.url, id);
      };
    }
  }
}
