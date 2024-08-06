import React from "react";
import Products from "./Products";
import VerifyTokenHOC from '../../components/verifyToken';
import LoaderHOC from "../../components/loader/LoaderHOC";

const Home = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default LoaderHOC(Home);
