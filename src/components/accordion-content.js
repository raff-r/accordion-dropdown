import React, {Component} from 'react';
import renderHTML from 'react-render-html';

import Utils from '../utils/utils';

export default class AccordionContent extends Component{

  shouldComponentUpdate(nextProps) {
    return nextProps.isExpanded !== this.props.isExpanded;
  }


  render() {
    const Content = this.props.content;
    const {isExpanded} = this.props;

    return (
      <div
        className={`accordion__content ${(isExpanded) ? 'opened' : ''}`}
        role="tabpanel"
        aria-hidden={!isExpanded}
      >
        {Utils.isReactComponent(Content) ? <Content /> : renderHTML(Content)}
      </div>
    )
  }

};
