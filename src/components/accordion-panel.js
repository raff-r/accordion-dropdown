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
    console.log(`clicked ${this.props.accordionId}`);
    this.setState({checked: !this.state.checked});
  }

  render() {

    return(
      <div>
        <AcorrdionHeader content={this.props.header} headerClick={this.handleAccordionHeaderClick} isExpanded={this.state.checked} />
        <AccordionContent content={this.props.content} isExpanded={this.state.checked}/>
      </div>
    )
  }

}