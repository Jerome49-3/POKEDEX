export default function PokReducer(state, action) {
  // console.log(
  //   "state in pokeReduce:",
  //   state,
  //   "\n",
  //   "action in pokereducer:",
  //   action
  // );

  switch (action.type) {
    case "getPokemons": {
      const newState = action.data;
      return newState;
    }
    case "getPokemonTypes": {
      const newState = action.data;
      return newState;
    }
    case "getPokemon": {
      const newState = action.data;
      return newState;
    }
    default:
      throw Error("unknow action" + action.type);
  }
}
