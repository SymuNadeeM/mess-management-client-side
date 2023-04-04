
import requests from '../lib/httpRequest';

const OthersCostServices = {
  getAllOthersCost: async (body) => {
    return requests.get('/othersCosts', body);
  },
  singleCreateOthersCost: async (body) => {
    return requests.post('/othersCosts', body);
  },
  searchOthersCost: async (body) => {
    return requests.get('/othersCosts', body);
  },
  getSingleOthersCost: async (id) => {
    return requests.get(`/othersCosts/${id}`);
  },
  singleUpdateOthersCost: async (id,body) => {
    return requests.put(`/othersCosts/${id}`, body);
  },
  singleDeleteOthersCost: async (id) => {
    return requests.delete (`/othersCosts/${id}`);
  },
  
  
};

export default OthersCostServices;