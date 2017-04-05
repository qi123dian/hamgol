import React, {Component} from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import Home from '../views/Home';
import About from '../views/About';

export default class RootRouter extends Component {

    render() {
        const { history } = this.props;
        return (
            <Router history = {browserHistory} >
                <Route path='/' component={Home} >
                    <route path ='/about' component={About} />
                </Route>
            </Router>
        );
    }
}