import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './components/home';

const App = React.createClass({
  render() {
    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }
});

const router = (
 <Router history={hashHistory}>
   <Route path="/" component={App}>
     <IndexRoute component={Home}/>
   </Route>
 </Router>
);

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.querySelector('#content');
  ReactDOM.render(
    router,
    root
  );
});
