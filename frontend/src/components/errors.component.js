import React, { useState, useEffect } from 'react';
import './../assets/error.scss'

function Errors(props) {
  const [errors, setErrors] = useState(props.errors);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  return (
    <div id="errorContainer">
      <ul>
        {errors.map((e, i) => {
          { i++ }
          return <li key={i} >
            {e}
          </li>
        })}
      </ul>
    </div >
  )
}

export default Errors;