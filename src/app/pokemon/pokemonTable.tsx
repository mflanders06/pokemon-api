import { pokemons } from "./pokemons";
import PokemonRow from "./pokemonRow";

type Props = {
  pokemonArray: pokemons[];
};

function PokemonTable(props: Props) {
  return (
    <div>
      {props.pokemonArray.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonRow pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
}

export default PokemonTable;

//<div>Type: {props.pokemon.types.map((type) => type)}</div>
