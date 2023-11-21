import { NavLink } from "react-router-dom";
import classes from './Layout.module.css';
const Sidebar = () => {
    return (
        <>
        <div className={classes['sidebar-tablet']}>
            <nav>
                <ul className={classes['list-mobile']}>
                    <li>Logo</li>
                    <li>
                        <NavLink 
                            to="/"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end
                        >
                            H
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='nav1'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            N1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='nav2'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            N2
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>Image</div>
        </div>
        <div className={classes.sidebar}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                            to="/"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='nav1'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Navigation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='nav2'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                        >
                            Nav item2
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

        </>
        
    );
}

export default Sidebar;
