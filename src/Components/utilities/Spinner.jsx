import React from 'react';
import classes from './Spinner.module.css'
const Spinner = () => {
    return (
      <div className="d-flex align-items-center" style={{ width: "100%", height: "400px" }}>
        <div className={classes.loader}>Loading</div>
      </div>
    );
};

export default Spinner;