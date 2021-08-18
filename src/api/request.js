import axios from 'axios';
// import store from '../../redux/store';

const authReducer = {};

// store.subscribe(() => {
//   authReducer = store.getState().authReducer;
// });

export const requestMethods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

export const requestSource = axios.CancelToken.source();

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * Creates a request to the api using the given params
 * @param {string} method
 * @param {string} url
 * @param {object} data
 * @param {object} options
 */
const makeRequest = async ({
  method = requestMethods.GET,
  url = '',
  data = {},
  options = {}
}) => {
  if (authReducer.token) {
    config.headers = {
      ...config.headers,
      Authorization: `bearer ${authReducer.token}`
    };
  }

  let _url = url;
  const { params, cancelToken } = options;
  if (params && params.length > 0) {
    _url += '?';

    for (let i = 0; i < params.length; i++) {
      _url += params[i];

      if (i !== params.length - 1) {
        _url += '&';
      }
    }
  }

  if (cancelToken) {
    config.cancelToken = cancelToken;
  } else {
    config.cancelToken = null;
  }

  try {
    const res = await axios({
      method,
      url: _url,
      data,
      ...config
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export default makeRequest;
