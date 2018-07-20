import React, {Component} from 'react'
import Splash from '../splash'
import Projects from '../projects'
import Footer from '../footer'
import About from '../about'

export default class extends Component {
  render () {
    return (
      <main>
        <Splash />
        <About />
        <Projects />
        <Footer />
      </main>
    )
  }
}
