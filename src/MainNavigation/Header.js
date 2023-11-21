import classes from './Layout.module.css';
const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.hamburger}>H</div>
            <div>Logo</div>
            <div>Search</div>
        </div>
    )
}

export default Header;