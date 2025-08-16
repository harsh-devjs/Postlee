import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* IMAGE */}
      <div className="md:hidden xl:block xl:w-1/2">
        <img src="postImg.jpeg" className="rounded-2xl object-cover" alt="" />
      </div>
      {/* DETAILS */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/singlepostpage" className="text-4xl font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
          eveniet, numquam ullam.
        </Link>
        <div className="flex items-center gap-2 text-gray-400">
          <span>Written by</span>
          <Link to="" className="text-blue-800">
            John Doe
          </Link>
          <span>on</span>
          <Link to="" className="text-blue-800">
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci
          nisi assumenda earum officiis architecto fuga exercitationem ipsam
          placeat fugit. Aliquid vitae quibusdam accusamus omnis, accusantium
          pariatur nostrum porro fugiat.
        </p>
        <Link to="/singlepostpage" className="underline text-sm text-blue-800">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Post;
