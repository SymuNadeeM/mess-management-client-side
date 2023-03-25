//BazarScheduleRoutesServices


import requests from '../lib/httpRequest';

const BazarScheduleServices = {
  getAllBazarSchedule: async (body) => {
    return requests.get('/bazarSchedules', body);
  },
  singleCreateBazarSchedule: async (body) => {
    return requests.post('/bazarSchedules', body);
  },
  searchBazarSchedule: async (body) => {
    return requests.get('/bazarSchedules', body);
  },
  getSingleBazarSchedule: async (body) => {
    return requests.get('/bazarSchedules', body);
  },
  singleUpdateBazarSchedule: async (body) => {
    return requests.put('/bazarSchedules', body);
  },
  singleDeleteBazarSchedule: async (body) => {
    return requests.delete('/bazarSchedules', body);
  },

  
};

export default BazarScheduleServices;