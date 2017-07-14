import React, {Component} from 'react'

import Accordion from '../../../src/components/accordion';
import AccordionPanel from '../../../src/components/accordion-panel';
import '../../../src/styles/mse-accordon.css';

import Content from './accordion-content';
import Header from './html-header';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="col s12">
          <Accordion>
            <AccordionPanel header={Header} content={Content} accordionId="testing"/>
            <AccordionPanel header={Header} content={Content} accordionId="testing2"/>
            <AccordionPanel header={Header} content={Content} accordionId="testing3"/>
            <AccordionPanel header={Header} content={Content} accordionId="testing4"/>
            <AccordionPanel header={Header} content={Content} accordionId="testing5"/>
            <AccordionPanel header={Header} content={Content} accordionId="testing6"/>
          </Accordion>
        </div>
      </div>
    )
  }
}