import React from 'react';
import ExitIcon from '../icons/ExitIcon';

function exit(setDisplay, setEmail) {
    setDisplay('none');
    setEmail('');
}

const Exit = (props) => {
    return (
        <ExitIcon 
            fill='#6b7280'
            height='16px'
            width='16px'
            className='absolute top-[20px] right-[20px] cursor-pointer'
            onClick={() => exit(props.setDisplay, props.setEmail)}
        />
    );
};

export default Exit;