import requests from "./httpServices";

const CustomerServices = {

  addCustomerApi: async (body) => {
    return requests.post("/wc/v3/customers", body);
  },

  getCustomerListApi: async (body) => {
    return requests.get("/wc/v3/customers?orderby=registered_date&order=desc&per_page=100&page=1", body);
  },

};

export default CustomerServices;
