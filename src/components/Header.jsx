import Image from "./Image";

const Header = () => {
  const logoPokemon = "/img/logo-pokemon.png";
  return (
    <div className="navbar bg-base-300 shadow-sm flex justify-center h-10">
      <div className="wrapper flex w-full max-w-6xl">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            <Image src={logoPokemon} alt="logo-pokemon" />
          </a>
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            id="searchHeader"
          />
        </div>
        <div className="flex gap-2">
          <a href="/pokemons" className="btn btn-primary">
            Pokemons
          </a>
          <a href="/types" className="btn btn-secondary">
            Types
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
