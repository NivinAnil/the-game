import React from "react";
function Button({ onClick, styles, children }) {
  return (
    <button onClick={onClick} className='button-9' role='button' style={styles}>
      {children}
    </button>
  );
}

export default Button;
