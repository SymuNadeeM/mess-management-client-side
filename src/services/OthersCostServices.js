
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
  getSingleOthersCost: async (body) => {
    return requests.get('/othersCosts', body);
  },
  singleUpdateOthersCost: async (body) => {
    return requests.put('/othersCosts', body);
  },
  singleDeleteOthersCost: async (body) => {
    return requests.delete ('/othersCosts', body);
  },
  
  
};

export default OthersCostServices;