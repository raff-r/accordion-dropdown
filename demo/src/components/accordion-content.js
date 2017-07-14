import React, {Component} from 'react'
import loremIpsum from 'lorem-ipsum';

export default class Content extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <h1>Body Content</h1>
        {loremIpsum({count: Math.floor(Math.random() * 75) + 1  })}
      </div>
    )
  }
}