import Prod from "./Prod";
import { useState } from "react";

const Products = ({ products, clicking}) => {
  return (
    <>
      {products.map((prod) => (
        <Prod key={prod._id} prod={prod} clicking={clicking} />
      ))}
    </>
  );
};

export default Products;
