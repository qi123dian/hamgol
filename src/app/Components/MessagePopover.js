import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';

import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {grey400, darkBlack} from 'material-ui/styles/colors';

import QueueAnim from 'rc-queue-anim';

const styles = {
    Popover: {
        anchorOrigin: {
            horizontal: 'right',
            vertical: 'bottom',
        },
        targetOrigin: {
            horizontal: 'right',
            vertical: 'top',
        },
        style: {
            overflowY: 'hidden',
        },
    },
    PopoverHeader: {
        style: {
            overflowY: 'hidden',
            width: '100%',
        }
    },
    Scrollbars: {
        style: {
            width: 300,
            height: 400,
        }
    },
    Toolbar: {
        style: {
            background: 'transparent'
        }
    }
}

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

export default class MessagePopover extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            open: props.messagePopoverOpen,
            anchorEl: undefined,
            show: true,
            items: [
                <div key='0'>
                    <ListItem
                        leftAvatar={<Avatar src="images/ok-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Brendan Lim"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
                                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider key='1' inset={true} />
                </div>
                ,<div key='1'>
                    <ListItem
                        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="me, Scott, Jennifer"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Summer BBQ</span><br />
                                Wish I could come, but I&apos;m out of town this weekend.
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                </div>
                ,<div key='2'>
                    <ListItem
                        leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Grace Ng"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Oui oui</span><br />
                                Do you have any Paris recs? Have you ever been?
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                </div>
                ,<div key='3'>
                    <ListItem
                        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Kerem Suer"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Birthday gift</span><br />
                                Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider inset={true} />
                </div>
                ,<div key='4'>
                    <ListItem
                        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Raquel Parrado"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Recipe to try</span><br />
                                We should eat this: grated squash. Corn and tomatillo tacos.
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                </div>
            ]
        };
        
        this.popoverControl = this.popoverControl.bind(this);
        this.messageItemsShow = this.messageItemsShow.bind(this);
    }
    
    popoverControl(event) {
        if(event['currentTarget']) {
            event.preventDefault();
            this.setState({
                open: !this.state.open,
                anchorEl: event.currentTarget
            });
        } else {
            this.setState({
                open: !this.state.open,
            });
        }
    };
    
    messageItemsShow(event) {
        this.setState({
            show: !this.state.show,
        });
    };
    
    render() {
        return (
            <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                onRequestClose={this.popoverControl}
                anchorOrigin={styles.Popover.anchorOrigin}
                targetOrigin={styles.Popover.targetOrigin}
                style={styles.Popover.style}
            >
                <div className="popoverHeader" style={styles.PopoverHeader.style}>
                    <Toolbar style={styles.Toolbar.style}>
                        <ToolbarGroup>
                            <ToolbarTitle text="消息队列" />
                        </ToolbarGroup>
                        <ToolbarGroup
                            lastChild={true}
                        >
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon onTouchTap={this.messageItemsShow} />
                            </IconButton>
                        </ToolbarGroup>
                    </Toolbar>
                    <Scrollbars
                        style={styles.Scrollbars.style}
                        autoHide
                        autoHideTimeout={1000}
                    >
                        <QueueAnim component="List" type={['right', 'left']} leaveReverse>
                            {this.state.show ? this.state.items : null}
                        </QueueAnim>
                    </Scrollbars>
                    <div style={{overflow: 'hidden'}}>
                        <RaisedButton label="Show All" fullWidth={true} />
                    </div>
                </div>
            </Popover>
        );
    }
}