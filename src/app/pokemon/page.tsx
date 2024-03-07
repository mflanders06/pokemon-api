import PokemonRow from "./pokemonRow";
import PokemonTable from "./pokemonTable";

const bulbasaur = {
  id: 1,
  name: "Bulbasaur",
  types: ["grass"],
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
};

const pokemonArray = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass"],
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "Slowpoke",
    types: ["water", "psychic"],
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  },
  {
    id: 3,
    name: "Gengar",
    types: ["ghost", "poison"],
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
];

function Page() {
  return (
    <>
      <PokemonRow pokemon={bulbasaur} />
      <br />
      <br />
      <PokemonTable pokemonArray={pokemonArray} />
    </>
  );
}

export default Page;
