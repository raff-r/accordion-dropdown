import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AccordionContent from './accordion-content';
import AcorrdionHeader from './accordion-header';

export default class AccordionPanel extends Component {

  static propTypes = {
    header: PropTypes.any.isRequired,
    content: PropTypes.any.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.handleAccordionHeaderClick = this.handleAccordionHeaderClick.bind(this);
  }

  handleAccordionHeaderClick() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return(
      <div className={`${(this.state.checked) ? 'opened' : ''}`} id={this.props.id}>
        <AcorrdionHeader content={this.props.header} headerClick={this.handleAccordionHeaderClick} arrow={this.props.arrow} />
        <AccordionContent content={this.props.content} isExpanded={this.state.checked}/>
      </div>
    )
  }

}