import React from 'react';
import useStyles from "./style"

function SearchBox(props) {
  const classes = useStyles();
  
  return (
      <div>
          <input className={classes.search} type="text" value={props.value} onChange={props.onChange} placeholder="Search"/>
      </div>
  )
}

export default SearchBox;
