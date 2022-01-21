import React, { useState } from 'react';
import useStyles from "./style"

function Details({name, image, type, hp, attack, defense, specialAttack, specialDefense, speed }) {
  const classes = useStyles();
  
  return (
      <div className={classes.details}>
        <img className={classes.imag} src={image} alt={name}/>
        <div className={classes.detailWrapper}>
            <h3>{name}</h3> 
            <small>Type: {type}</small>
        </div>
        <div className={classes.stats}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.hp}>
                <h5>Hp</h5>
                <small>{hp}</small>
              </div>
              <div className={classes.attack}>
                <h5>Attack</h5>
                <small>{attack}</small>
              </div>
              <div className={classes.specialAttack}>
                <h5>Special Attack</h5>
                <small>{specialAttack}</small>
              </div>
            </div>
            <div className={classes.col}>
              <div className={classes.defense}>
                <h5>Defense</h5>
                <small>{defense}</small>
              </div>
              <div className={classes.speed}>
                <h5>Speed</h5>
                <small>{speed}</small>
              </div>
              <div className={classes.specialDefense}>
                <h5>Special Defense</h5>
                <small>{specialDefense}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Details;
