import React from 'react';

const Accordion = (props) => {

  const childrenWithProps = props.children.map( (child, index) => {
    return React.cloneElement(child, {
      accordionId: props.accordionId,
      arrow: props.options.arrow,
      key: `${props.options.accordionId}_panel_${index}`
    });
  });

  return (
    <div
      className="accordion"
      role="tablist"
    >
      {childrenWithProps}
    </div>
  )
};

export default Accordion;