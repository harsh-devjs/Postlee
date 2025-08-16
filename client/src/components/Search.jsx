import { LiaSearchSolid } from "react-icons/lia";

const Search = () => {
  return (
    <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2 '>
      <LiaSearchSolid size={20} />
      <input type="text" placeholder="search a post..." className="outline-none" />
    </div>
  )
}

export default Search
