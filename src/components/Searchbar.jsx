import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Searchbar = ({ searchQuery, setSearchQuery }) => {
  const inputRef = useRef(null);
  return (
    <div className="dark:bg-DarkBlue bg-White shadow-xl py-3 px-4 flex items-center space-x-5 text-DarkBlueLight dark:text-White rounded-lg font-Nunito800 shadow-black/40 desktop:w-[380px]">
      <AiOutlineSearch
        size={23}
        onClick={() => inputRef.current.focus()}
        className="cursor-pointer"
      />
      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-transparent focus:outline-none w-full"
        placeholder="Search for a country..."
      />
    </div>
  );
};
export default Searchbar;


