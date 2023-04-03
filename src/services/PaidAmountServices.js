
import requests from '../lib/httpRequest';

const PaidAmountServices = {
  getAllPaidAmount: async (body) => {
    return requests.get('/paidAmounts', body);
  },
  singleCreatePaidAmount: async (body) => {
    return requests.post('/paidAmounts', body);
  },
  searchPaidAmount: async (body) => {
    return requests.get('/paidAmounts', body);
  },
  getSinglePaidAmount: async (id) => {
    return requests.get(`/paidAmounts/${id}`);
  },
  singleUpdatePaidAmount: async (id,body) => {
    return requests.put(`/paidAmounts/${id}`,body);
  },
  singleDeletePaidAmount: async (id) => {
    return requests.delete(`/paidAmounts/${id}`);
  },

  
  
};

export default PaidAmountServices;