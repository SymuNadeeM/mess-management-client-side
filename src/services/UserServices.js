import requests from "../lib/httpRequest";

const UserServices = {
  // creating a new account.
  userSignUp: async (body) => {
    return requests.post("auth/user/signUp", body);
  },
  // log in
  userSignIn: async (body) => {
    return requests.post("auth/user/signIn", body);
  },

  getAllUser: async (body) => {
    return requests.get("auth/user", body);
  },

  singleCreateUser: async (body) => {
    return requests.post("auth/user", body);
  },

  getSingleUser: async (id, body) => {
    return requests.get(`auth/user/${id}`, body);
  },

  singleUpdateUser: async (id, body) => {
    return requests.put(`auth/user/${id}`, body);
  },

  singleDeleteUser: async (id, body) => {
    return requests.delete(`auth/user/${id}`, body);
  },
};

export default UserServices;
