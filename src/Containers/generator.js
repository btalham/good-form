import {React, useEffect, useState} from 'react';
import Input from '../Components/input';

const Generator = (props) => {

    const {config} = props;

    const parseSchema = (comp) => {
        // Use Switch Statement with cases being different component names
        if (comp.component.name === 'input') {
            return (<Input label={comp.component.label} type={comp.component.type}/>)
        }
 
    }

    return (
        <div className="Container">
            {config.schema.map((comp) => parseSchema(comp))}
        </div>
    )
}

export default Generator;