// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// api.interceptors.request.use(
//   config => config,
//   error => Promise.reject(error)
// );

// api.interceptors.response.use(
//   response => response,
//   error => Promise.reject(error)
// );

// export default api;

//✅
import axios from "axios";

const createApiInstance = () => {
  const api = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  api.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
  );

  api.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
  );

  return api;
};

export default createApiInstance;
