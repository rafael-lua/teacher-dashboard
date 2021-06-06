// "proxy": "http://localhost:3001"
const API_NOT_PRIVATE_KEY = process.env.VUE_APP_AUTH || null;

export const headers = {
  Authorization: API_NOT_PRIVATE_KEY,
};

export const API_SERVER =
  process.env.NODE_ENV === "production"
    ? "https://ancient-bayou-49540.herokuapp.com"
    : "";
