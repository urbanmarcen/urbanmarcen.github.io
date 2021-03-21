// Meet API

import { ApiCore } from "services/utilities";

const url = "auth";
const plural = "auth";
const single = "auth";
const apiVersion = "v1"; // optional for later 


// plural and single may be used for message logic if needed in the ApiCore class.
const apiAuthentication = new ApiCore({
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
  tokenAuth: false,
});



export default apiAuthentication;
