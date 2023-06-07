// Action types
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_DETAIL_POKEMON = 'GET_DETAIL_POKEMON';
export const GET_TYPES = 'GET_TYPES';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const FILTER_TYPES = 'FILTER_TYPES';
export const FILTER_POKEMONS = 'FILTER_POKEMONS';
export const ORDER_POKEMONS = 'ORDER_POKEMONS';
export const CLEAN_INFO_FILTERS = 'CLEAN_INFO_FILTERS';

// Action creators
export const getAllPokemons = () => ({
  type: GET_ALL_POKEMONS,
});

export const getDetailPokemon = (pokemonId) => ({
  type: GET_DETAIL_POKEMON,
  payload: pokemonId,
});

export const getTypes = () => ({
  type: GET_TYPES,
});

export const getPokemonByName = (pokemonName) => ({
  type: GET_POKEMON_BY_NAME,
  payload: pokemonName,
});

export const cleanDetail = () => ({
  type: CLEAN_DETAIL,
});

export const filterTypes = (selectedTypes) => ({
  type: FILTER_TYPES,
  payload: selectedTypes,
});

export const filterPokemons = (filterValue) => ({
  type: FILTER_POKEMONS,
  payload: filterValue,
});

export const orderPokemons = (orderOption) => ({
  type: ORDER_POKEMONS,
  payload: orderOption,
});

export const cleanInfoFilters = () => ({
  type: CLEAN_INFO_FILTERS,
});
