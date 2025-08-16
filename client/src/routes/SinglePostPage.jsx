import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* DETAILS */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-5">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Written by</span>
            <Link to="/" className="text-blue-800">
              John Doe
            </Link>
            <span>on</span>
            <Link to="/">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia saepe
            excepturi ab sunt sapiente consectetur! Distinctio blanditiis hic
            culpa dignissimos incidunt. Laborum dicta nesciunt laudantium optio,
            praesentium quidem a. Nesciunt?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <img src="/postImg.jpeg" width="600" alt="" className="rounded-2xl" />
        </div>
      </div>
      {/* CONTENT */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* TEXT */}
        <div className="flex-1 lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            voluptates sunt temporibus dolor tenetur esse harum asperiores error
            animi modi et, distinctio doloremque nesciunt nulla consequuntur
            eius laudantium quae sint. Id error suscipit dolorem rem.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            nemo totam dolores ex error vel autem delectus reiciendis dolorem
            impedit est, unde rem molestiae recusandae vero accusamus iste. Nisi
            esse ratione doloremque veniam beatae cupiditate quos corrupti
            mollitia! Nisi, cum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            at officia! Aut odio tempora suscipit libero animi, aliquid omnis
            accusantium enim dignissimos voluptates pariatur quidem, illo ipsa
            mollitia exercitationem cumque perspiciatis praesentium voluptate
            repellendus vitae unde laboriosam consequuntur. Repellendus!
          </p>  
        </div>
        {/* MENU */}
        <div className="px-4 h-full top-8 sticky">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img
                src="/userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <Link to="/" className="text-blue-800">
                John Doe
              </Link>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex gap-2">
              <img src="/facebook.svg" alt="" />
              <img src="/instagram.svg" alt="" />
            </div>
          </div>
          <PostMenuActions />

          <h1 className="mt-8 mb-4 text-sm font-medium">All Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="" className="underline">
              All
            </Link>
            <Link to="" className="underline">
              Web Design
            </Link>
            <Link to="" className="underline">
              Development
            </Link>
            <Link to="" className="underline">
              Databases
            </Link>
            <Link to="" className="underline">
              Search Engines
            </Link>
            <Link to="" className="underline">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
