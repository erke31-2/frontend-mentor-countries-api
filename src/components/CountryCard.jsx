import { Link } from "react-router-dom";
const CountryCard = ({c}) => {
  return (
    <Link
      to={`countries/${c.name.toString()}`}
      className="rounded-xl h-[480px] cursor-pointer mx-auto w-[320px] shadow-2xl shadow-black/40"
      key={c.name}
    >
      <img
        src={c.flag}
        alt={`${c.name}-flag`}
        className="rounded-t-xl w-full h-[55%] object-cover"
      />
      <div className="dark:bg-DarkBlue bg-White rounded-b-xl space-y-3 h-[45%] flex flex-col justify-center px-9 font-Nunito800 dark:text-White text-DarkBlueLight">
        <h2 className="text-2xl font-bold">{c.name}</h2>
        <ul className="font-Nunito800">
          <li>Population: {c.population.toLocaleString()}</li>
          <li>Capital: {c.capital}</li>
          <li>Region: {c.region}</li>
        </ul>
      </div>
    </Link>
  );
};
export default CountryCard;
