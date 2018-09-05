import nonWeb3 from './util/web3/nonWeb3';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { DrizzleProvider } from 'drizzle-react'

nonWeb3();
// Layouts
import App from './App'
import { LoadingContainer } from 'drizzle-react-components'

import { store } from './store'
import drizzleOptions from './drizzleOptions'

import HomeContainer from './layouts/home/HomeContainer'
import addCampContainer from './layouts/addCamp/addCampContainer'
import addItemContainer from './layouts/addItem/addItemContainer'
import addUserContainer from './layouts/addUser/addUserContainer'
import allotItemContainer from './layouts/allotItem/allotItemContainer'
import issueItemgContainer from './layouts/issueItemg/issueItemgContainer'
import issueItemlContainer from './layouts/issueIteml/issueItemlContainer'
import listItemsContainer from './layouts/listItems/listItemsContainer'
import listUserContainer from './layouts/listUser/listUserContainer'
import removeUserContainer from './layouts/removeUser/removeUserContainer'
import addKeysContainer from './layouts/addKeys/addKeysContainer'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render((
    <DrizzleProvider options={drizzleOptions} store={store}>
        <Router history={history} store={store}>
          <Route path="/" component={App}>
            <IndexRoute component={HomeContainer} />
          </Route>
          <Route path="/addcamp" component={App}>
            <IndexRoute component={addCampContainer} />
          </Route>
          <Route path="/adduser" component={App}>
            <IndexRoute component={addUserContainer} />
          </Route>
          <Route path="/additem" component={App}>
            <IndexRoute component={addItemContainer} />
          </Route>
          <Route path="/listuser" component={App}>
            <IndexRoute component={listUserContainer} />
          </Route>
          <Route path="/listitem" component={App}>
            <IndexRoute component={listItemsContainer} />
          </Route>
          <Route path="/issueitemglobal" component={App}>
            <IndexRoute component={issueItemgContainer} />
          </Route>
          <Route path="/issueitemlocal" component={App}>
            <IndexRoute component={issueItemlContainer} />
          </Route>
          <Route path="/allotitem" component={App}>
            <IndexRoute component={allotItemContainer} />
          </Route>
          <Route path="/removeuser" component={App}>
            <IndexRoute component={removeUserContainer} />
          </Route>
          <Route path="/addKeys" component={App}>
            <IndexRoute component={addKeysContainer} />
          </Route>
        </Router>
    </DrizzleProvider>
  ),
  document.getElementById('root')
);


/*

import { nonWeb3 } from "./util/web3/nonWeb3"
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { DrizzleProvider } from 'drizzle-react'

// Layouts
import App from './App'
import HomeContainer from './layouts/home/HomeContainer'
import userContainer from './layouts/user/userContainer'
import providerContainer from './layouts/provider/providerContainer'
import developerContainer from './layouts/developer/developerContainer'
import aboutContainer from './layouts/about/aboutContainer'
import teamContainer from './layouts/team/teamContainer'
import tokenContainer from './layouts/token/tokenContainer'
import { LoadingContainer } from 'drizzle-react-components'

import store from './store'
import drizzleOptions from './drizzleOptions'


// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <DrizzleProvider options={drizzleOptions} store={store}>
      <LoadingContainer>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={HomeContainer} />
          </Route>
          <Route path="/user" component={App}>
            <IndexRoute component={userContainer} />
          </Route>
          <Route path="/provider" component={App}>
            <IndexRoute component={providerContainer} />
          </Route>
          <Route path="/developer" component={App}>
            <IndexRoute component={developerContainer} />
          </Route>
          <Route path="/about" component={App}>
            <IndexRoute component={aboutContainer} />
          </Route>
          <Route path="/token" component={App}>
            <IndexRoute component={tokenContainer} />
          </Route>
          <Route path="/team" component={App}>
            <IndexRoute component={teamContainer} />
          </Route>
        </Router>
      </LoadingContainer>
    </DrizzleProvider>
  ),
  document.getElementById('root')
);
*/
