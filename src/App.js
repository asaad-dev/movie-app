import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// Views 
import Home from './views/Home';
import Weekly from './views/Weekly';
import WeeklyBattle from './views/WeeklyBattle';
import Popular from './views/Popular';
import PopularBattle from './views/PopularBattle';
import Favorites from './views/Favorites';

class App extends React.Component {
  render() {
    return (
       <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/weekly">Weekly</Link></li>
              <li><Link to="/weekly-battle">Weekly Battle</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/popular-battle">Popular Battle</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          </nav>

         <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/weekly" component={Weekly}/>
            <Route exact path="/weekly-battle" component={WeeklyBattle}/>
            <Route exact path="/popular" component={Popular}/>
            <Route exact path="/popular-battle" component={PopularBattle}/>
            <Route exact path="/favorites" component={Favorites}/>
         </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
