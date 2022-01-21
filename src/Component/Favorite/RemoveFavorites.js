import React from 'react';
import useStyles from "./style"

export default function RemoveFavorites(props) {
    const classes = useStyles();
  return ( 
    <button className={classes.favorite} onClick={props.onClick}>Remove Favourite</button>
  )
}
