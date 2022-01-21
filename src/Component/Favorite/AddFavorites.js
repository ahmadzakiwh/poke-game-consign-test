import React from 'react';
import useStyles from "./style"

export default function AddFavorites(props) {
    const classes = useStyles();
  return (
    <button className={classes.favorite} onClick={props.onClick}>Add Favourite</button>
  )
}
