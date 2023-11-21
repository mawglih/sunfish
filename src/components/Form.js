import classes from './Page.module.css';

const Form = () => {
    return (
        <div className={classes['form-section']}>
            <span> Section header</span>
            <form className={classes.form}>
            <div className={classes.column}>
                <div className={classes.row}>
                    <label> textfield</label>
                    <textarea placeholder='Text'/>
                </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.row}>
                        <label>Date</label>
                        <input type='date' placeholder='mm/dd/yy'/>
                    </div>
                    <div className={classes.row}>
                        <label>Oops</label>
                            <input placeholder='text' type='text'/>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.row}>
                        <label>Dropdown select</label>
                            <select id="select1">
                                <option defaultValue='Select...'>Select...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                            </select>
                    </div>
                    <div  className={classes.row}>
                        <label>Multi-select</label>
                            <select placeholder='Select multiple'>
                                <option value="multi1"> Multi</option>
                            </select>
                    </div>
                </div>
                <div className={classes['btn-column']}>
                    <button className={classes.btn}>Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default Form;