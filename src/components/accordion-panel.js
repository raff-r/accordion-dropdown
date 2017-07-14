import React, {Component} from 'react';

import AccordionContent from './accordion-content';
import AcorrdionHeader from './accordion-header';

export default class AccordionPanel extends Component {

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
      <div className={`${(this.state.checked) ? 'opened' : ''}`} id={this.props.accordionId}>
        <AcorrdionHeader content={this.props.header} headerClick={this.handleAccordionHeaderClick} arrow={this.props.arrow} />
        <AccordionContent content={this.props.content} isExpanded={this.state.checked}/>
      </div>
    )
  }

}