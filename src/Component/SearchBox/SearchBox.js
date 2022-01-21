import React from 'react';
import useStyles from "./style"

function SearchBox(props) {
  const classes = useStyles();
  
  return (
      <div>
          <input className={classes.search} value={props.value} onChange={(e) => props.setSearchValue(e.target.value)} placeholder="Search"/>
      </div>
  )
}

export default SearchBox;
