// Meet API

import { ApiCore } from "services/utilities";


const url = "v4/starlink";
const plural = "launches";
const single = "launch";
const apiVersion = "v1"; // optional for later


// plural and single may be used for message logic if needed in the ApiCore class.
const apiSpacex = new ApiCore({
  getAll: false,
  getSingle: false,
  get: true,
  post: false,
  put: false,
  patch: false,
  delete: false,
  url: url,
  plural: plural,
  single: single,
  baseUrl: 'https://api.spacexdata.com',
  useToken: false,
});



export default apiSpacex;
