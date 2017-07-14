import React from 'react';
import renderHTML from 'react-render-html';

import Utils from '../utils/utils';

const AccordionContent = (props) => {

  const Content = props.content;
  return (
    <div
      className="accordion__header"
      role="tab"
      aria-expanded={props.isExpanded}
      onClick={props.headerClick}
    >
      {Utils.isReactComponent(Content) ? <Content /> : renderHTML(Content)}
    </div>
  )

};

export default AccordionContent;