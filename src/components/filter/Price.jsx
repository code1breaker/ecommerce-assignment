import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductProvider";
import MultiRangeSlider from "multi-range-slider-react";

const Price = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000);
  const { setProducts, allProducts } = useContext(ProductContext);

  useEffect(() => {
    const data = allProducts?.filter(
      (product) => product.price >= minValue && product.price <= maxValue
    );
    if (data.length) setProducts(data);
    else setProducts(allProducts);
  }, [minValue, maxValue]);

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };
  return (
    <>
      <MultiRangeSlider
        min={0}
        max={2000}
        step={1}
        style={{ border: "none", boxShadow: "none" }}
        ruler={false}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    </>
  );
};

export default Price;
