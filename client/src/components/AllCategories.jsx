import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const AllCategories = () => {
  return (
    <div className="hidden md:flex items-center justiy-center bg-white rounded-3xl xl:rounded-full p-4 gap-8">
      {/* LINKS */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white px-4 py-2 rounded-full"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=search-engines"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Marketing
        </Link>
      </div>

      {/* SEARCH */}
      <div className="bg-gray-100 rounded-full p-2 flex items-center gap-2">
        <LiaSearchSolid size={20} />
        <input type="text" placeholder="Search" className="outline-none w-44" />
      </div>
    </div>
  );
};

export default AllCategories;
