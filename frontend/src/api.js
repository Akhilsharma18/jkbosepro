import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
});

// Add a request interceptor to include the token in headers
API.interceptors.request.use((req) => {
  if (localStorage.getItem('adminToken')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('adminToken')}`;
  }
  return req;
});

export default API;
