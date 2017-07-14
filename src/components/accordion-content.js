import React, {Component} from 'react';
import renderHTML from 'react-render-html';

import Utils from '../utils/utils';

export default class AccordionContent extends Component{

  shouldComponentUpdate(nextProps) {
    return nextProps.isExpanded !== this.props.isExpanded;
  }

  componentDidMount() {
    this.setState({ elementHeight: this.divRef.offsetHeight });
  }

  render() {
    const Content = this.props.content;
    const {isExpanded} = this.props;

    const styles = {
      height: (isExpanded) ? this.state.elementHeight : '0px'
    };

    return (
      <div
        className={`accordion__content ${(isExpanded) ? 'opened' : ''}`}
        role="tabpanel"
        aria-hidden={!isExpanded}
        style={styles}
      >
        <div ref={element => this.divRef = element}>
          {Utils.isReactComponent(Content) ? <Content /> : renderHTML(Content)}
        </div>
      </div>
    )
  }

};
