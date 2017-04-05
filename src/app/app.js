import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './views/Main';

injectTapEventPlugin();

render(<Main />, document.getElementById('app'));