// Meet API

import { ApiCore } from "services/utilities";

const url = "account";
const plural = "accounts";
const single = "account";
const apiVersion = "v1"; // optional for later


// plural and single may be used for message logic if needed in the ApiCore class.
const apiAccount = new ApiCore({
  getAll: true,
  getSingle: true,
  get: true,
  post: true,
  put: false,
  patch: true,
  delete: true,
  url: url,
  plural: plural,
  single: single,
  baseUrl: null,
  tokenAuth: true,
});



export default apiAccount;
