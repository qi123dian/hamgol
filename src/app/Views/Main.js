import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {blueA400} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from '../Redux/Store/Store';
import RootRouter from '../Router/RootRouter';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: blueA400,
    },
});

store.subscribe(() => {
    console.log('监听state变化store.subscribe')
});

export default class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme = {muiTheme}>
                    <RootRouter history={browserHistory} />
                </MuiThemeProvider>
            </Provider>
        );
    }
}