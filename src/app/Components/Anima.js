import React from 'react';
import Radium, { Style, StyleRoot } from 'radium';
import * as animations from 'react-animations';

const styles = {};
for (let key in animations) {
    if ( key === 'global' || key === 'merge' || key === 'container' ) {
        continue;
    }
    const animation = animations[key];
    styles[key] = {
        ...(styles[key]),
        animation: 'x',
        animationName: Radium.keyframes(animation, key),
        animationDuration: '1s',
    };
}
const animatStyle = styles['rubberBand'];

export default class Anima extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <StyleRoot style={{width: '600px', backgroundColor: '#CCC', padding: '10px', textAlign: 'center', margin: 'auto'}}>
                <p style={animatStyle}>A collection of animations for CSS-in-JS libraries </p>
            </StyleRoot>
        );
    }
}