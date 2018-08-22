import React, { Component } from 'react'
import PropTypes from 'prop-types';


// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  drizzle: PropTypes.object,
  drizzleStore: PropTypes.object,
}


export default App

/*

import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
//    console.log(this.props.children);
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  drizzle: PropTypes.object,
  drizzleStore: PropTypes.object,
}


export default App
*/
