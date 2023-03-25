
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
  getSingleBazarList: async (body) => {
    return requests.get('/bazarLists', body);
  },
  singleUpdateBazarListt: async (body) => {
    return requests.put('/bazarLists', body);
  },
  singleDeleteBazarList: async (id) => {
    return requests.delete(`/bazarLists/${id}`);
  },
  
};

export default BazarListServices;