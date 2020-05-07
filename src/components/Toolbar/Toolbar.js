import React from 'react';
import classes from './Toolbar.css';
import Logo from "../Logo/Logo";
import NavigationsItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from "../Navigation/SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>

            <div className={classes.Logo}>
                <Logo/>
            </div>

            <nav className={classes.DesktopOnly}>
                <NavigationsItems/>
            </nav>
        </header>
    );
};

export default Toolbar;