import PokemonRow from "./pokemonRow";
import PokemonTable from "./pokemonTable";

const bulbasaur = {
  id: 1,
  name: "Bulbasaur",
  types: ["grass"],
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
};

function Page() {
  return (
    // <>
    //   {bulbasaur.name}
    //   <br />
    //   ID: {bulbasaur.id} <br />
    //   Type:{" "}
    //   {bulbasaur.types.length === 1
    //     ? bulbasaur.types[0]
    //     : bulbasaur.types[0] + bulbasaur.types[1]}{" "}
    //   <br />
    //   <img src={bulbasaur.sprite} />
    // </>

    <>
      <PokemonRow pokemon={bulbasaur} />
      <br />
      <br />
    </>
  );
}

export default Page;
