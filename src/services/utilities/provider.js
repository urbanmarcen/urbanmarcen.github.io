import axios from "axios";
import { handleResponse, handleError } from "./response";

import { apiUrl } from "config";

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = apiUrl + "/api";

const getAxiosConfig = () => {
  
  var token = localStorage.getItem("jwtToken");
  var lng = localStorage.getItem("lng");

  return {
    headers: {
      Authorization: "Bearer " + token,
      "Accept-Language": lng
    },
    responseType: "json"
  };
};

/** @param {string} resource */
const getAll = resource => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const get = (resource, model = null) => {
  let axiosConfig = getAxiosConfig();

  // add parameters to get http call
  if (model !== null) {
    axiosConfig.params = model;
  }
  return axios
    .get(`${BASE_URL}/${resource}`, axiosConfig)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */
/** @param {string} id */
const getSingle = (resource, id) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const post = (resource, model = null) => {
  let axiosConfig = getAxiosConfig();
  return axios
    .post(`${BASE_URL}/${resource}`, model, axiosConfig)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */

const put = (resource, model) => {
  return axios
    .put(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */

/** @param {object} model */

const patch = (resource, model) => {
  return axios
    .patch(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

/** @param {string} resource */

/** @param {string} id */

const remove = (resource, id) => {
  return axios
    .delete(`${BASE_URL}/${resource}`, id)
    .then(handleResponse)
    .catch(handleError);
};

const apiProvider = {
  get,
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove
};

export default apiProvider;
