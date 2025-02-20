import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = '';
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case 'input':
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case 'textarea':
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case 'select':
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}>
                    {
                        props.elementConfig.options.map((option, it) =>(
                            <option key={it} value={option.value}>{option.displayValue}</option>
                        ))
                    } onChange={props.changed}>
                </select>
            );
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;