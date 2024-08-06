import requests from "./httpServices";

const OrderServices = {

  createOrderApi: async (body) => {
    return requests.post("/wc/v3/orders", body);
  },

  removeOrderApi: async (id) => {
    return requests.delete(`/wc/v3/orders/${id}`, { "force": true });
  },

};

export default OrderServices;
