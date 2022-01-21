import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from "./style";
import PokeCard from "../../Component/PokeCard/PokeCard";
import SearchBox from "../../Component/SearchBox/SearchBox";
import AddFavourites from "../../../src/Component/Favorite/AddFavorites"

function ListPoke() {
  const classes = useStyles();
  const [pokemon, setPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);
  const [ready, setReady] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const getPokemon = async () => {
    const res = await fetch(currentUrl)
    const data = await res.json()
    setCurrentUrl(data.next)
    createPokemontObject(data.results)
    setReady(true)
  }

  function createPokemontObject(results) {
    results.forEach( async (poke) => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      const datas = await resp.json()
      setPokemon(current => [...current, datas])
    })
  }
  
  useEffect(() => {
    getPokemon();
  }, []);

  const addFavouritesPokemon = (poke) => {
    const newFavouriteList = [...favourites, poke];
    setFavourites(newFavouriteList);
  }

  if (ready) {
    return (
      <div className={classes.listPoke}>
        <div className={classes.header}>
            <Container maxWidth="md" className={classes.conHeader}>
              <Typography className={classes.titleHeader}>Pokemon List</Typography>
            </Container>
        </div>
        <div> 
          <Container className={classes.containerListPoke} maxWidth="md">
            <div>
              <SearchBox />
            </div>
            <div className={classes.titlePokemons}>
              <Typography className={classes.titlePokemon}>Your Pokemon List</Typography>
            </div>
            <div className={classes.pokemonContainer}>
              <div className={classes.allContainer}>
                {pokemon.sort((a,b) => {
                  return a.id - b.id
                }).map((poke, index) => {
                  return (
                    <PokeCard
                      key={index}
                      name={poke.name}
                      image={poke.sprites.other.dream_world.front_default}
                      type={poke.types[0].type.name}
                      hp={poke.stats[1].base_stat}
                      attack={poke.stats[2].base_stat}
                      defense={poke.stats[3].base_stat}
                      speed={poke.stats[5].base_stat}
                      specialAttack={poke.stats[4].base_stat}
                      specialDefense={poke.stats[5].base_stat}
                      handleFavouritesClick={addFavouritesPokemon}
                      favouriteComponent={AddFavourites}
                    />
                  )
                  })}
              </div>
              <div className={classes.loadMore}>
                <button className={classes.btnLoadMore} onClick={() => getPokemon()}>Load More</button>
              </div>
            </div>
            <div>
              <Typography className={classes.titlePokemon}>Your Favorite Pokemon</Typography>
            </div>
            <div className={classes.allContainer}>
                {favourites.sort((a,b) => {
                  return a.id - b.id
                }).map((poke, index) => {
                  return (
                    <PokeCard
                      key={index}
                      name={poke.name}
                      image={poke.sprites.other.dream_world.front_default}
                      type={poke.types[0].type.name}
                      hp={poke.stats[1].base_stat}
                      attack={poke.stats[2].base_stat}
                      defense={poke.stats[3].base_stat}
                      speed={poke.stats[5].base_stat}
                      specialAttack={poke.stats[4].base_stat}
                      specialDefense={poke.stats[5].base_stat}
                      handleFavouritesClick={addFavouritesPokemon}
                      favouriteComponent={AddFavourites}
                    />
                  )
                  })}
              </div>
          </Container>
        </div>
      </div>
    )
  } else {
    return <p>Loading</p>
  }
}

export default ListPoke;
