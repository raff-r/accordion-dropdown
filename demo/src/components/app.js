import React, {Component} from 'react'

import {Accordion, AccordionPanel, styles} from '../../../src/index';

import Content from './accordion-content';
import Header from './html-header';


export default class App extends Component {

  render() {

    return (
      <div className="container">
        <div className="col s12">

          <br/><br/>

          <h5>Left arrows</h5>
          <hr/>
          <Accordion accordionId="demo1" arrow="left">
            <AccordionPanel header={Header} content={Content}/>
            <AccordionPanel header={Header} content={Content}/>
          </Accordion>

          <br/>
          <br/>

          <h5>Right arrows</h5>
          <hr/>
          <Accordion accordionId="demo2" arrow="right">
            <AccordionPanel header={Header} content={Content}/>
            <AccordionPanel header={Header} content={Content}/>
          </Accordion>

          <br/>
          <br/>

          <h5>No arrows</h5>
          <hr/>
          <Accordion accordionId="demo3" arrow="none">
            <AccordionPanel header={Header} content={Content}/>
            <AccordionPanel header={Header} content={Content}/>
          </Accordion>

        </div>
      </div>
    )
  }
}