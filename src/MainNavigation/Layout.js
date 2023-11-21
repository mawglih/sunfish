import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar";
import Header from './Header';
import classes from './Layout.module.css';

const Layout = () => {
    return (
        <div className={classes.container}>
            <Header/>
            <div className={classes.content}>
                <Sidebar/>
                <div className={classes.outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;