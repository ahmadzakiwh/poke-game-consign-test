import React from 'react';
import useStyles from "./style"

export default function AddFavorites() {
    const classes = useStyles();
  return (
    <button className={classes.favorite}>Add Favourite</button>
  )
}
