import requests from "./httpService";

const UserServices = {
  userSignUp: async (body) => {
    return requests.post("/user/signUp", body);
  },

  userSignIn: async (body) => {
    return requests.post("/user/signIn", body);
  },

  getAllUser: async (body) => {
    return requests.get("/user", body);
  },

  singleCreateUser: async (body) => {
    return requests.post("/user", body);
  },

  getSingleUser: async (id, body) => {
    return requests.get(`/user/${id}`, body);
  },

  singleUpdateUser: async (id, body) => {
    return requests.put(`/user/${id}`, body);
  },

  singleDeleteUser: async (id, body) => {
    return requests.delete(`/user/${id}`, body);
  },
};

export default UserServices;
