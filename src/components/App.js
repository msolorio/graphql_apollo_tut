import React from 'react';
import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <div className='ph3 pv1 background-gray'>
        <Switch>
          <Route exact path='/'>
            <LinkList />
          </Route>
          <Route exact path='/create'>
            <CreateLink />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
