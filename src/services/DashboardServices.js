import requests from "../lib/httpRequest";

const DashboardServices = {
  dashboard: async () => {
    return requests.get("/dashboard");
  },
  summary: async () => {
    return requests.get("/dashboard/summary");
  },
};

export default DashboardServices;
