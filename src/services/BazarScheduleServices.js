//BazarScheduleRoutesServices

import requests from "../lib/httpRequest";

const BazarScheduleServices = {
  getAllBazarSchedule: async (body) => {
    return requests.get("/bazarSchedules", body);
  },
  singleCreateBazarSchedule: async (body) => {
    return requests.post("/bazarSchedules", body);
  },
  searchBazarSchedule: async (date) => {
    return requests.get(`/bazarSchedules/search?date=${date}`);
  },
  getSingleBazarSchedule: async (id) => {
    return requests.get(`/bazarSchedules/${id}`);
  },
  singleUpdateBazarSchedule: async (id, body) => {
    return requests.put(`/bazarSchedules/${id}`, body);
  },
  singleDeleteBazarSchedule: async (id) => {
    return requests.delete(`/bazarSchedules/${id}`);
  },
};

export default BazarScheduleServices;
