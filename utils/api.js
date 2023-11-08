import axios from "axios";
export const apiUrl = "http://localhost:4000/api/";
export const api = axios.create({ baseURL: apiUrl });

export const endpoints = {
  signin: "auth/signin",
  register: "auth/register",
  read_categories: "categories/",
  signout: "auth/signout",
  readMe: "authors/me",
};
