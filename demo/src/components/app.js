import React, {Component} from 'react'

import Accordion from '../../../src/components/accordion';
import AccordionPanel from '../../../src/components/accordion-panel';
import '../../../src/styles/mse-accordon.css';

import Content from './accordion-content';
import Header from './html-header';


export default class App extends Component {

  render() {

    const options1 = {
      accordionId: 'demo1',
      arrow: 'left'
    };

    const options2 = {
      accordionId: 'demo2',
      arrow: 'right'
    };

    const options3 = {
      accordionId: 'demo3',
      arrow: 'none'
    };

    return (
      <div className="container">
        <div className="col s12">

          <br/><br/>

          <h5>Left arrows</h5>
          <hr/>
          <Accordion options={options1}>
            <AccordionPanel header={Header} content={Content}/>
            <AccordionPanel header={Header} content={Content}/>
          </Accordion>

          <br/>
          <br/>

          <h5>Right arrows</h5>
          <hr/>
          <Accordion options={options2}>
            <AccordionPanel header={Header} content={Content}/>
            <AccordionPanel header={Header} content={Content}/>
          </Accordion>

          <br/>
          <br/>

          <h5>No arrows</h5>
          <hr/>
          <Accordion options={options3}>
            <AccordionPanel header={Header} content={Content}/>
            <AccordionPanel header={Header} content={Content}/>
          </Accordion>
          
        </div>
      </div>
    )
  }
}