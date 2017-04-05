/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import Radium, { Style, StyleRoot } from 'radium';
import * as animations from 'react-animations';

import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import NavigationSearchIcon from 'material-ui/svg-icons/action/search';

import NavigationAppsIcon from 'material-ui/svg-icons/navigation/apps';
import NavigationArrowDownwardIcon from 'material-ui/svg-icons/navigation/arrow-downward';
import NavigationArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import NavigationEmailIcon from 'material-ui/svg-icons/communication/email';
import NavigationListIcon from 'material-ui/svg-icons/action/list';
import NavigationMoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMessageIcon from 'material-ui/svg-icons/communication/message';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import TweenOne from 'rc-tween-one';

import MessagePopover from '../components/MessagePopover';
import MenuDrawer from '../components/MenuDrawer';

const styles = {
    appBar: {
        height: '70px',
    },
    titleStyle: {
        height: '70px',
        lineHeight: '70px',
        fontSize: '16px',
        paddingLeft: '10px',
    },
    iconStyleLeft: {
        marginTop: '11px',
        marginLeft: '-8px',
    },
    iconStyleRight: {
        marginTop: '0px',
        marginLeft: '0px',
        marginRight: '0px',
        marginBottom: '0px',
    },
    toolbar: {
        background: 'transparent',
        height: '70px',
        paddingLeft: '0px',
        paddingRight: '0px',
    },
    badgeStyleStyle: {
        paddingTop: '0px',
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingBottom: '0px',
    },
    badgeStyle: {
        backgroundColor: 'red',
        zIndex: 1,
        width: 'auto',
        paddingLeft: '5px',
        paddingRight: '5px',
        height: '17px',
        borderRadius: '20%',
        top: '3px',
        right: '2px',
        cursor: 'pointer',
    },
    iconButton: {
        color: '#FFF',
    },
    listItem: {
        padding: '14px 16px 14px 50px',
        fontSize: '14px',
        color: '#4C4C4C'
    },
    listItemNestedListStyle: {
        padding: '0px',
    },
    listItemIcon: {
        height: '20px',
        width: '20px',
        color: '#4C4C4C'
    },
};

// 动画插件初始化
for (let key in animations) {
    if ( key === 'global' || key === 'merge' || key === 'container' ) {
        continue;
    }
    const animation = animations[key];
    styles[key] = {
        ...styles[key],
        animation: 'x',
        animationName: Radium.keyframes(animation, key),
        animationDuration: '1s',
    };
}
// 初始化动画
const animatStyle = styles['bounceInRight'];

export default class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 3,
            messagePopoverOpen: false,
            messagePopoverAnchorEl: undefined,
            menuDrawerOpen: false,
            menuDrawerMenuOpen: true,
            searchOpen: false,
        };
        this.messagePopoverControl = this.messagePopoverControl.bind(this);
        this.menuDrawerControl = this.menuDrawerControl.bind(this);
        this.searchDialogControl = this.searchDialogControl.bind(this);
    };
    
    messagePopoverControl(event) {
        this.refs.messagePopoverRef.popoverControl(event);
    };
    
    menuDrawerControl(event) {
        this.refs.menuDrawerRef.drawerControl(event);
        this.setState({
            menuDrawerOpen: !this.state.menuDrawerOpen
        });
    };
    
    searchDialogControl(event) {
        this.setState({
            searchOpen: !this.state.searchOpen
        });
    }
    
    render() {
        
        return (
            <div>
                <AppBar
                    title={
                        <StyleRoot style={animatStyle}>
                            <span>HAMGOL</span>
                        </StyleRoot>
                    }
                    iconElementLeft={
                        <IconButton onTouchTap={this.menuDrawerControl}>
                            {
                                !this.state.menuDrawerOpen?
                                <NavigationAppsIcon style={{color: '#FFF'}}/>
                                :
                                <TweenOne
                                    animation={{rotate: 90, repeat: 0, duration: 390}}
                                    paused={false}
                                >
                                    <NavigationArrowDownwardIcon style={{color: '#FFF'}}/>
                                </TweenOne>
                            }
                        </IconButton>
                    }
                    iconStyleLeft={styles.iconStyleLeft}
                    iconStyleRight={styles.iconStyleRight}
                    style={styles.appBar}
                    titleStyle={styles.titleStyle}
                    iconElementRight={
                        <Toolbar style={styles.toolbar}>
                            <ToolbarGroup>
                                <IconButton touch={true} iconStyle={styles.iconButton}>
                                    <NavigationSearchIcon onTouchTap={this.searchDialogControl} />
                                </IconButton>
                                <Badge
                                    badgeContent={8}
                                    primary={true}
                                    style={styles.badgeStyleStyle}
                                    badgeStyle={styles.badgeStyle}
                                >
                                    <IconButton touch={true} iconStyle={styles.iconButton}>
                                        <NotificationsIcon />
                                    </IconButton>
                                </Badge>
                                <Badge
                                    badgeContent={99}
                                    primary={true}
                                    style={styles.badgeStyleStyle}
                                    badgeStyle={styles.badgeStyle}
                                    onTouchTap={this.messagePopoverControl}
                                >
                                    <IconButton touch={true} iconStyle={styles.iconButton}>
                                        <NavigationEmailIcon />
                                    </IconButton>
                                </Badge>
                                <Badge
                                    badgeContent={4}
                                    primary={true}
                                    style={styles.badgeStyleStyle}
                                    badgeStyle={styles.badgeStyle}
                                >
                                    <IconButton touch={true} iconStyle={styles.iconButton}>
                                        <NavigationListIcon/>
                                    </IconButton>
                                </Badge>
                                <IconButton touch={true} iconStyle={styles.iconButton}>
                                    <NavigationMoreVertIcon />
                                </IconButton>
                                <IconButton touch={true} iconStyle={styles.iconButton}>
                                    <NavigationMessageIcon />
                                </IconButton>
                            </ToolbarGroup>
                        </Toolbar>
                    }
                />
                <Dialog
                    modal={false}
                    bodyStyle={{border: '1px solid green', padding: '0px', background: 'transparent'}}
                    style={{border: '1px solid red', background: 'transparent'}}
                    overlayStyle={{border: '1px solid yellow'}}
                    contentStyle={{transform: '', boder: '1px solid blue', background: 'transparent'}}
                    open={this.state.searchOpen}
                >
                    <Paper style={{width: '100%', height: '60px', padding: '5px 20px'}} zDepth={1} rounded={true} >
                        <div style={{float: 'left', width: '40px'}}>
                            <IconButton touch={true}>
                                <NavigationArrowBackIcon onTouchTap={this.searchDialogControl} />
                            </IconButton>
                        </div>
                        <div style={{float: 'left'}}>
                            <TextField hintText="Search To Application" fullWidth={true} />
                        </div>
                        <div style={{float: 'left', width: '40px'}}>
                            <IconButton touch={true}>
                                <NavigationSearchIcon />
                            </IconButton>
                        </div>
                    </Paper>
                    <div style={{height: '500px', background: 'transparent'}}>
                    </div>
                </Dialog>
                <MessagePopover messagePopoverOpen={this.state.messagePopoverOpen} ref="messagePopoverRef"/>
                <MenuDrawer menuDrawerOpen={this.state.menuDrawerOpen} menuDrawerMenuOpen={this.state.menuDrawerMenuOpen} ref="menuDrawerRef" />
            </div>
        );
    }
}