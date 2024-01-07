import Category from "./Category";
import Search from "./Search";
import Price from "./Price";

const Filter = () => {
  return (
    <div className="w-[20vw] h-fit sticky top-[6rem] p-2 bg-white rounded-lg">
      <Search />
      <Category />
      <Price />
    </div>
  );
};

export default Filter;
