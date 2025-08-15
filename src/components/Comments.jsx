import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl underline text-gray-500">Comments</h1>
      <div className="flex justify-between items-center gap-8">
        <textarea
          placeholder="Write a comment"
          className="bg-gray-100 w-full p-4 outline-none rounded-xl"
        />
        <button className="bg-blue-500 px-4 py-3 text-white font-medium rounded-xl">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
