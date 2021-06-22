import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu';
import { Home, About, EPubTest, PopUpTest } from '../pages';

class App extends Component {
    render() {
        return (
          <div>
              <Menu/>
              <Route exact path="/" component={Home}/>
              <Switch>
                  <Route path="/popup" component={PopUpTest}/>
                  <Route path="/about" component={About}/>
                  <Route path="/epub" component={EPubTest}/>
              </Switch>
          </div>
        );
    }
}

export default App;