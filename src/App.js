import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Value from './Value';
import Interaction from './Interaction'

class App extends Component {
  render() {
    return (
      <div>
        <div className = "Header"><h1>HighOnCoding</h1>
          <h3>Home</h3>
          <h3>Categories</h3>

        </div>
        <div className = "Body">
          <h2>Curse of the Current Reviews</h2>
          <p>"When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependant on three important factors: price, screenshots, and reviews."</p>
        </div>
        <div className = "Body">
          <h3>Hello WatchKit</h3>
          <p>"Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we  are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."</p>
          <div className = "interaction">
            <Interaction comments="12 comments"  likes ="124 likes"/>
          </div>
        </div>
        <div className = "Body">
          <h3>Introduction to Swift</h3>
          <p>"Swift is a modern programming language devloped by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."</p>
          <div className = "interaction">
            <Interaction comments ="15 comments" likes = "45 likes"/>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
