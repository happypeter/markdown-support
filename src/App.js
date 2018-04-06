import React, { Component } from 'react'
import Markdown from 'react-markdown'
import { section1 } from './constants/Content.js'

class App extends Component {
  render() {
    console.log(section1)
    return (
      <div className="App">
        <Markdown source={section1} />
      </div>
    )
  }
}

export default App
