import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8 flex flex-col gap-8">
      <div className="">
        <h1 className="mb-4 text-sm font-medium">Search</h1>
        <Search />
      </div>

      <div className="">
        <h1 className="mb-4 text-sm font-medium">Filter</h1>
        <div className="flex flex-col gap-2 text-sm">
          <label htmlFor="" className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="newest"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-gray-50 checked:bg-blue-800"
            />
            Newest
          </label>
          <label htmlFor="" className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="popular"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-gray-50 checked:bg-blue-800"
            />
            Most Popular
          </label>
          <label htmlFor="" className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="trending"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-gray-50 checked:bg-blue-800"
            />
            Trending
          </label>
          <label htmlFor="" className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="oldest"
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-gray-50 checked:bg-blue-800"
            />
            Oldest
          </label>
        </div>
      </div>

      <div className="">
        <h1 className="mb-4 text-sm font-medium">Categories</h1>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/posts" className="">
            All Posts
          </Link>
          <Link
            to="/posts?cat=web-design"
            className=""
          >
            Web Design
          </Link>
          <Link
            to="/posts?cat=development"
            className=""
          >
            Development
          </Link>
          <Link
            to="/posts?cat=databases"
            className=""
          >
            Databases
          </Link>
          <Link
            to="/posts?cat=search-engines"
            className=""
          >
            Search Engines
          </Link>
          <Link
            to="/posts?cat=marketing"
            className=""
          >
            Marketing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
