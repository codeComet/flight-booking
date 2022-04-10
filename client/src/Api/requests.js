import axios from "axios";

const API = axios.create({ baseURL: "https://king-holidays.herokuapp.com/" });

export const fetchFlights = () => API.get("/");
export const fetchFlight = (id) => API.get(`/flights/${id}`);
export const createFlight = (newFlight) =>
  API.post(`/admin/addflight`, newFlight);
export const searchFlight = (flight) => API.post("/", flight);
export const deleteFlight = (id) => API.delete(`/admin/posts/${id}`);

// Subscription Requests

export const getSubbedUser = () => API.get(`/admin/users`);
export const createSubUser = (user) => API.post(`/subscribe`, user);

// Admin Authentication

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);
