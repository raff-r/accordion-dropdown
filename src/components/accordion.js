import React from 'react';

const Accordion = (props) => {
  return (
    <div
      className="accordion"
      role="tablist"
    >
      {props.children}
    </div>
  )
};

export default Accordion;