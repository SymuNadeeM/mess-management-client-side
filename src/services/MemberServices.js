
import requests from '../lib/httpRequest';

const MemberServices = {
  getAllMember: async (body) => {
    return requests.get('/members', body);
  },
  singleCreateMember: async (body) => {
    return requests.post('/members/', body);
  },
  getSingleMember: async (id) => {
    return requests.get(`/members/${id}`);
  },
  singleUpdateMember: async (id,body) => {
    return requests.put(`/members/${id}`, body);
  },
  singleDeleteMember: async (id) => {
    return requests.delete(`/members/${id}`);
  },
  searchMember: async () => {
    return requests.get('/members/');
  },
  
};

export default MemberServices;