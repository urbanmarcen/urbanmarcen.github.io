import axios from "axios";
import { handleResponse, handleError } from "./response";


const getAxiosConfig = (useToken) => {
  
  var token = localStorage.getItem("jwtToken");
  var lng = localStorage.getItem("lng");

  return {
    headers: useToken ? {
      Authorization: "Bearer " + token,
      "Accept-Language": lng
    } : {},
    responseType: "json"
  };
};


const getAll = (baseUrl, resource) => {
  return axios
    .get(`${baseUrl}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};


const get = (baseUrl, resource, model = null, useToken) => {

  let axiosConfig = getAxiosConfig(useToken);

  // add parameters to get http call
  if (model !== null) {
    axiosConfig.params = model;
  }
  return axios
    .get(`${baseUrl}/${resource}`, axiosConfig)
    .then(handleResponse)
    .catch(handleError);
};


const getSingle = (baseUrl, resource, id, useToken) => {

  let axiosConfig = getAxiosConfig(useToken);

  return axios
    .get(`${baseUrl}/${resource}/${id}`, axiosConfig)
    .then(handleResponse)
    .catch(handleError);
};


const post = (baseUrl, resource, model = null, useToken) => {
  
  let axiosConfig = getAxiosConfig(useToken);

  return axios
    .post(`${baseUrl}/${resource}`, model, axiosConfig)
    .then(handleResponse)
    .catch(handleError);
};


const put = (baseUrl, resource, model, useToken) => {
  
  let axiosConfig = getAxiosConfig(useToken);

  return axios
    .put(`${baseUrl}/${resource}`, model, axiosConfig)
    .then(handleResponse)
    .catch(handleError);
};


const patch = (baseUrl, resource, model, useToken) => {

  let axiosConfig = getAxiosConfig(useToken);

  return axios
    .patch(`${baseUrl}/${resource}`, model, axiosConfig)
    .then(handleResponse)
    .catch(handleError);
};


const remove = ( baseUrl, resource, id, useToken) => {
  
  let axiosConfig = getAxiosConfig(useToken);

  return axios
    .delete(`${baseUrl}/${resource}`, id, axiosConfig)
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
