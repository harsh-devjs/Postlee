import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <p className="">Loading...</p>;
  // if (isLoaded && !isSignedIn) return <p className="">Login to enter this page</p>;

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-fit p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white cursor-pointer">
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="My awesome story"
          className="text-4xl outline-none font-semibold"
        />
        <div className="flex items-center gap-4">
          <label className="text-sm">Choose a category</label>
          <select
            name="cat"
            className="p-2 shadow-md bg-white rounded-xl outline-none"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A Short Description"
          className="p-4 shadow-md bg-white rounded-xl outline-none"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 shadow-md bg-white rounded-xl outline-none"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 w-36 p-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
