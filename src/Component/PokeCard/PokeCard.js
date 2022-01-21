import React, { useState } from 'react';
import useStyles from "./style"
import "./bg.css"
import { Modal } from '@material-ui/core';
import Details from "../DetailsPoke/Details"

function PokeCard(props, {name, image, type, hp, attack, defense, specialAttack, specialDefense, speed}) {
  const classes = useStyles();
  const bg = props.type + " pokemoncard"
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const FavouriteComponent = props.favouriteComponent;

  return (
      <div className={bg}>
        <img className={classes.imag} src={props.image} alt={name}/>
        <div className={classes.detailWrapper}>
            <h3>{props.name}</h3> 
            <small>Type: {props.type}</small>
        </div>
        <div className="overlay">
          <button onClick={handleOpen} className={classes.details}>Details</button>
          <FavouriteComponent onClick={props.handleFavouritesClick}/>
        </div>
        <Modal
          open={open}
          onClose={handleClose}>
            <Details
            image={props.image}
            name={props.name}
            type={props.type}
            hp={props.hp}
            attack={props.attack}
            defense={props.defense}
            speed={props.speed}
            specialAttack={props.specialAttack}
            specialDefense={props.specialDefense}/>
          </Modal>
      </div>
  )
}

export default PokeCard;
