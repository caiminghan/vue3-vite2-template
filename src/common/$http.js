import axios from 'axios';

const CONFIG = {
  TIMEOUT: 20000,
  METHODS: ['get', 'put', 'post', 'delete'],
  WITH_PARAMS_METHODS: ['get', 'delete'],
};

const defaultFn = {
  generator(config) {
    return axios(config);
  },

  transformRequest({
    url, method, headers, data, timeout, withCredentials,
  }) {
    const config = {
      url,
      method,
      timeout,
      withCredentials,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=utf-8',
        ...headers,
      },
    };
    if (CONFIG.WITH_PARAMS_METHODS.includes(method)) {
      config.params = data;
    } else {
      config.data = data;
    }
    return config;
  },

  transformResponse(response) {
    return response.data
      ? response.data
      : {
        code: response.status,
        data: response.statusText,
        message: response.statusText,
      };
  },

  checkFail({ code }) {
    return code !== 200;
  },
};

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);
axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.resolve(error.response || error),
);
const $http = {};
const methods = CONFIG.METHODS;
const {
  generator,
  transformRequest,
  transformResponse,
  checkFail,
} = defaultFn;

methods.forEach((method) => {
  $http[method] = (url, data, options = {}) => {
    const {
      timeout = CONFIG.TIMEOUT,
      headers = {}, // Headers unique to each method
      withCredentials = false,
    } = options;

    const config = transformRequest({
      url,
      method,
      data,
      timeout,
      withCredentials,
      headers,
    });

    return Promise.resolve(generator(config)).then((response = {}) => {
      const res = transformResponse(response);
      if (checkFail(res)) {
        return Promise.reject(res);
      }
      return res;
    });
  };
});

export default $http;
