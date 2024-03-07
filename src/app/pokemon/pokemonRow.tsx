type Props = {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
};

function PokemonRow(props: Props) {
  return (
    <div className="pokemonRow">
      <div>{props.pokemon.name}</div>
      <div>ID: {props.pokemon.id}</div>
      <div>Type: {props.pokemon.types.map((type) => type)}</div>
      <img src={props.pokemon.sprite} />
    </div>
  );
}

export default PokemonRow;
