import axios from "axios";
import { authLogout } from "../../store/auth";

import { errorToast } from "./toastHelper";

export const setupAxios = (store) => {
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { token },
      } = store.getState();
      config.baseURL = process.env.REACT_APP_API_URL;
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error).then((r) => console.error(r));
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        alert(error.response.data.message);
        store.dispatch(authLogout());
        return;
      }

      if (error.response.status === 403) {
       alert("Malesef bu sayfayı görüntüleme yetkiniz, yoktur.");
        window.history.back();
        return;
      }

      return error.response.data;
    }
  );
};