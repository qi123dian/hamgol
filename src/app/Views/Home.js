import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Header from './Header';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            contentLeft: '0px',
            contentTop: '70px',
        };
    }
    
    render() {
        return (
            <div style={{height: '100%', width: '100%', zIndex: 100}}>
                <Header />
                <div style={{height: '100%', width: '100%', position:'absolute',top: '0px', left: '0px', zIndex: 100}}>
                    <div style={{position:'absolute', left: this.state.contentLeft, top: this.state.contentTop, bottom: '0px', right: '0px'}}>
                        <Scrollbars>
                            {this.props.children}
                        </Scrollbars>
                    </div>
                </div>
            </div>
        );
    }
}