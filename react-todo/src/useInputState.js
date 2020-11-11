import { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialValue) =>{
    const[value,setValue] = useState(initialValue);

    return{
        value,
        onChange:(event)=>{
            setValue(event.target.value);
        },
        reset:() => setValue('')
    };
};