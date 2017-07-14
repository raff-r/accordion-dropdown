import React from 'react';
import PropTypes from 'prop-types';

const Accordion = (props) => {

  const childrenWithProps = props.children.map( (child, index) => {
    return React.cloneElement(child, {
      id: props.accordionId,
      arrow: props.arrow,
      key: `${props.accordionId}_panel_${index}`
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

Accordion.defaultProps = {
  arrow: 'left'
};

Accordion.propTypes = {
  accordionId: PropTypes.string.isRequired,
  arrow: PropTypes.oneOf(['left', 'right', 'none'])
};

export default Accordion;