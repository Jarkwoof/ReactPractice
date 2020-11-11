import { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    const[value,setValue] = useState('');

    return{
        value,
        onChange:(event)=>{
            setValue(event.target.value);
        },
        reset:() => setValue('')
    };
};