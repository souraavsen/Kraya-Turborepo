import axios from "axios";
import { storage } from "./storage";

export const coreAxios = axios.create({
  baseURL:
    // import.meta.env.VITE_APP_SERVER_URL ||
    "https://api.npoint.io/08240961a1a584502288",
});


coreAxios.interceptors.request.use(async function (req) {
  const token = storage.get("token");

  if (typeof window !== "undefined" && token) {
    req.headers!.authorization = "Token " + token;
  }
  // else {
  //   continue;
  // }

  return req;
});
