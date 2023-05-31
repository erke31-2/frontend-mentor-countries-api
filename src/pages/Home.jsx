import { useState } from "react";
import data from "../data/data.json";
import Searchbar from "../components/Searchbar";
import Dropdown from "../components/Dropdown";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  const countries = data.filter((country) => {
    const matchingSearch = country.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchingFilter = !filterQuery || country.region === filterQuery;
    return matchingSearch && matchingFilter;
  });

  return (
    <section>
      <div className="h-[150px] space-y-4 p-4 relative">
        <Searchbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <Dropdown setFilterQuery={setFilterQuery} filterQuery={filterQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 desktop:grid-cols-4 gap-8 px-4">
        {countries.map((c) => (
          <CountryCard  c={c} key={c.name}/>
        ))}
      </div>
    </section>
  );
};
export default Home;


