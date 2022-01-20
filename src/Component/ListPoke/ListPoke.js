import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Typography } from '@material-ui/core';
import useStyles from "./style"
import PokeCard from "../PokeCard/PokeCard"

function ListPoke() {
  const classes = useStyles();

  const [pokemon, setPokemon] = useState([]);
  // const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  // const [nextUrl, setNextUrl] = useState();
  // const [prevUrl, setPrevUrl] = useState();
  const [ready, setReady] = useState(false);

  const getPokemon = async () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        const { data } = res;
        setPokemon(data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setReady(true));

    // const res = await fetch(currentUrl)
    // const data = await res.json()

    // setCurrentUrl(data.next)

    // function createPokemontObject(result) {
    //   result.forEach( async (poke) => {
    //     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
    //     const data = await res.json()
        
    //     setPokemon(current => [...current, data])
    //   })
    // }
    // createPokemontObject(data.result)
    // console.log(pokemon)
  }
  
  useEffect(() => {
    // setReady(true)
    getPokemon(); 
  }, []);

  if (ready) {
    return (
      <div className={classes.listPoke}>
        <div className={classes.header}>
            <Container maxWidth="md" className={classes.conHeader}>
              <Typography className={classes.titleHeader}>Pokemon List</Typography>
            </Container>
        </div>
        <div className={classes.list}>
          <Container maxWidth="md">
            <div>
              <Typography className={classes.h2}>Your Pokemon List</Typography>
            </div>
            <div>
              {pokemon.map((poke, index) => {
                return (
                  <PokeCard
                    name={poke.name}
                    image={poke.sprites.other.dream_world.front_default}
                    type={poke.types[0].type.name}
                    key={index}
                  />
                )
                })}
            </div>
            <div>
              <button className={classes.next}>Next</button>
            </div>
            <div>
              <Typography className={classes.h2}>Your Favorite Pokemon</Typography>
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
