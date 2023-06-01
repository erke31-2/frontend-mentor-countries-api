import { Link, useParams } from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa"
import data from "../data/data.json";

const Details = () => {
  const { code } = useParams();
  const c = data.find((d) => d.alpha2Code === code);

  const borderCountryNames = c?.borders
    ?.map((bCode) => {
      const borderCountry = data.find((d) => d.alpha3Code === bCode);
      return borderCountry ? borderCountry.name : "";
    })
    .slice(0, 3);

  return (
    <section className="px-8 mx-auto max-w-[500px] lg:max-w-[1240px] lg:px-7 font-Nunito800 dark:text-White text-DarkBlueLight">
      <button className="my-14 px-6 py-2 rounded-md dark:bg-DarkBlue text-sm shadow-xl shadow-black/40 bg-White">
        <Link to="/" className="flex items-center gap-2">
          <FaArrowLeft />
          Back
        </Link>
      </button>

      <div className="space-y-6 lg:flex lg:items-start lg:gap-8">
        <img
          src={c.flag}
          alt={`${c.name}-flag`}
          className="object-cover w-full lg:w-1/2 h-[280px] lg:h-[400px]"
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">{c.name}</h2>
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-6 lg:items-baseline">
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Native Name:</span>{" "}
                {c.nativeName}
              </li>
              <li>
                <span className="font-semibold">Population:</span>{" "}
                {c.population.toLocaleString()}
              </li>
              <li>
                <span className="font-semibold">Region:</span> {c.region}
              </li>
              <li>
                <span className="font-semibold">Sub Region:</span> {c.subregion}
              </li>
              <li>
                <span className="font-semibold">Capital: </span> {c.capital}
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {c.topLevelDomain.join(", ")}
              </li>
              <li>
                <span className="font-semibold">Currencies:</span>{" "}
                {c.currencies.map((cur) => cur.name).join(", ")}
              </li>
              <li>
                <span className="font-semibold">Languages:</span>{" "}
                {c.languages.map((l) => l.name).join(", ")}
              </li>
            </ul>
          </div>
          {borderCountryNames && (
            <div className="mb-9 lg:flex lg:items-center">
              <p className="font-semibold lg:w-[30%]">Border Countries:</p>
              <ul className="flex gap-4 mt-2 items-center lg:m-0 lg:w-[70%]">
                {borderCountryNames.map((b) => (
                  <li
                    className="rounded-md text-center flex justify-center items-center w-1/3 py-2 dark:bg-DarkBlue shadow-2xl shadow-black/80 bg-White lg:px-4"
                    key={b}
                  >
                    <Link to={`/countries/${b}`}>{b}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Details;
