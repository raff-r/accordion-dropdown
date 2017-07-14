import React, {Component} from 'react'
import loremIpsum from 'lorem-ipsum';
import renderHTML from 'react-render-html';

export default class Content extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        {renderHTML(loremIpsum({count: Math.floor(Math.random() * 5) + 1, units: 'paragraphs', format: 'html'}))}
      </div>
    )
  }
}