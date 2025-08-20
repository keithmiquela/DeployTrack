// API configuration
const getApiUrl = () => {
  // In production, use the same domain as the frontend
  if (import.meta.env.PROD) {
    return window.location.origin;
  }
  
  // In development, use the environment variable or fallback to localhost
  return import.meta.env.VITE_BACKEND_URL || `http://localhost:${import.meta.env.VITE_BACKEND_PORT || 3000}`;
};

export const API_BASE_URL = getApiUrl();

// Helper function for making API calls
export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, mergedOptions);
  return response;
};