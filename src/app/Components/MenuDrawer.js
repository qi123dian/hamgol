import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {List, ListItem} from 'material-ui/List';

import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import NavigationAccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import NavigationSettingsIcon from 'material-ui/svg-icons/action/settings';
import NavigationExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';

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
}

export default class MenuDrawer extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            open: props.menuDrawerOpen,
            menuOpen: props.menuDrawerMenuOpen,
        };
        
        this.drawerControl = this.drawerControl.bind(this);
        this.drawerMenuControl = this.drawerMenuControl.bind(this);
    };
    
    drawerControl() {
        this.setState({
            open: !this.state.open,
        });
    }
    
    drawerMenuControl() {
        this.setState({
            menuOpen: !this.state.menuOpen,
        });
    }
    
    render() {
        return (
            <Drawer open={this.state.open} containerStyle={{zIndex: 1000, paddingTop: '70px', height: '100%', width: '260px', overflow: 'hidden'}}>
                <Scrollbars autoHide style={{width: '100%', height: '100%'}}>
                <div ref="divId" style={{overflow: 'hidden'}}>
                    <Card 
                        style={{
                            background: 'url(images/profile-menu.png) no-repeat left top',
                            backgroundSize: '100%',
                            paddingBottom: '0px',
                        }}
                        containerStyle={{paddingBottom: '0px'}}
                    >
                        <CardMedia
                            overlayContentStyle={{background: 'transparent', bottom: null}}
                        >
                            <div>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            src="images/jsa-128.jpg"
                                            size={60}
                                        />
                                    }
                                />
                                <Toolbar style={{background: 'rgba(0, 0, 0, 0.37)', padding: '0px 24px', marginTop: '0px', height: '32px'}}>
                                    <ToolbarGroup>
                                        <ToolbarTitle style={{color: '#FFF', fontSize: '13px'}} text="李宁格勒" />
                                    </ToolbarGroup>
                                    <ToolbarGroup lastChild={true}>
                                        <Checkbox
                                            iconStyle={{color: '#FFF', fill: 'rgb(0, 188, 212)'}}
                                            checkedIcon={<NavigationArrowDropUp style={{color: '#FFF'}} />}
                                            uncheckedIcon={<NavigationArrowDropDown style={{color: '#FFF'}} />}
                                            onTouchTap={this.drawerMenuControl}
                                        />
                                    </ToolbarGroup>
                                </Toolbar>
                            </div>
                        </CardMedia>
                        <CardText expandable={this.state.menuOpen} style={{backgroundColor: '#FFF', padding: '0px'}}>
                            <List style={{padding: '0px'}}>
                                <ListItem innerDivStyle={styles.listItem} primaryText="个人信息" leftIcon={<NavigationAccountCircleIcon style={styles.listItemIcon} />} />
                                <ListItem innerDivStyle={styles.listItem} primaryText="设置" leftIcon={<NavigationSettingsIcon style={styles.listItemIcon} />} />
                                <ListItem innerDivStyle={styles.listItem} primaryText="注销" leftIcon={<NavigationExitToAppIcon style={styles.listItemIcon} />} />
                                <Divider inset={false} />
                            </List>
                        </CardText>
                    </Card>
                </div>
                    <List>
                        <Subheader>Nested List Items</Subheader>
                        <ListItem innerDivStyle={styles.listItem} primaryText="Sent mail" leftIcon={<ContentSend style={styles.listItemIcon} />} />
                        <ListItem innerDivStyle={styles.listItem} primaryText="Drafts" leftIcon={<ContentDrafts style={styles.listItemIcon} />} />
                        <ListItem
                            innerDivStyle={styles.listItem}
                            primaryText="Inbox"
                            leftIcon={<ContentInbox style={styles.listItemIcon} />}
                            initiallyOpen={true}
                            primaryTogglesNestedList={true}
                            nestedListStyle={styles.listItemNestedListStyle}
                            nestedItems={[
                                <ListItem
                                    innerDivStyle={styles.listItem}
                                    key={1}
                                    primaryText="Starred"
                                    leftIcon={<ActionGrade style={styles.listItemIcon} />}
                                />,
                                <ListItem
                                    innerDivStyle={styles.listItem}
                                    key={2}
                                    primaryText="Sent Mail"
                                    leftIcon={<ContentSend style={styles.listItemIcon} />}
                                    disabled={false}
                                    nestedListStyle={styles.listItemNestedListStyle}
                                    primaryTogglesNestedList={true}
                                    nestedItems={[
                                        <ListItem
                                            innerDivStyle={styles.listItem}
                                            key={1}
                                            primaryText="Drafts"
                                            leftIcon={<ContentDrafts style={styles.listItemIcon} />}
                                            nestedListStyle={styles.listItemNestedListStyle}
                                            primaryTogglesNestedList={true}
                                            nestedItems={[
                                                <ListItem
                                                    innerDivStyle={styles.listItem}
                                                    key={1}
                                                    primaryText="Drafts"
                                                    leftIcon={<ContentDrafts style={styles.listItemIcon} />}
                                                    nestedListStyle={styles.listItemNestedListStyle}
                                                    primaryTogglesNestedList={true}
                                                    nestedItems={[
                                                        <ListItem
                                                            innerDivStyle={styles.listItem}
                                                            key={1}
                                                            primaryText="Drafts"
                                                            nestedListStyle={styles.listItemNestedListStyle}
                                                            leftIcon={<ContentDrafts style={styles.listItemIcon} />}
                                                        />,
                                                    ]}
                                                />,
                                            ]}
                                        />,
                                    ]}
                                />,
                                <ListItem
                                    innerDivStyle={styles.listItem}
                                    key={3}
                                    primaryText="Inbox"
                                    leftIcon={<ContentInbox style={styles.listItemIcon} />}
                                    nestedListStyle={styles.listItemNestedListStyle}
                                    nestedItems={[
                                        <ListItem
                                            innerDivStyle={styles.listItem}
                                            key={1}
                                            primaryText="Drafts"
                                            leftIcon={<ContentDrafts style={styles.listItemIcon}/>}
                                        />,
                                    ]}
                                />,
                            ]}
                        />
                    </List>
                </Scrollbars>
            </Drawer>
        )
    }
}