import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductProvider";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setProducts, allProducts } = useContext(ProductContext);

  useEffect(() => {
    const filterData = allProducts?.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filterData);
  }, [search]);

  return (
    <form className="border-[1px] p-1 border-black text-gray-700">
      <input
        className="bg-transparent outline-none w-full"
        type="text"
        placeholder="Search Product Here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
