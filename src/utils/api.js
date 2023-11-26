import axios from "axios";

export const apiUrl = "http://localhost:4000/";
export const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const endpoints = {
  signin: "api/auth/login",
  register: "auth/register",
  read_categories: "/api/categories",
  signout: "/api/auth/signout",
  readMe: "/api/authors/me",
};
