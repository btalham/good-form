import React from 'react';
import Title from '../Components/title';
import Generator from './generator'

const config = require('../manifest.json');

const Form = () => {

    return(
        <div className='Container'>
            <Title title={config.title}/>
            <Generator config={config}/>
        </div>
    );
};

export default Form;