"use client";
import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button className="bg-blue-800 text-white text-sm px-4 py-2 rounded-2xl mb-4 md:hidden" onClick={() => setOpen((prev) => !prev)}>
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="md:w-4/5">
          <PostList />
        </div>
        <div className={`${open ? 'block' : 'hidden'} md:block md:w-1/5`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
