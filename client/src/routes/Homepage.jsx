import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import AllCategories from "../components/AllCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* LOGO */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>

      {/*  */}
      <div className="flex items-center justify-between gap-10">
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-4 text-md md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ea, aut animi ratione quia consequuntur earum.
          </p>
        </div>
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="bg-blue-800 w-24  h-24 text-white rounded-full flex items-center justify-center absolute top-13 left-13">
            <IoIosArrowRoundUp size={100} className="rotate-45" />
          </button>
        </Link>
      </div>

      {/* CATEGORY LIST */}
      <AllCategories />

      {/* FEATURED POSTS */}
      <FeaturedPosts />

      {/* RECENT POSTS */}
      <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
      <PostList />
    </div>
  );
};

export default Homepage;
