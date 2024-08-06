import axios from 'axios';
import store from '../redux/store';


let api_url = `${process.env.REACT_APP_BASEURL}`

const instance = axios.create({
  baseURL: api_url,
  timeout: 500000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {

  let jwtToken = store.getState().auth.accessToken;

  return {
    ...config,
    headers: {
      authorization: jwtToken ? `Bearer ${jwtToken}` : null,
    },
  };
});

const responseBody = (response) => response.data;

const requests = {
  get: (url, body) => instance.get(url, body).then(responseBody),

  post: (url, body) => instance.post(url, body).then(responseBody),

  put: (url, body) => instance.put(url, body).then(responseBody),

  delete: (url, body) => instance.delete(url, body).then(responseBody),

};

export default requests;




