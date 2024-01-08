import Category from "./Category";
import Search from "./Search";
import Price from "./Price";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductProvider";

const Filter = () => {
  const [search, setSearch] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000);

  const { setProducts, allProducts } = useContext(ProductContext);

  useEffect(() => {
    let filterProducts = allProducts;
    if (search) {
      filterProducts = filterProducts?.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (checkedItems.length) {
      filterProducts = filterProducts?.filter((product) =>
        checkedItems.includes(product.category)
      );
    }

    if (minValue!=0 || maxValue!=2000) {
      filterProducts = filterProducts?.filter(
        (product) => product.price >= minValue && product.price <= maxValue
        );
      }

    setProducts(filterProducts);
  }, [search, checkedItems, minValue, maxValue]);
  return (
    <div className="w-[20vw] h-fit sticky top-[6rem] p-2 bg-white rounded-lg">
      <Search search={search} setSearch={setSearch} />
      <Category setCheckedItems={setCheckedItems} />
      <Price
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
    </div>
  );
};

export default Filter;
