import classes from './Page.module.css';
const Title = ({title, subtitle}) => {
    return (
        <div className={classes.title}>
            <span className={classes.title1}>{title}</span>
            <span className={classes.subtitle}>{subtitle}</span>
        </div>
    )
}

export default Title;