import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

const Category = ({setCheckedItems}) => {
    const { allProducts } = useContext(ProductContext);
    const categories = [
      ...new Set(allProducts?.map((product) => product.category)),
    ];
  
    const handleChange = (e) => {
      e.target.checked
        ? setCheckedItems((prev) => [...prev, e.target.value])
        : setCheckedItems((prev) =>
            prev.filter((item) => item != e.target.value)
          );
    };
    
  return (
    <div className="mt-3">
        <h3>Category</h3>

        {categories?.map((category) => {
          return (
            <div key={category} className="flex items-center gap-3">
              <input
                type="checkbox"
                name="category"
                value={category}
                onChange={handleChange}
              />
              <p>{category}</p>
            </div>
          );
        })}
      </div>
  )
}

export default Category
