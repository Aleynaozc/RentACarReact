import axios from "axios";
import { ResponseModel } from "./responseModel";
import { errorToast } from "./toastHelper";


const defaultHeaders = {
  "Content-Type": "application/json",
};



const Get = (url, headers) => {
  return axios
    .get(url, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess} = response.data;
      if (isSuccess) {
        return new ResponseModel();
      } 
    })
   
};

const Post = (url, reqBody, headers) => {
  return axios
    .post(url, reqBody, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } else {
        errorToast(message);
      }
    })
    
};

const Put = (url, reqBody, headers) => {
  return axios
    .put(url, reqBody, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } 
    })
   
};

const Delete = (url, headers) => {
  return axios
    .delete(url, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } 
    })
   
};

export { Get, Post, Put, Delete};
