import React, { useContext, useEffect } from "react";

import Card from "./Card";
import fetchData from "../../utils/fetchData";
import { ProductContext } from "../../context/ProductProvider";

const Products = () => {
  const {products, setProducts, setAllProducts} = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData("/products");
      setProducts(data?.products);
      setAllProducts(data?.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap gap-8 w-[70vw]">
      {products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
