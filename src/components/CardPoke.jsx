const CardPoke = ({ pokeName, pokeImg }) => {
  return (
    <a
      href={`/pokemon/${pokeName}`}
      className="card card-side bg-base-100 shadow-sm w-1/6"
    >
      <figure className="w-fit">
        <img
          src={pokeImg}
          alt="une image de pokemon"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title">{pokeName}</h2>
        {/* <p>Click the button to watch on Jetflix app.</p> */}
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div> */}
      </div>
    </a>
  );
};

export default CardPoke;
