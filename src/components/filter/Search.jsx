import { useContext } from "react";

const Search = ({search,setSearch}) => {

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
