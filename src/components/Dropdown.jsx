import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const Dropdown = ({ filterQuery, setFilterQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterByRegion = (region) => {
    setFilterQuery(region);
    setIsOpen(false);
  };
  return (
    <div className="w-52 absolute desktop:right-4 desktop:top-0 font-Nunito800 dark:text-White text-DarkBlueLight z-10 shadow-lg shadow-black/50 rounded-md">
      <div
        className="w-full py-[10px] px-4 flex items-center justify-between rounded-md cursor-pointer dark:bg-DarkBlue bg-White"
        onClick={() => setIsOpen(!isOpen)}
      >
        {filterQuery ? <p>{filterQuery}</p> : <p>Search by Region</p>}
        {isOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
      </div>
      {isOpen && (
        <ul className="mt-2 overflow-y-auto dark:bg-DarkBlue bg-White rounded-md">
          <li
            className="py-2 px-4 text-md  hover:bg-DarkGrayLight dark:hover:bg-DarkBlueDark cursor-pointer"
            onClick={() => filterByRegion("")}
          >
            All
          </li>

          <li
             className="py-2 px-4 text-md  hover:bg-DarkGrayLight dark:hover:bg-DarkBlueDark cursor-pointer"
            onClick={() => filterByRegion("Africa")}
          >
            Africa
          </li>
          <li
             className="py-2 px-4 text-md  hover:bg-DarkGrayLight dark:hover:bg-DarkBlueDark cursor-pointer"
            onClick={() => filterByRegion("Asia")}
          >
            Asia
          </li>

          <li
             className="py-2 px-4 text-md  hover:bg-DarkGrayLight dark:hover:bg-DarkBlueDark cursor-pointer"
            onClick={(e) => filterByRegion("Americas")}
          >
            Americas
          </li>

          <li
             className="py-2 px-4 text-md  hover:bg-DarkGrayLight dark:hover:bg-DarkBlueDark cursor-pointer"
            onClick={() => filterByRegion("Europe")}
          >
            Europe
          </li>
          <li
             className="py-2 px-4 text-md  hover:bg-DarkGrayLight dark:hover:bg-DarkBlueDark cursor-pointer"
            onClick={() => filterByRegion("Oceania")}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};
export default Dropdown;

