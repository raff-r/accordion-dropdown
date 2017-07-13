import React, {Component} from 'react';
import renderHTML from 'react-render-html';

import Utils from '../utils/utils'

export default class AccordionHeader extends Component {

  constructor(props) {
    super(props);

    this.handleAccordionHeaderClick = this.handleAccordionHeaderClick.bind(this);
  }

  handleAccordionHeaderClick() {
    console.log(`clicked ${this.props.accordionId}`);
  }

  render() {

    const props = this.props;
    const HeaderContent = props.headerContent;

    return(
      <div>
        <input
          key={`input_${props.accordionId}`}
          id={`toggle_${props.accordionId}`}
          type={props.allowMultiple ? `checkbox` : `radio`}
          name={`accordion_${props.accordionId}`}
          className="accordion__header__trigger"
          checked={props.isExpanded}
          disabled={props.isDisabled}
        />
        <label
          key={`label_${props.accordionId}`}
          htmlFor={`toggle_${props.accordionId}`}
          className="accordion__header"
          role="tab"
          tabIndex={-1}
          aria-expanded={props.isExpanded}
          onClick={this.handleAccordionHeaderClick}
        >
          {Utils.isReactComponent(HeaderContent) ? <HeaderContent /> : renderHTML(HeaderContent)}
        </label>
      </div>
    )
  }

}