import axios from 'axios';

const API_URL = 'https://porter-backend-mtjy.onrender.com/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);

// Request APIs
export const createRequest = (requestData) => api.post('/requests', requestData);
export const getMyRequests = () => api.get('/requests/my-requests');
export const getAllRequests = () => api.get('/requests/all');
export const updateRequestStatus = (id, status) => api.put(`/requests/${id}/status`, { status });

export default api;