import requests from "./httpServices";

const ProductServices = {
  getAllProducts: async () => {
    return requests.get("/wc/v3/products");
  },
};

export default ProductServices;
