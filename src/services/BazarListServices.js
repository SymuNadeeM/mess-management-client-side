
import requests from '../lib/httpRequest';

const BazarListServices = {
  getAllBazarList: async (body) => {
    return requests.get('/bazarLists', body);
  },
  singleCreateBazarList: async (body) => {
    return requests.post('/bazarLists', body);
  },
  searchBazarList: async (body) => {
    return requests.get('/bazarLists', body);
  },
  getSingleBazarList: async (id) => {
    return requests.get(`/bazarLists/${id}`);
  },
  singleUpdateBazarListt: async (id,body) => {
    return requests.put(`/bazarLists/${id}`, body);
  },
  singleDeleteBazarList: async (id) => {
    return requests.delete(`/bazarLists/${id}`);
  },
  
};

export default BazarListServices;